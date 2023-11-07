import React, { useEffect, useState } from "react"
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    FormGroup,
    Input,
    Label,
    Button,
} from "reactstrap"

import Employee from "./Employee"

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const ServiceRequestForm = () => {

    const inpRow = [{ name: "", file: "" }]
    const [startDate, setstartDate] = useState(new Date())
    const [inputFields, setinputFields] = useState(inpRow)

    const startDateChange = date => {
        setstartDate(date)
    }

    const [serviceRequest, setServiceRequest] = useState({
        title: '',
        description: '',
        requeststatus:'',
        requiredDate:'',     
        employees: [], // Store employees as an array
    });

    const handleEmployeeChange = (e, employee) => {
        const { name, value } = e.target;
        const updatedEmployees = serviceRequest.employees.map((emp) =>
            emp === employee ? { ...emp, [name]: value } : emp
        );
        setServiceRequest({ ...serviceRequest, employees: updatedEmployees });
    };

    const addEmployee = () => {
        setServiceRequest({
            ...serviceRequest,
        employees: [
            ...serviceRequest.employees,
                {
                    firstName: '',
                    lastName: '',
                    designation: '',
                    department: '',
                    project: '',
                    priority:'',
                },
            ],
        });
    };

    const removeEmployee = (employeeToRemove) => {
        const updatedEmployees = serviceRequest.employees.filter(
            (emp) => emp !== employeeToRemove
        );
        setServiceRequest({ ...serviceRequest, employees: updatedEmployees });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submitting the service request with employees
        console.log(serviceRequest);
    };

    // Function for Create Input Fields
    function handleAddFields() {
        const item1 = { name: "", file: "" }
        setinputFields([...inputFields, item1])
    }

    // Function for Remove Input Fields
    function handleRemoveFields(idx) {
        document.getElementById("nested" + idx).style.display = "none"
    }
    useEffect(() => {

        console.log(inputFields)
    })

    return (
        <>
            <div className="page-content">

                {/* Render Breadcrumbs */}
                <Breadcrumbs title="Miscellaneous" breadcrumbItem="Service Request" />

                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-4">Service Request Form</CardTitle>
                                <form className="outer-repeater" onSubmit={handleSubmit}>
                                    <div data-repeater-list="outer-group" className="outer">
                                        <div data-repeater-item className="outer">
                                            <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Service Title
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="serviceTitle"
                                                        name="serviceTitle"
                                                        type="text"
                                                        value={serviceRequest.serviceTitle}
                                                        onChange={(e) => setServiceRequest({...serviceRequest, serviceTitle: e.target.value})}
                                                        className="form-control"
                                                        placeholder=""
                                                    />
                                                </Col>

                                                <Label className="col-form-label col-lg-2">
                                                    Required Date
                                                </Label>
                                                <Col lg="4">
                                                    <Row>
                                                        <Col className="pr-0">
                                                            <DatePicker
                                                                className="form-control"
                                                                selected={startDate}
                                                                onChange={(e) => {
                                                                    startDateChange(e);
                                                                    
                                                                }}
                                                                required
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Col>                                                           
                                                
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Required Status
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="requiredStatus"
                                                        name="requiredStatus"
                                                        type="textarea"
                                                        className="form-control"
                                                        placeholder=""
                                                    />
                                                </Col>

                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Description
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="description"
                                                        name="description"
                                                        type="textarea"
                                                        className="form-control"
                                                        placeholder=""
                                                    />
                                                </Col>

                                            </FormGroup>
                                        </div>
                                    </div>
                                    <CardTitle className="mb-4">Employees</CardTitle>
                                        {serviceRequest.employees.map((employee, index) => (
                                            <Employee
                                                key={index}
                                                employee={employee}
                                                onRemove={removeEmployee}
                                                onChange={handleEmployeeChange}
                                            />
                                        ))}
                                    <Row className="justify-content-end align-self-end">
                                    <Col lg="4">
                                        <Button 
                                            type="submit" 
                                            className="mt-2" 
                                            color="outline-success"
                                            onClick={addEmployee}
                                        >
                                            Add Employee
                                        </Button>
                                         <Button 
                                            className="mt-2 mx-1"
                                            type="submit" 
                                            color="outline-primary"
                                            >
                                            Submit
                                        </Button>
                                        <Button 
                                            className="mt-2 mx-1"
                                            type="submit" 
                                            color="outline-danger">
                                            Cancel
                                        </Button>
                                        <Button 
                                            type="submit" 
                                            className="mt-2" 
                                            color="outline-dark">
                                            <i className="mdi mdi-reload fa-lg"></i>
                                        </Button>
                                    </Col> 
                                </Row>    
                                </form>
                            </CardBody>

                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ServiceRequestForm
