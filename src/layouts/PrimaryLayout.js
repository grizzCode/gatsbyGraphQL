import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import SEO from '../components/seo'

const PrimaryLayout = (props) => (
  <>
  <SEO />
  <Header />
  <main>
    <div className="container">
      <div className="row justify-content-md-center">
        <div className={props.grid}>
          {props.children}
        </div>
      </div>
    </div>
  </main>
  <Footer />
</>
)



export default PrimaryLayout