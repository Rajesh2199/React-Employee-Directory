import React, {Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

      state= {
        items : []
      }



componentDidMount() {
  fetch('https://randomuser.me/results=10')
  .then()
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
