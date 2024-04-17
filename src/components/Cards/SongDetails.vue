<script>
import Song from "@/models/Types/Song.js";
import BaseDetails from "@/components/Cards/BaseDetails.vue";

export default {
  name: "SongDetails",
  components: {BaseDetails},
  props: {
    item: {
      type: Song,
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
          <span>From</span>
        </td>
        <td class="text-start">
<!--              <span class="text-overflow-ellipsis">-->
          <div class="text-ellipsis">
            <p>
              <a :href="item.collectionViewUrl"
                 data-bs-toggle="tooltip"
                 data-bs-title="Default tooltip"
                 target="_blank">
                {{ item.collectionName }}
              </a>
<!--                <p class="muted">Placeholder text to demonstrate some <a href="#" data-bs-toggle="tooltip" data-bs-title="Default tooltip">inline links</a> with tooltips. This is now just filler, no killer. Content placed here just to mimic the presence of <a href="#" data-bs-toggle="tooltip" data-bs-title="Another tooltip">real text</a>. And all that just to give you an idea of how tooltips would look when used in real-world situations. So hopefully you've now seen how <a href="#" data-bs-toggle="tooltip" data-bs-title="Another one here too">these tooltips on links</a> can work in practice, once you use them on <a href="#" data-bs-toggle="tooltip" data-bs-title="The last tip!">your own</a> site or project.</p>-->
            </p>
          </div>
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
          <span>Price</span>
        </td>
        <td class="text-start">
          {{ item.formattedPrice }}
        </td>
      </tr>

    </template>
    <template #footer>
      <audio v-if="item.previewUrl" controls class="w-100">
        <source :src="item.previewUrl" type="audio/mp4" />
        Error: Cannot play preview .m4a (mp4) file
      </audio>
    </template>
  </Base-Details>
</template>

<style scoped lang="scss">
  @import '@/scss/variables';

  .text-ellipsis{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>