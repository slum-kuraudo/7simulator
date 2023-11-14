<template>
    <button v-for="column in columns" :key="column.id" @click="openModal(column)" @click.self="outsideClick" :id="[column.id]"
        class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">
        {{ column.label }}</button>
    <div v-if="isModalOpen" 
        class=" inset-0 reght-top bg-opacity-50 overflow-y-auto h-full w-full">
        <div
            class="modal-content absolute top-0 mx-auto p-5 border w-11/12 md:w-1/2 lg:w-1/3 shadow-lg rounded-md bg-orange-400">
            <!-- Header Section -->
            <div class="flex justify-between items-center mb-4">
                <h1 class="text-4xl font-bold">{{ modalContent.label }}</h1>
                <button @click="closeModal" class="px-4 py-2 bg-gray-300 rounded">入力中止</button>
            </div>
            <!-- Buttons Section -->
            <div class="flex justify-between mb-8">
                <button v-if="modalContent.pro1" class="px-4 py-2 bg-white border rounded border-gray-300">{{ modalContent.pro1 }}<br>110円</button>
                <button v-if="modalContent.pro2" class="px-4 py-2 bg-white border rounded border-gray-300">{{ modalContent.pro2 }}</button>
                <button v-if="modalContent.pro3" class="px-4 py-2 bg-white border rounded border-gray-300">{{ modalContent.pro3 }}</button>
                <button v-if="modalContent.pro4" class="px-4 py-2 bg-white border rounded border-gray-300">{{ modalContent.pro4 }}</button>
            </div>
            <!-- Text Section -->
            <p class="text-2xl">test</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            columns: [
                { label: 'レジ袋', id: 'RegiModal', pro1: 'レジ袋(小)', pro2: 'レジ袋(中)', pro3: 'レジ袋(大)', pro4: 'レジ袋(特大)' },
                { label: 'フライヤー', id: 'FlyModal',pro1: 'アメリカンドッグ', pro2: 'ななチキ', pro3: '揚げ鶏', pro4: 'フランクフルト' },
                { label: '中華まん', id: 'ChukaModal', pro1: 'あんまん', pro2: 'ピザまん', pro3: '肉まん', pro4: 'カレーまん' },
                { label: 'コーヒー', id: 'CoffeeModal' ,pro1: 'ホットコーヒー', pro2: 'アイスコーヒー', pro3: 'カフェオレ', pro4: 'カフェラテ'},
                { label: '雑誌', id: 'Modal', pro1: '週刊少年ジャンプ', pro2: '週刊少年マガジン', pro3: '週刊少年サンデー', pro4: '週刊少年チャンピオン' },
                { label: 'おでん', id: 'OdenModal', pro1: '大根', pro2: '卵', pro3: 'こんにゃく', pro4: 'ちくわ' },
                { label: 'empty', id: 'Empty' },
                { label: 'empty', id: 'Empty' }
            ],
            isModalOpen: false,
            modalContent: {}
        }
    },
    methods: {
        openModal(column) {
            this.modalContent = column;
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        },
        outsideClick(){
            
        }
    }
    
}
</script>

<style>
.modal-content {
    /* その他のスタイルを適用 */
    /* 位置を直接指定する */
    position: fixed;
    top: calc(1% + 20px); /* 元のtopの値に40pxを加算 */
    right: 100px; /* 右から40pxの位置に配置 */
    width: 600px;
    height: 400px;
}
</style>