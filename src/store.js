import { createStore } from 'vuex';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from './main'


export const store = createStore({
    state: {
        products: [],
        enteredValue: '',
        setAgeButtonValue: '',
        date: '',
        buttonFlag: false,
        showModal: false,
        osake: false,
        complete: false,
    },
    mutations: {
        setShowModal(state, value) {
            state.showModal = value;
        },
        setEnteredValue(state, value) {
            state.enteredValue = value;
        },
        setAgeButtonValue(state, value) {
            state.setAgeButtonValue = value;
        },
        setProducts(state, products) {
            state.products = products;
        },
        totalAmount(state,value) {
            state.totalAmount = value;
        },
        setbuttonFlag(state, flag) {
            state.buttonFlag = flag;
        },
        setOsakeModal(state, flag) {
            state.osake = flag;
        },
        removeProduct(state, index) {
            state.products.splice(index, 1);
        },
        setComplete(state, flag) {
            state.complete = flag;
        }
    },
    actions: {
        async saveValueFirestore({ state }) {
            const docData = {
                product: state.products,
                deposit: state.enteredValue,
                total: state.totalAmount,
                age: state.setAgeButtonValue,
                change: state.enteredValue - state.totalAmount,
                date: serverTimestamp()
            }
            try {
                await addDoc(collection(db, "detail"), docData,);
            } catch (e) {
                console.log(e);
            }
        }
    }

});

export default store;