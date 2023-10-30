import SimulatorTop from '../components/SimulatorTopPage.vue'
import StageSelect from '../components/StageSelect.vue'
import Regi7 from '../components/SimulatorRegi.vue'
import { createRouter, createWebHistory } from 'vue-router';


    const routes =  [
        {
            path: '/',
            name: "Top",
            component: SimulatorTop
        },
        {
            path: '/stage',
            name: "StageSelect",
            component: StageSelect
        },
        {
            path: '/regi',
            name: "Regi",
            component: Regi7
        }
    ];

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes,

});

export default router;




