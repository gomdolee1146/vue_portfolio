<script setup>
import { navigateContent } from '@/data/index';
</script>

<template>
  <header class="header">
    <div class="header__title">PORTFOLIO</div>
    <div class="header__nav_wrap">
      <button class="header__ico" @click="isShow = !isShow">
        <span></span>
      </button>
      <nav class="header__nav" :class="{ on: isShow }">
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
    </div>
  </header>
</template>

<script>
export default {
  name: 'navHeader',
  data() {
    return {
      isShow: false,
    };
  },
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
  text-transform: capitalize;
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
.header__ico {
  display: none;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .header__ico {
    display: block;
    position: relative;
  }
  .header__ico span,
  .header__ico span::before,
  .header__ico span::after {
    display: block;
    width: 24px;
    height: 3px;
    border-radius: 2px;
    background: #fff;
  }
  .header__ico span::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 8px;
  }
  .header__ico span::after {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
  }
  .header__nav {
    display: block;
    position: absolute;
    top: 60px;
    right: -300px;
    width: 300px;
    height: 100vh;
    background: rgba(21, 32, 47, 0.8);
    transition: all 0.3s ease-in-out;
  }
  .header__nav.on {
    right: 0;
  }
  .header__menu {
    display: block;
    width: 100%;
    padding: 16px 12px;
    box-sizing: border-box;
  }
  .header__menu.active {
    border-bottom: 0;
    background: #1f2b3c;
  }
}
</style>
