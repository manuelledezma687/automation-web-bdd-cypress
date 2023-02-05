Feature: Login de usuario

    Scenario: Login Exitoso de Usuario
        Given Que el usuario accede al sitio web
        And Ingresa con las credenciales válidas
        Then El usuario hace login correctamente

    Scenario: Login Exitoso de Usuario
        Given Que el usuario accede al sitio web
        And Ingresa con las credenciales con problemas de performance
        Then El usuario hace login correctamente

    Scenario: Login Exitoso de Usuario
        Given Que el usuario accede al sitio web
        And Ingresa con las credenciales problemáticas
        Then El usuario hace login correctamente

    Scenario: Login No Exitoso de Usuario
        Given Que el usuario accede al sitio web
        And Ingresa con las credenciales bloqueadas
        Then EL usuario no pudo ingresar correctamente

