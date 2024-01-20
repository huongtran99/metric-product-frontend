<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 Metric Product.</p>
      <nav class="footer-navigation">
        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Shipping & Returns</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"
}
</script>

<style scoped>
.footer {
  margin-left: 200px;
  margin-right: 200px;
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-navigation ul {
  display: flex;
  list-style: none;
}

.footer-navigation li {
  margin-right: 10px;
}

.footer-navigation a {
  text-decoration: none;
  color: #333;
}
</style>