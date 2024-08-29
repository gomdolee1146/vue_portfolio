<script setup>
import { navigateContent } from '@/data/index';
</script>

<template>
  <div class="nav__wrap-dots">
    <span
      class="nav__dots"
      :class="{ active: activeSection === menu }"
      v-for="menu in navigateContent"
      :key="menu"
      @click="scrollToSection(menu)"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'navDots',
  props: {
    activeSection: { type: String, default: 'home' },
  },
  methods: {
    scrollToSection(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>
<style lang="scss" scoped>
.nav__wrap-dots {
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

.nav__dots {
  display: block;
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #d4ccdf;
  transition: all .2s ease;
  cursor: pointer;
}

.nav__dots.active {
  width: 10px;
  height: 10px;
  margin: 3px 0 0 3px;
  background: #16102f;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    border: 2px solid #16102f;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
  }
}
@media screen and (max-width: 600px) {
  .nav__wrap-dots {
    display: none;
  }
}
</style>
