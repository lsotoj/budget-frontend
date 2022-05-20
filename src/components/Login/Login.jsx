import { useState } from 'react';
import '../../styles/Login/Login.css'
import { 
  useNavigate
 } from "react-router-dom";


function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const inputUser = event => {
    setUser(event.target.value)

  };

  const inputPassword = event => {
    setPassword(event.target.value);
  };

  const manageClick = () => {
    if(true) {
      console.log(user)
      console.log(password)
      navigate('/Dashboard');
    }
  }


  return (<>
    <div className='container'>
      <div className="contenedor-formulario">
        <input type="text" placeholder="Usuario" onChange={ inputUser }/>
        <input type="password" placeholder="Contraseña" onChange={ inputPassword}/>
        <button className='button-login' onClick={ manageClick }>Login</button>
      </div>
    </div>
    
  </>);
}

export default Login;
