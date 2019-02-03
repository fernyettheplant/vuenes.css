# nes-avatar 

Vue Component implementation of the Nes Avatar 

- **author** - Jesus Fernando Alvarez Franco 
- **license** - MIT 

## props 

- `src` ***String*** (*required*) 

  Define the src link of the image just like `<img>` 

- `alt` ***String*** (*optional*) `default: Empty String` 

  Defines the alt text of the `<img>` 

- `small` ***Boolean*** (*optional*) `default: false` 

  Define if the Avatar is small. Will use the `is-small` class 

- `medium` ***Boolean*** (*optional*) `default: false` 

  Define if the Avatar is medium. Will use the `is-medium` class 

- `large` ***Boolean*** (*optional*) `default: false` 

  Define if the Avatar is large. Will use the `is-large` class 

- `rounded` ***Boolean*** (*optional*) `default: false` 

  Define if the Avatar is rounded. Will use the `is-rounded` class 

## computed properties 

- `nesAvatarClasses` 

  Calculate CSS Classes to use depending on which prop you use 

   **dependencies:** `small`, `medium`, `large`, `rounded` 


