import React from "react";
import { Navbar, Button, Link, Text} from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";

export default function Nav() {
  const [variant] = React.useState("static");
  
  return (
    <Layout>
      <Navbar isBordered variant={variant}>
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            CKQuiz
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" activeColor={'success'}>
          <Navbar.Link isActive href="#">Launch</Navbar.Link>
          <Navbar.Link href="#">Github</Navbar.Link>
          <Navbar.Link href="#roadmap">RoadMap</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item >
            <Button auto flat as={Link} href="#" color="success">
              Connect
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>   
    </Layout>
  )
}
