// Application bootstrapper.
Application = {
    initialize: function() {
		var HomeView = require('views/home_view');
		var LeftNavView = require('views/left_nav_view');
		var HeaderView = require('views/header_view');
		var Router   = require('lib/router');

        this.homeView = new HomeView();
        this.leftNavView = new LeftNavView();
        this.headerView = new HeaderView();
        this.router = new Router();
        
        if (typeof Object.freeze === 'function') Object.freeze(this)
        
    }
}

module.exports = Application

