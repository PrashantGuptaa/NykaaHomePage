import React from "react";
import "./components.css";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import Nykaa from ".././images/nykaa.png";
import { Link } from "react-router-dom";
import { fields } from ".././App";

const Header = (props) => {
  let field = React.useContext(fields);


  return (
    <div className="header">
      <img src={Nykaa} height="40px" alt = 'icon'/>
      <div className="cont">
        {field.map((eachfield) => (
          <Link style={{paddingLeft: 13, textDecoration: 'none', color:"black"}} key = {eachfield} to={`/${eachfield}`}>
              
              {eachfield}
            </Link>
        ))}
      </div>
      <div className="headerTools">
        <span>Search</span>
        <Link to="/login" style={{paddingLeft: 13, textDecoration: 'none', color:"black"}}>Sign In</Link>
        <ShoppingBasketOutlinedIcon style = {{marginTop:'-10px'}} />
      </div>
    </div>
  );
};

export default Header;
