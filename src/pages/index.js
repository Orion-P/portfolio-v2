import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/AboutMe"

import HomeVideo from "../videos/abstract-lines.mp4"

const IndexPage = () => (
  <Layout>
    <div id="home-page">
      <SEO title="Home" />
      <div id="loading" class="loading">
        <div id="vidbox">
          <div className="video-overlay">
            <h1>Web Design & Tech Support</h1>
            <Link to="/portfolio/" className="ui button primary">
              Click Here To See My Work
            </Link>
          </div>
          <video id="bgvideo" loop autoPlay muted>
            <source src={HomeVideo} type="video/mp4"></source>
          </video>
        </div>
      </div>
      <AboutMe></AboutMe>
    </div>
  </Layout>
)

export default IndexPage
