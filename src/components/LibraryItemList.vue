<script>
import LibraryItem from "@/components/LibraryItem.vue";
import LibraryCollection from "@/models/LibraryCollection.js";

export default {
  name: "LibraryItemList",
  components: {LibraryItem},
  data() {
    return {
      // searchResults2: new LibraryCollection()
      // library: new LibraryCollection()
          // .add(new Book('Clean Code', 600))
          // .add(new Movie('John Wick', 141))
          // .add(new Movie('Lord of the Rings', 180))
          // .add(new Book('1000 Miles Home', 345)),
    }
  },
  props: {
    collection: {
      // type: LibraryCollection,
      type: Array,
      // type: Object,
      required: true,
    }
  },
  created: function () {
    console.log("collection2 = ", this.collection2);
  },
  computed: {
    collection2(){
      return new LibraryCollection(this.collection);
      // return Object.assign(new LibraryCollection(), this.collection);
    }
  }
}
</script>

<!--TODO: Get working directly with collection-->
<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <!--    <div class="col" v-for="item in [{e:1},{e:2},{e:2}]">-->
    <div class="col" v-for="item in collection2.items" :key="item.id">
      <library-item :item="item" @remove="item => collection2.remove(item)" :remove-item="() => collection2.remove(item)"></library-item>
    </div>
  </div>
</template>

<style scoped>
</style>