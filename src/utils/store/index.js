import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            baseUrl: "http://localhost:3000"
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

export default store