<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <div class="heading">My custom sidebar top content</div>
    </template>
  </Layout>
</template>
<style scoped>
.heading {
    display: flex;
    justify-content: center;
    padding: 16px 0px;
    font-size: 24px;
}
</style>