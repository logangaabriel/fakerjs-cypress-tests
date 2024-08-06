### User Registration with Random Data Using Faker.js

This project demonstrates how to use Faker.js to generate random user data for testing user registration functionality. The generated data includes a username, email, and password, which are used to fill in a registration form and verify successful registration.

## Cloning the Repository

To get started, you need to clone the repository. Open your terminal and run the following command:

```bash
git clone https://github.com/logangaabriel/fakerjs-cypress-tests
```

## Installation

Navigate into the project directory and install the necessary packages:

```bash
cd your-repo
npm install
```

This will install all the dependencies specified in the `package.json` file.

If you haven't added `@faker-js/faker` and `cypress` to your `package.json`, you can install them separately:

```bash
npm install @faker-js/faker cypress
```

## Setting Up Faker.js

To use Faker.js in your Cypress tests, you should import it in your support file. Open or create `cypress/support/e2e.js` and add the following line:

```javascript
import '@faker-js/faker';
```

## Usage

Here's an example test case that demonstrates how to use Faker.js to generate random user data and perform a registration test using Cypress:

```javascript
import { faker } from '@faker-js/faker';

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
```

## Documentation

- [Cypress Documentation](https://docs.cypress.io)
- [Faker.js Documentation](https://fakerjs.dev/)
- [JavaScript Objects Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

## Video Tutorial

I have created a video tutorial demonstrating how to use Faker.js for generating random data in user registration tests. 

[Watch the Video Tutorial](https://youtu.be/f_-aBnAkRNM)

## Contact

Feel free to reach out if you have any questions or need further assistance.

- Email: [contatologangabriel@gmail.com](contatologangabriel@gmail.com)
- LinkedIn: [Gabriel Logan](https://www.linkedin.com/in/gabriel-logan/)
- [Medium - Integrando o Faker.js em seus testes cypress](https://medium.com/@gabriellogan.0804/guardando-segredos-com-cypress-46ecce152db1)

