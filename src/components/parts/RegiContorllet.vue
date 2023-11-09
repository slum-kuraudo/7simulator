<template>
    <div class="py-4 grid grid-cols-3 gap-1">
        <!-- 数字ボタンと機能ボタンを動的に生成 -->
        <button v-for="button in keypadButtons" :key="button.text" @click="handleButtonClick(button.action)"
            :class="button.classes">
            {{ button.text }}
        </button>
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
        };
    },
    methods: {
        handleButtonClick(action) {
            // ここで `action` に応じて何らかのアクションを実行します
            console.log(action); // 仮の動作としてコンソールに出力
        },
    },
};
</script>

<style scoped>
/* Tailwind CSS の追加スタイルが必要であればここに記述 */
</style>
