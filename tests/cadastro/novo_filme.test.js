import pg from '../../lib/db'

let movieData = {}

module.exports = {
  '@tags': ['smoke'],

  before: function (browser) {

    movieData = {
      title: 'Resident Evil',
      status: 'Disponível',
      year: 2002,
      realeseDate: '01/05/2002',
      cast: ['Milla Jovovich', 'Ian Glen', 'Shawn Roberts'],
      cover: 'resident-evil-2002.jpg',
      plot: 'A missão do esquadrão e da Alice é desligar a rainha vermelha e coletar dados sobre o incidente'
    }

    pg.removeByTitle(movieData.title)

    let login = browser.page.login()
    let sidebar = browser.page.sidebar()

    login
      .with('raphael_antonio_vieira@hotmail.com', 'pwd123')
    sidebar
      .expectLoggedUser('Raphael')
  },

  'quando eu faço o cadastro do novo filme': function(browser) {
    let movie = browser.page.movie()

    movie
      .createForm()
      .setValue('@titleInput', movieData.title)
      .selectStatus(movieData.status)
      .setValue('@yearInput', movieData.year)
      .setValue('@dateInput', movieData.realeseDate)
      .insertCast(movieData.cast)
      .setValue('@plotTextArea', movieData.plot)
      .uploadCover(movieData.cover)
      .click('@createButton')
  },

  'então devo ver o filme na lista': function(browser) {
    let movie = browser.page.movie()

    movie
      .waitForElementPresent('@list', 15000)
      // .waitForElementVisible('@list', 5000)
      .assert.containsText('@list', movieData.title)
  }

}