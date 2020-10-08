import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchUsers: function() {
    return axios
      .get("https://randomuser.me/api")
      .then(res => {
        const users = res.data;
        console.log("hello")
        return users.map(user => {
          return {
            username: users.name,
            image: users.image,
            
          };
        });
      });
  }
};
