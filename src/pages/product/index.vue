<template>
  <div>
    <breadcrumb class="header-container" />
    <div v-for="product in products" :key="product.id" class="product-item">
      <router-link :to="{ name: 'ProductDetail', params: { id: product.id }}">
        <img :src="product.image" alt="Product Image" class="product-image" />
        <div class="product-details">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue";
import api from "@/service/call-api";

export default {
  name: "ProductPage",
  components: {
    Breadcrumb
  },
  data() {
    return {
      products: [],
      page: 0,
      search: null
    }
  },
  methods: {
    async getProducts() {
      this.products = await api.call('GET', `/products`);
    },
  },
  created() {
    this.getProducts();
  }
}
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}

.product-item {
  border: 1px solid #ccc;
  padding: 10px;
}

.product-image {
  width: 100%;
  height: auto;
}

.product-details {
  text-align: center;
}
</style>