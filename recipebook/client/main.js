import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '/imports/ui/layouts/MainLayout.html';
import '/imports/ui/layouts/HomeLayout.html';
import '/imports/ui/pages/TestPage.html';

import '/imports/ui/pages/Recipes.controller.js';
import "/imports/ui/components/SideNav.controller.js";
import "/imports/ui/components/Header.controller.js";
import "/imports/ui/pages/RecipeDetail.controller.js";
import "/imports/ui/pages/Menu.controller.js";
import "/imports/ui/pages/ShoppingList.controller.js";

import '/lib/router.js';

Template.body.onCreated(function bodyOnCreated() {
	Accounts.onLogin(function(){
		FlowRouter.go("recipe-book");
	});
	Accounts.onLogout(function(){
		FlowRouter.go("home");
	});
})