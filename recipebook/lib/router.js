FlowRouter.triggers.enter([function(){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route("/", {
	name: 'home',
	triggersEnter: [function(){
		if(Meteor.userId()){
			FlowRouter.go('recipe-book');
		}
	}],
	action(){
		BlazeLayout.render("HomeLayout");
	}
});

FlowRouter.route("/recipe-book", {
	name: 'recipe-book',
	action(){
		BlazeLayout.render("MainLayout",{ main: "Recipes" });
	}
});

FlowRouter.route("/recipe/:id", {
	name: 'recipe-detail',
	action(){
		BlazeLayout.render("MainLayout",{ main: "RecipeDetail" });
	}
});

FlowRouter.route("/menu", {
	name: 'menu',
	action(){
		BlazeLayout.render("MainLayout",{ main: "Menu" });
	}
});

FlowRouter.route("/shopping-list", {
	name: 'shopping-list',
	action(){
		BlazeLayout.render("MainLayout",{ main: "ShoppingList" });
	}
});