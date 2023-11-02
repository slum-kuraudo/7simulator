<template>
    <button v-for="column in columns" :key="column.label"
        class="w-full sm:w-1/8 bg-gray-300 hover:bg-gray-700 text-black font-bold py-1 px-4 rounded">{{ column.label
        }}</button>
</template>
<script>
export default {
    data() {
        return {
            columns: [
                { label: 'レジ袋' },
                { label: 'フライヤー' },
                { label: '中華まん' },
                { label: 'コーヒー' },
                { label: '雑誌' },
                { label: 'おでん' },
                { label: 'empty' },
                { label: 'empty' }
            ]
        }
    }

}
</script>