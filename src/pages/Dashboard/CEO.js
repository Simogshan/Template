import React from "react"
import { Row, Col, CardBody, Card, Progress } from "reactstrap"
import { Link } from "react-router-dom"

//Import Components
import Capex from "./Capex"
import SalesAnalytics from "./sales-analytics"
//import LatestTransaction from "./latest-transaction"
import ActivityComp from "./ActivityComp"

//Import Image
import widgetImage from "../../assets/images/widget-img.png"


const CEODashboard = () => {

  return (
    <React.Fragment>
      <div className="page-content">

        <Row>
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="page-title mb-0 font-size-18">CEO Dashboard</h4>

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
                      <i className="mdi mdi-tag-plus-outline"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">Year 2023</div>
                  </div>
                </div>
                <h4 className="mt-4">Amount: ₹ 21,650</h4>
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
                    <span className="avatar-title bg-soft-primary text-primary rounded">
                      <i className="mdi mdi-tag-plus-outline"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">Assets Count</div>
                  </div>
                </div>
                <h4 className="mt-4">1,368</h4>
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
                    <span className="avatar-title bg-soft-primary text-primary rounded">
                      <i className="mdi mdi-tag-plus-outline"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">Capex</div>
                  </div>
                </div>
                <h4 className="mt-4">₹ 20,300</h4>
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
                    <span className="avatar-title bg-soft-primary text-primary rounded">
                      <i className="mdi mdi-tag-plus-outline"></i>
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-size-16 mt-2">Opex Details</div>
                  </div>
                </div>
                <h4 className="mt-4"> ₹ 1,350</h4>
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

        </Row>

        <Row>
          <Col lg={6}>
            <Capex />
          </Col>
          <Col lg={6}>
            <SalesAnalytics />
          </Col>
        </Row>
        {/*<Row>
          <Col lg={6}>
            <LatestTransaction />
          </Col>
          <Col lg={6}>
            <LatestTransaction />
          </Col>
                    </Row>*/}

      </div>
    </React.Fragment>
  )
}

export default CEODashboard