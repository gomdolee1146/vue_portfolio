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
          <p class="portfolio__desc" v-html="escapeToEnter(box.desc)"></p>
          <p>
            사용 언어:
            <span
              class="portfolio__badge"
              :class="`portfolio__badge-${skills}`"
              v-for="skills in box.skills"
              :key="skills"
            >
              {{ skills }}
            </span>
          </p>
          <p>작업기간 : {{ box.period }}</p>
          <div class="portfolio__content_box">
            <button class="portfolio__button" v-if="box.code" @click="goToLink(box.code)">
              Readme
            </button>
            <button class="portfolio__button" @click="goToLink(box.view)">DEMO</button>
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
    function imgRoute(imgName) {
      return new URL(`/src/assets/img/${imgName}`, import.meta.url).href;
    }

    const container = ref(null);

    onMounted(() => {
      if (window.innerWidth > 600) {
        const sections = gsap.utils.toArray('.portfolio__box');

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: '.portfolio',
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector(".portfolio").offsetWidth
          }
        });
      }
    });

    return {
      imgRoute,
      container,
    };
  },
  methods: {
    goToLink(link) {
      window.open(link);
    },
    escapeToEnter(str) {
      str = str.replaceAll('\n', '<br />');
      return str;
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/portfolioContent.scss';
</style>
