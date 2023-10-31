<template>
    <div class="relative">
        <button @click="toggleDropdown"
            class="bg-white border text-3xl border-gray-500 text-green-700 font-bold py-2 px-7 rounded ">
            登録
        </button>
        <!-- Dropdown -->
        <div v-if="showDropdown" class="absolute top-fill w-32">
            <button
                class="bg-white border text-2xl border-gray-500 text-green-700 font-bold py-2 px-3.5 rounded whitespace-no-wrap">
                フライヤー
            </button>
            <button class="bg-white border text-3xl border-gray-500 text-green-700 font-bold py-2 px-7 rounded">
                休止
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showDropdown: false
        }
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        }
    },
    beforeUnmount() {
        clearInterval(this.interval);
    }

}

</script>