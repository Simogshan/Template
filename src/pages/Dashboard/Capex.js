import React, { Component } from "react"
import { Row, Col, Card, CardBody } from "reactstrap"
import ReactApexChart from "react-apexcharts"

class Capex extends Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [38, 26, 14, 10],
      options: {
        labels: ["Laptop", "Television", "License", "Projector"],
        plotOptions: {
          pie: {
            donut: {
              size: '75%'
            }
          }
        },
        legend: {
          show: false,
        },
        colors: ['#3b5de7', '#45cb85', '#eeb902', 'ffff89'],
      },
    }
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Capex Details</h4>

            <Row className="align-items-center">
              <Col sm={6}>
                <ReactApexChart
                  options={this.state.options}
                  series={this.state.series}
                  type="pie"
                  height={245}
                  className="apex-charts"
                />
              </Col>
              <Col sm={6}>
                <div>
                  <Row>
                    <div className="col-6">
                      <div className="py-3">
                        <p className="mb-1 text-truncate"><i
                          className="mdi mdi-circle text-primary me-1"></i>{" "}Laptop
                            </p>
                        <h5> 20,000 </h5>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="py-3">
                        <p className="mb-1 text-truncate"><i
                          className="mdi mdi-circle text-success me-1"></i>{" "}Television</p>
                        <h5> 100 </h5>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="py-3">
                        <p className="mb-1 text-truncate"><i
                          className="mdi mdi-circle text-warning me-1"></i>{" "}License</p>
                        <h5> 50 </h5>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="py-3">
                        <p className="mb-1 text-truncate"><i
                          className="mdi mdi-circle text-warning me-1"></i>{" "}Projector</p>
                        <h5> 150 </h5>
                      </div>
                    </div>
                  </Row>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

export default Capex
