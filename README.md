# Estructura del framework

## Cypress y BDD 
## Integracion con Cucumber para los reportes

# Instalar las dependencias
npm install

# Ejecutar todos los test
npm test

# Resultados
# cypress/videos contiene el video de la ejecucion de la prueba
# cypress/cucumber-json contiene el reporte de la ejecucion como json

# Ejecutar el comando para generar el reporte en html en reports/cucumber-htmlreprot.html/index.html
node cucumber-html-report.js


# Registro de formulario 

## Ejecutar el test CompletarFormulario.feature
## Usa el comando iteracionPersonalizada de support/commands.js
1- Realiza un login con usuario y contraseña
2- Realiza una operacion matematica y selecciona de un select el resultado 
3- Realiza una operacion matematica y selecciona el radio button que contiene el resultado 
4- Obtiene un emoji de la pantalla y busca el numero de coincidencias en un string de emojis, luego registra en un text el resultado
5- Dado un numero selecciona los multiplos de un listado de checkboxs


# Busca un buton con las coordenadas dadas

## Ejecutar el test EncontrarBotonCorrecto.feature
## Usa el comando iteracionPersonalizadaEncontrarBoton de support/commands.js
iteracionPersonalizadaEncontrarBoton
1- Crea una matriz con los botones 
2- Obtiene las coordenadas dadas, y con ellas se barre la matriz

