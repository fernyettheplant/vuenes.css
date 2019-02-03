# nes-input-text 

## props 

- `id` ***String*** (*required*) 

  Define the id of the input 

- `label` ***String*** (*optional*) `default: Empty String` 

  Define the label text of the input 

- `placeholder` ***String*** (*optional*) `default: Empty String` 

  Define te placeholder of the input 

- `init-value` ***String*** (*optional*) `default: Empty String` 

  Define the init value of the input 

- `inline` ***Boolean*** (*optional*) `default: false` 

  Define if the Input is type inline by using the `is-inline` css class 

- `success` ***Boolean*** (*optional*) `default: false` 

  Define if the Input is type success by using the `is-success` css class 

- `warning` ***Boolean*** (*optional*) `default: false` 

  Define if the Input is type warning by using the `is-warning` css class 

- `error` ***Boolean*** (*optional*) `default: false` 

  Define if the Input is type error by using the `is-error` css class 

## data 

- `inputValue` 

**initial value:** `[object Object]` 

## computed properties 

- `inputClasses` 

  Calculate the css classes to be used for the input text depending of the props 

   **dependencies:** `success`, `warning`, `error` 


## events 

- `input` 

  Fired when someone does an input in the input text 

## methods 

- `emitInput()` 

  Method that emits the input event to the parent component 

