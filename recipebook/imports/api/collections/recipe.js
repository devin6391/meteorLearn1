import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert(userId, doc){
		return !!userId;
	}
})

var RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: "Description"
	},
	author: {
		type: String,
		label: "Author",
		autoValue(){
			return this.userId
		},
		autoform:{
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue(){
			return new Date();
		},
		autoform:{
			type: "hidden"
		}
	}
});

Recipes.attachSchema( RecipeSchema );