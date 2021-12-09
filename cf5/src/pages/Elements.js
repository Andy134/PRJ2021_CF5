import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Button from "@restart/ui/esm/Button";
import React, { Suspense, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { API } from "./../utils/api";

const OtherComponent = React.lazy(() => import("../components/OtherComponent"));

function getCategory(id) {
  return API.get("/pokemon/" + id);
}

function Elements() {
  const [richtextChange, setRichtextChange] = useState(
    "Hello from CKEditor 5!"
  );

  const [fetchData, setFetchData] = useState();
  const [onLoad, setOnLoad] = useState(false);

  function handleShowData() {
    setOnLoad(true);
    let id = Math.floor(Math.random() * 500);
    getCategory(id).then((res) => {
      setTimeout(() => {
        setFetchData(res.data);
        setOnLoad(false);
      }, 1000);
    });
  }

  return (
    <Container>
      <>
        <Row className="mt-3">
          <Col>
            <h5>I. WYSIWYG</h5>
            <p>Using CKEditor 5 build in React</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <CKEditor
              id="editorOne"
              editor={ClassicEditor}
              data={richtextChange}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                //console.log("Editor is ready to use!", editor);
                editor.editing.view.change((writer) => {
                  writer.setStyle(
                    "height",
                    "200px",
                    editor.editing.view.document.getRoot()
                  );
                });
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
                setRichtextChange(data);
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </Col>
          <Col xs={6}>
            {/* <p dangerouslySetInnerHTML={{ __html: richtextChange }}></p> */}
            <p>{richtextChange}</p>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <h5>II. Video Player</h5>
            <p>
              ReactPlayer - A React component for playing a variety of URLs,
              including file paths, YouTube, Facebook, Twitch, SoundCloud,
              Streamable, Vimeo, Wistia, Mixcloud, DailyMotion and Kaltura.{" "}
              <a href="https://openbase.com/js/react-player">
                https://openbase.com/js/react-player
              </a>
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              controls={false}
            />
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <h5>III. Call Api</h5>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <Button
              className="btn btn-warning"
              variant="primary"
              onClick={handleShowData}
              disabled={onLoad}
            >
              Fetch Data
            </Button>
          </Col>
          {fetchData && (
            <Col xs={12} md={8}>
              <Row>
                <Col xs={12}>
                  <img src={fetchData.sprites.front_default} alt="" />
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <p>
                    {fetchData.id}
                    {". "}
                    <b>{fetchData.name}</b>

                    {" ("}
                    {fetchData.types
                      .map((type) => {
                        return type.type.name;
                      })
                      .join(", ")}
                    {")"}
                  </p>
                </Col>
              </Row>
            </Col>
          )}
        </Row>

        <Row className="mt-3">
          <Col>
            <h5>IV. Loading Suspense</h5>
          </Col>
        </Row>
        <Row>
          <Suspense fallback={<div>Loading ... </div>}>
            <section>
              <OtherComponent />
            </section>
          </Suspense>
        </Row>
      </>
    </Container>
  );
}

export default Elements;
