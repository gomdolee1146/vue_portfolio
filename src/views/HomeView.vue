<template>
  <div id="app">
    <nav-header :activeSection="activeSection" />
    <section class="section-home" id="home" ref="homeSection">
      <home-content />
    </section>
    <section class="section-skills" id="skills" ref="skillsSection">
      <skills-content />
    </section>
    <section class="section-portfolio" id="portfolio" ref="portfolioSection">
      <portfolio-content />
    </section>
    <section class="section-career" id="career" ref="careerSection">
      <career-content />
    </section>
    <section class="section-profile" id="profile" ref="profileSection">
      <profile-content />
    </section>
    <nav-dots :activeSection="activeSection" />
  </div>
  <go-to-top />
</template>

<script>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import NavHeader from '@/components/nav/navHeader.vue';
import NavDots from '@/components/nav/navDots.vue';
import GoToTop from '@/components/nav/goToTop.vue';
import HomeContent from '@/components/content/homeContent.vue';
import SkillsContent from '@/components/content/skillsContent.vue';
import CareerContent from '@/components/content/careerContent.vue';
import PortfolioContent from '@/components/content/portfolioContent.vue';
import ProfileContent from '@/components/content/profileContent.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    NavHeader,
    NavDots,
    GoToTop,
    HomeContent,
    SkillsContent,
    PortfolioContent,
    CareerContent,
    ProfileContent,
  },
  name: 'HomeView',
  setup() {
    const homeSection = ref(null);
    const skillsSection = ref(null);
    const portfolioSection = ref(null);
    const careerSection = ref(null);
    const profileSection = ref(null);
    const activeSection = ref('homeSection');

    onMounted(() => {
      const sections = [
        { id: 'home', ref: homeSection },
        { id: 'skills', ref: skillsSection },
        { id: 'portfolio', ref: portfolioSection },
        { id: 'career', ref: careerSection },
        { id: 'profile', ref: profileSection },
      ];

      const updateActiveSection = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        sections.forEach((section) => {
          const element = section.ref.value;
          if (element !== 'portfolioSection') {
            if (
              element.offsetTop <= scrollPosition &&
              element.offsetTop + element.clientHeight > scrollPosition
            ) {
              activeSection.value = section.id;
            }
          }
        });
      };

      window.addEventListener('scroll', updateActiveSection);
      updateActiveSection();

      return () => {
        window.removeEventListener('scroll', updateActiveSection);
      };
    });

    return {
      homeSection,
      skillsSection,
      portfolioSection,
      careerSection,
      profileSection,
      activeSection,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/views/homeView.scss';
</style>
