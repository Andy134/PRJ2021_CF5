import { Col, Row } from "react-bootstrap";
import { useApp } from "../App";
import { switch_texts } from "../utils/languages";

function Notifications() {
  const { language, darkMode } = useApp();
  return (
    <Row className="d-flex align-self-center align-items-stretch">
      <Col
        className={`notification ${
          darkMode ? "dark" : "light"
        } d-flex justify-content-center align-items-center p-1`}
        xs={3}
        md={2}
      >
        <div>{switch_texts.notification[language]}</div>
      </Col>
      <Col xs={9} md={10} className={"d-flex align-items-center"}>
        <div
          className="text limit-2l"
          dangerouslySetInnerHTML={{
            __html:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
          }}
        ></div>
      </Col>
    </Row>
  );
}

export default Notifications;
