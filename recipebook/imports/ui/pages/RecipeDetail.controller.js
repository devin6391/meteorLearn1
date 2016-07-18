import "/imports/ui/pages/RecipeDetail.html";
import { Recipes } from '/imports/api/collections/recipe.js';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.RecipeDetail.onCreated(function bodyOnCreated() {
	this.autorun(() => {
		let id = FlowRouter.getParam('id');
		this.subscribe('singleRecipes',id);
	});
});

Template.RecipeDetail.helpers({
	recipe: () => {
		let id = FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
	}
});