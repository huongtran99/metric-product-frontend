<template>
  <b-breadcrumb class="custom-breadcrumb" :items="items">
    <b-breadcrumb-item href="#home">
      <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
    </b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Breadcrumb",
  data() {
    return {
      items: [
        {
          text: 'Máy tính & Laptop',
          href: '#',
          active: true
        },
        {
          text: 'Phụ Kiện Máy Tính',
          href: '#',
          active: true
        },
        {
          text: 'Bộ chia cổng USB & Đọc thẻ nhớ',
          active: true
        }
      ]
    }
  },
  created() {

  }
}
</script>

<style scoped>
.custom-breadcrumb {
  display: flex;
  align-items: center;
  background-color: #ffffff;
}

.custom-breadcrumb li:not(:first-child)::before {
  content: ">";
  margin: 0 8px;
  color: #888;
}

.custom-breadcrumb li:first-child a {
  display: flex;
  align-items: center;
  color: #888;
  text-decoration: none;
}

.custom-breadcrumb li:first-child a .icon {
  margin-right: 5px;
  color: #888;
}
</style>