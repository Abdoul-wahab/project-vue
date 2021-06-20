import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import {
  required,
  min,
  email,
  alpha,
  image,
  confirmed,
  regex,
  numeric,
  length
} from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)


const creditCardRule = {
  getMessage(field, args) {
    return `The ${field} must be a valid credit card`
  },
  validate(value, args) {
    // Custom regex for a phone number
    const MOBILEREG = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/

    // Check for either of these to return true
    return MOBILEREG.test(value)
  }
}

const passwordRule = {
  validate: (value) => {
    const PASSWORDREG = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/

    // Check for either of these to return true
    return PASSWORDREG.test(value)
  }
}

extend('required', required)
extend('confirmed', confirmed)
extend('email', email)
extend('alpha', alpha)
extend('min', min)
extend('image', image)
extend('regex', regex)
extend('numeric', numeric)
extend('length', length)
extend('credit-card', creditCardRule)
extend('verify_password', passwordRule)
