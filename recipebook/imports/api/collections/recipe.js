import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

var RecipesCollection = new Mongo.Collection('recipes');

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
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue(){
			return new Date();
		}
	}
});

RecipesCollection.attachSchema( RecipeSchema );

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('recipes', function tasksPublication() {
    return RecipesCollection.find({});
  });
}

export const Recipes = RecipesCollection;