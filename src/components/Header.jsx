import React from 'react'

const Header = () => {
  return (
    <div>
        <div>
            Hello World!
        </div>
        <Footer>
            Rizwan
        </Footer>
    </div>
  )
} 

const Footer = (props) => {
    console.log('Hello')

    const o = false;


    return(
        <div>
            <p>My name is {props.children}.</p>
            {
                o ? 'ABC' : 'XYZ'
            }

        </div>

    )
}

export {Header}
