# nes-controller 

Vue Component implementation of the Nes Controller 

- **author** - Jesus Fernando Alvarez Franco 
- **license** - MIT 

## props 

- `type` ***String*** (*required*) 

- `jp` ***Boolean*** (*optional*) 

  Define if the controller is the japanese one 

## computed properties 

- `controllerClasses` 

  Calculates the class to be used for the controlled depending of the props 

   **dependencies:** `type`, `jp` 


