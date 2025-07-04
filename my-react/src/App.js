// // import logo from './logo.svg';
// import './App.css';
// import ContactForm from './Components/ContactForm';




// function App() {
//   return (
//     <div className="App">
//       <ContactForm />
//     </div>
//   );
// }

// export default App;

// // import React, { useContext } from 'react';
// // import AuthProvider, { AuthContext } from './Components/AuthContext';
// // import Login from './Components/Login';
// // import Home from './Components/Home';

// // function App() {
// //   const { user } = useContext(AuthContext);

// //   return (
// //     <div className="App">
// //       {user ? <Home /> : <Login />}
// //     </div>
// //   );
// // }

// // // Wrap App in AuthProvider so context is available
// // const AppWrapper = () => (
// //   <AuthProvider>
// //     <App />
// //   </AuthProvider>
// // );

// // export default AppWrapper;


import React, { useContext } from 'react';
import './App.css';
import Home from './LAB/Home';
import Login from './LAB/Login';
import { AuthContext } from './LAB/AuthContext';
import AuthProvider from './LAB/AuthContext';

function App(){
  const { user } = useContext(AuthContext);
  return(
    <div className="App">
      {user? <Home />: <Login />}
    </div>
  )
}

const AppWrapper = () =>{
  return(
  <AuthProvider>
    <App />
  </AuthProvider>
  )
}

export default AppWrapper;