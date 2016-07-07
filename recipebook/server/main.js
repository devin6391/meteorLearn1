// import { Meteor } from 'meteor/meteor';
import '/imports/startup/server/start.js';
import {Recipes} from '/imports/api/collections/recipe.js';

Meteor.startup(() => {
	Meteor.publish('recipes', function tasksPublication() {
    return Recipes.find({author: this.userId});
  });
  console.log("Full name: "+Meteor.settings.public.firstname+" "+(Meteor.settings.private ? Meteor.settings.private.lastname : ""));
});
