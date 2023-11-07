import React, { useState } from "react"
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    TabContent,
    TabPane,
    Collapse,
    NavLink,
    NavItem,
    Nav,
    Input,
    FormGroup,
    Label,
    Button,
} from "reactstrap"

import { MDBDataTable } from "mdbreact"

import { Link } from "react-router-dom"

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import "./ListLicenses.scss"

import classnames from "classnames"

const ViewLicenses = () => {
    const data = {
        columns: [
            {
                label: "Assigned By",
                field: "assigned_by",
                sort: "asc",
                width: 100,
            },
            {
                label: "Action",
                field: "action",
                sort: "asc",
                width: 100,
            },
            {
                label: "Assigned To",
                field: "assigned_to",
                sort: "asc",
                width: 100,
            },
            {
                label: "Assigned Date",
                field: "date",
                sort: "asc",
                width: 100,
            },
            {
                label: "Items",
                field: "items",
                sort: "asc",
                width: 100,
            },
        ],
        rows: [
            {
                assigned_by: "Nishanth",
                action: "Checkout",
                assigned_to: "John",
                date: "10-August-2023",
                items: <Link to="/license/view"> Acrobat </Link>,
            },
            {
                assigned_by: "Nishanth",
                action: "Checkout",
                assigned_to: "Doe",
                date: "10-August-2023",
                items: <Link to="/license/view"> Acrobat </Link>,
            },
            {
                assigned_by: "Nishanth",
                action: "Checkout",
                assigned_to: "Rene",
                date: "10-August-2023",
                items: <Link to="/license/view"> Acrobat </Link>,
            },
            {
                assigned_by: "Nishanth",
                action: "Checkout",
                assigned_to: "Daniel",
                date: "10-August-2023",
                items: <Link to="/license/view"> Acrobat </Link>,
            },
        ],
    }

    const data1 = {
        columns: [
            {
                label: "File Type",
                field: "file_type",
                sort: "asc",
                width: 100,
            },
            {
                label: "File",
                field: "file_name",
                sort: "asc",
                width: 100,
            },
            {
                label: "File Size",
                field: "file_size",
                sort: "asc",
                width: 100,
            },
            {
                label: "Notes",
                field: "notes",
                sort: "asc",
                width: 100,
            },
            {
                label: "Action",
                field: "action",
                sort: "asc",
                width: 100,
            },
        ],
        rows: [
   
        ],
    }
    const inpRow = [{ name: "", file: "" }]
    const [startDate, setstartDate] = useState(new Date())
    const [endDate, setendDate] = useState(new Date())
    const [inputFields, setinputFields] = useState(inpRow)
    const [activeTab, setactiveTab] = useState("1")

    const startDateChange = date => {
        setstartDate(date)
    }

    const endDateChange = date => {
        setendDate(date)
    }

    // Function for Create Input Fields
    function handleAddFields() {
        const item1 = { name: "", file: "" }
        setinputFields([...inputFields, item1])
    }

    // Function for Remove Input Fields
    function handleRemoveFields(idx) {
        document.getElementById("nested" + idx).style.display = "none"
    }

    function toggle(tab) {
        if (activeTab !== tab) {
          setactiveTab(tab)
        }
      }

    return (
        <>
            <div className="page-content">

                <Row>
                    <div className="col-12">
                        <div className="page-title-box d-flex align-items-center justify-content-between">
                        <h4 className="page-title mb-0 font-size-18">View License - Acrobat</h4>

                        <div className="page-title-right">
                            <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item active">Acrobat</li>
                            </ol>
                        </div>

                        </div>
                    </div>
                </Row>

                <Row>
                    <Col lg={10}>
                                        
                        <Card>
                            <CardBody>
                                <Nav tabs>
                                    <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({
                                        active: activeTab === "1",
                                        })}
                                        onClick={() => {
                                        toggle("1")
                                        }}
                                    >
                                        <span className="d-block d-sm-none"><i className="fas fa-home"></i></span>
                                        <span className="d-none d-sm-block">Info</span>
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({
                                        active: activeTab === "2",
                                        })}
                                        onClick={() => {
                                        toggle("2")
                                        }}
                                    >
                                        <span className="d-block d-sm-none"><i className="far fa-user"></i></span>
                                        <span className="d-none d-sm-block">Seats<span className="badge rounded-pill bg-primary mx-2 ">(6/10)</span></span>
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({
                                        active: activeTab === "3",
                                        })}
                                        onClick={() => {
                                        toggle("3")
                                        }}
                                    >
                                        <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                        <span className="d-none d-sm-block">File Uploads</span>
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                    <NavLink
                                        style={{ cursor: "pointer" }}
                                        className={classnames({
                                        active: activeTab === "4",
                                        })}
                                        onClick={() => {
                                        toggle("4")
                                        }}
                                    >
                                        <span className="d-block d-sm-none"><i className="far fa-envelope"></i></span>
                                        <span className="d-none d-sm-block">History</span>
                                    </NavLink>
                                    </NavItem>
                                    <Button type="submit" color="link">
                                        <i className="fas fa-paperclip">
                                        </i> 
                                    </Button>
                                </Nav>

                                <TabContent activeTab={activeTab} className="p-3 text-muted">
                                    <TabPane tabId="1">
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            <strong>
                                                Manufacturer
                                            </strong>
                                            </label>
                                        <div className="col-md-10">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            Adobe
                                            </label>
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            <strong>
                                                Product Key
                                            </strong>
                                            </label>
                                        <div className="col-md-10">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            
                                            </label>
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            <strong>
                                                Category
                                            </strong>
                                            </label>
                                        <div className="col-md-10">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            <Link to ="">
                                                Office-Software
                                            </Link>
                                            </label>
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            <strong>
                                                Licensed to Name
                                            </strong>
                                            </label>
                                        <div className="col-md-10">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            
                                            </label>
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            <strong>
                                                Licensed to Email
                                            </strong>
                                            </label>
                                        <div className="col-md-10">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            
                                            </label>
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            <strong>
                                                Supplier
                                            </strong>
                                            </label>
                                        <div className="col-md-10">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            <Link to ="/comingsoon">
                                                Primetech
                                            </Link>
                                            </label>
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            <strong>
                                                Expiration Date
                                            </strong>
                                            </label>
                                        <div className="col-md-10">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            
                                            </label>
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            <strong>
                                                Termination Date
                                            </strong>
                                            </label>
                                        <div className="col-md-10">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            
                                            </label>
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            <strong>
                                                Purchase Date
                                            </strong>
                                            </label>
                                        <div className="col-md-10">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            
                                            </label>
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            <strong>
                                                Purchase Cost
                                            </strong>
                                            </label>
                                        <div className="col-md-10">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            
                                            </label>
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            <strong>
                                                Order Number
                                            </strong>
                                            </label>
                                        <div className="col-md-10">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            
                                            </label>
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            <strong>
                                                Seats
                                            </strong>
                                            </label>
                                        <div className="col-md-10">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            
                                            </label>
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label"
                                        >
                                            <strong>
                                                Maintained
                                            </strong>
                                            </label>
                                        <div className="col-md-10">
                                        <i className="mdi mdi-close" ></i>
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-2 col-form-label mx-2"
                                        >
                                            No
                                            </label>
                                        </div>
                                    </Row>
                                    </TabPane>
                                    <TabPane tabId="2" className="p-3">
                                    </TabPane>
                                    <TabPane tabId="3" className="p-3">
                                        <MDBDataTable responsive striped bordered data={data1} />
                                    </TabPane>
                                    <TabPane tabId="4" className="p-3">
                                        <MDBDataTable responsive striped bordered data={data} />
                                    </TabPane>
                            </TabContent>
                            </CardBody>
                        </Card>                       
                    </Col>
                    <Col className="justify-content-center mx-0" lg="2">
                    <Row className="my-3">
                        <Button type="submit" color="outline-primary">
                            Edit
                        </Button>
                    </Row>
                    <Row className="my-3">
                        <Button type="submit" color="outline-secondary">
                            Checkout Seats
                        </Button>
                    </Row>
                    <Row className="my-3">
                        <Button type="submit" color="outline-secondary">
                            Checkout All Seats
                        </Button>
                    </Row>
                    <Row className="my-3">
                        <Button type="submit" color="outline-dark">
                            Checkin All Seats
                        </Button>
                    </Row>
                    <Row className="my-3">
                        <Button type="submit" color="outline-danger" disabled={true}>
                            Delete
                        </Button>
                    </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ViewLicenses
