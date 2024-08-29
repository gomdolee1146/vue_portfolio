<template>
  <div class="typing__container">
    <span class="typing__text">{{ displayedText }}</span>
    <span class="typing__cursor">|</span>
  </div>
</template>

<script>
export default {
  name: 'typingText',
  props: {
    text: { type: String, default: '타이핑 테스트' },
  },
  data() {
    return {
      displayedText: '',
      index: 0,
      typingSpeed: 100,
    };
  },
  methods: {
    typeContent() {
      if (this.index < this.text.length) {
        this.displayedText += this.text.charAt(this.index);
        this.index++;
        setTimeout(this.typeContent, this.typingSpeed);
      }
    },
  },
  mounted() {
    this.typeContent();
  },
};
</script>

<style>
.typing__container {
  display: flex;
  align-items: center;
  font-size: 24px;
}
.typing__text {
  color: #fff;
}
.typing__cursor {
  margin-left: 2px;
  animation: blink 0.7s step-end infinite;
  color: #fff;
}

@keyframes blink {
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
