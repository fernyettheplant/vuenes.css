# nes-button 

Vue Component implementation of the Nes Button 

- **author** - Jesus Fernando Alvarez Franco 
- **license** - MIT 

## slots 

- `default` Use this slot for the content Inside the button 

## props 

- `primary` ***Boolean*** (*optional*) 

  Prop that define if the Button is type Primary. Will use the `is-primary` class 

- `success` ***Boolean*** (*optional*) 

  Prop that define if the Button is type Success. Will use the `is-success` class 

- `warning` ***Boolean*** (*optional*) 

  Prop that define if the Button is type Warning. Will use the `is-warning` class 

- `error` ***Boolean*** (*optional*) 

  Prop that define if the Button is type Error. Will use the `is-error` class 

- `disabled` ***Boolean*** (*optional*) 

  Prop that define if the Button is type Disabled. Will use the `is-disabled` class 

## computed properties 

- `buttonClasses` 

  Computed Property that uses the button classes depending of the props used. 

   **dependencies:** `primary`, `success`, `warning`, `error`, `disabled` 


## events 

- `click` 

  Fired when a the user clicks the button. 

## methods 

- `click()` 

  Method that emits the click event 

