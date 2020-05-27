import React, { Component } from "react";
import {
  Header,
  Menu,
  Dropdown,
  Card,
  Image,
  Container,
} from "semantic-ui-react";
import "./styles/App.less";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
    };
    this.setTheme = this.setTheme.bind(this);
  }

  setTheme(themeName) {
    document.getElementById("body").className = themeName;
    localStorage.setItem("theme", themeName);
    console.log("Theme set to: ", localStorage.getItem("theme"));
  }

  render() {
    return (
      <>
        <Menu borderless>
          <Menu.Menu position="right">
            <Dropdown text="Select Theme" item>
              <Dropdown.Menu>
                <Dropdown.Item
                  content="Algae"
                  onClick={() => this.setTheme("algae")}
                />
                <Dropdown.Item
                  content="Charcoal"
                  onClick={() => this.setTheme("charcoal")}
                />
                <Dropdown.Item
                  content="Lavender"
                  onClick={() => this.setTheme("lavender")}
                />
                <Dropdown.Item
                  content="Paper"
                  onClick={() => this.setTheme("paper")}
                />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
        <Container>
          <Card fluid>
            <Card.Content header="CSS Theming" meta="An Example" />
            <Image src="https://picsum.photos/600/350" />
          </Card>
        </Container>
      </>
    );
  }
}
