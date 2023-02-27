///<reference types="Cypress" />

describe('National Rockers Testing', () => { 
    
    Cypress._.each(["macbook-15", "macbook-13", "macbook-11", "iphone-6", "iphone-5", "iphone-3", "iphone-4","iphone-6+"], viewport => {
        it(`Viewport ${viewport}`, () => {
            cy.viewport(viewport)
            cy.visit("https://stichting-stop-bewust.web.app/");
            cy.wait(5000);            
        });
    })
 })