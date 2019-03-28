import Vue from 'vue';
import axios from 'axios';


const AxiosHttp = {
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: 'http://localhost:3000',
    });
  },
};

export default AxiosHttp;
