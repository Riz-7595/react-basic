import React from "react";
import ArrayMethods from "./ArrayMethods";

const Body = (props) => {
  
    console.log('Hello')
  
    const { children } = props;
  
    const { area:location, permanent } = props.address;
  
    console.log('address', props)
  
      return (
      <div>
        <p>My name is {children}.</p>
        <p>I am { permanent ? '' : 'currently'} a resident of {location}.</p>
        <ArrayMethods/>
      </div>
    )
  }

  export default Body