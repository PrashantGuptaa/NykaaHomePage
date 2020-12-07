import React from 'react'


const HeaderField = (props) => {
   let url = props.history.location.pathname.split("/");
    return (<div style = {{display:"flex", justifyContent:"center"}}>
         <h1>{url[1]}</h1>
         </div> );
}
 
export default HeaderField;