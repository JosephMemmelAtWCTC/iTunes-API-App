<script>
// import Song from "@/models/Types/TypesHelper.js";
// import Audiobook from "@/models/Types/TypesHelper.js";
// import Podcast from "@/models/Types/TypesHelper.js";

export default {
  name: "BaseDetails",
  props: {
    item: {
      // https://stackoverflow.com/a/59036151 for different possible types
      // type: [Media.Song, Media.Audiobook],
      type: undefined,
      required: true,
    },
    imageSrc: {
      type: String,
      required: false,
      default: "https://via.placeholder.com/300x300.png?text=No+Image",
    }
  },
  mounted(){
  }
}
</script>

<template>
  <div class="row">
    <div class="col-6">
      <img :src="imageSrc" class="card-img rounded-0" alt="Loading...">
<!--      <img :src="imageSrc" class="card-img rounded-0" :alt="+item.displayTitle+'cover'">-->
    </div>
    <div class="col-6 overflow-hidden">
      <table class="table">
        <tbody>
          <slot>

          </slot>
        </tbody>
      </table>
    </div>
  </div>
  <footer>
    <slot name="footer">
    </slot>
  </footer>

</template>

<style scoped lang="scss">
  @import '@/scss/variables';

  .text-ellipsis{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>