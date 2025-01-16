import React from "react";

const Footer = (props) => {
  
    console.log('Hello')
  
    const { children, hobby } = props;
  
    const { area:location, permanent } = props.address;
  
    console.log('address', props)
  
      return (
      <div>
        <p>My name is {children}.</p>
        <p>I am { permanent ? '' : 'currently'} a resident of {location}.</p>
        <p>I like {hobby}.</p>
      </div>
    )
  }

  export default Footer