import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Services from "../../components/Services"

import HomeVideo from "../../videos/abstract-lines.mp4"

const ServicePage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="loading" class="serv">
      <div id="vidbox">
        <div className="video-overlay services">
          <Services></Services>
        </div>
        <video id="bgvideo" loop autoPlay muted>
          <source src={HomeVideo} type="video/mp4"></source>
        </video>
      </div>
    </div>
  </Layout>
)

export default ServicePage
