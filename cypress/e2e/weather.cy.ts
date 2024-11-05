describe('Navigation', () => {
  it('weather form loads data using postal code - V1X 4T6', () => {
    // Start from the index page
    cy.visit('/')

    cy.get('input[name*="name"]').type('V1X 4T6')

    // Find a button with an type attribute containing "submit" and click it
    cy.get('button[type*="submit"]:not([disabled])', { timeout: 10000 }).click()

    // The new page should contain an h2 containing 'Kelowna'
    cy.get('h2').should('contain', 'Kelowna')
  })

  it('weather form loads data browser geo coordinates', () => {
    // Start from the index page
    cy.visit('/')

    // Find a button with an type attribute containing "submit" and click it
    cy.get('button[type*="submit"]:not([disabled])', { timeout: 10000 }).click()

    // The new page should contain an h2 -- the content of the h2 will vary depending on location
    cy.get('h2').should('exist')
  })

  it('weather form loads data using zip code - 90210', () => {
    // Start from the index page
    cy.visit('/')

    cy.get('input[name*="name"]').type('90210')

    // Find a button with an type attribute containing "submit" and click it
    cy.get('button[type*="submit"]:not([disabled])', { timeout: 10000 }).click()

    // The new page should contain an h2 containing 'Kelowna'
    cy.get('h2').should('contain', 'Beverly Hills')
  })

  it('weather form loads data using postal code - v1x 4t6', () => {
    // Start from the index page
    cy.visit('/')

    cy.get('input[name*="name"]').type('v1x 4t6')

    // Find a button with an type attribute containing "submit" and click it
    cy.get('button[type*="submit"]:not([disabled])', { timeout: 10000 }).click()

    // The new page should contain an h2 containing 'Kelowna'
    cy.get('h2').should('contain', 'Kelowna')
  })

  it('weather form loads data using postal code - v1x4t6', () => {
    // Start from the index page
    cy.visit('/')

    cy.get('input[name*="name"]').type('v1x4t6')

    // Find a button with an type attribute containing "submit" and click it
    cy.get('button[type*="submit"]:not([disabled])', { timeout: 10000 }).click()

    // The new page should contain an h2 containing 'Kelowna'
    cy.get('h2').should('contain', 'Kelowna')
  })

  it('weather form loads data using postal code - V1X4T6', () => {
    // Start from the index page
    cy.visit('/')

    cy.get('input[name*="name"]').type('V1X4T6')

    // Find a button with an type attribute containing "submit" and click it
    cy.get('button[type*="submit"]:not([disabled])', { timeout: 10000 }).click()

    // The new page should contain an h2 containing 'Kelowna'
    cy.get('h2').should('contain', 'Kelowna')
  })

  it('weather form loads data using name - Kelowna', () => {
    // Start from the index page
    cy.visit('/')

    cy.get('input[name*="name"]').type('Kelowna')

    // Find a button with an type attribute containing "submit" and click it
    cy.get('button[type*="submit"]:not([disabled])', { timeout: 10000 }).click()

    // The new page should contain an h2 containing 'Kelowna'
    cy.get('h2').should('contain', 'Kelowna')
  })

  it('weather form loads data using name and postal code - Kelowna, V1X 4T6', () => {
    // Start from the index page
    cy.visit('/')

    cy.get('input[name*="name"]').type('Kelowna, V1X 4T6')

    // Find a button with an type attribute containing "submit" and click it
    cy.get('button[type*="submit"]:not([disabled])', { timeout: 10000 }).click()

    // The new page should contain an h2 containing 'Kelowna'
    cy.get('h2').should('contain', 'Kelowna')
  })

  it('weather form has error - Kelowna, BC', () => {
    // Start from the index page
    cy.visit('/')

    cy.get('input[name*="name"]').type('Kelowna, BC')

    // Find a button with an type attribute containing "submit" and click it
    cy.get('button[type*="submit"]:not([disabled])', { timeout: 10000 }).click()

    // The new page should contain an error message
    cy.get('h3').should('contain', 'Unable to find city by Name')
  })

  it('weather form loads data using name and postal code - Kelowna, British Columbia', () => {
    // Start from the index page
    cy.visit('/')

    cy.get('input[name*="name"]').type('Kelowna, British Columbia')

    // Find a button with an type attribute containing "submit" and click it
    cy.get('button[type*="submit"]:not([disabled])', { timeout: 10000 }).click()

    // The new page should contain an h2 containing 'Kelowna'
    cy.get('h2').should('contain', 'Kelowna, British Columbia')
  })
})
