<template>
    <table class="min-w-full border-collapse">
        <thead>
            <tr>
                <th class="border px-4 py-2">行</th>
                <th class="border px-4 py-2">製品名</th>
                <th class="border px-4 py-2">価格</th>
                <th class="border px-4 py-2">個数</th>
                <th class="border px-4 py-2">税込み価格</th>
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
            <td class="border-white border px-4 py-2  text-green-600 font-bold text-white text-right ">お預かり</td>
            <td class="border-white border px-4 py-2 w-64 text-right">合計金額</td>
        </tr>
        <tr>
            <td class="border-white border px-4 py-2 text-green-600 font-bold text-white text-right ">合計</td>
            <td class="border-white border px-4 py-2 text-right">{{ totalAmount }}</td>
        </tr>
        <tr>
            <td class="border-white border px-4 py-2 text-green-600 font-bold stext-white text-right ">お釣り</td>
            <td class="border-white border px-4 py-2 text-right">釣銭</td>
        </tr>
    </table>
    <div class="flex">
        <button v-for="productType in productTypes" :key="productType" @click="getProductData(productType)"
            class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
            {{ productType }}</button>
        <div v-if="isModalOpen" class=" inset-0 reght-top bg-opacity-50 overflow-y-auto h-full w-full">
            <div
                class="modal-content absolute top-0 mx-auto p-5 border w-11/12 md:w-1/2 lg:w-1/3 shadow-lg rounded-md bg-orange-400">
                <!-- Header Section -->
                <div class="flex justify-between items-center mb-4">
                    <h1 v-if="modalContent" class="text-4xl font-bold">{{ modalContent.label }}</h1>
                    <button @click="closeModal" class="px-4 py-2 bg-gray-300 rounded">入力中止</button>
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
                <!-- Text Section -->
                <div class="flex justify-between mb-8">なんか書く</div>
            </div>
        </div>

    </div>
</template>
<script>
import db from '../../main'
import { doc, getDoc, } from "firebase/firestore";
export default {
    name: 'RegiProduct',
    data() {
        return {
            products: [],
            isModalOpen: false,
            modalContent: Object,
            productTypes: ['Bag', 'Flyer', 'Coffee', 'Nikuman', 'Newspaper', 'Oden', 'Bag', 'Bag'],
        }
    },
    props: {
        product: Object
    },
    computed: {
        totalAmount() {
            return this.products.reduce((sum, product) => {
                return sum + product.price * product.quantity;
            }, 0).toFixed(0);
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
            return this.products[index - 1] || {}
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
        },
        calculateTaxIncludedPrice(product) {
            if (!product.price || !product.quantity) return '';
            return (product.price * product.quantity * 1.08).toFixed(0);
        }
    }

}

</script>

<style>
.modal-content {
    /* その他のスタイルを適用 */
    /* 位置を直接指定する */
    position: fixed;
    top: calc(1% + 20px);
    /* 元のtopの値に40pxを加算 */
    right: 100px;
    /* 右から40pxの位置に配置 */
    width: 600px;
    height: 400px;
}
</style>