<template>
    <thead>
        <tr>
            <th v-for="column in columns" :key="column.label"
                :class="['border-black', 'border', column.width, column.paddingX, column.paddingY]">
                {{ column.label }}
            </th>
        </tr>
        <tr v-for="n in 5" :key="n">
            <th v-for="column in columns" :key="column.label + 'empty'"
                :class="['border-black', 'border', column.width, 'py-5', column.paddingX]">
            </th>
        </tr>
    </thead>
</template>
<script>
export default {
    data() {
        return {
            columns: [
                { label: '行', width: 'w-16', paddingX: 'px-2', paddingY: 'py-1' },
                { label: '製品名', width: 'w-64', paddingX: 'px-6', paddingY: 'py-1' },
                { label: '価格', width: 'w-24', paddingX: 'px-2', paddingY: 'py-1' },
                { label: '個数', width: 'w-16', paddingX: 'px-2', paddingY: 'py-1' },
                { label: '税込み価格', width: 'w-24', paddingX: 'px-1', paddingY: 'py-1' }
            ]
        }
    }
}
</script>