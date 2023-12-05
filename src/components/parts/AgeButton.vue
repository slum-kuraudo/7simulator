<template>
    <div class="flex flex-wrap">
        <button v-for="button in buttons" :key="button.id" :id="button.id" :class="button.classes"
            @click="handleButtonClick(button.action)">
            {{ button.text }}
        </button>
    </div>
</template>

<script>
// import RegiProduct from './RegiProduct.vue';
import{doc,setDoc,serverTimestamp} from "firebase/firestore";
import db from '../../main'
export default {
    data() {
        return {
            buttons: [
                { id: '7co', text: '7co', action: 'doSomething', classes: 'w-16 h-16 p-4 m-1 bg-green-500 text-white rounded hover:bg-blue-600 col-span-2' },
                { id: 'pay', text: '電子マネー', action: 'doSomething', classes: 'w-16 h-16 p-2 m-1 bg-green-500 text-white rounded hover:bg-blue-600 text-xs whitespace-nowrap col-span-2' },
                { id: 'm9', text: '9',action:'男9', classes:'w-16 h-16 p-4 m-1 bg-white text-blue-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2'},
                { id: 'f9', text: '9', action: '女9', classes: 'w-16 h-16 p-4 m-1 bg-white text-red-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'm19', text: '19', action: '男19', classes: 'w-16 h-16 p-4 m-1 bg-white text-blue-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'f19', text: '19', action: '女19', classes: 'w-16 h-16 p-4 m-1 bg-white text-red-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'm29', text: '29', action: '男29', classes: 'w-16 h-16 p-4 m-1 bg-white text-blue-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'f29', text: '29', action: '女29', classes: 'w-16 h-16 p-4 m-1 bg-white text-red-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'm49', text: '49', action: '男49', classes: 'w-16 h-16 p-4 m-1 bg-white text-blue-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'f49', text: '49', action: '女49', classes: 'w-16 h-16 p-4 m-1 bg-white text-red-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'm50', text: '50', action: '男50', classes: 'w-16 h-16 p-4 m-1 bg-white text-blue-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2'},
                { id: 'f50', text: '50', action: '女50', classes: 'w-16 h-16 p-4 m-1 bg-white text-red-700 rounded hover:bg-blue-600 font-bold text-3xl col-span-2' },
                { id: 'enter', text: '登録/リピート', action: 'doSomething', classes: 'w-32 h-16 m-1 bg-blue-500 text-white rounded hover:bg-blue-600 col-span-2' }
            ],
            
        }
    },
    props:{
        buttonText:String,
        action:String,
        totalAmount:Number,
    },
    methods: {
        async registerOrder(){
            try{
                const docRef = await setDoc(doc(db, "orders", "LA"), {
                    total: this.totalAmount,
                    date: serverTimestamp(),
                });
                console.log("Document written with ID: ", docRef.id);

            }catch(e){
                console.error(e);
            }

        },
        handleButtonClick(action) {
            // ボタンのアクションを処理する
            console.log(action);
        }
    }

};
</script>
