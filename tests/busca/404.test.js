

module.exports = {
  '@tags': ['smoke', '404'],

  before: function(browser) {
    let login = browser.page.login()
    let sidebar = browser.page.sidebar()

    login
      .with('raphael_antonio_vieira@hotmail.com', 'pwd123')
    sidebar
      .expectLoggedUser('Raphael')
  },

  'quando eu busco um título não cadastrado': function (browser) {
    let movie = browser.page.movie()

    movie
      .setValue('@searchInput', 'Não é mais um besterol americano')
      .click('@searchIcon')
  },

  'então devo  ver uma mensagem de alerta': function (browser) {
    let movie = browser.page.movie()

    movie
      .waitForElementVisible('@alertDanger', 15000)
      .assert.containsText('@alertDanger', 'Puxa! não encontramos nada aqui :(')
  }
}