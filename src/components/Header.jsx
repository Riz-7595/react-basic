import React from 'react'

const Header = (props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello World!
      </h1>
      <Footer city={props.city}>
        Rizwan
      </Footer>
    </div>
  )
}

const Footer = (props) => {
  console.log('Hello')

  const o = false;


    return (
    <div>
      <p>My name is {props.children}.</p>
      <p>I live in {props.city}.</p>
      {
        o ? 'ABC' : 'XYZ'
      }

    </div>

  )
}

export { Header }
