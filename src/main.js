import { createApp } from 'vue'
import '@/assets/tailwind.css'
import router from './vue-router/index.js'
import SimulatorTop from './Toppage.vue'


createApp(SimulatorTop).use(router).mount('#simulator')