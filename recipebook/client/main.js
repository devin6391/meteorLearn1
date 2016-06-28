import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '/imports/ui/layouts/MainLayout.html';
import '/imports/ui/layouts/HomeLayout.html';
import '/imports/ui/pages/TestPage.html';

import '/imports/ui/pages/Recipes.controller.js';

import '/lib/router.js';

Template.body.onCreated(function bodyOnCreated() {
	
})