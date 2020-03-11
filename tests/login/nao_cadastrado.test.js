module.exports = {
  // Único Step com ES6
  'não cadastrado': (browser) => {
    let login = browser.page.login()
    login
      .with('404@hotmail.com', 'pwd123')
      .expectAlertDanger('Usuário e/ou senha inválidos')
  }
}