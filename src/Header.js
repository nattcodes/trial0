import React from 'react'

const header = ({title}) => {

  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

header.defaultProps = {
  title: "No Title"
}


export default header