<template>
    <div class="date w-13 h-5 text-center text-black font-bold font-['Inter'] mb-1 mr-4">{{ formattedDate }}
    </div>
    <div class="time w-15 h-6 text-center text-black text-2xl font-bold font-['Inter'] mr-4">{{ formattedTime }}</div>
</template>

<script>
import moment from "moment"

export default {
    data() {
        return {
            currentDateTime: moment()
        }
    },
        computed:{
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
    }

}
</script>
