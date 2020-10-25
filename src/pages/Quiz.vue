<template>
  <main id="quiz">
    <section class="quiz-item">
      <h1 v-if="quizLen !== currentQuiz" class="quiz-title">
        {{ quizTitle }}
      </h1>
      <h1 v-else class="quiz-title">Quiz Finished!</h1>

      <p v-if="quizLen !== currentQuiz" class="question-text">
        {{ customQuiz.question }}
      </p>
      <div v-if="quizLen !== currentQuiz" class="answers">
        <div
          v-for="answer in customQuiz.answers"
          class="question-item"
          :key="answer._id"
        >
          <div
            :class="
              'answer-inner ' +
              (answer._id == customQuiz.userAnswer
                ? customQuiz.userAnswer == customQuiz.correctId
                  ? 'correct'
                  : 'false'
                : '') +
              (answer._id == customQuiz.correctId &&
              customQuiz.userAnswer !== null
                ? ' correct'
                : '')
            "
            v-on:click="switchAnswer(answer._id)"
          >
            <div v-if="answer.img !== ''" class="quiz-img">
              <img :src="answer.img" alt="quiz answer" />
            </div>
            <p class="answer-text">{{ answer.text }}</p>
          </div>
        </div>
      </div>
      <button
        v-if="quizLen !== currentQuiz"
        v-on:click="next"
        class="next-button"
      >
        next
      </button>
      <div v-if="quizLen !== currentQuiz" class="quiz-pagination">
        <span
          v-for="index in quizLen"
          :key="index"
          :class="index - 1 === currentQuiz && 'active'"
          >{{ index }}</span
        >
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Quiz",
  methods: {
    next() {
      if (this.customQuiz.userAnswer !== null) {
        this.$store.dispatch("nextQuestion");
      }
    },
    switchAnswer(id) {
      if (this.customQuiz.userAnswer === null) {
        this.$store.dispatch("switchAnswer", id);
      }
    },
  },
  computed: {
    quizLen() {
      return this.$store.state.quiz.length;
    },
    currentQuiz() {
      return this.$store.state.currentQuiz;
    },
    customQuiz() {
      return this.$store.getters.customQuiz;
    },
    quizTitle() {
      return this.$store.state.quizTitle;
    },
  },
  created() {
    this.$store.dispatch("loadQuiz");
  },
};
</script>
