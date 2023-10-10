import {Given,And,When,Then} from "cypress-cucumber-preprocessor/steps";
Given(/^ingreso al formulario de Evalart e inicio sesion$/, function () {
    cy.visit('https://link');
    cy.get('[name="username"]').type("username");
    cy.get('[type="username"]').type("username");
    cy.get('[type="submit"]').click();
});
And(/^visualizo las preguntas$/, function () {
    cy.contains('Prueba de automatización').should('exist');
});
When(/^registro las respuestas exitosas durante 10 ciclos$/, function () {
    cy.iteracionPersonalizada(10);
});

Then(/^se presentara la pagina con el hash de exito$/, function () {

});