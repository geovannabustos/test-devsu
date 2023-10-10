Feature: Registro de formulario

  Realizar el registro del formulario evalart

  Scenario: Realizar el registro del formulario
    Given ingreso al formulario de Evalart e inicio sesion
    And visualizo las preguntas
    When registro las respuestas exitosas durante 10 ciclos
    Then se presentara la pagina con el hash de exito