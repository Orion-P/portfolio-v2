import React from "react"
import { Button, Dimmer, Header, Image, Container } from "semantic-ui-react"

import "./SampleWork.css"

export default class SampleWork extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state
    const content = (
      <div>
        <Header as="h2" inverted>
          {this.props.details}
        </Header>
        <a href={this.props.URL}>
          <Button primary>View</Button>
        </a>
      </div>
    )

    return (
      <Container>
        <Header className="header single-header" as="h2">
          {this.props.title}
        </Header>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
          size="large"
          src={this.props.image}
        />
      </Container>
    )
  }
}
