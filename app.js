const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
      stNumber: 8008,
      stName: "Mockingbird Ln",
      city: "Carlsbad",
      state: "Arizona",
      country: "United States",
    }
  }, 
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    address() {
      return `${this.stNumber} ${this.stName}, ${this.city}, ${this.state}, ${this.country}`
    }
  },
  methods: {
    async getUser() {
      const url = "https://randomuser.me/api/";
      const response = await fetch(url);
      const {results} = await response.json();
      console.table(results[0]);
      const {email, gender, location, name, picture} = results[0];
      this.firstName = name.first;
      this.lastName = name.last;
      this.email = email;
      this.gender = gender;
      this.picture = picture.large;
      this.stNumber = location.street.number;
      this.stName = location.street.name;
      this.city = location.city;
      this.state = location.state;
      this.country = location.country;
    }
  }
});
app.mount("#app");