<template>
  <div class="portfolio">
    <div class="portfolio__title">Portfolio 모음</div>
    <div ref="container" class="portfolio__wrap">
      <div v-for="(box, index) in portContent" :key="index" class="portfolio__box">
        <div class="portfolio__thumb">
          <img :src="imgRoute(box.thumb)" />
        </div>
        <div class="portfolio__content">
          <h2>- {{ box.title }}-</h2>  
          <p>{{ box.desc }}</p>
          <p>사용 언어: 
            <span class="portfolio__badge" :class="`portfolio__badge-${skills}`" v-for="skills in box.skills" :key="skills">
              {{ skills }}
            </span>
          </p>
          <p>작업기간 : {{ box.period }}</p>
          <div class="portfolio__content_box">
            <button class="portfolio__button">GITHUB</button>
            <button class="portfolio__button">DEMO</button>
          </div>
        </div>
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
  methods:{
    goToLink(link){
      window.open(link) 
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/portfolioContent.scss';
</style>
