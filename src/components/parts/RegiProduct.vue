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
                <td class="border px-4 py-2">{{ calcTax(getProduct(n).price, getProduct(n).quantity) }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    name: 'RegiProduct',
    data() {
        return {
            products: []
        }
    },
    methods: {
        getProduct(index) {
            return this.products.find(product => product.row === index) || {}
        },
        calcTax(price, quantity) {
            if (!price || !quantity) return '';
            return (price * quantity * 1.08).toFixed(2)
        }
    },
}
</script>