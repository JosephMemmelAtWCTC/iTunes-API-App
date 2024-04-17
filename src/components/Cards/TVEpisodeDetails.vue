<script>
import TVEpisode from "@/models/Types/TVEpisode.js";
import BaseDetails from "@/components/Cards/BaseDetails.vue";

export default {
  name: "PodcastDetails",
  components: {BaseDetails},
  props: {
    item: {
      type: TVEpisode,
      required: true,
    }
  },
}
</script>

<template>
  <Base-Details :item="item" :imageSrc="item.artworkUrl100">
    <template #default>
      <tr>
        <td class="text-start">
          <span>From</span>
        </td>
        <td class="text-start">
          <div class="text-ellipsis">
            <a :href="item.collectionViewUrl" target="_blank">
              <span>{{ item.collectionName }}</span>
            </a>
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
          <span>Length</span>
        </td>
        <td class="text-start">
            {{ item.formattedLength }}
        </td>
      </tr>

      <tr>
        <td class="text-start">
          <span>Buy</span>
        </td>
        <td class="text-start">
          {{ item.formattedBuyPrice }}
        </td>
      </tr>

      <tr v-if="item.discCount > 1">
        <td class="text-start">
          <span>Disks</span>
        </td>
        <td class="text-start">
          {{ item.diskCount }}
        </td>
      </tr>

    </template>
    <template #footer>
      <!-- Security issue but some use html code in their descriptions -->
      <div class="m-2">
        <div v-html="item.shortDescription" class="description">
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