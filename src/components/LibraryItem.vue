<script>

import LibraryCollection from "@/models/LibraryCollection.js";

//TODO: Mover imports into helper
import SongDetails from "@/components/Cards/SongDetails.vue";
import AudiobookDetails from "@/components/Cards/AudiobookDetails.vue";
import PodcastDetails from "@/components/Cards/PodcastDetails.vue";
import MovieDetails from "@/components/Cards/MovieDetails.vue";
import TVEpisodeDetails from "@/components/Cards/TVEpisodeDetails.vue";

export default {
  name: "LibraryItem",
  components: {SongDetails, AudiobookDetails, PodcastDetails, MovieDetails, TVEpisodeDetails},
  data: function() {
    return {
      cardIcon: this.item.icon,
      cardTitle: this.item.displayTitle,
      cardLink: this.item.displayLink,
    };
  },
  props: {
    item: {
      type: Object
    },
    removeItem: {
      type: Function,
    }
  },
  computed: {
    // make dynamic components
    detailsComponent(){
      return this.item.type + 'Details';
    }
  },
}
</script>

<template>
<!--  :class="{'border-warning': !item.isAvailable()}"-->
  <div class="card h-100">
    <div class="card-header">
      <div class="row">
        <div class="col-1">
          <i :title="item.type.charAt(0).toUpperCase()+item.type.slice(1)" :class="this.cardIcon"></i>
        </div>
        <div class="col text-ellipsis">
          <a v-if="this.cardLink" class="card-title" :title="this.cardTitle" target="_blank" :href="this.cardLink">
            {{this.cardTitle}}
          </a>
          <span v-else>
            {{this.cardTitle}}
          </span>
        </div>
      </div>
    </div>
    <div class="card-body">
      <!--                <component :is="typeOfItem" :item="item"></component>-->
      <component :is="detailsComponent" :item="item"></component>
    </div>
    <div class="card-footer d-flex justify-content-end">
      <button class="btn btn-outline-danger" @click="$emit('remove', item)">Remove (emit)</button>
<!--      <button class="btn btn-outline-danger" @click="removeItem">Remove (props)</button>-->
      <button v-if="item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
      <button v-else class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
    </div>
  </div>
</template>

<style scoped>
  .card-body{
    margin: 0;
    --bs-card-spacer-x: 0;
    --bs-card-spacer-y: 0;
  }

  .text-ellipsis{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>