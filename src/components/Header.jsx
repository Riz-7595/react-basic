import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello World!
      </h1>
      <Footer address={props.address} hobby={'coding'}>
        Rizwan
      </Footer>
    </div>
  )
}

const Footer = (props) => {
  console.log('Hello')

  // const address  =  props.address;
  // const children = props.children;
  // const hobby = props.hobby;

  const { children, hobby } = props;

  const { city:myCity, permanent } = props.address;

  console.log('address', props)

    return (
    <div>
      <p>My name is {children}.</p>
      <p>I { permanent ? '' : 'temporarily'} live in {myCity}.</p>
      <p>I like {hobby}.</p>
    </div>

  )
}

export { Header }
