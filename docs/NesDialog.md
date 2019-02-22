# nes-dialog 

Vue Component implementation of the Nes Dialog 

- **author** - Jesus Fernando Alvarez Franco 
- **license** - MIT 

## slots 

- `default` Slot used for the Dialog Content 

## props 

- `rounded` ***Boolean*** (*optional*) `default: false` 

  Define if the dialog has rounded corners. Will use the `is-rounded` class 

- `dark` ***Boolean*** (*optional*) `default: false` 

  Define if the dialog is dark. Will use the `is-dark` class 

- `open` ***Boolean*** (*optional*) `default: false` 

  Define when the dialog is going to be opened. Will use the native open dialog property 

## computed properties 

- `dialogClasses` 

  Computed Property that uses the container classes depending of the props used. 

   **dependencies:** `rounded`, `dark` 

- `openCloseToggle` 

   **dependencies:** `open` 


