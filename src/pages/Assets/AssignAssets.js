import React, { useState } from "react"

import { MDBDataTable } from "mdbreact"

import {
  Label,
  Card,
  CardBody,
  Col,
  Form,
  Input,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  FormGroup,
  CardTitle,
  CardSubtitle
} from "reactstrap"

// Import Selector
import Select from "react-select";  

import classnames from "classnames"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const AssignAssets = () => {
const [selectedMulti, setselectedMulti] = useState(null);
const [selectedGroup, setselectedGroup] = useState(null);

const data = {
        columns: [
            {
                label: "Name",
                field: "name",
                sort: "asc",
                width: 150,
            },
            {
                label: "Position",
                field: "position",
                sort: "asc",
                width: 270,
            },
            {
                label: "Office",
                field: "office",
                sort: "asc",
                width: 200,
            },
            {
                label: "Age",
                field: "age",
                sort: "asc",
                width: 100,
            },
            {
                label: "Start date",
                field: "date",
                sort: "asc",
                width: 150,
            },
            {
                label: "Salary",
                field: "salary",
                sort: "asc",
                width: 100,
            },
        ],
        rows: [
            {
                name: "Tiger Nixon",
                position: "System Architect",
                office: "Edinburgh",
                age: "61",
                date: "2011/04/25",
                salary: "$320",
            },
            {
                name: "Garrett Winters",
                position: "Accountant",
                office: "Tokyo",
                age: "63",
                date: "2011/07/25",
                salary: "$170",
            },
            {
                name: "Ashton Cox",
                position: "Junior Technical Author",
                office: "San Francisco",
                age: "66",
                date: "2009/01/12",
                salary: "$86",
            },
            {
                name: "Cedric Kelly",
                position: "Senior Javascript Developer",
                office: "Edinburgh",
                age: "22",
                date: "2012/03/29",
                salary: "$433",
            },
            {
                name: "Airi Satou",
                position: "Accountant",
                office: "Tokyo",
                age: "33",
                date: "2008/11/28",
                salary: "$162",
            },
            {
                name: "Brielle Williamson",
                position: "Integration Specialist",
                office: "New York",
                age: "61",
                date: "2012/12/02",
                salary: "$372",
            },
            {
                name: "Herrod Chandler",
                position: "Sales Assistant",
                office: "San Francisco",
                age: "59",
                date: "2012/08/06",
                salary: "$137",
            },
            {
                name: "Rhona Davidson",
                position: "Integration Specialist",
                office: "Tokyo",
                age: "55",
                date: "2010/10/14",
                salary: "$327",
            },
            {
                name: "Colleen Hurst",
                position: "Javascript Developer",
                office: "San Francisco",
                age: "39",
                date: "2009/09/15",
                salary: "$205",
            }
        ],
    }

const optionGroup = [
  {
    label: "Hardwares",
    options: [
      { label: "Monitors", value: "Monitors" },
      { label: "Laptops", value: "Laptops" },
      { label: "Headphones", value: "Headphones" },
      { label: "Mouse", value: "Mouse" },
    ],
  },
  {
    label: "Furnitures",
    options: [
      { label: "Boards", value: "Boards" },
      { label: "Desks", value: "Desks" },
      { label: "Chairs", value: "Chairs" },
    ],
  },
];

const optionGroup2 = [
  {
    options: [
      { label: "HR", value: "HR" },
      { label: "Admin", value: "Admin" },
      { label: "Finance", value: "Finance" },
      { label: "IT", value: "IT" },
      { label: "Sales", value: "Sales" },
    ],
  },
];

  const [activeTab, setactiveTab] = useState(1)

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab)
      }
    }
  }

  function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
  }

  function handleMulti(selectedMulti) {
        setselectedMulti(selectedMulti);
  }
  
  return (
    <React.Fragment>
      <div className="page-content">

        <Breadcrumbs title="Assets" breadcrumbItem="Assign Assets" />

        <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <h4 className="card-title">Assign Assets</h4>
                <div className="form-wizard-wrapper wizard clearfix">
                  <div className="steps clearfix">
                    <ul>
                      <NavItem
                        className={classnames({ current: activeTab === 1 })}>
                        <NavLink
                          className={classnames({ current: activeTab === 1 })}
                          onClick={() => {
                            setactiveTab(1)
                          }}
                        >
                          <span className="number">1.</span>{" "}
                            Assets Details
                          </NavLink>
                      </NavItem>
                      <NavItem className={classnames({ current: activeTab === 2 })}>
                        <NavLink
                          className={classnames({ active: activeTab === 2 })}
                          onClick={() => {
                            setactiveTab(2)
                          }}
                        >
                          <span className="number">2.</span>{" "}
                          Assets Checklist
                          </NavLink>
                      </NavItem>
                      <NavItem className={classnames({ current: activeTab === 3 })}>
                        <NavLink
                          className={classnames({ active: activeTab === 3 })}
                          onClick={() => {
                            setactiveTab(3)
                          }}
                        >
                          <span className="number">3.</span>
                          Assign To
                        </NavLink>
                      </NavItem>
                      <NavItem className={classnames({ current: activeTab === 4 })}>
                        <NavLink
                          className={classnames({ active: activeTab === 4 })}
                          onClick={() => {
                            setactiveTab(4)
                          }}
                        >
                          <span className="number">4.</span>
                          Summary
                        </NavLink>
                      </NavItem>
                    </ul>
                  </div>
                  <div className="content clearfix">
                    <TabContent
                      activeTab={activeTab}
                      className="body"
                    >
                      <TabPane tabId={1}>
                        <Form>                  
                          <Row>
                            <Col lg="12"> 
                            <FormGroup className="mb-4" row>
                                <Label
                                    htmlFor="inventoryname"
                                    className="col-form-label col-lg-2"
                                >
                                    Asset Assigned By 
                                </Label>
                                <Col lg="4">
                                    <Input
                                        id="inventoryname"
                                        name="inventoryname"
                                        type="text"
                                        className="form-control"
                                        placeholder="Assigned By..."
                                    />
                                </Col>
                                <Label
                                    htmlFor="inventoryname"
                                    className="col-form-label col-lg-2"
                                >
                                    Asset Type
                                </Label>
                                <Col lg="4">
                                    <Select
                                        value={selectedMulti}
                                        isMulti={true}
                                        onChange={() => {
                                            handleMulti();
                                        }}
                                        options={optionGroup}
                                        classNamePrefix="select2-selection"
                                        />
                                </Col>
                            </FormGroup>
                            </Col>
                          </Row>

                          <div classname="page-content">
                            <Row>
                                <Col className="col-12">
                                    <Card>
                                        <CardBody>
                                            <CardTitle>Stripped example </CardTitle>
                                            <CardSubtitle className="mb-3">
                                                mdbreact DataTables has most features enabled by default, so
                                                all you need to do to use it with your own tables is to call
                                                the construction function:{" "}
                                                <code>&lt;MDBDataTable striped /&gt;</code>.
                                            </CardSubtitle>

                                            <MDBDataTable responsive striped bordered data={data} />
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                          </div>





                        </Form>
                      </TabPane>
                      <TabPane tabId={2}>

                        <Form>
                          <Row>

                          
                         
                          </Row>
                        </Form>
                      </TabPane>
                      <TabPane tabId={3}>

                        <Form>
                          <Row>
                            <Col lg="12"> 
                            <FormGroup className="mb-4" row>
                                <Label
                                    htmlFor="inventoryname"
                                    className="col-form-label col-lg-2"
                                >
                                    Employee First Name 
                                </Label>
                                <Col lg="4">
                                    <Input
                                        id="inventoryname"
                                        name="inventoryname"
                                        type="text"
                                        className="form-control"
                                        placeholder="First Name..."
                                    />
                                </Col>
                                <Label
                                    htmlFor="inventoryname"
                                    className="col-form-label col-lg-2"
                                >
                                    Employee Last Name
                                </Label>
                                <Col lg="4">
                                     <Input
                                        id="inventoryname"
                                        name="inventoryname"
                                        type="text"
                                        className="form-control"
                                        placeholder="Last Name..."
                                    />
                                </Col>
                            </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="12"> 
                            <FormGroup className="mb-4" row>
                                <Label
                                    htmlFor="inventoryname"
                                    className="col-form-label col-lg-2"
                                >
                                    Employee ID 
                                </Label>
                                <Col lg="4">
                                    <Input
                                        id="inventoryname"
                                        name="inventoryname"
                                        type="text"
                                        className="form-control"
                                        placeholder="Emp ID..."
                                    />
                                </Col>
                                <Label
                                    htmlFor="inventoryname"
                                    className="col-form-label col-lg-2"
                                >
                                    Employee Role
                                </Label>
                                <Col lg="4">
                                     <Input
                                        id="inventoryname"
                                        name="inventoryname"
                                        type="text"
                                        className="form-control"
                                        placeholder="Role..."
                                    />
                                </Col>
                            </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="12"> 
                            <FormGroup className="mb-4" row>
                                <Label
                                    htmlFor="inventoryname"
                                    className="col-form-label col-lg-2"
                                >
                                    Employee Email
                                </Label>
                                <Col lg="4">
                                    <Input
                                        id="inventoryname"
                                        name="inventoryname"
                                        type="text"
                                        className="form-control"
                                        placeholder="Email ID..."
                                    />
                                </Col>
                                <Label
                                    htmlFor="inventoryname"
                                    className="col-form-label col-lg-2"
                                >
                                    Designation
                                </Label>
                                <Col lg="4">
                                       <Select
                                            value={selectedGroup}
                                            onChange={() => {
                                                handleSelectGroup();
                                            }}
                                            options={optionGroup2}
                                            classNamePrefix="select2-selection"
                                        />
                                </Col>
                            </FormGroup>
                            </Col>
                          </Row>
                          <div className="page-content">
                            <h4 className="card-title">Alerts</h4>
                          </div>
                        </Form>

                      </TabPane>
                      <TabPane tabId={4}>
                        <div className="row justify-content-center">
                          <Col lg="6">
                            <div className="text-center">
                              <div className="mb-4">
                                <i className="mdi mdi-check-circle-outline text-success display-4" />
                              </div>
                              <div>
                                <h5>Confirm Detail</h5>
                                <p className="text-muted">
                                  If several languages coalesce, the grammar of
                                  the resulting
                                </p>
                              </div>
                            </div>
                          </Col>
                        </div>
                      </TabPane>
                    </TabContent>
                  </div>
                  <div className="actions clearfix">
                    <ul>
                      <li
                        className={
                          activeTab === 1 ? "previous disabled" : "previous"
                        }
                      >
                        <Link
                          to="#"
                          className="btn btn-primary"
                          onClick={() => {
                            toggleTab(activeTab - 1)
                          }}
                        >
                          Previous
                          </Link>
                      </li>
                      <li
                        className={activeTab === 4 ? "next disabled" : "next"}
                      >
                        <Link
                          to="#"
                          className="btn btn-primary"
                          onClick={() => {
                            toggleTab(activeTab + 1)
                          }}
                        >
                          Next
                          </Link>
                      </li>
                      <li>
                      </li>
                    </ul>
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

export default AssignAssets