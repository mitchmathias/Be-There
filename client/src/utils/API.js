import axios from 'axios';


export default {
  getEvents: function () {
    return axios.get("/api/events");
  }
};