import { Badge, Col, Image, Row } from "react-bootstrap";
import { useApp } from "../App";

function PostItem() {
  const { darkMode } = useApp();

  return (
    <Row className={"mb-3"}>
      <Col xs={5} md={2} className="px-0">
        <Image
          className={`post-item-image cursor-pointer`}
          src={
            "https://i.pinimg.com/564x/c7/4a/04/c74a0431d1e3127c6dab58e2e69df61b.jpg"
          }
          fluid
        />
      </Col>
      <Col
        className={`post-item-body ${darkMode ? "dark" : ""}`}
        xs={7}
        md={10}
      >
        <Row>
          <Col className={"pt-3"}>
            <a href="https://www.lipsum.com/">
              <h5 className="text limit-2l">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen b
              </h5>
            </a>
          </Col>
        </Row>
        <Row className={"pt-0"}>
          <Col xs={12} md={4} className="d-flex pt-3">
            <Image className={"post-item-icon"} src={"./assets/img/user.png"} />
            &nbsp; Admin
          </Col>
          <Col xs={12} md={4} className="d-flex pt-3">
            <Image
              className={"post-item-icon"}
              src={"./assets/img/clock.png"}
            />
            &nbsp; 8 days ago
          </Col>
          <Col xs={12} md={4} className="d-flex pt-3">
            <p className={"text-muted p-0 m-0"}>
              <a>
                <b>400</b>
              </a>{" "}
              chapters &nbsp;{" "}
              <a>
                <b>430</b>
              </a>{" "}
              comments
            </p>
          </Col>
        </Row>
        <Row className={"pt-3"}>
          <Col xs={12} md={4} className="d-flex">
            <Image className={"post-item-icon"} src={"./assets/img/tag.png"} />
            &nbsp;
            <Badge className="cursor-pointer" pill bg="secondary" text="light">
              Primary
            </Badge>
            &nbsp;
            <Badge className="cursor-pointer" pill bg="light" text="dark">
              Secondary
            </Badge>
            &nbsp;
            <Badge className="cursor-pointer" pill bg="secondary" text="light">
              Success
            </Badge>
            &nbsp;
            <Badge className="cursor-pointer" pill bg="light" text="dark">
              Danger
            </Badge>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default PostItem;
