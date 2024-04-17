<script>
import Audiobook from "@/models/Types/Audiobook.js";
import BaseDetails from "@/components/Cards/BaseDetails.vue";

export default {
  name: "AudiobookDetails",
  components: {BaseDetails},
  props: {
    item: {
      type: Audiobook,
      required: true,
    }
  },
  mounted(){
    // const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    // const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  }
}
</script>

<template>
  <Base-Details :item="item" :imageSrc="item.artworkUrl100">
    <template #default>
      <tr>
        <td class="text-start">
          <span>By</span>
        </td>
        <td class="text-start">
          <div class="text-ellipsis">
            <a :href="item.artistViewUrl" target="_blank">{{ item.artistName }}</a>
          </div>
        </td>
      </tr>

      <tr>
        <td class="text-start">
          <span>Genre</span>
        </td>
        <td class="text-start">
          {{ item.primaryGenreName }}
        </td>
      </tr>

      <tr>
        <td class="text-start">
          <span>Price</span>
        </td>
        <td class="text-start">
          {{ item.formattedPrice }}
        </td>
      </tr>

    </template>
    <template #footer>
      <!-- Security issue but some use html code in their descriptions -->
      <div class="m-2">
        <div v-html="item.description" class="description">
        </div>
      </div>
      <audio v-if="item.previewUrl" controls class="w-100">
        <source :src="item.previewUrl" type="audio/mp4" />
        Error: Cannot play preview .m4a (mp4) file
      </audio>
    </template>
  </Base-Details>
</template>

<style scoped lang="scss">
  @import '@/scss/variables';

  .description{
    max-height: 6em;
    font-style: italic;
    overflow-y: scroll;
  }

  .text-ellipsis{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>