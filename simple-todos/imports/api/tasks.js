import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
	'tasks.insert'(text){
		check(text, String);

		// Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Tasks.insert({
      text,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username,
      private: false
    });

	},
	'tasks.remove'(taskId) {
    check(taskId, String);
 		const task = Tasks.findOne(taskId);
		if(task.owner !== this.userId) {
			throw new Meteor.Error('not-authorized');
		}
    Tasks.remove(taskId);
  },
	'tasks.checked'(id, setChecked){
		check(id, String);
    check(setChecked, Boolean);
    const task = Tasks.findOne(id);
		if(task.owner !== this.userId) {
			throw new Meteor.Error('not-authorized');
		}
    Tasks.update(id, { $set: { checked: setChecked } });
	},
	'tasks.setPrivate'(taskId, setToPrivate){
		check(taskId, String);
		check(setToPrivate, Boolean);

		const task = Tasks.findOne(taskId);
		if(task.owner !== this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Tasks.update(taskId, { $set: {private: setToPrivate} })
	}
})