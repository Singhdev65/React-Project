 import './App.css';
 import Login from './components/Login';
 import Register from './components/Register';

 var isRegistered = true;
 var isLoggedIn = false;

function App() {

  const rederConditionally = () => {
    if(isRegistered === true) {
          if (isLoggedIn === true) {
            const name = prompt("Enter your Name")
            return <h1>Hello {name}</h1>;
          }else{
            return <Login />
          }
    }else{
       return(
          <Register />
       )
    }
}

  return <div className="container">{rederConditionally()}</div>;
}

export default App;
