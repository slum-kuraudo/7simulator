<template>
    <button @click="getProductData('Bag')" @click.self="outsideClick"
        class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
        レジ袋</button>
    <button @click="getProductData('Flyer')" @click.self="outsideClick"
        class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
        フライヤー</button>
    <button @click="getProductData('Coffee')" @click.self="outsideClick"
        class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
        コーヒー</button>
    <button @click="getProductData('Nikuman')" @click.self="outsideClick"
        class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
        中華まん</button>
    <button @click="getProductData('Newspaper')" @click.self="outsideClick"
        class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
        新聞</button>
    <button @click="getProductData('Oden')" @click.self="outsideClick"
        class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
        おでん</button>
    <button @click="getProductData('Bag')" @click.self="outsideClick"
        class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
        レジ袋</button>
    <button @click="getProductData('Bag')" @click.self="outsideClick"
        class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
        レジ袋</button>
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
                <button v-if="modalContent.pro1" 
                    class="px-4 py-2 bg-white border rounded border-gray-300">{{
                        modalContent.pro1 }}<br>{{ modalContent.pro1price }}円<br></button>
                <button v-if="modalContent.pro2" 
                    class="px-4 py-2 bg-white border rounded border-gray-300">{{
                        modalContent.pro2 }}<br>{{ modalContent.pro2price }}円<br></button>
                <button v-if="modalContent.pro3" 
                    class="px-4 py-2 bg-white border rounded border-gray-300">{{
                        modalContent.pro3 }}<br>{{ modalContent.pro3price }}円<br></button>
                <button v-if="modalContent.pro4" 
                    class="px-4 py-2 bg-white border rounded border-gray-300">{{
                        modalContent.pro4 }}<br>{{ modalContent.pro4price }}円<br></button>

            </div>
            <!-- Text Section -->
            <div class="flex justify-between mb-8">なんか書く</div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import db from '../../main'
import { doc, getDoc, } from "firebase/firestore";

export default {
    data() {
        return {
            isModalOpen: false,
            modalContent: {},
            count: ref(0)
        }
    },
    methods: {
        closeModal() {
            this.isModalOpen = false;
            this.modalContent = {};
        },
        outsideClick() {
        },
        async getProductData(productType) {
            this.isModalOpen = true;
            try {
                const docRef = doc(db, "product", productType);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    this.modalContent = docSnap.data();
                    this.$emit('update-product',docSnap.data())
                } else {
                    console.log("No such document!");
                    this.currentProduct = null;
                }
            } catch (error) {
                console.log("Error getting document:", error);
            }
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
}</style>