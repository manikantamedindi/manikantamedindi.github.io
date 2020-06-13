new Vue({
  el: '#app',
  data: {
    searchString: '',
    tools: [],
    allTools: [],
    sort: '',
    name: '',
    last: '',
    index: 0,
    grade: 0,
    arr: [],
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
  },
  methods: {
    onEdit(emp) {
      this.employeesFormData = emp;
      this.dialogVisible = true;
    },
    onDelete(emp) {
      let selectedId = emp.id;
      let index = this.employees.findIndex(emp => emp.id == selectedId);
      this.employees.splice(index, 1);
    },
    submitForm() {
      if (this.employeesFormData.id) {
        this.updateEmployeeData();
      } else {
        this.addEmployeeData();
      }
    },
    updateEmployeeData() {
      let selectedId = this.employeesFormData.id;
      let index = this.employees.findIndex(emp => emp.id == selectedId);
      this.employees[index] = this.employeesFormData;
      this.dialogVisible = false;
    },
    editEmployee(emp) {
      this.dialogVisible = true;
      this.employeesFormData = emp;
    },
    deleteEmployee(index) {
      this.employees.splice(index, 1);
    },
    addEmployeeData() {
      let newEmployee = this.employeesFormData;
      newEmployee.id = parseInt(this.employees.pop().id) + 1 + "";
      this.employees.push(this.employeesFormData);
      this.dialogVisible = false;
    },
    onAdd() {
      this.employeesFormData = {
        employee_name: "",
        employee_salary: "",
        employee_age: "",
        profile_image: ""
      };
      this.dialogVisible = true;
    },
    add: function (e) {
      this.arr.push({
        first: this.name,
        lastn: this.last,
        index: this.index,
        grade: this.grade
      });
      console.log(1);
    },
    saveFile: function () {
      const data = JSON.stringify(this.arr)
      window.localStorage.setItem('arr', data);
      console.log(JSON.parse(window.localStorage.getItem('arr')))
    }
  }
});