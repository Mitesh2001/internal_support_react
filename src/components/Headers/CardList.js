import React from 'react';
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

const CardList = () => {
  return (
    <div>
            <Row>
                  <Col lg="6" xl="3">
                        <Card className="card-stats mb-4 mb-xl-0">
                              <CardBody>
                                    <Row>
                                    <div className="col">
                                    <CardTitle
                                          tag="h5"
                                          className="text-uppercase text-muted mb-0"
                                    >
                                          UNRESOLVED
                                    </CardTitle>                        
                                    </div>
                                    <Col className="col-auto">
                                    <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                          <i className="fas fa-chart-bar" />
                                    </div>
                                    </Col>
                                    </Row>
                                    <p className="mt-3 mb-0 text-muted text-sm">
                                    <span className="h2 font-weight-bold mb-0">
                                    350,897
                                    </span>
                                    </p>
                              </CardBody>
                        </Card>
                  </Col>
                  <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                        <Row>
                        <div className="col">
                        <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                        >
                              OVERDUE
                        </CardTitle>                        
                        </div>
                        <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <i className="fas fa-chart-bar" />
                        </div>
                        </Col>
                        </Row>
                        <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="h2 font-weight-bold mb-0">
                        2,356
                        </span>
                        </p>
                  </CardBody>
                  </Card>
                  </Col>
                  <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                        <Row>
                        <div className="col">
                        <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                        >
                              OPEN
                        </CardTitle>                        
                        </div>
                        <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <i className="fas fa-chart-bar" />
                        </div>
                        </Col>
                        </Row>
                        <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="h2 font-weight-bold mb-0">
                        924
                        </span>
                        </p>
                  </CardBody>
                  </Card>
                  </Col>
                  <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                        <Row>
                        <div className="col">
                        <CardTitle
                              tag="h5"
                              className="text-uppercase text-muted mb-0"
                        >
                              HOLD
                        </CardTitle>                        
                        </div>
                        <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                              <i className="fas fa-chart-bar" />
                        </div>
                        </Col>
                        </Row>
                        <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="h2 font-weight-bold mb-0">
                        425
                        </span>
                        </p>
                  </CardBody>
                  </Card>
                  </Col>
            </Row>
    </div>
  );
}

export default CardList;