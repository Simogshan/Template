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

const AddAssets = () => {
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
                <Breadcrumbs title="Assets" breadcrumbItem="Add Assets" />

                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-4">Add Assets</CardTitle>
                                <form className="outer-repeater">
                                    <div data-repeater-list="outer-group" className="outer">
                                        <div data-repeater-item className="outer">
                                            <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Asset Entered By
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Entered By..."
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
                                                            value={selectedGroup}
                                                            onChange={() => {
                                                                handleSelectGroup();
                                                            }}
                                                            options={optionGroup}
                                                            classNamePrefix="select2-selection"
                                                            />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Asset Name
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="LV00A00000"
                                                    />
                                                </Col>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Supplier
                                                </Label>
                                                <Col lg="4">
                                                    <Select
                                                            value={selectedGroup}
                                                            onChange={() => {
                                                                handleSelectGroup();
                                                            }}
                                                            options={optionGroup1}
                                                            classNamePrefix="select2-selection"
                                                            />
                                                </Col>
                            
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Purchase Order No
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Order No..."
                                                    />
                                                </Col>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Purchase Cost
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Rs."
                                                    />
                                                </Col>
                                            </FormGroup>
                                           
                                           <FormGroup className="mb-4" row>
                                                <Label className="col-form-label col-lg-2">
                                                    Purchase Date
                                                </Label>
                                                <Col lg="4">
                                                    <Row>
                                                        <Col md={8} className="pr-0">
                                                            <DatePicker
                                                                className="form-control"
                                                                selected={startDate}
                                                                onChange={startDateChange}
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Label className="col-form-label col-lg-2">
                                                    EOL Date
                                                </Label>
                                                <Col lg="4">
                                                    <Row>
                                                        <Col md={8} className="pl-0">
                                                            <DatePicker
                                                                className="form-control"
                                                                selected={endDate}
                                                                onChange={endDateChange}
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label className="col-form-label col-lg-2">
                                                    Warranty Start-Date
                                                </Label>
                                                <Col lg="4">
                                                    <Row>
                                                        <Col md={8} className="pr-0">
                                                            <DatePicker
                                                                className="form-control"
                                                                selected={startDate}
                                                                onChange={startDateChange}
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Col>

                                                <Label className="col-form-label col-lg-2">
                                                    Warranty End-Date
                                                </Label>
                                                <Col lg="4">
                                                    <Row>
                                                        <Col md={8} className="pl-0">
                                                            <DatePicker
                                                                className="form-control"
                                                                selected={endDate}
                                                                onChange={endDateChange}
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </FormGroup>

                                            <div className="inner-repeater mb-4">
                                                <div className="inner form-group mb-0 row">
                                                    <Label className="col-form-label col-lg-2">
                                                        Asset Reviewed By
                                                    </Label>
                                                    <div
                                                        className="inner col-lg-10 ml-md-auto"
                                                        id="repeater"
                                                    >
                                                        {inputFields.map((field, key) => (
                                                            <div
                                                                key={key}
                                                                id={"nested" + key}
                                                                className="mb-3 row align-items-center"
                                                            >
                                                                <Col md="4">
                                                                    <input
                                                                        type="text"
                                                                        className="inner form-control"
                                                                        defaultValue={field.name}
                                                                        placeholder="Enter Reviewer Name..."
                                                                    />
                                                                </Col>
                                                                <Label
                                                                    htmlFor="inventoryname"
                                                                    className="col-form-label col-lg-2"
                                                                    >
                                                                    Attach Documents
                                                                </Label>
                                                                <Col md="4">
                                                                    <div className="mt-4 mt-md-0">
                                                                        <Input
                                                                            type="file"
                                                                            className="form-control"
                                                                            defaultValue={field.file}
                                                                        />
                                                                    </div>
                                                                </Col>
                                                                <Col md="2">
                                                                    <div className="mt-2 mt-md-0 d-grid">
                                                                        <Button
                                                                            color="light"
                                                                            className="inner"
                                                                            onClick={() => {
                                                                                handleAddFields()
                                                                            }}
                                                                        >
                                                                            Upload File
                                                                        </Button>
                                                                    </div>
                                                                </Col>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            <FormGroup className="mb-4" row>
                                                <Label className="col-form-label col-lg-2">
                                                    Remarks
                                                </Label>
                                                <Col lg="10">
                                                    <Input
                                                        id="inventorybudget"
                                                        name="inventorybudget"
                                                        type="text-box"
                                                        placeholder="Asset Description"
                                                        className="form-control"
                                                    />
                                                </Col>
                                            </FormGroup>
                                        
                                            </div>
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
                                            Add Asset
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

export default AddAssets
