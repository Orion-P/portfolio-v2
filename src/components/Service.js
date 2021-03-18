import React from "react"
import { Button, Card, Image } from "semantic-ui-react"

import "./Services.css"

export default class Service extends React.Component {
  constructor(props) {
    {
      super(props)
    }
  }
  render() {
    return (
      <div class="service-card">
        <Card>
          <Image src={this.props.image} wrapped ui={false} />

          <Card.Content>
            <Card.Header id="service-header">{this.props.name}</Card.Header>
            <Card.Description>{this.props.details}</Card.Description>
          </Card.Content>

          <Card.Content extra>
            <Button id="button-text">
              <i class="phone icon"></i>
              <a class="call-now-btn" href="tel:5038946282">
                Call Now
              </a>
            </Button>
          </Card.Content>
        </Card>
      </div>
    )
  }
}
