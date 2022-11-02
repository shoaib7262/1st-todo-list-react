import React from 'react'

const Footer = () => {
  const footerStyle =
  {
    background : "black",
    color: "white",
    display:"flex",
    justifyContent:"center",
    alignItem:"center"
  }
  return (
    <div style={footerStyle}>
      <p>Copyright &copy; MyTodosList.com</p>
    </div>
  )
}

export default Footer
