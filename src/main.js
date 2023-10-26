import { createApp } from 'vue'
import '@/assets/tailwind.css'
import App from './App.vue'
import SimulatorTop from './Toppage.vue'

createApp(App).mount('#app')
createApp(SimulatorTop).mount('#simulator')
