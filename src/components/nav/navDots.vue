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
<style>
.nav__wrap-dots {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

.nav__dots {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ccc;
  cursor: pointer;
}

.nav__dots.active {
  background: #333;
}
</style>
