<template>
  <div v-show="isShowIntro" class="intro__wrap">
    <!-- 로딩 화면 -->
    <div v-show="isLoading" class="intro__loading" ref="introLoading">
      <h1>Welcome!</h1>
      <h2 ref="loadingText">Loading {{ loadingProgress }}%...</h2>
    </div>

    <!-- 블라인드 애니메이션 -->
    <div
      class="intro__blinds"
      :class="`intro__blinds${idx + 1}`"
      v-for="(blind, idx) in blinds"
      :key="idx"
      :ref="'blind' + idx"
    ></div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default {
  name: 'LoadingAnimation',
  props: {
    blindSpeed: {
      type: Number,
      default: 0.5,
    },
  },
  emits: ['checkLoading'],
  setup(props, { emit }) {
    const blinds = [1, 2, 3, 4, 5];
    const isLoading = ref(true);
    const isShowIntro = ref(true);
    const introLoading = ref(null);
    const loadingText = ref(null);
    const loadingProgress = ref(0);

    const isEndLoading = ref(false);

    onMounted(() => {
      // 로딩 애니메이션
      const interval = setInterval(() => {
        if (loadingProgress.value < 100) {
          loadingProgress.value++;
        } else {
          clearInterval(interval);
          // 로딩 완료 후 페이드 아웃
          introLoading.value.classList.add('fade-out');
          introLoading.value.addEventListener('transitionend', () => {
            isLoading.value = false;
            startBlindsAnimation();
          });
        }
      }, 30);

      gsap.registerPlugin(ScrollTrigger);
      // 블라인드 애니메이션
      const startBlindsAnimation = () => {
        blinds.forEach((_, idx) => {
          gsap.to(`.intro__blinds${idx + 1}`, {
            yPercent: -100,
            delay: idx * props.blindSpeed,
            duration: props.blindSpeed,
            ease: 'power2.inOut',
            onComplete: idx === blinds.length - 1 ? startTypingText() : null,
          });
        });
      };

      const startTypingText = () => {
        setTimeout(() => {
          isEndLoading.value = true;
          emit('checkLoading', isEndLoading);
        }, 1000);
      };
    });

    return {
      blinds,
      isLoading,
      isShowIntro,
      introLoading,
      loadingText,
      loadingProgress,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/components/introBox.scss';
</style>
