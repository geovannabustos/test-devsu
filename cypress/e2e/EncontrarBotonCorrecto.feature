Feature: Encontrar el boton correcto dadas un set de coordenadas y una matriz de botones

  Scenario: Encontrar el boton correcto
    Given ingreso al formulario de Evalart e inicio sesion
    And visualizo las coordenadas y la matriz de botones
    When selecciono el boton correcto durante 10 0 14 ciclos
    Then se presentara la pagina con el hash de exito