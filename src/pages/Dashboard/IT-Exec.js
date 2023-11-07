import React from "react"
import { Row, Col, CardBody, Card, Progress, } from "reactstrap"
import { Link } from "react-router-dom"

//Import Components


//Import Image
import widgetImage from "../../assets/images/widget-img.png"


const ITDashboard = () => {

  return (
    <React.Fragment>
      <div className="page-content">

        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">IT Executive Dashboard</h4>

              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item active">Welcome to LAMP - LADERA Asset Management Portal</li>
                </ol>
              </div>

            </div>
          </div>
        </Row>

        <Row>
          <Col lg={3}>
            <Card>
              <CardBody>
                <div className="d-flex align-items-start">
                  <div className="avatar-sm font-size-20 me-3">
                    <span className="avatar-title bg-soft-primary text-primary rounded">
                      <i className="mdi mdi-new-box"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">Service Requests</div>
                  </div>
                </div>
                <h4 className="mt-4">10</h4>
                <div className="row">
                  <div className="col-7">
                    {/* <p className="mb-0"><span className="text-success me-2"> 0.28% <i
                      className="mdi mdi-arrow-up"></i> </span></p> */}
                  </div>
                  <div className="col-5 align-self-center">

                    <Progress
                      value="62"
                      color="primary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3}>
            <Card>
              <CardBody>
                <div className="d-flex align-items-start">
                  <div className="avatar-sm font-size-20 me-3">
                    <span className="avatar-title bg-soft-success text-success rounded">
                      <i className="mdi mdi-open-in-new"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">Open Requests</div>
                  </div>
                </div>
                <h4 className="mt-4">5</h4>
                <div className="row">
                  <div className="col-7">
                    {/* <p className="mb-0"><span className="text-success me-2"> 0.28% <i
                      className="mdi mdi-arrow-up"></i> </span></p> */}
                  </div>
                  <div className="col-5 align-self-center">

                    <Progress
                      value="62"
                      color="success"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3}>
            <Card>
              <CardBody>
                <div className="d-flex align-items-start">
                  <div className="avatar-sm font-size-20 me-3">
                    <span className="avatar-title bg-soft-danger text-danger rounded">
                      <i className="mdi mdi-close"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">Closed Requests</div>
                  </div>
                </div>
                <h4 className="mt-4">100</h4>
                <div className="row">
                  <div className="col-7">
                    {/* <p className="mb-0"><span className="text-success me-2"> 0.28% <i
                      className="mdi mdi-arrow-up"></i> </span></p> */}
                  </div>
                  <div className="col-5 align-self-center">

                    <Progress
                      value="62"
                      color="danger"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={3}>
            <Card>
              <CardBody>
                <div className="d-flex align-items-start">
                  <div className="avatar-sm font-size-20 me-3">
                    <span className="avatar-title bg-soft-warning text-warning rounded">
                      <i className="mdi mdi-pause"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">On-Hold Requests</div>
                  </div>
                </div>
                <h4 className="mt-4">5</h4>
                <div className="row">
                  <div className="col-7">
                    {/* <p className="mb-0"><span className="text-success me-2"> 0.28% <i
                      className="mdi mdi-arrow-up"></i> </span></p> */}
                  </div>
                  <div className="col-5 align-self-center">

                    <Progress
                      value="62"
                      color="warning"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        
        </Row>

      </div>
    </React.Fragment>
  )
}

export default ITDashboard