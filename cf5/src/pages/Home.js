import { Container, Row } from "react-bootstrap";
import HeaderOptions from "../components/HeaderOptions";
import JumboBox from "../components/JumboBox";
import MainContent from "../components/MainContent";
import Notifications from "../components/Notifications";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <Container>
      <Notifications />
      <HeaderOptions />
      <JumboBox />
      <Row className="mt-3">
        <MainContent />
        <Sidebar />
      </Row>
    </Container>
  );
}

export default Home;
