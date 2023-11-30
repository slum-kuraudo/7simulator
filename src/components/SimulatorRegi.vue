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
                    <NumField />
                </table>
            </div>
            <div class="flex item-center">
                <div class="rounded">
                    <div class="flex flex-wrap w-64 p-4 bg-gray-200 rounded">
                        <RegiContorllet />
                        <!-- <img src="../assets/WindowsXP.jpg" alt="Your Image Description" class="absolute left-0 bottom-0 max-w-xs max-h-xs"> -->
                    </div>
                </div>
                <div class="rounded">
                    <div class="flex flex-wrap w-48 h-90 p-4 bg-gray-500">
                        <AgeButton />
                    </div>
                </div>
                <div class="rounded">
                    <div class="flex flex-wrap w-80 h-40 py-40 bg-gray-900">
                        <button
                            class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">ポイント交換</button>
                        <button
                            class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">チャージ</button>
                        <button
                            class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">残高照会</button>
                        <button
                            class="w-32 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">7co</button>
                        <button
                            class="w-32 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">インターネット</button>
                        <button
                            class="w-32 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">電子マネー</button>
                        <button
                            class="w-32 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">チケット</button>
                        <button
                            class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">領収書</button>
                        <button
                            class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">CG</button>
                        <button
                            class="w-32 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">返品</button>
                        <button
                            class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">責任者</button>
                        <button
                            class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">キャンセル</button>
                        <button
                            class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">情報</button>
                        <button
                            class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">呼出</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="bg-orange-100">3</div>
        <div class="bg-amber-100">4</div> -->
    </div>
</template>
<script>
import TimeDisplay from "./parts/TimeDisplay.vue"
import RegiPulldown from "./parts/RegiPulldown.vue"
import RegiProduct from "./parts/RegiProduct.vue";
import RegiContorllet from "./parts/RegiContorllet.vue";
import NumField from "./parts/NumField.vue";
import AgeButton from "./parts/AgeButton.vue";

export default {
    components: {
        TimeDisplay,
        RegiPulldown,
        RegiProduct,
        RegiContorllet,
        NumField,
        AgeButton
    }
   
}
</script>