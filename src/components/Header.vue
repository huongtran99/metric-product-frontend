<template>
  <header class="header">
    <div class="logo">
      <img src="../../public/metric-logo.png" alt="Logo" />
    </div>
    <div class="input-container">
      <b-form-input v-model="search" placeholder="Tìm kiếm sản phẩm ở đây" class="custom-input"></b-form-input>
      <div class="search-icon">
        <b-icon icon="search"></b-icon>
      </div>
    </div>
    <div>
      <b-button variant="light" class="custom-button">
        <b-icon icon="list" class="mr-1"></b-icon>
        <span>DANH MỤC</span>
      </b-button>
      <b-button variant="link" class="custom-button">BLOG</b-button>
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      search: null
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.logo img {
  width: 150px;
  height: auto;
}

.input-container {
  position: relative;
}

.search-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  color: gray;
}

.custom-input {
  width: 450px;
  border: 1px solid #d1d5db;
  border-radius: 20px;
}

.custom-button {
  background: none;
  border: none;
  position: relative;
}

.custom-button {
  color: black;
  transition: color 0.2s;
}

.custom-button:hover,
.custom-button:focus {
  color: orange;
}

</style>