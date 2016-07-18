import { Template } from 'meteor/templating';
import { Recipes } from '/imports/api/collections/recipe.js';

import '/imports/ui/pages/NewRecipe.html';

Template.NewRecipe.helpers({
    recipesCollection() {
        return Recipes;
    }
});

Template.NewRecipe.events({
	'click .fa-close': () => {
		Session.set('newRecipe',false);
	}
})