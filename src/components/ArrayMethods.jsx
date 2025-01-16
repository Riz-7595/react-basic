import React from 'react'

const ArrayMethods = () => {
  let k=0;
  const langs = ['C++ ', 'Python '];
  const nonLangs = ['HTML ', 'CSS '];
  const updatedLangs = [...langs,...nonLangs,'JavaScript '];
  const langsList = updatedLangs.map(items => <p key={k++}>{items}</p>)
  const [,,...webLangs  ] = updatedLangs;
  return (
    <div>
      <br />
      <p>Programming Languages:</p>
      {langsList}
      <br />
      <p>Web Development Languages: {webLangs}</p>
    </div>
  )
}

export default ArrayMethods
