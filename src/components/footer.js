import React from 'react'
import footerStyles from './footer.module.css'

 const Footer = () => {
  return(
    <footer className={footerStyles.footer}>
      <div className="container">
        <span className="text-dark">© Gatsby/Bootstrap Project 2019</span>
      </div>
    </footer>
  )
}
export default Footer