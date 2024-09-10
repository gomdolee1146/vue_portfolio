<template>
  <div class="career" ref="career">
    <div
      class="career__box"
      v-for="(box, index) in boxes"
      :key="index"
      :ref="'careerBox' + index"
    >
      <h2>{{ box.title }}</h2>
      <p>{{ box.content }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

export default {
  name: 'InfoSection',
  setup() {
    const career = ref(null);
    const boxes = [
      { title: '테스트111', content: '컨텐츠 11' },
      { title: '테스트222', content: '컨텐츠 22' },
      { title: '테스트333', content: '컨텐츠 33' },
    ];

    const handleScroll = () => {
      boxes.forEach((_, index) => {
        const box = document.querySelector(`.career__box:nth-child(${index + 1})`);
        const boxRect = box.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // 스크롤로 20% 정도 보일 때 애니메이션 트리거
        if (boxRect.top < windowHeight * 0.8) {
          gsap.to(box, {
            rotation: 0,
            duration: 0.2,
            ease: 'power2.out',
          });
        } else {
          gsap.to(box, {
            rotation: 30,
            duration: 0.2,
            ease: 'power2.out',
          });
        }
      });
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); 
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      career,
      boxes,
    };
  },
};
</script>

<style lang="scss" scoped>
.career {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.career__box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 80vh;
  padding: 20px;
  transform: rotate(30deg);
  transform-origin: top left;
  transition: transform 0.2s ease-out;

  &:first-child {
    background-color: #f4f4f4;
  }
  &:nth-child(2) {
    background-color: #eaeaea;
  }
  &:nth-child(3) {
    background-color: #dfdfdf;
  }
}

.career__box h2 {
  margin: 0;
}

.career__box p {
  margin-top: 10px;
}
</style>
