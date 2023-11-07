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



const Laptop = () => {
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
         <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-4"> Laptop Details</CardTitle>
                                <form className="outer-repeater">
                                    <div data-repeater-list="outer-group" className="outer">
                                        <div data-repeater-item className="outer">
                                            <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Laptop ID
                                                </Label>
                                                <div className="col-lg-4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder=""
                                                    />
                                                </div>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Brand Name
                                                </Label>
                                                <div className="col-lg-4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder=""
                                                    />
                                                </div>
                                                
                                                
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                
                                                <label
                                                     htmlFor="inventorybudget"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Clock Speed
                                                </label>
                                                <div className="col-lg-4">
                                                    <Input
                                                        id="inventorybudget"
                                                        name="inventorybudget"
                                                        type="text"
                                                        placeholder=""
                                                        className="form-control"
                                                    />
                                                </div>
                                                
                                                <label
                                                    htmlFor="inventorybudget"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Storage
                                                </label>
                                                <div className="col-lg-4">
                                                    <Input
                                                        id="inventorybudget"
                                                        name="inventorybudget"
                                                        type="text"
                                                        placeholder=""
                                                        className="form-control"
                                                    />
                                                </div>
                                                
                                            </FormGroup>


                                            <FormGroup className="mb-4" row>
                                                <label
                                                    htmlFor="inventorybudget"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Memory
                                                </label>
                                                <div className="col-lg-4">
                                                    <Input
                                                        id="inventorybudget"
                                                        name="inventorybudget"
                                                        type="text"
                                                        placeholder=""
                                                        className="form-control"
                                                    />
                                                </div>
                                                <label
                                                    htmlFor="inventorybudget"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Serial Number
                                                </label>
                                                <div className="col-lg-4">
                                                    <Input
                                                        id="inventorybudget"
                                                        name="inventorybudget"
                                                        type="text"
                                                        placeholder="Enter Laptop Serial Number"
                                                        className="form-control"
                                                    />
                                                </div>
                                                
                                            </FormGroup>
                                         
                                        </div>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
    )
}

export default Laptop