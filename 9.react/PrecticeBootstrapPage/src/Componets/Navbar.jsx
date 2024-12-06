import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Model from './Model';
import Cards from './Card';

function Navbar() {
  return (
    <>
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="home" title="Home">

        </Tab>
        <Tab eventKey="profile" title="Profile">

        </Tab>
        <Tab eventKey="longer-tab" title="Loooonger Tab">

        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>

        </Tab>
      </Tabs>
      <Model />

      <Cards />
     
    </>
  );
}

export default Navbar;