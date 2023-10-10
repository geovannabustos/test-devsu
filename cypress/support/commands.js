function extraerPrimerEmoji(cadena) {
    const regex = /([\uD800-\uDBFF][\uDC00-\uDFFF])/;
    const coincidencia = cadena.match(regex);
    return coincidencia ? coincidencia[0] : null;
}
function contarRepeticiones(cadena, emoji) {
    const regex = new RegExp(emoji, 'g');
    const coincidencias = cadena.match(regex);
    return coincidencias ? coincidencias.length : 0;
}
function encontrarBotonEnMatriz(matrizDeBotones,x, y) {
  const fila = y-1;
  const columna = x-1;

  if (
    fila >= 0 &&
    fila < matrizDeBotones.length &&
    columna >= 0 &&
    columna < matrizDeBotones[fila].length
  ) {
    return matrizDeBotones[fila][columna];
  } else {
    return 'Coordenadas fuera de la matriz';
  }
}

Cypress.Commands.add('iteracionPersonalizada', (numeroDeIteraciones) => {
  for (let i = 0; i < numeroDeIteraciones; i++) {
        cy.get('.flex.space-y-4 > .font-bold').invoke('text').then(text => {
            const valorTotal = eval(text);
            cy.get('select').select(valorTotal.toString());
        });
        cy.get(':nth-child(2) > .font-bold').invoke('text').then(text => {
            const valorTotal = eval(text.split('=')[0]);
            cy.get('input[type="radio"][value="'+valorTotal.toString()+'"]').check();
        });
        cy.get('.w-9\\/12 > :nth-child(1)').invoke('text').then(text => {
            const emojiABuscar = extraerPrimerEmoji(text)
            cy.get('.w-9\\/12 :nth-child(2)').invoke('text').then(text => {
                const repeticiones = contarRepeticiones(text, emojiABuscar);
                cy.get('[name="number"]').type(repeticiones.toString());
            });
        });
        cy.get(':nth-child(4) > .text-center').invoke('text').then(text => {
            const numeroEntero = parseInt(text.match(/\d+/)[0]);
            cy.get('input[type="checkbox"]').each(($checkbox) => {
              const valorCheckbox = parseInt($checkbox.val(), 10);
              if (valorCheckbox % numeroEntero === 0) {
                $checkbox.click();
              }
            });
        });
        cy.get('[type="submit"]').click();
    }
});

Cypress.Commands.add('iteracionPersonalizadaEncontrarBoton', (numeroDeIteracionesMin, numeroDeIteracionesMax) => {
    for (let i = 0; i < 15; i++) {
        cy.get('.grid_button').then(($buttons) => {
            const matrizDeBotones = [];
            $buttons.each((index, button) => {
                cy.log('Matriz de botones:', index);
                matrizDeBotones.push(button.textContent.trim()); // Agrega el texto del botón sin espacios en blanco
            });
            cy.log('Matriz de botones:', matrizDeBotones);

            cy.get('.w-1\\/2 > .text-xl').invoke('text').then(text => {
               const arregloCoordenadas = text.split(";");
               for (let i = 0; i < arregloCoordenadas.length; i++) {
                    const coordenadasRegex = /\((-?\d+),(-?\d+)\)/;
                    const match = arregloCoordenadas[i].match(coordenadasRegex);
                    if (match) {
                      const coordenadasX = parseInt(match[1]);
                      const coordenadasY = parseInt(match[2]);
                      cy.log(`Coordenadas X: ${coordenadasX}, Y: ${coordenadasY}`);
                      const botonCorrecto = encontrarBotonEnMatriz(matrizDeBotones,coordenadasX, coordenadasY);
                      if (botonCorrecto !== 'Coordenadas fuera de la matriz') {
                          cy.contains(botonCorrecto).click();
                      } else {
                          cy.log('Coordenadas fuera de la matriz');
                      }
                    }
               }
            });*/
        });
    }
});