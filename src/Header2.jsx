import { Button, Navbar } from "flowbite-react";

export function Component() {
  return (
    <div className="">
     <Navbar fluid rounded>

          <Navbar.Brand href="https://flowbite-react.com">

            <span className="">Codex</span>
          </Navbar.Brand>
          <div>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse >
            <Navbar.Link href="/"> Home </Navbar.Link>
            <Navbar.Link href="/main_editor">Languages</Navbar.Link>
            <Navbar.Link href="/live_preview">Live-preview</Navbar.Link>
            <Navbar.Link href="/whiteboard">Whiteboard</Navbar.Link>
            <Navbar.Link href="/contact">Contact</Navbar.Link>
          </Navbar.Collapse>
          </Navbar>
    </div>
  );
}