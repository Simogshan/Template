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

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const CreateInventory = () => {
    const inpRow = [{ name: "", file: "" }]
    const [startDate, setstartDate] = useState(new Date())
    const [endDate, setendDate] = useState(new Date())
    const [inputFields, setinputFields] = useState(inpRow)

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
                <Breadcrumbs title="Inventory" breadcrumbItem="Add Inventory" />

                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-4">Add Inventory</CardTitle>
                                <form className="outer-repeater">
                                    <div data-repeater-list="outer-group" className="outer">
                                        <div data-repeater-item className="outer">
                                            <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Inventory Name
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Inventory Name..."
                                                    />
                                                </Col>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Brand Name
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Brand Name..."
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <label
                                                    htmlFor="inventorybudget"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Memory
                                                </label>
                                                <div className="col-lg-2">
                                                    <Input
                                                        id="inventorybudget"
                                                        name="inventorybudget"
                                                        type="text"
                                                        placeholder="RAM"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <label
                                                    htmlFor="inventorybudget"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Clock Speed
                                                </label>
                                                <div className="col-lg-2">
                                                    <Input
                                                        id="inventorybudget"
                                                        name="inventorybudget"
                                                        type="text"
                                                        placeholder="GHz.."
                                                        className="form-control"
                                                    />
                                                </div>
                                                <label
                                                    htmlFor="inventorybudget"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Storage
                                                </label>
                                                <div className="col-lg-2">
                                                    <Input
                                                        id="inventorybudget"
                                                        name="inventorybudget"
                                                        type="text"
                                                        placeholder="SDD / HDD"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </FormGroup>
                                           
                                            <FormGroup className="mb-4" row>
                                                <Label className="col-form-label col-lg-2">
                                                    Warranty Start-Date
                                                </Label>
                                                <Col lg="10">
                                                    <Row>
                                                        <Col md={5} className="pr-0">
                                                            <DatePicker
                                                                className="form-control"
                                                                selected={startDate}
                                                                onChange={startDateChange}
                                                            />
                                                        </Col>

                                                <Label className="col-form-label col-lg-2">
                                                    Warranty End-Date
                                                </Label>
                                                        <Col md={5} className="pl-0">
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
                                                    Inventory Description
                                                </Label>
                                                <Col lg="12">
                                                    <Input
                                                        id="inventorybudget"
                                                        name="inventorybudget"
                                                        type="text-box"
                                                        placeholder="Enter Inventory Description"
                                                        className="form-control"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <div className="inner-repeater mb-4">
                                                <div className="inner form-group mb-0 row">
                                                    <Label className="col-form-label col-lg-2">
                                                        Laptop ID
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
                                                                        placeholder="Enter Laptop Barcode No..."
                                                                    />
                                                                </Col>
                                                                <Label
                                                                    htmlFor="inventoryname"
                                                                    className="col-form-label col-lg-2"
                                                                    >
                                                                    Barcode Photo
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
                                                                            color="success"
                                                                            className="inner"
                                                                            onClick={() => {
                                                                                handleAddFields()
                                                                            }}
                                                                        >
                                                                            Add Number
                                                                        </Button>
                                                                    </div>
                                                                </Col>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                        
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
                                    <Col lg="2">
                                        <Button type="submit" color="primary">
                                            Add Inventory
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

export default CreateInventory
