<template>
  <div>
    <breadcrumb class="header-container" />
    <div class="product-page">
      <div class="image-gallery">
        <div class="main-image-container">
          <img :src="mainImage" class="main-image" @click="isOpen = true" alt="mainImage">
        </div>
        <div class="sub-images-container" ref="subImagesContainer">
          <button class="sub-images-button" @click="previousImage">&#8249;</button>
          <div class="sub-images-wrapper">
            <div class="sub-images-list">
              <img v-for="(image, index) in subImages" :key="index" :src="image" @mouseover="changeMainImage(image, index)" :class="{ 'sub-image': true, 'selected': isCurrentImage(image) }" @click="openSlideshow(index)" alt="subImage">
            </div>
          </div>
          <button class="sub-images-button" @click="nextImage">&#8250;</button>
        </div>
        <vue-gallery-slideshow ref="slideshow" v-if="isOpen" :images="computedSlideshowImages" :index="slideshowIndex" @close="isOpen = false"></vue-gallery-slideshow>
      </div>
      <div class="product-info">
        <h2>{{ product.name }}</h2>
        <p class="product-price">{{ product.price }}</p>
      </div>
    </div>
    <b-tabs class="mt-4" content-class="mt-3" pills card>
      <b-tab v-for="(tab, index) in tabs" :key="index" :title="tab.title" :active="tab.isActive">
        <span class="p-4">{{ tab.content }}</span>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb.vue";
import VueGallerySlideshow from 'vue-gallery-slideshow';
import image1 from "@/assets/image-1.jpg";
import image2 from "@/assets/image-2.jpg";
import image3 from "@/assets/image-3.jpg";
import image4 from "@/assets/image-4.jpg";
import image5 from "@/assets/image-5.jpg";
import image6 from "@/assets/image-6.jpg";
import api from "@/service/call-api";

export default {
  name: "ProductDetail",
  components: {
    Breadcrumb,
    VueGallerySlideshow
  },
  computed: {
    computedSlideshowImages() {
      return this.subImages;
    },
    isCurrentImage() {
      return (image) => image === this.mainImage;
    }
  },
  data() {
    return {
      mainImage: image1,
      subImages: [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
      ],
      slideshowIndex: 0,
      isOpen: false,
      product: null,
      tabs: [
        {
          title: "So sánh giá",
          content: "Nội dung So sánh giá",
          isActive: true
        },
        {
          title: "Lịch sử giá",
          content: "Nội dung Lịch sử giá",
          isActive: false
        },
        {
          title: "Mô tả sản phẩm",
          content: "Nội dung Mô tả sản phẩm",
          isActive: false
        },
        {
          title: "Đánh giá từ người mua",
          content: "Nội dung Đánh giá từ người mua",
          isActive: false
        }
      ]
    };
  },
  methods: {
    changeMainImage(image, index) {
      this.slideshowIndex = index;
      this.mainImage = image;
    },
    openSlideshow(index = 0) {
      this.slideshowIndex = index;
      this.isOpen = true;
    },
    previousImage() {
      if (this.slideshowIndex > 0) {
        this.slideshowIndex--;
        this.mainImage = this.subImages[this.slideshowIndex];
      }
    },
    nextImage() {
      if (this.slideshowIndex < this.subImages.length - 1) {
        this.slideshowIndex++;
        this.mainImage = this.subImages[this.slideshowIndex];
      } else {
        this.slideshowIndex = 0;
        this.mainImage = this.subImages[this.slideshowIndex];
      }
    },
    async getProductDetail() {
      const productId = this.$route.params.id;
      this.product = await api.call('GET', `/products/${productId}`);
    },
  },
  mounted() {
    const subImagesWrapper = this.$refs.subImagesContainer;
    const scrollWidth = subImagesWrapper.scrollWidth;
    const wrapperWidth = subImagesWrapper.offsetWidth;

    subImagesWrapper.addEventListener('scroll', () => {
      if (subImagesWrapper.scrollLeft === 0) {
        subImagesWrapper.scrollLeft = scrollWidth;
      } else if (subImagesWrapper.scrollLeft === scrollWidth - wrapperWidth) {
        subImagesWrapper.scrollLeft = 0;
      }
    });
  },
  created() {
    this.isOpen = false;
    this.getProductDetail();
  }
}
</script>

<style scoped>
.product-page {
  display: flex;
  align-content: space-between;
  flex-direction: row;
}

.image-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.main-image-container {
  width: 300px;
  height: 300px;
  margin-bottom: 10px;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sub-images-container {
  display: flex;
  align-items: center;
  overflow: auto;
}

.sub-images-wrapper {
  display: flex;
}

.sub-images-button {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 20px;
}

.sub-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
}

.product-info {
  flex: 1;
  margin-left: 64px;
}

.product-info h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.product-info .product-price {
  font-size: 18px;
  color: #888;
}

.sub-image.selected {
  border: 2px solid blue;
}

.sub-images-container {
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 10px;
}

.sub-images-wrapper {
  display: flex;
  width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.sub-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
  scroll-snap-align: start;
}

.b-nav-pills .nav-link.active {
  border-bottom: 2px solid blue;
}
</style>