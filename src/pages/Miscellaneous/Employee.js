import React, { useState } from "react"

import {
    Row,
    Col,
    Input,
    Label,
    Button,
} from "reactstrap"

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const Employee= ({ employee, onRemove, onChange }) => {

    const inpRow = [{ name: "", file: "" }]
    const [inputFields, setinputFields] = useState(inpRow)

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
            <form className="repeater"  >
                <div data-repeater-list="group-a">
                        <div data-repeater-item className="row" >
                            <div className="mb-3 col-lg-2">
                                <Label
                                    htmlFor="inventoryname"
                                    className=""
                                >
                                    First Name
                                <span style={{color:"red"}}>*</span>
                                </Label> 
                                <Input
                                        id="First Name"
                                        name="firstName"
                                        type="text"
                                        className="form-control"
                                        value={employee.firstName}
                                        onChange ={(e) => onChange(e,employee)}
                                        placeholder=""
                                /> 
                            </div>
                            <div className="mb-3 col-lg-2">
                                <Label
                                    htmlFor="inventoryname"
                                    className=""
                                >
                                    Last Name
                                </Label> 
                                <Input
                                        id="Last Name"
                                        name="lastName"
                                        type="text"
                                        className="form-control"
                                        value={employee.lastName}
                                        onChange={(e) => onChange(e,employee)}
                                        placeholder=""
                                /> 
                            </div>
                            <div className="mb-3 col-lg-2">
                                <Label
                                    htmlFor="inventoryname"
                                    className=""
                                >
                                    Designation
                                </Label> 
                                <Input
                                        id="Designation"
                                        name="designation"
                                        type="text"
                                        className="form-control"
                                        value={employee.designation}
                                        onChange={(e) => onChange(e,employee)}
                                        placeholder=""
                                /> 
                            </div>
                            <div className="mb-3 col-lg-2">
                                <Label
                                    htmlFor="inventoryname"
                                    className=""
                                >
                                    Department
                                </Label> 
                                <Input
                                        id="Department"
                                        name="department"
                                        type="text"
                                        className="form-control"
                                        value={employee.department}
                                        onChange={(e) => onChange(e,employee)}
                                        placeholder=""
                                /> 
                            </div>
                            <div className="mb-3 col-lg-2">
                                <Label
                                    htmlFor="inventoryname"
                                    className=""
                                >
                                    Project
                                </Label> 
                                <Input
                                        id="Project"
                                        name="project"
                                        type="text"
                                        className="form-control"
                                        value={employee.project}
                                        onChange={(e) => onChange(e,employee)}
                                        placeholder=""
                                        required
                                /> 
                            </div>
                            <div className="mb-3 col-lg-1">
                                <Label
                                    htmlFor="inventoryname"
                                    className=""
                                >
                                    Priority
                                </Label> 
                                <Input
                                        id="Priority"
                                        name="priority"
                                        type="text"
                                        className="form-control"
                                        value={employee.priority}
                                        onChange={(e) => onChange(e,employee)}
                                        placeholder=""
                                        required
                                /> 
                            </div>
                            <Col lg={1} className="align-self-center">
                                <div className="d-grid"  > 
                                    <Button 
                                        type="submit" 
                                        className="mt-2" 
                                        color="outline-danger"
                                        onClick={() => onRemove(employee)}>
                                        <i className="mdi mdi-delete fa-lg"></i>
                                    </Button>
                                </div>
                            </Col>
                        </div>
                </div>
            </form>
        </Row>
    )
}

export default Employee