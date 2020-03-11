import pg from '../../lib/db'

let movieData = {}

module.exports = {

  before: function (browser) {
    movieData = {
      title: 'Meu Namorado é um Zumbi',
      status: 'Disponível',
      year: 2013,
      realeseDate: '01/05/2013',
      cast: ['Nicolas Hoult', 'Teresa Palmer', 'Analeigh Tipton', 'Rob Corddry'],
      cover: 'meu-namo-zumbi.jpg',
      plot: 'Em um mundo pós-apocalíptico, um zumbi romântico se apaixona por uma humana.'
    }
    pg.removeByTitle(movieData.title).then(function () {
      pg.insertMovie(movieData)
    })

    let login = browser.page.login()
    let sidebar = browser.page.sidebar()

    login
      .with('raphael_antonio_vieira@hotmail.com', 'pwd123')
    sidebar
      .expectLoggedUser('Raphael')
  },

  'quando eu faço a busca pelo título': function (browser) {
    let movie = browser.page.movie()

    movie
      .setValue('@searchInput', movieData.title)
      .click('@searchIcon')
  },

  'então o título buscado deve ser exibido na lista': function (browser) {
    let movie = browser.page.movie()

    movie
      .waitForElementPresent('@tr', 10000)
      .expect.elements('@tr').count.to.equal(1)
      
    movie.assert.containsText('@tr', movieData.title)
  }
}