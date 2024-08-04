<template>
  <div class="portfolio">
    <div class="portfolio__title">Portfolio 모음</div>
    <div ref="container" class="portfolio__wrap">
      <div v-for="(box, index) in portContent" :key="index" class="portfolio__box">
        <div class="portfolio__thumb">
          <img :src="imgRoute(box.thumb)" />
        </div>
        <div class="portfolio__content">box {{ box.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { portContent } from '@/data/index';

import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'portfolioContent',
  data() {
    return {
      portContent: portContent,
    };
  },
  setup() {
    function imgRoute(imgName){
      return new URL(`/src/assets/img/${imgName}`, import.meta.url).href;
    };

    const container = ref(null);
    const boxes = [1, 2, 3, 4, 5];

    onMounted(() => {
      const totalWidth = container.value.scrollWidth;
      const viewWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewWidth;

      gsap.to(container.value, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: container.value,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          scrub: true,
          pin: true,
        },
      });
    });

    return {
      imgRoute,
      container,
      boxes,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/portfolioContent.scss';
</style>
