# nes-icon 

Vue Component implementation of the Nes Icons 

- **author** - Jesus Fernando Alvarez Franco 
- **license** - MIT 

## props 

- `name` ***String*** (*required*) 

  Define the type of icon to be used 

- `small` ***Boolean*** (*optional*) `default: false` 

  Defines if the icon is small by using the `is-small` css class 

- `medium` ***Boolean*** (*optional*) `default: false` 

  Defines if the icon is medium by using the `is-medium` css class 

- `large` ***Boolean*** (*optional*) `default: false` 

  Defines if the icon is large by using the `is-large` css class 

- `empty` ***Boolean*** (*optional*) `default: false` 

  Defines if the icon is empty by using the `is-empty` css class 

- `half` ***Boolean*** (*optional*) `default: false` 

  Defines if the icon is half by using the `is-half` css class 

## computed properties 

- `iconClasses` 

  Calculate the css classes to be used for the icon depending of the props 

   **dependencies:** `name`, `small`, `medium`, `large`, `empty`, `half` 


