import React from 'react'

const footer = () => {
  let footerstyle={
    top: "100vh",
    width: "100%",
    marginTop :"40px"
  }
  return (
    <footer className="bg-dark text-light py-3" style={footerstyle}>
      <p className="text-center">
         Copyright &copy; MYtodoslist.com

      </p>
      
    </footer>
  )
}

export default footer
