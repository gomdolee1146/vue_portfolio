<script setup>
import { skills } from '@/data/index';
</script>

<template>
  <div class="skills__wrap" ref="skillsSection">
    <h2 class="skills__title">My Skills</h2>
    <ul class="skills__list">
      <li v-for="skill in skills" :key="skill.name">
        <span class="skills__name">{{ skill.name }}</span>
        <div class="progress" ref="progressBars">
          <div class="progress__bar"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'SkillsContent',
  setup() {
    const skillsSection = ref(null);
    const progressBars = ref([]);

    onMounted(() => {
      gsap.utils.toArray(progressBars.value).forEach((bar, index) => {
        gsap.fromTo(
          bar.querySelector('.progress__bar'),
          { width: 0 },
          {
            width: skills[index].level + '%',
            duration: 2,
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: skillsSection.value,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    return {
      skills,
      progressBars,
      skillsSection,
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/skillsContent.scss';
</style>
