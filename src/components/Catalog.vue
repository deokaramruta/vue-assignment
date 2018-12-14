<template>
<div>    
    <div class="card h-100" style="width: 20rem">
        <img class="card-img-top img-fluid" src="//via.placeholder.com/160x100" alt="card.img.text">
        <!-- {{card}} -->

        <div class="card-body">
          <h5 class="card-title">{{card.data.title}}</h5>
          
          <div v-if="(card.data.description instanceof Array)">
          <ul class="" v-for="desc in card.data.description" v-bind:key="desc"> 
              <li class="">{{desc}}</li>
          </ul>
          </div>
          <p class="card-text" v-if="!(card.data.description instanceof Array)"> {{card.data.description}} </p>
        </div>

        <div class="card-footer">
          <button type="button" class="btn btn-primary " v-if="card.data.available">View</button>
          <button type="button" class="btn btn-secondary" v-else>Coming Soon</button>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
  name: 'catalog',
  data() {
    return {
    };
  },

  // component parameters
  props: {
    card: {
      type: Object
    }
  },

  /**
   * When component gets created it will call this method
   */
  created(){
    if(!this.card.data) {
      this.getApiData(); 
    }
  },

  methods: {   

    /**
     * method used to get the API data either using service or calling http get method
     */
    getApiData() {

      // give a Service call but for this example using static data to render it on UI

      /* catalogService.getData(this.card.name).then(result => {
          //console.log('RESULT ==> '+JSON.stringify(result.data));
          this.card.data = result.data;
      }, error => {
          console.error(error);
          this.card.data = {};
      }); */

      // using static data, based on component it will return the data while loading the component.
      switch(this.card.name) {
        case 'product' : 
          this.card.data = {
            img:'//via.placeholder.com/160x100',
            title: 'Product Details',
            description : "Some quick example text to build on the card title and make up the bulk of the card's content.",
            available : true
          }
          break;
        case 'branch' :
          this.card.data = {
            img:{ src :'//via.placeholder.com/160x100', text:'Branch Details'},
            title: 'Branch Details',
            description : ['Bullet Point 1','Bullet Point 2','Bullet Point 3'],
            available : true
          }
          break;
        case 'atmLocator' :
          this.card.data = {
            img:'//via.placeholder.com/160x100',
            title: 'ATM Locator',
            description : ['Bullet Point 1','Bullet Point 2'],
            available : false
          }
          break;
      }
    }
  },

};
</script>

// style specific catalpog component
<style scoped>
.btn-primary {
  color: #fff;
  width: 80px !important;
  background-color: #007bff;
  border-radius: 55px;
  border: 2px solid rgba(0, 70, 147, 0.75);
}
.btn-secondary {
  color: #fff; 
  background-color: #868e96;
  border-radius: 35px;
  border: 1px solid rgba(134, 142, 150, 0.75);
}
</style>
