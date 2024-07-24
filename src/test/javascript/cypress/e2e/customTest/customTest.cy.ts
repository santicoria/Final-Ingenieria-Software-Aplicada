import { passwordLoginSelector, submitLoginSelector, usernameLoginSelector } from '../../support/commands';

import {
  entityCreateButtonSelector,
  entityCreateSaveButtonSelector,
  entityDeleteButtonSelector,
  entityConfirmDeleteButtonSelector,
} from '../../support/entity';

describe('Limpiar SessionStorage', () => {
  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });
    cy.visit('');
  });

  describe('Login Incorrecto', () => {
    before(() => {
      cy.visit('');
    });

    it('Cartel informando de credenciales incorrectas', () => {
      cy.clickOnLoginItem();
      cy.get(usernameLoginSelector).click().type('admin');
      cy.get(passwordLoginSelector).type('John');
      cy.get(submitLoginSelector).click();
      cy.contains('Failed to sign in! Please check your credentials and try again.').should('be.visible');
    });
  });

  describe('Iniciar sesion y correr test.', () => {

    beforeEach(() => {
      cy.intercept('POST', '/api/authors').as('createRequest');
    });

    beforeEach(() => {
      cy.intercept('DELETE', '/api/authors/*').as('deleteRequest');
    });

    beforeEach(() => {
      cy.login('admin', 'admin');
      cy.visit('');
    });

    it('Crear un autor', () => {
      cy.clickOnEntityMenuItem('author');
      cy.get(entityCreateButtonSelector).click();
      cy.get(`[data-cy="firstName"]`).type('Sun').should('have.value', 'Sun');

      cy.get(`[data-cy="lastName"]`).type('Tzu').should('have.value', 'Tzu');

      cy.get(entityCreateSaveButtonSelector).click();

      cy.wait('@createRequest').then(({ response }) => expect(response.statusCode).to.equal(201));
    });

    it('Eliminar ultimo autor', () => {
      cy.clickOnEntityMenuItem('author');
      cy.get(entityDeleteButtonSelector).last().click();
      cy.get(entityConfirmDeleteButtonSelector).click();
      cy.wait('@deleteRequest').then(({ response }) => expect(response.statusCode).to.equal(204));
    });
  });
});
