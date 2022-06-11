# Apuntes del curso de Automatización de Pruebas con Cypress.

## Comando para correr Cypress en este proyecto desde la consola:

    -npm run test:ui
    -npm run test:headless
    -npm run test:headless:chrome

## Instalación de Cypress.

    Instalar o inicializar node
        -npm init -y

    Instalar cypress y de manera opcional prettier
        -npm i -D cypress prettier

    Abrir Cypress
        -npx cypress open

## Configuración de Cypress.

    En el curso se llama Cypress.json pero la versión actual se hace la configuración de cypress en cypress.config.js

## Comandos más comunes en Cypress.

    *cy.visit()* Visitar página web o aplicación.
    *cy.reload* Recargar.
    *cy.go("back")* Ejemplo de ir hacia atrás.
    *cy.get("selector")* Obtener selector.
    *cy.contains("p","texto")* Ejemplo de selector y texto.
    *cy.contains("texto")* Ejemplo para un input.

## Acciones.

    *click()* Click.
    *dbclick()* Doble Click.
    *rightclick()* --> Click derecho
    click({ timeout: 0, force: true }) -- hace forzar el true, incluso si esta seleccionado vuelve a seleccionar.
    *type()* Escribir.
    *clear()* Limpiar.
    *check()* Chequear (checkbox).
    *uncheck()* Deschequear.
    *select()* Seleccionar.
    *cy.wait(3000)* Ejemplo de una espera de 3 segs.

## Otros Ejemplos de click.

    cy.get('button').eq(3).parent().parent().click(5, 60) -- por posicion
    click({ multiple: true }) -- click multiple


## Obtener Elementos.

    - Ejemplos: Se pueden obtener de varias formas, menos xpath que no viene de 
    forma nativa:

        Obteniendo por un tag -- cy.get('input')
        Obteniendo por un atributo -- cy.get('[placeholder="First Name"]')
        Obteniendo por un atributo y tag -- cy.get('input[placeholder="First Name"]')
        Obteniendo por un id -- cy.get('#firstName')
        Obteniendo por un class -- cy.get('.mr-sm-2.form-control')
        Usando contains --cy.contains('Reading')
            cy.contains('.header-wrapper', 'Widgets')

## Ejemṕlos Usando parent.

    // Obten el elemento Padre
    cy.get('input[placeholder="First Name"]').parent()

    //Obetner los elementos Padres en general
    cy.get('input[placeholder="First Name"]').parents()

    // Obten el elemento Padre y el elemento Hijo
    cy.get('input[placeholder="First Name"]').parents().find('label')

    // Obteniendo el elemento padre y el elemento hijo limitando el padre
    cy.get('input[placeholder="First Name"]').parents('form').find('label')
    
    cy.get('form').find('label')
    //uso incorrrecto de find

    cy.find('label')


