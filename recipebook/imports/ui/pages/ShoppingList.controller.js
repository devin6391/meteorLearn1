import { Recipes } from '/imports/api/collections/recipe.js';
import { Template } from 'meteor/templating';

import "/imports/ui/pages/ShoppingList.html";

Template.ShoppingList.onCreated(function bodyOnCreated() {
	this.autorun(() => {
		this.subscribe('recipes');
	});
});

Template.ShoppingList.helpers({
	shoppingList: () => {
		return Recipes.find({ inMenu: true });
	}
});