<script setup>
import { careerList } from '@/data/index';
</script>

<template>
  <div class="profile">
    <div class="profile__title">
      <h4>- 안주하지 않고 새로운 것에 도전하겠습니다 -</h4>
    </div>
    <div class="profile__wrap">
      <div class="profile__left">
        <div class="profile__thumb">
          <img src="/src/assets/img/profile.png" />
        </div>
      </div>
      <div class="profile__right">
        <div class="profile__box"></div>

        <div class="profile__career">
          <div class="profile__career_box" v-for="career in careerList" :key="career">
            <p class="profile__career_name">{{ career.companyName }}<b>({{ career.status }})</b> <em> date: {{ career.employingDate }}</em></p>
            <div class="profile__desc">
              <b>주요 업무: </b>
              <p class="profile__career_txt" v-for="work in career.work" :key="work"><i></i>{{ work }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profileContent',
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/profileContent.scss';
</style>
