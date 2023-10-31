<template>
        <div class="date w-10 h-5 text-center text-black font-bold font-['Inter'] mb-1 mr-4">{{ formattedDate }}</div>
        <div class="time w-15 h-6 text-center text-black text-2xl font-bold font-['Inter'] mr-4">{{ formattedTime }}</div>
    <Regi7 />
    <router-view />
</template>

<script>

import Regi7 from "./components/SimulatorRegi.vue"
export default {
    name: '7Regi',
    components: {
        Regi7
    }
}
</script>