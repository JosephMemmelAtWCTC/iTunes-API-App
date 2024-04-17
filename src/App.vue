<script>
import {defineComponent} from "vue";
// @ = src
import LibraryItemList from "./components/LibraryItemList.vue";
import LibraryCollection from "@/models/LibraryCollection.js";
import LibraryCollectionFactory from "@/models/LibraryCollectionFactory.js";

export default defineComponent({
  components: {LibraryItemList},
  data: function(){
    return {
      searchTerm: "Curious George",
      searchResults: new LibraryCollection(),
    }
  },
  methods: {
      searchBooks() {
      // prepare and perform search
      if(this.searchTerm){
        // clear results
        this.searchResults = new LibraryCollection();
        // display message
        this.searching = true;

        // build request arguments
        const url = 'https://itunes.apple.com/search';
        const params = {
          term: this.searchTerm,
          limit: 48,
        }
        axios.get(url, {params}) // Same as {params: params} as variable is the same as the name shortcut
            .then(response => {
              console.log('api response', response);

              // Make sure we have results
              if(response.data?.results?.length > 0){
                // This is how it would look without models
                // this.searchResults = response.data.items;

                //Using a collection model
                // this.searchResults = new PublicationCollection(response.data.items);

                // Using a factory
                this.searchResults = LibraryCollectionFactory.createFromGoogleBooks(response.data.results);
                console.log("searchResults here = ",this.searchResults.items)
              }
            })
            .catch(error => {
              console.log('API SEARCH ERROR', error);
            })
            .finally(() => {
              // Remove loading message
              this.searching = false;

              // Show the "store page"
              // this.display('store');
            })

      }
    },
  },
  created: function(){
    this.searchBooks();
  }
})
</script>

<template>
  <nav class="navbar bg-dark">
    <div class="container-fluid">
<!--      <div class="row w-100 align-items-center">-->
        <div class="col-auto mx-auto my-2">
          <img src="./assets/itunes_logo.png" alt="iTunes Logo" height="80" width="80">
          <span class="navbar-brand text-light"><i class="ms-2"></i>iTunes API App</span>
        </div>
<!--        <div class="col-auto">-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </nav>

<!--  <search-form>-->
<!--  </search-form>-->

  <div class="container">
    <form id="apiCallForm" class="row g-3 mx-4 mt-2" @submit.prevent="searchBooks()">
      <label class="form-label col-11">Search
        <input type="text" class="form-control" placeholder="" v-model="this.searchTerm">
      </label>
      <div class="col-1">
        <button type="submit" class="btn btn-primary w-100 h-100">
          <i class="bi bi-search"></i>
        </button>
      </div>

    </form>
  </div>

  <div class="container-fluid mt-3">
    <library-item-list v-if="this.searchResults.items.length > 0" :collection="this.searchResults.items">

    </library-item-list>
  </div>
</template>

<style scoped>
  .navbar-brand{
    font-size: 2em;
  }
</style>
