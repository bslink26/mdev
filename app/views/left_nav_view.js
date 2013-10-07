var View     = require('./view')
  , template = require('./templates/left_nav')

module.exports = View.extend({
    id: 'left-nav-view',
    template: template
})
