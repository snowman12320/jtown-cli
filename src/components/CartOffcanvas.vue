<template>
<!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> -->
<div ref="offcanvas" class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
</template>

<script>
import offcanvasMixin from '@/mixins/offcanvasMixin';
export default {
  props: {
    product: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  watch: {
  },
  data () {
    return {
      offcanvas: {}
    };
  },
  created () {
    // this.$refs.offcanvas.show();
  },
  methods: {
  },
  //* 混用獨立的功能
  mixins: [offcanvasMixin]
};
</script>
