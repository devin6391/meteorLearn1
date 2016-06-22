import { Template } from 'meteor/templating';
 
import { Tasks } from '/imports/api/tasks.js';
 
import '/imports/ui/layouts/task.html';
 
Template.task.events({
  'click .toggle-checked'() {
    Meteor.call('tasks.checked',this._id, !this.checked);
  },
  'click .delete'() {
    // Tasks.remove(this._id);
    Meteor.call('tasks.remove',this._id );
  },
  'click .toggle-private'(){
    console.log(this.owner);
    Meteor.call('tasks.setPrivate', this._id, !this.private);
  }
});

Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
})