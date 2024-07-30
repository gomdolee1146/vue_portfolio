<template>
  <div id="app">
    <nav-header :activeSection="activeSection" />
    <section class="section-home" ref="homeSection">
        <home-content />
    </section>
    <section class="section-profile" ref="profileSection">
        <profile-content />
    </section>
    <section class="section-portfolio" ref="portfolioSection">
        <portfolio-content />
    </section>
    <section class="section-career" ref="careerSection">
        <career-content />
    </section>
    <section class="section-contact" ref="contactSection">
        <career-content />
    </section>
    <nav-dots :activeSection="activeSection" />
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import NavHeader from '@/components/nav/navHeader.vue';
import NavDots from '@/components/nav/navDots.vue';
import HomeContent from '@/components/content/homeContent.vue';
import ProfileContent from '../components/content/profileContent.vue';
import CareerContent from '../components/content/careerContent.vue';
import PortfolioContent from '../components/content/portfolioContent.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    NavHeader,
    NavDots,
    HomeContent,
    ProfileContent,
    PortfolioContent,
    CareerContent,
  },
  name: 'App',
  setup() {
    const homeSection = ref(null);
    const profileSection = ref(null);
    const portfolioSection = ref(null);
    const careerSection = ref(null);
    const contactSection = ref(null);
    const activeSection = ref('homeSection');

    onMounted(() => {
      const sections = [
        { id: 'home', ref: homeSection },
        { id: 'profile', ref: profileSection },
        { id: 'portfolio', ref: portfolioSection },
        { id: 'career', ref: careerSection },
        { id: 'contact', ref: contactSection },
      ];

      sections.forEach((section) => {
        gsap.from(section.ref.value, {
          scrollTrigger: {
            trigger: section.ref.value,
            start: 'top center',
            toggleActions: 'play none none none',
            onEnter: () => (activeSection.value = section.id),
            onEnterBack: () => (activeSection.value = section.id),
          },
          opacity: 0,
          duration: 1,
          y: 100,
        });
      });
    });

    return {
      homeSection,
      profileSection,
      portfolioSection,
      careerSection,
      contactSection,
      activeSection,
    };
  },
};
</script>
