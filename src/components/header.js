import { Link } from "gatsby"
import React from "react"
import { Dropdown, Menu, Icon } from "semantic-ui-react"

import "./Header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Menu>
        <div class="ui inverted compact fixed menu">
          <Dropdown item icon="bars">
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/">Home</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/portfolio/">Portfolio</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/services/">Services</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <div class="right menu">
            <div class="header item">
              <Link to="/">{this.props.siteTitle}</Link>
            </div>
          </div>
          <div class="right menu">
            <div class="item">
              <a href="tel:5038946282" class="ui inverted button top-button">
                <Icon style={{ paddingLeft: "4px" }} name="phone"></Icon>
                503-894-6282
              </a>
            </div>
          </div>
        </div>
      </Menu>
    )
  }
}

export default Header
