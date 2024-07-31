<template>
  <div ref="container" class="container">
    <div v-for="(box, index) in boxes" :key="index" class="box">{{ index + 1 }}</div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'portfolioContent',
  setup() {
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
      container,
      boxes,
    };
  },

};
</script>
<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  overflow: hidden;
  width: 500vw; /* 5개의 박스이므로 각 100vw */
}

.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background-color: #eee;
  border: 1px solid #ccc;
}

.footer {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background-color: #333;
  color: white;
  opacity: 0;
}
</style>
