<template>
    <div class="grid grid-cols-2 h-screen">
        <div class="bg-gray-100">
            <p v-if="currentStage === '0'">各ボタンの機能を見てみよう</p>
            <div v-if="currentStage === '1'">
            <div class="bg-green-500 rounded-lg p-4">
                <!-- Your tutorial content goes here -->
                <h2 class="text-white text-6xl font-bold text-center">一連の流れをやってみよう</h2>
                <p class="text-white text-2xl">では、実際にやってみましょう。商品を読み込んでみましょう。<br>
                    すると値段が表示されます。お客様からお金を預かったら金額を入力してみましょう。<br>
                </p>
            </div>
            </div>
        </div>
        <div class="bg-grays-100 ">
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
            <div class="flex item-center ">
                <div class="rounded bg-white">
                    <div class="flex flex-wrap w-64 p-4 bg-white rounded">
                        <RegiContorllet />
                    </div>
                </div>
                <div class="rounded bg-gray-200">
                    <div class="flex flex-wrap w-48 h-90 p-4 bg-white">
                        <AgeButton />
                    </div>
                </div>
                <div class="rounded bg-white">
                    <div class="flex flex-wrap w-80 h-40 py-40 bg-white ">
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
                                    <li v-for="detail in details" :key="detail.date" @click="showDetail(detail)"
                                        class=" bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
                                        {{ detail.date }}
                                    </li>
                                </ul>
                                <div v-if="selectedDetail"
                                    class="modal-content mx-auto p-4 border shadow-lg rounded-md bg-gray-400">
                                    <button @click="closeModal"
                                        class="sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
                                        戻る</button>
                                    <p>年齢: {{ selectedDetail.age }}</p>
                                    <p>日付: {{ selectedDetail.date }}</p>
                                    <p>合計: {{ selectedDetail.total }}</p>
                                    <p>お預かり: {{ selectedDetail.deposit }}</p>
                                    <p>お釣り: {{ selectedDetail.change }}</p>
                                    <p v-for="item in selectedDetail.product" :key="item.name">商品: {{ item.name }}
                                        <br>価格:{{ item.price }}
                                        <br>数量:{{ item.quantity }}
                                    </p>
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
    <router-view />
</template>

<script>
import { collection, getDocs } from 'firebase/firestore';
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
        },
        log() {
            console.log(this.$route.params.stage)
        }
    },
    computed: {
        currentStage() {
            return this.$route.params.stage
        }

    },

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
    max-height: 400px;
    /* スクロールエリアの高さ */
    overflow-y: auto;
    /* 縦方向にスクロール可能に設定 */
}
</style>