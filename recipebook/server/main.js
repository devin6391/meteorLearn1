// import { Meteor } from 'meteor/meteor';
import '/imports/startup/server/start.js';
import {Recipes} from '/imports/api/collections/recipe.js';
import { check } from 'meteor/check';

Meteor.startup(() => {
	Meteor.publish('recipes', function recipePublication() {
    return Recipes.find({author: this.userId});
  });

  Meteor.publish('singleRecipes', function oneRecipePublication(id) {
  	check(id, String);
    return Recipes.find({_id: id});
  });

  console.log("Author: "+Meteor.settings.public.firstname+" "+(Meteor.settings.private ? Meteor.settings.private.lastname : ""));
});
