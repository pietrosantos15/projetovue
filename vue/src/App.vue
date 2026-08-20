<script setup>
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import CultureGrid from './components/CultureGrid.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div id="top" class="app-wrapper">
    <TheNavbar />
    <main>
      <HeroSection />
      <CultureGrid />
    </main>
    <TheFooter />
  </div>
</template>

<style>
@import './style.css';

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>