import React from 'react';
import { fields } from ".././App";
import './components.css';

const Categories = () => {
    const allCategories = React.useContext(fields);
    return (  
        <>
        <h2 className='heading'>Top Categories</h2>
        <div className='general'>
        {allCategories.map((category, index) => (
            <div className='categorycard' key = {index} >{category}</div>
        ))}
        </div>
        </>
    );
}
 
export default Categories;