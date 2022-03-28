import api from "./Api";

class ApiModel {
   folder = "";
   api = null;

   constructor() {
      this.api = api;
   }

   get(id, params) {
      return this.api.get(this.folder + "/" + id, params).then(this.getData);
   }

   getData(ret) {
      return ret.data;
   }
}

export default ApiModel;
