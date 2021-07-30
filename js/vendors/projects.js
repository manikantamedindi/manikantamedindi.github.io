new Vue({
  el: "#app",
  data: {
    projects: [],
  },
  created() {
    axios.get("./data/projects.json").then((response) => {
      this.projects = response.data;
    });
  },
});
