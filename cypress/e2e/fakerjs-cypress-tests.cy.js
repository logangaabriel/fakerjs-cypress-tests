import {faker} from '@faker-js/faker'

describe('User Registration with Random Data', () => {
  
  const user = {
    name: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }
  
  it('should register a user with random data', () => {
    cy.visit('cadastro')
    cy.get('#nome').type(user.name)
    cy.get('#email').type(user.email)
    cy.get('#senha').type(user.password)
    cy.get('input[type="submit"]').click()

    cy.contains('.alert', 'Usuário inserido com sucesso')
      .should('be.visible')
  })
})
