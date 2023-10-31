<template>
    <div class="grid grid-cols-2 h-screen">
        <div class="bg-gray-100">1</div>
        <div class="bg-red-100">
            <div class="flex items-center ml-8">
                <div class="flex flex-col mr-4 ">
                    <TimeDisplay/>
                </div>
                    <RegiPulldown/>
                <span class="w-10 h-5 text-black font-bold self-start">demo</span>
            </div>
        </div>
        <div class="bg-orange-100">3</div>
        <div class="bg-amber-100">4</div>
    </div>
</template>
<script>
import TimeDisplay from "../components/parts/TimeDisplay.vue"
import RegiPulldown from "../components/parts/RegiPulldown.vue"
export default {
    components:{
        TimeDisplay,
        RegiPulldown
    },
    // data() {
    //     return {
    //         showDropdown: false
    //     }
    // },
    // methods: {
    //     toggleDropdown() {
    //         this.showDropdown = !this.showDropdown;
    //     }
    // },
    // beforeUnmount() {
    //     clearInterval(this.interval);
    // }
}
</script>