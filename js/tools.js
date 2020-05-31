new Vue({
  el: '#app',
  data: {
    searchString: '',
    tools: [],
    allTools: [],
    sort: '',
  },
  created() {
    axios
      .get("../data/tools.json")
      .then(response => {
        this.tools = response.data;
        var getAllTools = response.data.map(o => o.list).flat();
        this.allTools = getAllTools;

      });
  },
  computed: {
    filteredList: function () {
      const searchString = this.searchString.toLowerCase();
      return this.tools.filter(item => item.name.toLowerCase().includes(searchString));
    }
  }
});