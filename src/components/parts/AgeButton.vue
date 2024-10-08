<template>
    <div class="flex flex-wrap">
        <button v-for="button in buttons" :key="button.id" :id="button.id" :class="button.classes"
            @click="handleButtonClick(button.action)">
            {{ button.text }}
        </button>
    </div>
    <div v-if="isModalOpen" class="inset-0 right-top bg-opacity-50 overflow-y-auto h-full w-full">
            <div class="modal-content custom-modal-height mx-auto p-4 border shadow-lg rounded-md bg-orange-400">
                <!-- Header Section -->
                <div class="flex justify-between items-center mb-4">
                    <h1 v-if="modalContent" class="text-4xl font-bold">電子マネー</h1>
                    <button v-if="isModalOpen" @click="closeModal"
                        class="sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
                        戻る</button>

                </div>
                <div class="flex justify-between mb-8">
                    <button v-if="modalContent.pro1" @click="save(modalContent, 'pro1')"
                        class=" px-4 py-2 bg-white border rounded border-gray-300"></button>

                </div>

            </div>
        </div>
</template>

<script>
// import RegiProduct from './RegiProduct.vue';
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import db from '../../main'
export default {
    data() {
        return {
            buttons: [
                { id: '7co', text: '7co', action: 'doSomething', classes: 'w-16 h-16 p-4 m-1 bg-green-500 text-white rounded  hover:bg-blue-600 col-span-2' },
                { id: 'pay', text: '電子マネー', action: 'doSomething', classes: 'w-16 h-16 p-2 m-1 bg-green-500 text-white rounded hover:bg-blue-600 text-xs whitespace-nowrap col-span-2' },
                { id: 'm9', text: '9', action: '男9', classes: 'w-16 h-16 p-4 m-1  bg-white text-blue-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'f9', text: '9', action: '女9', classes: 'w-16 h-16 p-4 m-1 bg-white text-red-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'm19', text: '19', action: '男19', classes: 'w-16 h-16 p-4 m-1 bg-white text-blue-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'f19', text: '19', action: '女19', classes: 'w-16 h-16 p-4 m-1 bg-white text-red-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'm29', text: '29', action: '男29', classes: 'w-16 h-16 p-4 m-1 bg-white text-blue-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'f29', text: '29', action: '女29', classes: 'w-16 h-16 p-4 m-1 bg-white text-red-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'm49', text: '49', action: '男49', classes: 'w-16 h-16 p-4 m-1 bg-white text-blue-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'f49', text: '49', action: '女49', classes: 'w-16 h-16 p-4 m-1 bg-white text-red-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'm50', text: '50', action: '男50', classes: 'w-16 h-16 p-4 m-1 bg-white text-blue-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'f50', text: '50', action: '女50', classes: 'w-16 h-16 p-4 m-1 bg-white text-red-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'enter', text: '登録/リピート', action: 'doSomething', classes: 'w-32 h-16 m-1 bg-blue-500 text-white rounded hover:bg-blue-600 col-span-2' }
            ],
            regiflag: false,
            isModalOpen: false,
        }
    },
    props: {
        buttonText: String,
        action: String,
        totalAmount: Number,
        
    },
    methods: {
        async registerOrder() {
            try {
                const docRef = await setDoc(doc(db, "orders", "LA"), {
                    total: this.totalAmount,
                    date: serverTimestamp(),
                });
                console.log("Document written with ID: ", docRef.id);

            } catch (e) {
                console.error(e);
            }
        

        },
        handleButtonClick(action) {
            if(action === 'pay'){
                this.isModalOpen = true;

                }
            
            if(this.regiflag == true){
                alert('実際の業務ではドロワーにお金をしまい\nCボタンを押して画面を初期化してください')
                
            }else{
            this.$store.commit('setShowModal', false);
            this.$store.commit('setAgeButtonValue', action);
            this.$store.commit('setbuttonFlag', true);
            console.log(action);
            this.$store.dispatch('saveValueFirestore');
            this.regiflag= true;
        }
    },
    

        },
        computed: {
            enteredValue() {
                return this.$store.state.enteredValue;
            },
        }
    }

</script>
