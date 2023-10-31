<template>
    <div class="grid grid-cols-2 h-screen">
        <div class="bg-gray-100">1</div>
        <div class="bg-red-100">
            <div class="flex items-center ml-8">
                <div class="flex flex-col mr-4 ">
                    <div class="date w-13 h-5 text-center text-black font-bold font-['Inter'] mb-1 mr-4">{{ formattedDate }}
                    </div>
                    <div class="time w-15 h-6 text-center text-black text-2xl font-bold font-['Inter'] mr-4">{{
                        formattedTime }}</div>
                </div>
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
                        <button
                            class="bg-white border text-3xl border-gray-500 text-green-700 font-bold py-2 px-7 rounded">
                            休止
                        </button>
                    </div>
                </div>
                <span class="w-10 h-5 text-black font-bold self-start">demo</span>
            </div>
        </div>
        <div class="bg-orange-100">3</div>
        <div class="bg-amber-100">4</div>
    </div>
</template>
<script>
import moment from "moment"
export default {
    data() {
        return {
            currentDateTime: moment(),
            showDropdown: false
        }
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        }
    },
    computed: {
        formattedDate() {
            return this.currentDateTime.format('MM/DD');
        },
        formattedTime() {
            return this.currentDateTime.format('HH:mm');
        }
    },
    mounted() {
        this.interval = setInterval(() => {
            this.currentDateTime = moment();
        }, 1000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    }
}
</script>