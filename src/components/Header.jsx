import React from 'react'
import Body from './Body'

const Header = (props) => {
  const { className } = props
  const { firstName, lastName } = props.student;
  return (
    <div>
      <h1 className={`text-3xl font-bold underline p-2 bg-blue-100 flex justify-center items-center ${className}`}>
        Hello World!
      </h1>
      <Body address={props.address}>
        {firstName} {lastName}
      </Body>
    </div>
  )
}

export default Header
