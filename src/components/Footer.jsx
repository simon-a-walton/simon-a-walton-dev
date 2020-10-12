import React from 'react'

const Footer = () => {
  return (
    <>
      <footer id="footer" className="p-3">
        <div className="row text-center ">
          <div className="col">
            <a href='https://github.com/simon-a-walton'><i className="fab fa-github" /></a>
          </div>
          <div className="col">
            <a href='https://www.linkedin.com/in/simon-walton-36457323/'><i className="fab fa-linkedin" /></a>
          </div>
          <div className="col">
            <a href="https://stackexchange.com/users/18282052/simon-walton"><i className="fab fa-stack-overflow" /></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;

