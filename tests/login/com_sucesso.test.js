module.exports = {
  '@tags': ['smoke'],
  
  // Único Step com ES6 e Page Object e Custom Commands
  'login com sucesso': (browser) => {
    let login = browser.page.login()
    let sidebar = browser.page.sidebar()

    login
      .with('raphael_antonio_vieira@hotmail.com', 'pwd123')

    sidebar
      .expectLoggedUser('Raphael')
  }

  // Único Step com ES6 e Page Object
  // 'login com sucesso': (browser) => {
  //   let login = browser.page.login()

  //   let sidebar = browser.page.sidebar()

  //   login
  //     .navigate()
  //     .waitForElementVisible('@form', 3000)
  //     .setValue('@emailInput', 'raphael_antonio_vieira@hotmail.com')
  //     .setValue('@passInput', 'pwd123')
  //     .click('@loginButton')

  //   sidebar
  //     .waitForElementVisible('@userInfo', 5000)
  //     .assert.containsText('@userInfo', 'Raphael')
  // }

  // // Único Step com ES6
  // 'login com sucesso': (browser) => {
  //   let userInfo = '.user .info span'
  //   browser
  //     .resizeWindow(1920, 1080)
  //     .url('http://zombie-web:5000/login')
  //     .waitForElementVisible('.card-login', 3000)
  //     .setValue('input[name=email]', 'raphael_antonio_vieira@hotmail.com')
  //     .setValue('input[name=password]', 'pwd123')
  //     .click('.login-button')
  //     .waitForElementVisible(userInfo, 5000)
  //     .assert.containsText(userInfo, 'Raphael')
  //     .end();
  // }

  // Único Step Sem Es6
  // 'login com sucesso': function(browser) {
  //   var userInfo = '.user .info span'
  //   browser
  //     .resizeWindow(1920, 1080)
  //     .url('http://zombie-web:5000/login')
  //     .waitForElementVisible('.card-login', 3000)
  //     .setValue('input[name=email]', 'raphael_antonio_vieira@hotmail.com')
  //     .setValue('input[name=password]', 'pwd123')
  //     .click('.login-button')
  //     .waitForElementVisible(userInfo, 3000)
  //     .assert.containsText(userInfo, 'Raphael')
  //     .end();
  // }

  // Múltiplos Steps
  // 'Dado que eu acesso a página de login': function (browser) {
  //   browser
  //     .resizeWindow(1920, 1080)
  //     .url('http://zombie-web:5000/login')
  //     .waitForElementVisible('.card-login', 3000)
  // },
  // 'Quando faço login com sucesso': function (browser) {
  //   browser
  //     .setValue('input[name=email]', 'raphael_antonio_vieira@hotmail.com')
  //     .setValue('input[name=password]', 'pwd123')
  //     .click('.login-button')
  // },
  // 'Então devo ver o nome na área logada': function (browser) {
  //   var userInfo = '.user .info span'
  //   browser
  //     .waitForElementVisible(userInfo, 3000)
  //     .assert.containsText(userInfo, 'Raphael')
  //     .end();
  // }
}