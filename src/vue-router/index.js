import SimulatorTop from '../components/SimulatorTopPage.vue'
import StageSelect from '../components/StageSelect.vue'
import Regi7 from '../components/SimulatorRegi.vue'
import SimulatorRegi from '../components/SimulatorRegi.vue'
import ButtonStage from '../components/ButtonStage.vue'
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
            name: 'Regi',
            component: Regi7,
            props: true
        },
        {
            path: '/simulator-regi:stage',
            name: 'SimulatorRegi',
            component: SimulatorRegi,
            props: true
        },
        {
            path: '/ButtonStage',
            name: 'ButtonStage',
            component: ButtonStage,
        }
    ];

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes,

});

export default router;




