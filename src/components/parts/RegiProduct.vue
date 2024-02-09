<template>
    <table class="min-w-full border-collapse">
        <thead>
            <tr>
                <th class="border-black px-4 py-2">行</th>
                <th class="border-black px-4 py-2">製品名</th>
                <th class="border-black px-4 py-2">価格</th>
                <th class="border-black px-4 py-2">個数</th>
                <th class="border-black px-4 py-2">税込み価格</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="n in 5" :key="n" class="hover:bg-gray-100">
                <td class="border px-4 py-2">{{ n }}</td>
                <td class="border px-4 py-2">{{ getProduct(n).name || '' }}</td>
                <td class="border px-4 py-2">{{ getProduct(n).price || '' }}</td>
                <td class="border px-4 py-2">{{ getProduct(n).quantity || '' }}</td>
                <td class="border px-4 py-2">{{ calculateTaxIncludedPrice(getProduct(n)) }}</td>
            </tr>
        </tbody>
    </table>
    <table class="min-w-full border-collapse ">
        <tr>
            <td class="border-black border px-4 py-2  text-black-600 font-bold  text-right ">お預かり</td>
            <td v-if="buttonflag" class="border-black border px-4 py-2 w-64 text-right">{{ Oazukari }}</td>
        </tr>
        <tr>
            <td class="border-black border px-4 py-2 text-black-600 font-bold  text-right ">合計</td>
            <td class="border-black border px-4 py-2 text-right">{{ totalAmount }}</td>
        </tr>
        <tr>
            <td class="border-black border px-4 py-2 text-black-600 font-bold text-right ">お釣り</td>
            <td v-if="buttonflag" class="border-black border px-4 py-2 text-right">{{ Oazukari - totalAmount }}</td>
        </tr>
    </table>
    <div class="flex">
        <button v-for="productType in productTypes" :key="productType" @click="getProductData(productType)"
            class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
            {{ productType }}</button>
        <div v-if="isModalOpen" class="inset-0 right-top bg-opacity-50 overflow-y-auto h-full w-full">
            <div class="modal-content custom-modal-height mx-auto p-4 border shadow-lg rounded-md bg-orange-400">
                <!-- Header Section -->
                <div class="flex justify-between items-center mb-4">
                    <h1 v-if="modalContent" class="text-4xl font-bold">{{ modalContent.label }}</h1>
                    <button v-if="isModalOpen" @click="closeModal"
                        class="sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
                        確定</button>

                </div>
                <!-- Buttons Section -->
                <div class="flex justify-between mb-8">
                    <button v-if="modalContent.pro1" @click="save(modalContent, 'pro1')"
                        class=" px-4 py-2 bg-white border rounded border-gray-300">{{
                            modalContent.pro1 }}<br>{{ modalContent.pro1price }}円<br></button>
                    <button v-if="modalContent.pro2" @click="save(modalContent, 'pro2')"
                        class="px-4 py-2 bg-white border rounded border-gray-300">{{
                            modalContent.pro2 }}<br>{{ modalContent.pro2price }}円<br></button>
                    <button v-if="modalContent.pro3" @click="save(modalContent, 'pro3')"
                        class="px-4 py-2 bg-white border rounded border-gray-300">{{
                            modalContent.pro3 }}<br>{{ modalContent.pro3price }}円<br></button>
                    <button v-if="modalContent.pro4" @click="save(modalContent, 'pro4')"
                        class="px-4 py-2 bg-white border rounded border-gray-300">{{
                            modalContent.pro4 }}<br>{{ modalContent.pro4price }}円<br></button>
                </div>

            </div>
        </div>
    </div>
    <div>バーコードリーダーを使用する際は下のフィールドをクリックしてください</div>
    <input type="text" inputmode="url" style="border-color: black;" autofocus v-model="janCode" @keyup.enter="fetchProductData" ref="janCodeInput">←フィールド
