let urls = require('../fixtures/urls.json')
urls = urls.env.urls

describe(`Testing ${urls.length} URLs...`, () => { 
  urls.forEach(url => {
		let fileName = url.split('/')
		fileName = fileName[2].split('.')
    describe(`Current URL: ${url}`, () => {
			it(`Visited ${url}`, () => {
        cy.visit(url) 
				cy.evAnalyze().then((issues) => {
					cy.evSaveFile(issues, 'html', `./reports/${fileName[0] === 'www' ? fileName[1] : fileName[0]}.html`)
				})
			})
    })
  })
})
