<template>
  <!-- Created design on landing page we can make it as a component and resue this -->
  <div class="container-fluid">
    <div class="">
      <h3>API Catalog</h3>
    </div>
    <hr>
    <div class="row">
      <div class="col-sm-5 ">
          Sort by : 
          <select v-model="selectOrder" v-on:change="sortCatalog()">
              <option value="" selected>Please select</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
          </select>
      </div>
    </div>
    <br>
    <div class="container"> 
      <div class="card-deck my-3">
        <catalog v-for="catalog in apiCatalogList" 
                v-bind:key="catalog.name" 
                :card="catalog">
        </catalog>
      </div>
    </div>
  </div>

</template>

<script>

import Catalog from '@/components/Catalog.vue';
var _ = require('lodash');

export default {
  name: 'home',
  components: {
    Catalog
  },
  data() {
    return {
      selectOrder:'',
      apiCatalogList : [
        {name:'product', data:null},
        {name:'branch', data:null},
        {name:'atmLocator', data:null}] 
    };
  },
  methods: {
    /**
     * method used to sort the catalogs
     */
    sortCatalog() {
      if(this.selectOrder) {
        this.apiCatalogList = _.orderBy(this.apiCatalogList, 'name', this.selectOrder); 
      }
    }
  }
}
</script>

