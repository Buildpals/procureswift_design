import './scss/app.scss'
import 'bootstrap'

import {dom, library} from '@fortawesome/fontawesome-svg-core'
import {faHandHoldingUsd, faTruck} from '@fortawesome/free-solid-svg-icons'
import {faAmazon, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import * as intlTelInput from 'intl-tel-input'

// We are only using the faTruck, faHandHoldingUsd, faAmazon, faFacebook, faInstagram icons
library.add(faTruck, faHandHoldingUsd, faAmazon, faFacebook, faInstagram);

// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
dom.watch();

// Change initialize intlInput on all elements with the id phone
const input = document.querySelector("#phone");
const instance = intlTelInput(input, {initialCountry: "gh"});

