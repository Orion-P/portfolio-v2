import React from "react"
import { Grid } from "semantic-ui-react"

import Service from "./Service"

import "./Services.css"

import webDesign from "../images/web-design-code.webp"
import techSupport from "../images/tech-support.webp"
import computerSpeedup from "../images/computer-speedup.webp"

export default class Services extends React.Component {
  constructor(props) {
    {
      super(props)
    }
  }
  render() {
    return (
      <div className="services">
        <Grid
          id="hide-on-mobile-serv"
          stackable
          className="services hide-on-mobile-serv"
        >
          <Grid.Row>
            <Grid.Column width={5}>
              <Service
                className="panel"
                name="Web Design & SEO Services"
                image={webDesign}
                details="I will build you a custom website for you or your business. Search Engine Optimization is the process I use to rank your site on the first page of Google, bringing you tons of new clients every month.
                "
              ></Service>
            </Grid.Column>
            <Grid.Column width={5}>
              {" "}
              <Service
                className="panel"
                name="Computer Speedup & Cleanup"
                image={computerSpeedup}
                details="As time passes, technology tends to slow down and stop working the way it did at the start. I will check your computer for viruses, remove unneccesary files and programs, and optimize your computer to run at it's top speed."
              ></Service>
            </Grid.Column>
            <Grid.Column width={5}>
              <Service
                className="panel"
                name="Tech Support & Consulting"
                image={techSupport}
                details="Technology can be frustrating to deal with if you don't know how everything works. Whether you're locked out of an account, have questions about how something works, or need some hands on support, we are here."
              ></Service>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div
          id="hide-on-desktop-serv"
          stackable
          className="services hide-on-desktop-serv"
        >
          <Service
            className="panel panel1"
            name="Web Design & SEO"
            image={webDesign}
            details="I will build you a custom website for you or your business. Search Engine Optimization is the process I use to rank your site on the first page of Google, bringing you tons of new clients every month..
                "
          ></Service>
          <Service
            className="panel"
            name="Computer Speedup & Cleanup"
            image={computerSpeedup}
            details="As time passes, technology tends to slow down and stop working the way it did at the start. I will check your computer for viruses, remove unneccesary files and programs, and optimize your computer to run at it's top speed."
          ></Service>
          <Service
            className="panel"
            name="Tech Support & Consulting"
            image={techSupport}
            details="Technology can be frustrating to deal with if you don't know how everything works. Whether you're locked out of an account, have questions about how something works, or need some hands on support, we are here."
          ></Service>
        </div>
      </div>
    )
  }
}
