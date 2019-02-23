# nes-container 

Vue Component implementation of the Nes Container 

- **author** - Jesus Fernando Alvarez Franco 
- **license** - MIT 

## slots 

- `default` Slot used for the Container Content 

## props 

- `title` ***String*** (*optional*) `default: Empty String` 

  Defines the title of the container 

- `center` ***Boolean*** (*optional*) `default: false` 

  Define if the container is centered. Will use the `is-centered` class 

- `dark` ***Boolean*** (*optional*) `default: false` 

  Define if the container is dark. Will use the `is-dark` class 

- `form` ***Boolean*** (*optional*) `default: false` 

  Define if the container is a form. Will use the `form` class 

- `balloon` ***Boolean*** (*optional*) `default: false` 

  Define if the container is for balloons. Will use the `balloon` class 

- `rounded` ***Boolean*** (*optional*) `default: false` 

  Define if the container has rounded corners. Will use the `is-rounded` class 

## computed properties 

- `containerClasses` 

  Computed Property that uses the container classes depending of the props used. 

   **dependencies:** `title`, `center`, `dark`, `rounded`, `form`, `balloon` 


