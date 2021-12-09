import { Button, Col, Row } from "react-bootstrap";
import { useApp } from "../App";

function HeaderOptions() {
  const { darkMode, setDarkMode } = useApp();

  return (
    <Row className={"p-5"}>
      <Col className="d-flex justify-content-between">
        <Button
          className={"btn white-text btn-circle"}
          variant={`${!darkMode ? "cyan" : "orange"}`}
          size="md"
          onClick={() => setDarkMode(!darkMode)}
        >
          <i className={`fas fa-moon`}></i>
        </Button>

        <Button className={"btn-circle"} variant={`green`} size="md">
          <i className={`fas fa-comment`}></i>
        </Button>

        <Button className={"btn-circle"} variant={`pink`} size="md">
          <i className={`fas fa-donate`}></i>
        </Button>

        <Button className={"color btn-circle"} variant={`red`} size="md">
          <i className={`fas fa-heart`}></i>
        </Button>

        <Button className={"btn-circle"} variant={`light-blue`} size="md">
          <i className={`fas fa-award`}></i>
        </Button>
      </Col>
    </Row>
  );
}

export default HeaderOptions;
