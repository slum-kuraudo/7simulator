<template>
    <div class="grid grid-cols-2 h-screen">
        <div class="bg-gray-100">
            <div v-if="currentStage === '0'">
                <div class="bg-green-500 rounded-lg p-4">
                    <div class="text-white text-6xl font-bold text-center">
                        各ボタンの機能を見てみよう<br>
                        各ボタンをクリックしてみてください
                        <button @click="complete"
                            class="bg-red-500 rounded px-4 py-2">完了</button>
                        <p class="text-white text-2xl">
                        </p>
                    </div>
                </div>
            </div>
            <div v-if="currentStage === '1'">
                <div class="bg-green-500 rounded-lg p-4">
                    <!-- Your tutorial content goes here -->
                    <h2 class="text-white text-6xl font-bold text-center">一連の流れをやってみよう</h2>
                    <p class="text-white text-2xl">では、実際にやってみましょう。商品を読み込んでみましょう。<br>
                        <br>
                        すると値段が表示されます。お客様からお金を預かったら金額を入力してみましょう。<br>
                        <br>
                        お客様の性別と年齢を大体でいいので推定してそれに合ったボタンを押すと会計完了です。<br>
                        <br>
                    </p>
                    <button @click="complete" class="bg-red-500 rounded px-4 py-2">完了</button>
                </div>
            </div>
            <div v-if="currentStage === '2'">
                <div class="bg-green-500 rounded-lg p-4">
                    <h2 class="text-white text-6xl font-bold text-center">
                        お酒とたばこの販売をしてみましょう<br>
                        <p class="text-white text-2xl">
                            お酒とタバコを販売する時は年齢確認が必要です。
                            <br>
                            ボタンを押してお酒を商品登録してみましょう。
                            <br>
                        </p>
                        <div>
                            <button @click="osake"
                                class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
                                お酒
                            </button>
                            <div class="inset-0 right-top bg-opacity-50 overflow-y-auto h-full w-full">
                            </div>
                            <div v-if="osakeModal"
                                class="modal-content custom-modal-height mx-auto p-4 border shadow-lg rounded-md bg-orange-400">
                                <div v-if="osake" class="text-white text-xl">
                                    年齢確認のご協力をお願いします。実際の業務ではお客様の画面に「はい」ボタンが表示されているので<br>
                                    お客様に押させてから店員側でも年齢を推定してはいを押してください。
                                    <div class="text-4xl text-red-500">{{ twentyYearsAgo }}</div>
                                    <button @click="closeOsakeModal"
                                        class="sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
                                        はい</button>
                                </div>
                            </div>
                        </div>
                        <p class="text-white text-2xl">
                            すると年齢確認に関するポップアップがお客様と店員側に表示されるので最初にお客様には画面を読んでもらって必ずお客様自身で「はい」ボタンを押させるようにしましょう
                            <br>
                            このボタンを押させる事は警察庁からの指導なので必ずお客様側で押させてください
                            <br>
                            未成年だと思われる方には年齢確認を行いましょう。「はい」ボタンを押すと今日から20年前の日付が表示されるので参考にして年齢確認を行いましょう。
                            <br>
                            未成年だった場合販売してはいけません。また、身分証の提示を拒否する方にも販売してはいけません。もし販売すると店員側に罰則が行く可能性があります。
                        </p>
                    </h2>
                    <button @click="complete" class="bg-red-500 rounded px-4 py-2">完了</button>
                </div>
            </div>
            <div v-if="currentStage === '3'">
                <div class="bg-green-500 rounded-lg p-4">
                    <h2 class="text-white font-bold text-center text-6xl">フライヤーや中華まん、雑誌の販売をしてみよう<br></h2>
                    <p class="text-white text-2xl">
                        レジ袋やフライヤー商品、中華まんなどは会計金額の下の8つ並んでいるボタンから選択できます。<br>
                        お客様にレジ袋がいるか聞き、注文されたら選択しましょう。<br>
                        それぞれのボタンを押すと商品が登録されます。
                    </p>
                    <button @click="complete" class="bg-red-500 rounded px-4 py-2">完了</button>
                </div>
            </div>
            <div v-if="currentStage === '4'">
                <div class="bg-green-500 rounded-lg p-4">
                    <h2 class="text-white font-bold text-center text-6xl">取消作業をしてみよう<br></h2>
                    <p class="text-white text-2xl">
                        お客様が「この商品やっぱキャンセルで」などと言われることがあります。<br>
                        その場合は「取消」ボタンを押して商品を選択しましょう。<br>
                        このシミュレーターでは商品を登録してから取消ボタンを押してみてください。<br>
                        すると、現在登録されている商品が表示されますので、キャンセルしたい商品を選択しましょう。
                    </p>
                    <button @click="complete" class="bg-red-500 rounded px-4 py-2">完了</button>
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
                        <button @click="CG"
                            class="w-16 h-16 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2">CG</button>
                        <div v-if="CGModal" class="inset-0 right-top bg-opacity-50 overflow-y-auto h-full w-full">
                            <div
                                class="modal-content custom-modal-height mx-auto p-4 border shadow-lg rounded-md bg-orange-400">
                                <div class="flex justify-between items-center mb-4">
                                    <h1 class="text-4xl font-bold">CG</h1>
                                    <button @click="closeModal" class="px-4 py-2 bg-gray-300 rounded">確定</button>
                                </div>
                                <ul>
                                    <li v-for="(product, index) in products" :key="index">
                                        <button @click="removeProduct(index)"
                                            class="bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
                                            商品名:{{ product.name }} 価格:{{ product.price }}円<br>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
import moment from 'moment';

export default {
    data() {
        return {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
            },
            details: [],
            selectedDetail: null,
            showModal: false,
            osakeModal: false,
            
            CGModal: false,
            twentyYearsAgo: moment().subtract(20, 'years').format('YYYY-MM-DD')
        }
    },
    props: {
        stage: {
            type: Number,
            default: null
        },

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
        osake() {
            this.osakeModal = true
        },
        closeOsakeModal() {
            this.osakeModal = false
            this.$store.commit('setOsakeModal', true)
        },
        CG() {
            this.CGModal = true
        },
        async fetchData() {
            this.osakeModal = false
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
        },
        complete(){
            this.$store.commit('setComplete', true)
            this.$router.push({ path: '/stage' });
        }
    },
    computed: {
        currentStage() {
            return this.$route.params.stage
        },
        products() {
            return this.$store.state.products;
        },
        osakeFlag() {
            return this.$store.state.osake
        },



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