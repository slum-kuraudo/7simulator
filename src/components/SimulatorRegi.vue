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
                        <button class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">ポイント交換
                            <div class="tooltip">
                                <!-- <div class="tooltip_message">nanacoのポイントを交換できるようになります
                                </div> -->
                            </div>
                        </button>
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
                        <button @click="fetchData"
                            class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">情報</button>
                        <div v-if="showModal" class="inset-0 right-top bg-opacity-50 overflow-y-auto h-full w-full">
                            <div class="list-container modal-content mx-auto p-4 border shadow-lg rounded-md bg-orange-400">
                                <button v-if="showModal" @click="closeModal"
                                    class="sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
                                    戻る</button>
                                <ul>
                                    <li v-for="detail in details" :key="detail.date" @click="showDetail(detail)">
                                        {{ detail.date }}
                                    </li>
                                </ul>
                                <div v-if="selectedDetail" class="modal-content mx-auto p-4 border shadow-lg rounded-md bg-gray-400">
                                    <button @click="closeModal"
                                    class="sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
                                    戻る</button>
                                    <p>年齢: {{ selectedDetail.age }}</p>
                                    <p>日付: {{ selectedDetail.date }}</p>
                                    <p>合計: {{ selectedDetail.total }}</p>
                                    <p>お預かり: {{ selectedDetail.deposit }}</p>
                                    <p>お釣り: {{ selectedDetail.change }}</p>
                                    <p>商品: {{ selectedDetail.product }}</p>
                                </div>
                            </div>
                        </div>
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
import { collection, getDocs, } from 'firebase/firestore';
import db from '../main'
import TimeDisplay from "./parts/TimeDisplay.vue"
import RegiPulldown from "./parts/RegiPulldown.vue"
import RegiProduct from "./parts/RegiProduct.vue";
import RegiContorllet from "./parts/RegiContorllet.vue";
import AgeButton from "./parts/AgeButton.vue";

export default {
    data() {
        return {
            details: [],
            selectedDetail: null,
            showModal: false,
        }
    },
    components: {
        TimeDisplay,
        RegiPulldown,
        RegiProduct,
        RegiContorllet,
        AgeButton
    },
    methods: {
        closeModal() {
            this.showModal = false
            this.selectedDetail = null
        },
        async fetchData() {
            this.showModal = true
            const query = await getDocs(collection(db, "detail"));
            this.details = query.docs.map((doc) => ({
                age: doc.age,
                date: doc.data().date.toDate().toLocaleString(),
                total: doc.data().total,
                deposit: doc.data().deposit,
                change: doc.data().change,
                product: doc.data().product,
            }));
        },
        showDetail(detail) {
            this.selectedDetail = detail
        }
    }

}
</script>
<style>
.modal {

    pointer-events: none;
}

.modal-content {
    position: fixed;
    top: calc(10% + 40px);
    /* 元のtopの値に40pxを加算 */
    right: 100px;
    /* 右から40pxの位置に配置 */
    width: 600px;
    height: 400px;
    pointer-events: auto;
}

.list-container {
  max-height: 400px; /* スクロールエリアの高さ */
  overflow-y: auto; /* 縦方向にスクロール可能に設定 */
}
</style>