module.exports = {
  // Único Step com ES6
  'senha não informada': (browser) => {
    let login = browser.page.login()
    login
      .with('raphael_antonio_vieira@hotmail.com', '')
      .expectAlertInfo('Opps. Cadê a senha?')
  }
}