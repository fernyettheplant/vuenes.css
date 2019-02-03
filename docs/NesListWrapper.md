# nes-list-wrapper 

Vue Component implementation of the Nes Lists 

- **author** - Jesus Fernando Alvarez Franco 
- **license** - MIT 

## slots 

- `default` Default Slot for the Contents of the List 

## props 

- `disc` ***Boolean*** (*optional*) `default: false` 

  Define if the wrapper uses discs in the list by using the `is-disc` css class 

- `circle` ***Boolean*** (*optional*) `default: false` 

  Define if the wrapper uses circles in the list by using the `is-circle` css class 

## computed properties 

- `listClasses` 

  Computed Property that calculate the css classes depending of the props used. 

   **dependencies:** `disc`, `circle` 


