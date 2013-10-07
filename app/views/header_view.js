var View     = require('./view')
  , template = require('./templates/header')

module.exports = View.extend({
    id: 'header-view',
    template: template
})
