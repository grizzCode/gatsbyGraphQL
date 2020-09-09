import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

const PrimaryLayout = (props) => (
  <>
  <Header />
  <div className="container">
    <div className="row justify-content-md-center">
      <div className={props.grid}>
        {props.children}
      </div>
    </div>
  </div>
  <Footer />
</>
)



export default PrimaryLayout