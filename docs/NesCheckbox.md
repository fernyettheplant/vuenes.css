# nes-checkbox 

Vue Component implementation of the Nes Checkbox 

- **author** - Jesus Fernando Alvarez Franco 
- **license** - MIT 

## slots 

- `default` Default Slot used for the Inside content of the Checkbox 

## props 

- `checked` ***Boolean*** (*optional*) `default: false` 

  Define if the checkbox is checked on init 

- `dark` ***Boolean*** (*optional*) `default: false` 

  Define if the checkbox is dark. Will use the `is-dark` class 

## computed properties 

- `checkboxClasses` 

  Computed Property that uses the checkbox classes depending of the props used. 

   **dependencies:** `dark` 


## events 

- `select` 

  Fired when someone selects the checkbox 

## methods 

- `click()` 

  Method that emits the `select` event 

