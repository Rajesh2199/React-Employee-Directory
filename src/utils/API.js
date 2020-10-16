
import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API
export default {
  fetchUsers: function() {
    return axios
      .get("https://randomuser.me/api/?results=30")
      .then(res => {
        console.log(res)
        const users = res.data.results;
        return users.map(user => {
          return {
            loginFirst: user.name.first,
            loginLast:user.name.last,
            image: user.picture.thumbnail,
            email: user.email,
          };
        });
      });
  }
};

// class Api extends Component {

//       constructor(props){
//         super(props)
//         this.state = {
//           items:[],
//           loading:false
//         }

//       }



// componentDidMount() {
//   fetch('https://randomuser.me/api/?results=5')
//   .then((response)=> response.json())
//   .then((response)=> {
//     this.setState({
//       items:response.results,
//       loading:true
//     })
//   })
//   }


//   render(){
    
//     var {items, loading} = this.state
//     if(!loading){
//       return (
        
//         <div>Users are loading..........</div>
//       )
//     }

//     else {
//     return (
//        <div className = "App">
//           {items.map(items => (
//         <img src ={items.picture.medium} alt = "Name" />
//       ))}
//        </div> 
//     )};
//   }
// }



//export default Api;

