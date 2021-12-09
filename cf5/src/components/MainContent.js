import { Col } from "react-bootstrap";
import PostItem from "./PostItem";

function MainContent() {
  return (
    <Col sm="12" md="9">
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </Col>
  );
}

export default MainContent;