## Guardando Elementos. (Ejemplo)

	it('como se hace en cypress', () => {
		cy.visit('/automation-practice-form')
		cy.get('input[placeholder="First Name"]')
			.parents('form')
			.then((form) => {
				const inputs = form.find('input')
				const divs = form.find('div')
				const labels = form.find('label')


## Ejemplos Aserciones.

    *cy.get("Error msg").should("no.exist")*
    *cy.get("Error msg").should("be.visible")*
    *cy.contains("a","dashboard").should("be.visible")*

	cy.url().should('include', 'demoqa.com')

    cy.get('#firstName')
        .should('be.visible')
        .and('have.attr', 'placeholder', 'First Name')

    cy.visit('/automation-practice-form')
    cy.get('#firstName').then((element) => {
        expect(element).to.be.visible
        expect(element).to.have.attr('placeholder', 'First Name')


## Plugins para Debbug.

    Aparte de las dev tools podemos hacer lo siguiente, por ejemplo un plugin:


    on('task', {
            log(message) {
                // este log se muestra en la terminal del servidor que sirve para modo headless
                console.log(`Soy el console log del task ${message}`)
                return null
            },
        })



    implementación ---->   cy.task('log', inputs.legth)

    - imprimir console log

        cy.get().then(console.log)

    - pausar:
    cy.pause()  --> pausa la ejecución donde queremos inspeccionar.


## Secuencias para interacciones con el type.

    {backspace} Borra el personaje a la izquierda del cursor.
    {del} Borra el personaje a la derecha del cursor.
    {downarrow} Mueve el cursor hacia abajo.
    {end}	Mueve el cursor al final de la línea.
    {enter} Teclea la tecla Intro.
    {esc}	Teclea la tecla Escape.
    {home} Mueve el cursor al principio de la línea.
    {insert} Inserta un personaje a la derecha del cursor.
    {leftarrow} Mueve el cursor a la izquierda.
    {movetoend} Desplaza el cursor al final del elemento mecanizable.
    {movetostart} Desplaza el cursor al inicio del elemento mecanizable.
    {pagedown} Se desplaza hacia abajo.
    {pageup}  Se desplaza hacia arriba.
    {rightarrow} Mueve el cursor a la derecha.
    {selectall} Selecciona todo el texto creando un selection range.
    {uparrow}	Mueve el cursor hacia arriba.

## Modo Headless.

    En el package.json colocar los comandos del modo headless (ir al archivo y ver los comandos)

## Ejemplo Exceptuando navegadores.

    describe('Probando configuracion', {browser:'!chrome'},() => 

## Comandos personalizados.

    *cy.screenshot()* Para capturas.
    *blackout* Negro para proteger datos.
    *spies* Interviene en los llamados.
    *clocks* Altera programaticamente la hora y fecha del entorno.

## HOOKS.

    *describe()* Descripción de la prueba.
    *context()* Contexto
    *it()* Acción del test
    *before()* Antes de todo.
    *beforeeach()* Antes de cada test(acción global por cada test)
    *aftereach()* Despues de cada test.
    *only()* Sólo la acción seleccionada.
    *skip()* Saltar.

    hooks --> Pueden entrar los Assertions. 

## Tipos de esperas.

    cy.get('.ButtonLogin-cta', { timeout: 6000 })// Aca se puede agregar el should.
    cy.wait(tiempo en mlsegundos)

## Tipos de select para dropdown.

		//Seleccionar por index
		cy.get('.custom-select').select(10)

		//Seleccionar por valor
		cy.get('.custom-select').select('3').should('have.value', '3')

		//Seleccionar por texto
		cy.get('.custom-select').select('Greece').should('have.value', '4')

## Interactuando con tablas (Ejemplo).

		cy.get('#customers') -- se llama al identificador
			.find('th') -- se encuentra el header o columna. 
            .each() -- itera en elementos encontrados
            first() -- se trae el primer elemento o sino podemos usar
            una posición:
			.eq(1)  --
			.invoke('text')  -- se invoca el texto.
			.should('equal', 'Contact') -- se comprueba.

## Ejemplo para interactuar con un date pickers.

    Si cuesta encontrar el elemento se puede ir a un elemento padre y se puede usar
    find para encontrar el hijo.

    		cy.get('datepicker-overview-example')
			.find('input')
			.eq(0)
			.type('12/02/2005{enter}')

		cy.get('datepicker-overview-example').find('svg').click()

## Ejemplo con popups o tooltips.

    Al clickear el popups podemos hacer lo siguiente:
    cy.on('window:confirm', (confirm) => {
        expect(confirm).to.equal('Do you confirm action?')
        cy.contains('You selected Ok').should('exist')

    Vamos a empezar a usar un stub() el cual intercepta el evento en el DOM.
    Otro ejemplo:

      const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#confirmButton').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
        })
        cy.contains('You selected Ok').should('exist')

    Rechazar un popup:
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (confirm) => {
             expect(confirm).to.equal('Do you confirm action?')
             return false
         })
         cy.contains('You selected Cancel').should('exist')

    Ejemplo para tooltip:
    Trigger funciona para disparar un evento:
        cy.visit('/tool-tips')
        cy.get('#toolTipButton').trigger('mouseover')
        cy.contains('You hovered over the Button').should('exist')
        cy.get('#toolTipButton').trigger('mouseout')
        cy.contains('You hovered over the Button').should('not.exist')


## Drag and drops.
    Utilizando trigger podemos hacer cosas más avanzadas para poder disparar
    eventos como arrastrar y soltar.

    Ejemplo:
            cy.get('#dragBox')
            .trigger('mousedown', {which: 1, pageX: 600, pageY: 100})
            .trigger('mousemove', {which: 1, pageX: 600, pageY: 600})
            .trigger('mouseup')
