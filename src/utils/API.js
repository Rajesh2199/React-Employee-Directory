import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchUsers: function() {
    return axios
      .get("https://https://randomuser.me/")
      .then(res => {
        const users = res.data;
        console.log(data)
        return users.map(user => {
          return {
            login: user.name,
            image: user.image,
            
          };
        });
      });
  }
};
