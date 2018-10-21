import axios from "axios";
axios.defaults.headers.common = {
  "Auth-Token": window.auth_token,
  "Content-Type": "application/json"
};
var resolver;
var data = {
  ready: new Promise((resolve) => {
    resolver = resolve;
  }),
  objects: {},
  user: window.user ? window.user : {},
  modulos: window.modulos ? window.modulos : {},
  url: window.url ? window.url : "",
  storage: {
    get(key, isObject = true) {
      if (isObject) {
        try {
          return JSON.parse(window.localStorage.getItem(window.url + key));
        } catch (error) {
          return undefined;
        }
      }
      return window.localStorage.getItem(window.url + key);
    },
    set(key, value, isObject = true) {
      if (isObject) {
        window.localStorage.setItem(window.url + key, JSON.stringify(value));
      } else {
        window.localStorage.setItem(window.url + key, value);
      }
      return value;
    },
    remote(key, ) {
      var data = window.localStorage.removeItem(window.url + key, value);
    },
    clear() {
      window.localStorage.clear();
    }
  }
}
var methods = {
  createEcho() {
    this.Echo = window.Echo = new Echo({
      key: "807bbfb3ca20f7bb886e",
      authEndpoint: this.url + "broadcasting/auth",
      broadcaster: "socket.io",
      host: window.user.hostEcho,
      auth: {
        headers: {
          "Auth-Token": window.user.token
        }
      }
    });
  },
  async init() {
    data.user = data.storage.get('user');
    data.modulos = data.storage.get('modulos');
    data.roles = data.storage.get('roles');
    if (window.auth_token) {
      var resp = await methods.get("login")
      data.user = data.storage.set('user', resp.data);
      data.modulos = data.storage.set('modulos', resp.data.modulos);
      data.roles = resp.data.roles
      data.roles.collection = methods.mapToCollection(resp.data.roles, "name");
      data.roles = data.storage.set('roles', data.roles);
    }
    resolver(data.user);
  },

  get(uri) {
    return axios.get(data.url + `/api/` + uri);
  },
  post(uri, data) {
    return axios.post(data.url + `/api/` + uri, data);
  },
  put(uri, data) {
    return axios.put(data.url + `/api/` + uri, data);
  },
  delete(uri) {
    return axios.delete(data.url + `/api/` + uri);
  },
  upload(uri, file, filename, key = "image") {
    return new Promise((resolve, reject) => {
      var formData = new FormData();
      var xhr = new XMLHttpRequest();
      xhr.open("POST", data.url + `/api/${uri}`, true);
      xhr.setRequestHeader("X-CSRF-TOKEN", $('meta[name="csrf-token"]').attr("content"));
      formData.append(key, file, filename);
      xhr.onload = () => {
        if (xhr.status == 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr);
        }
      };
      xhr.setRequestHeader("Auth-Token", window.auth_token ? window.auth_token : this.user.token);
      xhr.send(formData);
    })
  },


  load(resource, withs = [], uri = "") {
    return new Promise((resolve, reject) => {
      if (this.objects[resource]) return resolve(this.objects[resource]);
      var adder = "?"
      withs.forEach((res) => {
        adder += `&with[]=${res}`
      })
      axios
        .get(this.url + "/api/" + resource + adder + uri)
        .then((response) => {
          response.data.collection = this.mapToCollection(response.data);
          this.$set(this.objects, resource, response.data);
          resolve(this.objects[resource]);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  successful(resp) {
    console.info(resp.data);
    new PNotify({
      title: "Exito!",
      text: "",
      type: "success",
      delay: 3000
    });
  },
  showError(err) {
    console.error(err);
    new PNotify({
      title: "Error!",
      text: "Entrada Error",
      type: "error",
      delay: 3000
    });
  },
  mapToCollection(array, key = "id") {
    var object = {}
    array.forEach((item) => {
      object[item[key]] = item;
    })
    return object;
  },
}

methods.init();

export default {
  data: () => data,
  methods: methods
}
