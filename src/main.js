
import { registerPlugins } from '@/plugins'
import router from './router';
// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './styles/main.css';

import App from './App.vue'

import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)
app.use(router)
app.mount('#app')
