import { Recipes } from '/imports/api/collections/recipe.js';
import { Template } from 'meteor/templating';

import "/imports/ui/pages/Menu.html";

import "/imports/ui/components/MenuItem.controller.js"

Template.Menu.onCreated(function bodyOnCreated() {
	this.autorun(() => {
		this.subscribe('recipes');
	});
});

Template.Menu.helpers({
	recipes: () => {
		return Recipes.find({ inMenu: true });
	}
});