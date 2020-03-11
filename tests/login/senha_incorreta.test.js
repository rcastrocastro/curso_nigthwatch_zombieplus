module.exports = {
  // Único Step com ES6
  'senha incorreta': (browser,) => {
    let login = browser.page.login()

    login
      .with('raphael_antonio_vieira@hotmail.com', '123abc')
      .expectAlertDanger('Usuário e/ou senha inválidos')
  }
}