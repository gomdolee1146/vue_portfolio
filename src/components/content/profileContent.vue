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
        <div class="profile__thumb"></div>
      </div>
      <div class="profile__right">
        <div class="profile__career">
          <div class="profile__career_box" v-for="career in careerList" :key="career">
            <p>{{ career.companyName }}<strong>({{ career.status }})</strong> <em> date</em></p>
            <div class="profile_desc">
              <strong>주요업무 :</strong>
              <p></p>
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
