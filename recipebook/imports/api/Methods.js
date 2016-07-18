import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

import { Recipes } from '/imports/api/collections/recipe.js';

Meteor.methods({
	toggleMenuItem(id, currentState){
		Recipes.update(id, {
			$set: {
				inMenu: !currentState
			}
		});
	},
	deleteRecipe(id){
		Recipes.remove(id);
	}
});