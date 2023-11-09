<template>
    <div v-if="isModalOpen" @click.self="outsideClick">
        <div class="fixed inset-0 bg-opacity-75 flex justify-center items-center">
            <div class="bg-white p-6 rounded shadow-md">
                <div class="mb-4">
                    <label for="numberInput" class="inline-block text-lg mb-2">数値入力</label>
                    <input id="numberInput" type="text" class="border border-gray-300 rounded w-full py-2 px-4 text-right"
                        v-model="numberValue" @input="updateInput($event.target.value)" />
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
            numberValue: '',
            isModalOpen: false // This will hold the input value
        };
    },
    mounted() {
        window.addEventListener('keydown', this.handlekeydown)
        this.numButtonsLisener = event => {
            if (this.isModalOpen && event.target.classList.contains('num')) {
                this.numberValue += event.target.textContent;
            }
        };
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.handlekeydown)
    },
    methods: {
        appendToInput(num) {
            // Append the number clicked from the pad to the input
            this.numberValue += num.toString();
            if (!this.isModalOpen) {
                this.isModalOpen = true;
            }
        },
        updateInput(value) {
            // Ensure that only numbers are allowed
            const regex = /^[0-9]*$/;
            if (regex.test(value)) {
                this.numberValue = value;
            } else {
                this.numberValue = this.numberValue.slice(0, -1); // Remove the last character
            }
        },
        handlekeydown(event) {
            if (event.key >= 0 && event.key <= 9) {
                this.appendToInput(event.key);
            }
            if (event.key === 'Escape' && this.isModalOpen) {
                this.isModalOpen = false;
                this.numberValue = '';
            }
        },
        openModal(column) {
            this.modalContent = column;
            this.isModalOpen = true;
        },
        outsideClick() {

        }
    }
};
</script>