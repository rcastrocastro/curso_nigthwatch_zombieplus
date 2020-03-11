module.exports = {
  // '@disabled': true,

  // Único Step com ES6
  'email não informado': (browser) => {
    let login = browser.page.login()
    login
      .with('', 'pwd123')
      .expectAlertInfo('Opps. Cadê o email?')
  }
}