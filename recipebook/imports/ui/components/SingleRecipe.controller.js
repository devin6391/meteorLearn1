import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Recipes } from '/imports/api/collections/recipe.js';
import { ReactiveVar } from 'meteor/reactive-var';

import '/imports/ui/components/SingleRecipe.html';

Template.SingleRecipe.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});

Template.SingleRecipe.events({
	'click .toggle-menu'(){
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash'(){
		Meteor.call('deleteRecipe',this._id);
	},
	'click .fa-pencil'(event, tempInstance){
		tempInstance.editMode.set(!tempInstance.editMode.get());
	}
});

Template.SingleRecipe.helpers({
    recipesCollection() {
        return Recipes;
    },
    updateRecipeId(){
    	return this._id;
    },
    editMode(){
    	return Template.instance().editMode.get();
    }
});