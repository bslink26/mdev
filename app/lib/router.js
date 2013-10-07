var application = require('application')

module.exports = Backbone.Router.extend({
    routes: {
        '': 'home'
    },
    
    home: function() {
        $('header').html(application.headerView.render().el)
        $('#leftNav').html(application.leftNavView.render().el)
        $('#mainContent').html(application.homeView.render().el)
    }
})
