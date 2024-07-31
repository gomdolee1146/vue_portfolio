<template>
  <div class="nav__wrap-dots">
    <span
      class="nav__dots"
      :class="{ active: activeSection === menu }"
      v-for="menu in menus"
      :key="menu"
      @click="scrollToSection(menu)"
    ></span>
  </div>
</template>

<script>
export default {
  props: ['activeSection'],
  data() {
    return {
      menus: ['home', 'profile', 'portfolio', 'career', 'contact'],
    };
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
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav__dots {
  display: block;
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
  cursor: pointer;
}

.nav__dots.active {
  background: #333;
}
</style>
