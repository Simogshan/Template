import React, { useState } from "react"
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Input,
    FormGroup,
    Label,
    Button,
} from "reactstrap"

import Select from "react-select";


// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const AddVendors = () => {
    const inpRow = [{ name: "", file: "" }]
    const [startDate, setstartDate] = useState(new Date())
    const [endDate, setendDate] = useState(new Date())
    const [inputFields, setinputFields] = useState(inpRow)
    const [selectedGroup, setselectedGroup] = useState(null);
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

const optionGroup1 = [
  {
    options: [
      { label: "IVM", value: "IVM" },
      { label: "Interwin", value: "Interwin" },
      { label: "Micron", value: "Micron" },
      { label: "Primetech", value: "Primetech" },
    ],
  },
];

    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }


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

    return (
        <>
            <div className="page-content">

                {/* Render Breadcrumbs */}
                <Breadcrumbs title="Vendor" breadcrumbItem="Add Vendor" />

                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-4">Add Vendor</CardTitle>
                                <form className="outer-repeater">
                                    <div data-repeater-list="outer-group" className="outer">
                                        <div data-repeater-item className="outer">
                                            <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Company Name
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder=""
                                                    />
                                                </Col>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Contact Person
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder=""
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Address Line 1 
                                                </Label>
                                                <Col lg="4">   
                                                    <Input 
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="14/A,1st Cross Street"
                                                    />
                                                </Col>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Address Line 2
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Kodambakkam"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    City
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="City"
                                                    />
                                                </Col>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Pin Code
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Pin Code"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    State
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Tamil Nadu"
                                                    />
                                                </Col>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Country
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="India"
                                                    />
                                                </Col>
                                            </FormGroup>

                                             <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Contact Number
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="+91-XXXXX XXXXX"
                                                    />
                                                </Col>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Email
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="@gmail.com"
                                                    />
                                                </Col>
                                            </FormGroup>
                                           
                                            <FormGroup className="mb-4" row>
                                                <Label className="col-form-label col-lg-2">
                                                    Notes
                                                </Label>
                                                <Col lg="10">
                                                    <Input
                                                        id="inventorybudget"
                                                        name="inventorybudget"
                                                        type="text-box"
                                                        placeholder="Supplier Description (Optional)"
                                                        className="form-control"
                                                    />
                                                </Col>
                                            </FormGroup>
                                        
                                            
                                            {/*<FormGroup className="mb-4" row>
                                                <label
                                                    htmlFor="inventorybudget"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Budget
                                                </label>
                                                <div className="col-lg-10">
                                                    <Input
                                                        id="inventorybudget"
                                                        name="inventorybudget"
                                                        type="text"
                                                        placeholder="Enter Inventory Budget..."
                                                        className="form-control"
                                                    />
                                                </div>
                                            </FormGroup> */}
                                        </div>
                                    </div>
                                </form>
                                <Row className="justify-content-end">
                                    <Col lg="3">
                                        <Button type="submit" color="link">
                                            Add Vendor
                                        </Button>
                                        <Button type="submit" color="link">
                                            Cancel
                                        </Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default AddVendors
