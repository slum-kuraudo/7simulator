<template>
    <div class="py-4 grid grid-cols-3 gap-1">
        <!-- 数字ボタンと機能ボタンを動的に生成 -->
        <button v-for="button in keypadButtons" :key="button.text" @click="handleButtonClick(button.action)"
            :class="button.classes">
            {{ button.text }}
        </button>
    </div>



    <div v-if="showModal" class="modal inset-0 reght-top bg-opacity-50 overflow-y-auto h-full w-full"
        @click.self="outsideClick">
        <div class="modal-content">
            <div class="bg-white p-6 rounded shadow-md">
                <div class="mb-4">
                    <label class="inline-block text-lg mb-2">数値入力</label>
                    <p type="text" class="border border-gray-300 rounded w-full py-2 px-4 text-right">
                        {{ enteredValue }}</p>
                    <p>Cボタンでクリア&閉じる</p>
                </div>
                <div class="grid grid-cols-3 gap-2">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // テンキーパッドのボタン設定
            keypadButtons: [
                { text: 'レシート送り', action: 'recipt', classes: 'w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600' },
                { text: '両替', action: 'ryougae', classes: 'w-16 h-16 bg-green-500 text-white rounded hover:bg-blue-600' },
                { text: '取消', action: 'back', classes: 'w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600' },
                { text: 'C', action: 'clear', classes: 'w-32 h-16 bg-blue-500 text-white rounded hover:bg-blue-600 col-span-2' },
                { text: 'X', action: 'multi', classes: 'w-16 h-16 bg-green-500 text-white rounded hover:bg-blue-600' },
                { text: '7', action: '7', classes: 'w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600' },
                { text: '8', action: '8', classes: 'w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600' },
                { text: '9', action: '9', classes: 'w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600' },
                { text: '4', action: '4', classes: 'w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600' },
                { text: '5', action: '5', classes: 'w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600' },
                { text: '6', action: '6', classes: 'w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600' },
                { text: '1', action: '1', classes: 'w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600' },
                { text: '2', action: '2', classes: 'w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600' },
                { text: '3', action: '3', classes: 'w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600' },
                { text: '0', action: '0', classes: 'w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600' },
                { text: '00', action: '00', classes: 'w-16 h-16 bg-blue-500 text-white rounded hover:bg-blue-600' },
                { text: '万', action: '10000', classes: 'w-16 h-16 bg-white text-black rounded hover:bg-blue-600' },
            ],
            showModal: false,
            enteredValue: '',
        };
    },
    methods: {
        handleButtonClick(action) {
            if (!isNaN(action)) {
                this.enteredValue += action;
                this.showModal = true;
            } else if (action === 'clear') {
                this.enteredValue = '';
                this.showModal = false;
                console.log(action);
            } else if (action === 'recipt') {
                alert('店舗名が書かれた短いレシートが出力されます。\nこのボタンは滅多に使わないので、今回は実装しません。')
            }
        },
        outsideClick() {
        },
        closeModal() {
            this.showModal = false;
            this.enteredValue = '';
        },
    }
};
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
</style>
