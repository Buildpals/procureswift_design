import './scss/app.scss'
import 'bootstrap'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'



import * as intlTelInput from 'intl-tel-input'

const input = document.querySelector("#phone");
const instance = intlTelInput(input, {initialCountry: "gh"});

