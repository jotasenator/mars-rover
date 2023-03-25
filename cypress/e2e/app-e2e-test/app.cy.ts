/// <reference types="cypress" />

import { speechTextDifferentLanguages } from "../../fixtures/speechHelper";


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('there are 3 buttons with icons per each language', () => {
    cy.get('button').should($button => {
      expect($button)
        .to.have.length(3)
        .to.have.class('flag')
    })
  });

  it('internet speed image rotate 180 degree onMouseHover', () => {
    cy.get('#internet-speed')
      .should('have.css', 'rotate', '180deg');
    //need to handle a way to test when we mouse hover the internet speed image
  });

  it('click refresh button and loading photos', () => {
    cy.get('.photos').should('not.be.visible')
    cy.get('a').should('have.text', 'Search photos')
    cy.get('a').click()
    cy.get('.photos').should('be.visible')
    cy.get('a').should('have.text', 'Reload photos')
    cy.get('.photo-container img').should($img => {
      expect($img).to.have.length(6)
    })
  });

  it("click each language button change the refresh button language", () => {
    cy.get('a').should('have.text', 'Search photos')
    cy.get('button:nth(1)').click()
    cy.get('a').should('have.text', 'Pesquisar fotos')
    cy.get('button:nth(2)').click()
    cy.get('a').should('have.text', 'Buscar fotos')
    cy.get('button:nth(0)').click()
    cy.get('a').should('have.text', 'Search photos')
  })

  it("click each language button change the speech language", () => {

    const { speechTextEn1, speechTextEn2, speechTextEs1, speechTextEs2, speechTextPt1, speechTextPt2 } = speechTextDifferentLanguages

    cy.get('.p-one').should('have.text', speechTextDifferentLanguages.speechTextEn1)
    cy.get('.p-two').should('have.text', speechTextEn2)
    cy.get('button:nth(1)').click()
    cy.get('.p-one').should('have.text', speechTextPt1)
    cy.get('.p-two').should('have.text', speechTextPt2)
    cy.get('button:nth(2)').click()
    cy.get('.p-one').should('have.text', speechTextEs1)
    cy.get('.p-two').should('have.text', speechTextEs2)
    cy.get('button:nth(0)').click()
    cy.get('.p-one').should('have.text', speechTextEn1)
    cy.get('.p-two').should('have.text', speechTextEn2)
  })

  it("footer props and text", () => {
    cy.get('.footer')
      .should('have.text', 'Copyright © 2023')
      .should('have.css', 'background-color', 'rgb(0, 102, 0)')
  })

});
