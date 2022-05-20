import React from "react";
import '../../../styles/Dashboard/Header.css'
import { 
  useNavigate
 } from "react-router-dom";

function Header () {
  let navigate = useNavigate();

  let manageClick = (e) => {
    const option = e.target.innerHTML;

    switch (option) {
      case 'Currencies':
        navigate('/currencies')
        break;
      case 'History':
        navigate('/history');
        break;
      case 'Moves':
        navigate('/moves');
        break;
      case 'Transfers':
        navigate('/transfers');
        break;
      case 'Accounts':
        navigate('/accounts');
        break;
      case 'Home':
        navigate('/Dashboard');
        break;
      default:
        navigate('/Dashboard');
    }
  }
    return(
      <div className="header-container">
        <button className="button-header" onClick={ manageClick } >Home</button>
        <button className="button-header" onClick={ manageClick } >Currencies</button>
        <button className="button-header"onClick={ manageClick } >History</button>
        <button className="button-header" onClick={ manageClick } >Moves</button>
        <button className="button-header" onClick={ manageClick } >Transfers</button>
        <button className="button-header" onClick={ manageClick } >Accounts</button>
      </div>     
    );
}

export default Header;