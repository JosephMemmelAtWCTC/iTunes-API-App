// import './assets/main.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js' //with .js for after, without .js for import into compiler
import '@/scss/app.scss'

// import * as bootstrap from 'bootstrap/dist/js/bootstrap'
// // Inefficient - just to

import { createApp } from 'vue'
import App from './App.vue'

// Only add global stuff here (like bootstrap, routers, ui- Ex: Quasar)

createApp(App).mount('#app')

// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))