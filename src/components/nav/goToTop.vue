<template>
  <transition name="fade">
    <button v-if="isVisible" class="top-button" @click="scrollToTop">↑ Top</button>
  </transition>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'TopButton',
  setup() {
    const isVisible = ref(false);

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      isVisible.value = scrollTop < previousScroll;
      previousScroll = scrollTop;
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    let previousScroll = window.scrollY || document.documentElement.scrollTop;

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isVisible,
      scrollToTop,
    };
  },
};
</script>

<style lang="scss" scoped>
.top-button {
  position: fixed;
  bottom: 60px;
  right: 60px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #484692;
  color: white;
  transition: background-color 0.3s;
  box-sizing: border-box;
  cursor: pointer;
  z-index: 10;
  &:before {
    content: '';
    display: block;
    width: 56px;
    height: 56px;
    position: absolute;
    top: 50%;
    left: 50%;
    border: 2px solid #fff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
  }
  &:hover {
    background: #57549c;
  }
}
</style>
