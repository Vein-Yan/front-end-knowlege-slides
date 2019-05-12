<template>
  <div id="mySlideshow">
    <div class="eg-slideshow">
      <slide :steps="2" enter="bounceInLeft" leave="bounceOutLeft">
        <catalog v-if="step === 1"></catalog>
        <catalog v-if="step === 2" :index="0"></catalog>
      </slide>
      <slide :steps="2">
        <h2>Hi there !</h2>
        <eg-transition enter="bounceInLeft" leave="bounceOutLeft">
          <p v-if="step >= 2">I am slide 2</p>
        </eg-transition>
      </slide>
    </div>
  </div>
</template>

<script>
import { Slideshow } from 'eagle.js'
import Catalog from './slides/Catalog.vue'
export default {
  mixins: [Slideshow],
  components: { Catalog },
  data() {
    return {}
  },
  watch: {
    $route: 'updateSlides',
    step: 'updateURL',
    currentSlideIndex: 'updateURL',
  },
  methods: {
    updateSlides: function() {
      this.currentSlideIndex = +this.$route.params.slide
      this.$nextTick(() => {
        this.step = +this.$route.params.step
      })
    },
    updateURL: function() {
      this.$router.push(`/${this.currentSlideIndex}/${this.step}`)
    },
  },
}
</script>

<style lang="stylus">
#mySlideshow {
  .eg-slideshow {
    background-position: center;
    background-attachment: fixed;

    p {
      font-size: 1.2em;
    }

    .eg-slide {
      h1, h2, h3, h4, h5, p, li {
        font-family: 'microsoft yahei';
      }
    }

    .eg-modal {
      background-color: rgba(0, 0, 0, 0.8);
      color: white;

      h1, h2, h3, h4 {
        font-weight: bold;
      }
    }
  }
}
</style>
