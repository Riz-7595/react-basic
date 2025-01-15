import React from 'react'

const Header = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello World!
      </h1>
      <Footer>
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
      {
        o ? 'ABC' : 'XYZ'
      }

    </div>

  )
}

export { Header }
