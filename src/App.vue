<template>
  <div>
    <div class="header-container">
      <Header/>
    </div>
    <hr/>
    <div class="main-container">
      <router-view/>
    </div>
    <div class="footer-container">
      <hr/>
      <Footer/>
    </div>
  </div>
</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {
    Footer,
    Header

  }
}
</script>

<style scoped>
.header-container {
  margin-left: 200px;
  margin-right: 200px;
}

.main-container {
  margin-left: 200px;
  margin-right: 200px;
}

.footer-container {
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
