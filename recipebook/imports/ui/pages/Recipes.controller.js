import { Recipes } from '/imports/api/collections/recipe.js';
import { Template } from 'meteor/templating';

import '/imports/ui/components/SingleRecipe.controller.js';

import '/imports/ui/pages/NewRecipe.controller.js';
import '/imports/ui/pages/Recipes.html';

Template.Recipes.onCreated(function bodyOnCreated() {
	this.autorun(() => {
		this.subscribe('recipes');
	});
});

Template.Recipes.helpers({
	recipes: () => {
		return Recipes.find({});
	},
	showNewRecipe: () => {
		return Session.get('newRecipe');
	}
});

Template.Recipes.events({
	'click .new-recipe': () => {
		Session.set('newRecipe',true);
	}
})