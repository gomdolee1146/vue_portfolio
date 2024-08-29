<template>
  <div class="home__wrap">
    <div class="home__content">
      <span>HELLO :)</span> <br />
      <typing-text :text="'This is My Portfolio!'" />
    </div>
    <div class="home__bg" ref="stars">
      <div v-for="n in 5" :key="'star' + n" class="shining-star"></div>
      <div v-for="n in 2" :key="'shooting-left' + n" class="shooting-star left"></div>
      <div v-for="n in 2" :key="'shooting-right' + n" class="shooting-star right"></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

import typingText from '@/components/box/typingText.vue';

export default {
  name: 'homeContent',
  components: { typingText },
  setup() {
    const stars = ref(null);

    onMounted(() => {
      const shootingStarsLeft = stars.value.querySelectorAll('.shooting-star.left');
      const shootingStarsRight = stars.value.querySelectorAll('.shooting-star.right');

      shootingStarsLeft.forEach((shootingStar, i) => {
        const delay = Math.random() * 10;
        gsap.fromTo(
          shootingStar,
          {
            x: Math.random() * window.innerWidth,
            y: -50,
            opacity: 0,
          },
          {
            x: -window.innerWidth,
            y: window.innerHeight,
            opacity: 1,
            duration: 3,
            delay: delay,
            ease: 'power1.in',
            onComplete: () => {
              gsap.to(shootingStar, {
                opacity: 0,
                duration: 1,
                onComplete: () => {
                  shootingStar.style.transform = '';
                  shootingStar.style.opacity = '';
                },
              });
            },
            repeat: -1,
          }
        );
      });

      shootingStarsRight.forEach((shootingStar, i) => {
        const delay = Math.random() * 10;
        gsap.fromTo(
          shootingStar,
          {
            x: Math.random() * window.innerWidth,
            y: -50,
            opacity: 0,
          },
          {
            x: window.innerWidth,
            y: window.innerHeight,
            opacity: 1,
            duration: 3,
            delay: delay,
            ease: 'power1.in',
            onComplete: () => {
              gsap.to(shootingStar, {
                opacity: 0,
                duration: 1,
                onComplete: () => {
                  shootingStar.style.transform = '';
                  shootingStar.style.opacity = '';
                },
              });
            },
            repeat: -1,
          }
        );
      });
    });

    return {
      stars,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/homeContent.scss';
</style>
