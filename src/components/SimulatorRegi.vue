<template>
    <div class="grid grid-cols-2 h-screen">
        <div class="bg-gray-100">1</div>
        <div class="bg-red-100 ">
            <div class="flex items-center ml-7">
                <div class="flex flex-col mr-2">
                    <TimeDisplay />
                </div>
                <RegiPulldown />
                <span class="w-10 h-5 text-black font-bold self-start">demo</span>
            </div>
            <div class="h-2 bg-green-700 mb-1"></div>
            <div class="h-1 bg-orange-500"></div>
            <div class="">
                <table class="min-w-full border-collapse">
                    <RegiProduct />
                </table>
                <table class="min-w-full border-collapse ">
                    <RegiTotal />
                </table>
            </div>
            <!-- <img src="../assets/WindowsXP.jpg" alt="Your Image Description" class="absolute left-0 bottom-0 max-w-xs max-h-xs"> -->
        </div>
        <div class="bg-orange-100">3</div>
        <div class="bg-amber-100">4</div>
    </div>
</template>
<script>
import TimeDisplay from "./parts/TimeDisplay.vue"
import RegiPulldown from "./parts/RegiPulldown.vue"
import RegiProduct from "./parts/RegiProduct.vue";
import RegiTotal from "./parts/RegiTotal.vue";
export default {
    components: {
        TimeDisplay,
        RegiPulldown,
        RegiProduct,
        RegiTotal
    }
}
</script>