</template>
<script>
import db from '../../main'
import { doc, getDoc, } from "firebase/firestore";
import axios from 'axios'
// import AgeButton from './AgeButton.vue';
export default {
    name: 'RegiProduct',
    data() {
        return {
            
            janCode: "",
            products: [],
            regiflag: false,
            isModalOpen: false,
            buttonFlag: false,
            modalContent: Object,
            productTypes: ['Bag', 'Flyer', 'Coffee', 'Nikuman', 'Newspaper', 'Oden', 'Bag', 'Bag'],
        }
    },
    // components: {
    //     AgeButton
    // },
    props: {
        product: Object
    },
    computed: {
        totalAmount() {
            return this.products.reduce((sum, product) => {
                return sum + product.price * product.quantity * 1.08;
            }, 0).toFixed(0);
        },
        Oazukari() {
            return this.$store.state.enteredValue
        },
        buttonflag() {
            return this.$store.state.buttonFlag
        },
        addOsake(){
            return this.$store.state.osake
        },
        Complete(){
            return this.$store.state.complete
        }
    },
    methods: {
        closeModal() {
            this.isModalOpen = false;
            this.modalContent = {};
        },
        outsideClick() {
        },
        getProduct(index) {
            // products 配列が定義されていて、要求されたインデックスが配列の長さ内にあるか確認
            if (this.products && index - 1 < this.products.length) {
                return this.products[index - 1];
            }
            // 該当する要素がない場合は空のオブジェクトを返す
            return {};
        },
        async getProductData(productType) {
            this.isModalOpen = true;
            try {
                const docRef = doc(db, "product", productType);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.modalContent = docSnap.data();
                    // this.save(this.modalContent);
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.log("Error getting document:", error);
            }
        },
        async fetchProductData() {
            const url = `/ShoppingWebService?appid=dj00aiZpPXV1emVrWlZUblM0SiZzPWNvbnN1bWVyc2VjcmV0Jng9NDI-&jan_code=${this.janCode}`
            this.janCode = "";
            //const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=dj00aiZpPXV1emVrWlZUblM0SiZzPWNvbnN1bWVyc2VjcmV0Jng9NDI-&jan_code=${this.janCode}`
            try {
                const response = await axios.get(url);
                const items = response.data.hits;
                console.log(items)
                console.log(items[0].name)
                console.log(items[0].price)
                if (items.length > 0) {
                    const item = items[0];
                    const name = item.name;
                    const price = item.price;
                    const existingProduct = this.products.find(product => product.name === name);
                    if (existingProduct) {
                        existingProduct.quantity++;
                    } else if (name && price) {
                        this.products.push({
                            name: name,
                            price: price,
                            quantity: 1
                        });
                    }
                    this.$store.commit('setProducts', this.products)
                    this.$store.commit('totalAmount', this.totalAmount);
                    
                }
            } catch (error) {
                console.log('error', error)
            }


        },
        save(modalContent, productName) {
            // 製品の数が5個に達したかチェック
            if (this.products.length >= 5) {
                alert('シミュレーターではこれ以上は登録できません。');
                return;
            }
            const name = modalContent[`${productName}`];
            const price = modalContent[`${productName}price`];
            // 既に製品が存在するかをチェック
            const existingProduct = this.products.find(product => product.name === name);
            if (existingProduct) {
                // 製品が既に存在する場合、数量を増やす
                existingProduct.quantity++;
            } else if (name && price) {
                // 新しい製品を追加
                this.products.push({
                    name: name,
                    price: price,
                    quantity: 1 // 初期数量は1
                });
            }
            this.$store.commit('setProducts', this.products)
            this.$store.commit('totalAmount', this.totalAmount);
            console.log(this.products)
        },
        calculateTaxIncludedPrice(product) {
            if (!product.price || !product.quantity) return '';
            return (product.price * product.quantity * 1.08).toFixed(0);
        }
    },
    mounted() {
        this.$refs.janCodeInput.focus();
    },
    watch:{
        addOsake(){
            if (this.addOsake == true) {
                this.products.push({
                    name: 'アサヒスーパードライ',
                    price: 210,
                    quantity: 1
                });
                this.$store.commit('setProducts', this.products)
                this.$store.commit('totalAmount', this.totalAmount);
                this.$store.commit('setOsake', false);
                
            }
        },
        Complete(){
            this.products = [];
            
        }
    
    }
}

</script>

<style>
.custom-modal-height {
    height: 200px !important;
}
</style>