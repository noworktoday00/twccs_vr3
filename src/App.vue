<template>
  <div class="bg-prim-back">
    <navbarView/>
    <router-view></router-view>
    <footerView/>
  </div>
</template>

<style lang="scss">
@import "@/assets/all.scss";
.bg-cloud {
  background-color: #fff;
}
</style>

<script setup>
import navbarView from '@/components/NavbarView.vue';
import footerView from '@/components/FooterView.vue';
</script>
