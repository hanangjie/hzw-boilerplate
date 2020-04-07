import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Switch, Redirect } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const sections = [
  { title: "Index", url: "#/index" },
  { title: "Introduce", url: "#/demo_redux" },
  { title: "Demo", url: "#/demo" },
  { title: "Business", url: "#/demo1" },
  { title: "Politics", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" }
];

export default function Blog(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        {/* <Switch>
          <Redirect exact from="/" to="/index" />
        </Switch> */}
        <main>{props.default}</main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
