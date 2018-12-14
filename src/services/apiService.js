import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { REST_API } from "@/configs/confg";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = REST_API;
  },

  get(resource) {
    console.log(`url : ${resource}`);
    return Vue.axios.get(`${resource}`).catch(error => {
      throw new Error(`Service ${error}`);
    });
  }
};

export default ApiService;