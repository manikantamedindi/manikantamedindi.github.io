new Vue({
  el: '#app',
  data: {
    tools: [],
  },
  created() {
    axios
      .get("../data/tools.json")
      .then(response => {
        this.tools = response.data;
      });
  }
});