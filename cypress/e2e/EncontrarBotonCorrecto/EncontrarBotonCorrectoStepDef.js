import {Given,And,When,Then} from "cypress-cucumber-preprocessor/steps";
Given(/^ingreso al formulario de Evalart e inicio sesion$/, function () {
    cy.visit('https://tasks.evalartapp.com/automatization/');
    cy.get('[name="username"]').type("708066");
    cy.get('[type="password"]').type("10df2f32286b7120My0zLTY2MDgwNw==30e0c83e6c29f1c3");
    cy.get('[type="submit"]').click();
});
And(/^visualizo las coordenadas y la matriz de botones$/, function () {
    cy.contains('Prueba de automatización').should('exist');
});
When(/^selecciono el boton correcto durante 10 0 14 ciclos$/, function () {
    cy.iteracionPersonalizadaEncontrarBoton(10, 14);
});

Then(/^se presentara la pagina con el hash de exito$/, function () {

});