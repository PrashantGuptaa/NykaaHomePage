import React from 'react';

const ShareCode = (props) => {
    let {images, head} = props;
    return ( 
        <>
        <h2 className="heading">{head}</h2>
        <div className="general">
          {images.map((image, index) => (
            <img key={index} src={image} alt="img" className='each'/>
          ))}
        </div>
      </>
     );
}
 
export default ShareCode;