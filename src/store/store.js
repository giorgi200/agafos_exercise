import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)


const state = {
    quiz: [],
    quizTitle: "Exercitation voluptate",
    currentQuiz: 0
}
const actions = {
    loadQuiz({ commit }) {
        axios.get('https://api.jsonbin.io/b/5f9495b13895f90cd22ec6da/latest', {
            headers: {
                'secret-key': '$2a$10$zvusTdO1ZbEMAbm9TUg6W.gGXH8.doPoZ9sHn8Ct8TmY61CSQGxB2'
            }
        })
            .then(r => r.data)
            .then(res => {
                commit('SET_QUIZ', res);
            })
    },
    nextQuestion({ commit }) {
        commit('NEXT_QUESTION');
    },
    switchAnswer({ commit }, id) {
        commit('SWITCH', id);
    }

}
const getters = {
    customQuiz(state) {
        return state.quiz[state.currentQuiz]
    },
    quizTitle() {
        return state.quizTitle
    }

}
const mutations = {
    SET_QUIZ(state, payload) {
        state.quiz = payload
    },
    NEXT_QUESTION(state) {
        state.currentQuiz++
    },
    SWITCH(state, id) {
        state.quiz[state.currentQuiz].userAnswer = id
    }
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});