import { Recipes } from '/imports/api/collections/recipe.js';
import { Template } from 'meteor/templating';

import '/imports/ui/pages/NewRecipe.controller.js';
import '/imports/ui/pages/Recipes.html';

Template.Recipes.onCreated(function bodyOnCreated() {
	console.log("recipes page created");
	Meteor.subscribe('recipes');
	console.log("getting recipes collection in frontend:")
	console.log(Recipes.find({}));
});