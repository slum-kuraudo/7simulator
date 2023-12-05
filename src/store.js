import { createStore }from 'vuex';


const store = createStore({
state:{
    products:[],
    enteredValue:''
},
mutations:{
    ADD_PRODUCT(state,product){
        state.products.push(product)
    },
    SET_UPDATE_VALUE(state,value){
        state.enteredValue = value;
    
    }
},
actions:{
    addProduct({commit},product){
        commit('ADD_PRODUCT',product);
    },
    setEnterrdValue({commit},value){
        commit('SET_UPDATE_VALUE',value);
    }
}

});

export default store;