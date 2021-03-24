//LIBRARIES
import React from "react"
import { Header, Grid } from "semantic-ui-react"

//MY COMPONENTS
import Layout from "../../components/layout"
import SampleWork from "../../components/SampleWork"
import SEO from "../../components/seo"

//IMAGES/VIDEOS
import steamTeam from "../../images/steam-team-front.webp"
import movieApp from "../../images/movie-app.webp"
import weightLoss from "../../images/weight-loss-blog.webp"
import musicPlayer from "../../images/music-player.webp"
import rps from "../../images/rps.webp"
import etchSketch from "../../images/etchSketch.webp"
import vidBrowser from "../../images/vidBrowser.webp"
import picSearch from "../../images/pictureSearch.webp"
import pamphlet from "../../images/pamphlet.webp"

import HomeVideo from "../../videos/abstract-lines.mp4"

import "../../components/layout.css"
import "../../components/SampleWork.css"

const Portfolio = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <div id="loading" class="port">
        <div id="vidbox">
          <div className="video-overlay portfolio-vidbox">
            <Header class="header main" as="h1">
              Work Portfolio
            </Header>
            <Grid
              container
              className="main-grid hide-on-mobile"
              columns="equal"
            >
              <Grid.Row>
                <Grid.Column>
                  <SampleWork
                    details="SteamTeamJW.com"
                    URL="https://steamteamjw.com"
                    image={steamTeam}
                    title="Carpet Cleaning"
                  ></SampleWork>
                </Grid.Column>
                <Grid.Column>
                  <SampleWork
                    details="Weightlosswithorion.com"
                    URL="https://weightlosswithorion.com"
                    image={weightLoss}
                    title="Weight Loss Blog"
                  ></SampleWork>
                </Grid.Column>

                <Grid.Column>
                  <SampleWork
                    details="React / Movie DB API"
                    URL="https://movie-app.orion-p.vercel.app/"
                    image={movieApp}
                    title="Movie/TV Search"
                  ></SampleWork>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <SampleWork
                    details="Youtube API"
                    URL="https://orion-p.github.io/video-browser/"
                    image={vidBrowser}
                    title="Video Browser"
                  ></SampleWork>
                </Grid.Column>
                <Grid.Column>
                  <SampleWork
                    details="Jamendo API"
                    URL="https://spotify-clone-seven.vercel.app/"
                    image={musicPlayer}
                    title="Music Player"
                  ></SampleWork>
                </Grid.Column>
                <Grid.Column>
                  <SampleWork
                    details="Unsplash API"
                    URL="https://orion-p.github.io/picture-search/"
                    image={picSearch}
                    title="Image Finder"
                  ></SampleWork>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <SampleWork
                    details="Javascript / HTML / CSS"
                    URL="https://orion-p.github.io/portfolio/etch-a-sketch/"
                    image={etchSketch}
                    title="Etch-A-Sketch"
                  ></SampleWork>
                </Grid.Column>

                <Grid.Column>
                  <SampleWork
                    details="Javascript / HTML / CSS"
                    URL="https://orion-p.github.io/portfolio/rock-paper-scissors/"
                    image={rps}
                    title="Rock Paper Scissors"
                  ></SampleWork>
                </Grid.Column>
                <Grid.Column className="fliphtml5">
                  <SampleWork
                    details="FLIPHTML5"
                    URL="https://orion-p.github.io/pamphlet-sample/"
                    image={pamphlet}
                    title="Pamphlet Sample"
                  ></SampleWork>
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <Grid
              container
              className="main-grid hide-on-desktop"
              columns="equal"
            >
              <Grid.Row>
                <Grid.Column>
                  <SampleWork
                    details="SteamTeamJW.com"
                    URL="https://steamteamjw.com"
                    image={steamTeam}
                    title="Carpet Cleaning"
                  ></SampleWork>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <SampleWork
                    details="Weightlosswithorion.com"
                    URL="https://weightlosswithorion.com"
                    image={weightLoss}
                    title="Weight Loss Blog"
                  ></SampleWork>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <SampleWork
                    details="React / Movie DB API"
                    URL="https://movie-app.orion-p.vercel.app/"
                    image={movieApp}
                    title="Movie/TV Search"
                  ></SampleWork>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <SampleWork
                    details="Youtube API"
                    URL="https://orion-p.github.io/video-browser/"
                    image={vidBrowser}
                    title="Video Browser"
                  ></SampleWork>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <SampleWork
                    details="Jamendo API"
                    URL="https://spotify-clone-seven.vercel.app/"
                    image={musicPlayer}
                    title="Music Player"
                  ></SampleWork>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <SampleWork
                    details="Unsplash API"
                    URL="https://orion-p.github.io/picture-search/"
                    image={picSearch}
                    title="Image Finder"
                  ></SampleWork>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <SampleWork
                    details="Javascript / HTML / CSS"
                    URL="https://orion-p.github.io/portfolio/etch-a-sketch/"
                    image={etchSketch}
                    title="Etch-A-Sketch"
                  ></SampleWork>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                {" "}
                <Grid.Column>
                  <SampleWork
                    details="Javascript / HTML / CSS"
                    URL="https://orion-p.github.io/portfolio/rock-paper-scissors/"
                    image={rps}
                    title="Rock Paper Scissors"
                  ></SampleWork>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  <SampleWork
                    details="FLIPHTML5"
                    URL="https://orion-p.github.io/pamphlet-sample/"
                    image={pamphlet}
                    title="Pamphlet Sample"
                  ></SampleWork>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>

          <video id="bgvideo" loop autoPlay muted>
            <source src={HomeVideo} type="video/mp4"></source>
          </video>
          <video id="bgvideo" class="bg-2nd portfolio" loop autoPlay muted>
            <source src={HomeVideo} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
