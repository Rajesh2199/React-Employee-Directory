import React, {Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

      constructor(props){
        super(props)
        this.state = {
          items:[],
        }

      }



componentDidMount() {
  fetch('https://randomuser.me/results=10')
  .then((response)=> response.json())
  .then((response)=> {
    this.setState({
      items:response.results,
      loading:true
    })
  }


  this.render (){
    return (
      <div> Hello </div>
    )
  }
}











// function App() {
//   return (
//     <main className="page bg-blue" id="user">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 bg-blue">
//               <div className="container">
//                 <div>AddUser </div>
//                 <div>SearchUser </div>
//                 <div> ListUsers</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//   );
// }

export default App;
