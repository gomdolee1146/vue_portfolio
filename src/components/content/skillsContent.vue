<template>
  <div class="skills__wrap" ref="skillsSection">
    <h2 class="skills__title">My Skills</h2>
    <ul class="skills__list">
      <li v-for="skill in skills" :key="skill.name">
        <span class="skills__name">{{ skill.name }}</span>
        <div class="progress" ref="progressBars">
          <div class="progress__bar" :style="{ width: `${skill.level}%` }"></div>
        </div>
        <span class="progress__num">{{ skill.level }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '@/data/index';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'SkillsContent',
  setup() {
    const skillsSection = ref(null);
    const progressBars = ref([]);

    onMounted(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsSection.value,
          start: 'top 50%',
          toggleActions: 'play none none none',
        },
      });

      progressBars.value.forEach((bar, index) => {
        tl.fromTo(
          bar.querySelector('.progress'),
          { width: 0 },
          {
            width: skills[index].level + '%',
            duration: 1,
            ease: 'power1.inOut',
            delay: index * 0.2,
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
