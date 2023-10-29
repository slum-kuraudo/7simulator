<template>
    <StageSelect/>
    <router-view />
</template>

<script>

import StageSelect from "./components/StageSelect.vue"
export default {
    name: 'StageSelect',
    components: {
        StageSelect
    }
}
</script>