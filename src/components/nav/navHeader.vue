<template>
  <header class="header">
    <div class="header__title">타이틀</div>
    <nav class="header__nav">
      <a class="header__menu" href="#home" :class="{ active: activeSection === 'home' }"
        >Home</a
      >
      <a
        class="header__menu"
        href="#profile"
        :class="{ active: activeSection === 'profile' }"
        >Profile</a
      >
      <a
        class="header__menu"
        href="#portfolio"
        :class="{ active: activeSection === 'portfolio' }"
        >Portfolio</a
      >
      <a
        class="header__menu"
        href="#career"
        :class="{ active: activeSection === 'career' }"
        >Career</a
      >
      <a
        class="header__menu"
        href="#contact"
        :class="{ active: activeSection === 'contact' }"
        >Contact</a
      >
    </nav>
  </header>
</template>

<script>
export default {
  props: ['activeSection'],
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
  background: #333;
  color: #fff;
  z-index: 1000;
}

.header__nav {
  display: flex;
  gap: 20px;
}

.header__menu {
  color: #fff;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
}

.header__menu.active {
  border-bottom: 2px solid #fff;
}
</style>
