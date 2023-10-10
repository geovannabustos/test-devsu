import {Given,And,When,Then} from "cypress-cucumber-preprocessor/steps";
Given(/^ingreso al formulario de Evalart e inicio sesion$/, function () {
    cy.visit('https://tasks.evalartapp.com/automatization');
    cy.get('[name="username"]').type("708066");
    cy.get('[type="password"]').type("10df2f32286b7120Mi00LTY2MDgwNw==30e0c83e6c29f1c3");
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