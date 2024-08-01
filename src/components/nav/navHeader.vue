<script setup>
import { navigateContent } from '@/data/index';
</script>

<template>
  <header class="header">
    <div class="header__title">타이틀</div>
    <nav class="header__nav">
      <a
        class="header__menu"
        @click="navigateTo(menu)"
        v-for="menu in navigateContent"
        :key="menu"
        :class="{ active: activeSection === menu }"
      >
        {{ menu }}
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'navHeader',
  props: {
    activeSection: { type: String, default: 'home' },
  },
  methods: {
    navigateTo(sectionId) {
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>
<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 0 24px;
  background: #15202f;
  color: #fff;
  z-index: 1000;
}

.header__nav {
  display: flex;
  gap: 20px;
}

.header__menu {
  padding: 10px;
  color: #fff;
  cursor: pointer;
}

.header__menu.active {
  border-bottom: 2px solid #fff;
}
</style>
