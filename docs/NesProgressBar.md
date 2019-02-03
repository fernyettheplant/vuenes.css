# nes-progress-bar 

Vue Component implementation of the Nes Progress Bar 

- **author** - Jesus Fernando Alvarez Franco 
- **license** - MIT 

## props 

- `value` ***Number*** (*optional*) `default: 0` 

  Define the current value of the progress bar 

- `max` ***Number*** (*optional*) `default: 1.0` 

  Define the max value of the progress bar 

- `primary` ***Boolean*** (*optional*) `default: false` 

  Define if the progress bar is using the `is-primary` css class 

- `success` ***Boolean*** (*optional*) `default: false` 

  Define if the progress bar is using the `is-success` css class 

- `warning` ***Boolean*** (*optional*) `default: false` 

  Define if the progress bar is using the `is-warning` css class 

- `error` ***Boolean*** (*optional*) `default: false` 

  Define if the progress bar is using the `is-error` css class 

- `pattern` ***Boolean*** (*optional*) `default: false` 

  Define if the progress bar is using the `is-pattern` css class 

## computed properties 

- `progressBarClasses` 

  Computed Property that calculate the css classes depending of the props used. 

   **dependencies:** `primary`, `success`, `warning`, `error`, `pattern` 


