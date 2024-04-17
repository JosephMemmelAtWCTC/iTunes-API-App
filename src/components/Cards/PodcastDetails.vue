<script>
import Podcast from "@/models/Types/Podcast.js";
import BaseDetails from "@/components/Cards/BaseDetails.vue";

export default {
  name: "PodcastDetails",
  components: {BaseDetails},
  props: {
    item: {
      type: Podcast,
      required: true,
    }
  },
  // created(){
  //   // Get the highest quality image
  //   this.higestQualityImageSrc = this.item.artworkUrl100;
  //   if(this.item.artworkUrl600){
  //     this.higestQualityImageSrc = this.item.artworkUrl600;
  //   }
  // }
}
</script>

<template>
<!--  imageSrc="{{item.highestQualityImage}}"-->
  <Base-Details :item="item" :imageSrc="item.highestQualityImage">
    <template #default>
      <tr>
        <td class="text-start">
          <span>By</span>
        </td>
        <td class="text-start">
          <div class="text-ellipsis">
            <p>{{ item.artistName }}</p>
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
          <span>Episodes</span>
        </td>
        <td class="text-start">
          <a :href="item.collectionViewUrl" target="_blank">
            {{ item.formattedTrackNumber }}
          </a>
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

<!--  <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" :src="'https://embed.podcasts.apple.com/us/podcast/id'+item.id"></iframe>-->
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