import React from "react";
import { Navbar, Button, Link, Text} from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";

export default function Nav() {
  const [variant] = React.useState("static");
  const appLink = "https://ckquiz-app.vercel.app";
  const githubLink = "https://github.com/liriu/ckquiz-app";
  const docsLink = "https://liriu.notion.site/CKQuiz-Docs-94d7897ddab04fdbae907194536f889d";
  const faucetLink = "https://faucet.nervos.org/"
  const bridgeLink = "https://testnet.bridge.godwoken.io/#/v1"
  
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
          <Navbar.Link isActive href={appLink}>Launch</Navbar.Link>
          <Navbar.Link href={docsLink}>Docs</Navbar.Link>
          <Navbar.Link href={githubLink}>Github</Navbar.Link>
          <Navbar.Link href="#roadmap">RoadMap</Navbar.Link>
          <Navbar.Link href={faucetLink}>Faucet</Navbar.Link>
          <Navbar.Link href={bridgeLink}>Github</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item >
            <Button auto flat as={Link} href={appLink} color="success">
              Create
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>   
    </Layout>
  )
}
