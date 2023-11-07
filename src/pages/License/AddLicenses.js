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

import { useDispatch } from "react-redux"

import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

import { addLicense } from "../../store/actions";

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const AddLicenses = () => {
    const inpRow = [{ name: "", file: "" }]
    const [startDate, setstartDate] = useState(new Date())
    const [endDate, setendDate] = useState(new Date())
    const [inputFields, setinputFields] = useState(inpRow)
    const [selectedGroup, setselectedGroup] = useState(null);
    const [selectedGroup1, setselectedGroup1] = useState(null);
    const [selectedGroup2, setselectedGroup2] = useState(null);

    const optionGroup = [
        {
            options: [
                { label: "Antivirus", value: "Antivirus" },
                { label: "Office", value: "Office" },
                { label: "Graphics", value: "Graphics" },
                { label: "Management", value: "Management" },
            ],
        },
    ];

    const optionGroup1 = [
        {
            options: [
                { label: "Adobe", value: "Adobe" },
                { label: "Microsoft", value: "Microsoft" },
                { label: "Avast", value: "Avast" },
                { label: "Zoho", value: "Zoho" },
            ],
        },
    ];

    const optionGroup2 = [
        {
            options: [
                { label: "IVM", value: "IVM" },
                { label: "Interwin", value: "Interwin" },
                { label: "Micron", value: "Micron" },
                { label: "Primetech", value: "Primetech" },
            ],
        },
    ];

    const [softwareName, setSoftwareName] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [productKey, setProductKey] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [supplier, setSupplier] = useState('');
    const [licensedName, setLicensedName] = useState('');
    const [licensedEmail, setLicensedEmail] = useState('');
    const [purchaseOrderNo, setPurchaseOrderNo] = useState('');
    const [purchaseCost, setPurchaseCost] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [terminationDate, setTerminationDate] = useState('');
    const [reviewedBy, setReviewedBy] = useState('');
    const [seats, setSeats] = useState('');
    const [remarks, setRemarks] = useState('');

    const licenseInfo = {
        softwareName,
        categoryName,
        productKey,
        manufacturer,
        supplier,
        licensedName,
        licensedEmail,
        seats,
        expirationDate,
        terminationDate,
        purchase: {
            purchaseOrderNo,
            purchaseDate,
            purchaseCost,
        },
        reviewedBy,
        remarks,
    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        
        e.preventDefault();

        dispatch(addLicense({license: licenseInfo}));

        window.location.href='/licenses/list';
   
    }


    function handleSelectGroup(selectedGroup) {
        setselectedGroup(selectedGroup);
    }

    function handleSelectGroup1(selectedGroup1) {
        setselectedGroup1(selectedGroup1);
    }

    function handleSelectGroup2(selectedGroup2) {
        setselectedGroup2(selectedGroup2);
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
                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-4">License Detail</CardTitle>
                                <form className="outer-repeater" onSubmit={handleSubmit}>
                                    <div data-repeater-list="outer-group" className="outer">
                                        <div data-repeater-item className="outer">
                                            <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Software Name
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="softwareName"
                                                        name="softwareName"
                                                        type="text"
                                                        value={softwareName}
                                                        onChange={(e) => setSoftwareName(e.target.value)}
                                                        className="form-control"
                                                        placeholder=""
                                                        required
                                                    />
                                                </Col>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Category Name
                                                </Label>
                                                <Col lg="4">
                                                    <Select
                                                            value={selectedGroup}
                                                            onChange={(e) => {
                                                                handleSelectGroup(e);
                                                                setCategoryName(e.value);
                                                            }}
                                                            options={optionGroup}
                                                            classNamePrefix="select2-selection"
                                                            />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label className="col-form-label col-lg-2">
                                                    Product Key
                                                </Label>
                                                <Col lg="10">
                                                    <Input
                                                        id="inventorybudget"
                                                        name="inventorybudget"
                                                        type="textarea"
                                                        value={productKey}
                                                        onChange={(e) => setProductKey(e.target.value)}
                                                        placeholder=""
                                                        className="form-control"
                                                        required
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Manufacturer
                                                </Label>
                                                <Col lg="4">
                                                    <Select
                                                            value={selectedGroup1}
                                                            onChange={(e) => {
                                                                handleSelectGroup1(e);
                                                                setManufacturer(e.value);
                                                            }}
                                                            options={optionGroup1}
                                                            classNamePrefix="select2-selection"
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
                                                            value={selectedGroup2}
                                                            onChange={(e) => {
                                                                handleSelectGroup2(e);
                                                                setSupplier(e.value);
                                                            }}
                                                            options={optionGroup2}
                                                            classNamePrefix="select2-selection"
                                                            />
                                                </Col>
                            
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Licensed to Name
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="text"
                                                        value={licensedName}
                                                        onChange={(e) => setLicensedName(e.target.value)}
                                                        className="form-control"
                                                        placeholder=""
                                                        required
                                                    />
                                                </Col>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Licensed to Email
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        value={licensedEmail}
                                                        type="text"
                                                        onChange={(e) => setLicensedEmail(e.target.value)}
                                                        className="form-control"
                                                        placeholder="@gmail.com"
                                                        required
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
                                                        value={purchaseOrderNo}
                                                        onChange={(e) => setPurchaseOrderNo(e.target.value)}
                                                        className="form-control"
                                                        placeholder="Order No..."
                                                        required
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
                                                        value={purchaseCost}
                                                        onChange={(e) => setPurchaseCost(e.target.value)}
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
                                                                onChange={(e) => {
                                                                    startDateChange(e);
                                                                    setPurchaseDate(e.value);
                                                                }}
                                                                required
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Label className="col-form-label col-lg-2">
                                                    Expiration Date
                                                </Label>
                                                <Col lg="4">
                                                    <Row>
                                                        <Col md={8} className="pr-0">
                                                            <DatePicker
                                                                className="form-control"
                                                                selected={endDate}
                                                                onChange={(e) => {
                                                                    endDateChange(e);
                                                                    setExpirationDate(e.value);
                                                                }}
                                                                required
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label className="col-form-label col-lg-2">
                                                    Termination Date
                                                </Label>
                                                <Col lg="4">
                                                    <Row>
                                                        <Col md={6} className="pr-0">
                                                            <DatePicker
                                                                className="form-control"
                                                                selected={endDate}
                                                                onChange={(e) => {
                                                                    endDateChange(e);
                                                                    setTerminationDate(e.value);
                                                                }}
                                                                required
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Asset Reviewed By
                                                </Label>
                                                <Col lg="4">
                                                    <Select
                                                        value={selectedGroup2}
                                                        onChange={(e) => {
                                                            handleSelectGroup2(e);
                                                            setReviewedBy(e.value)
                                                        }}
                                                        options={optionGroup2}
                                                        classNamePrefix="select2-selection"
                                                    />
                                                </Col>
                                            </FormGroup>

                                            <FormGroup className="mb-4" row>
                                                <Label className="col-form-label col-lg-2">
                                                    Seats
                                                </Label>
                                                <Col lg="4">
                                                    <Row>
                                                        <Col md={3} className="pr-0">
                                                            <Input
                                                                id="inventoryname"
                                                                name="inventoryname"
                                                                value={seats}
                                                                type="text"
                                                                onChange={(e) => setSeats(e.target.value)}
                                                                className="form-control"
                                                                placeholder=""
                                                                required
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Label className="col-form-label col-lg-2">
                                                    Remarks
                                                </Label>
                                                <Col lg="4">
                                                    <Input
                                                        id="inventoryname"
                                                        name="inventoryname"
                                                        type="textarea"
                                                        value={remarks}
                                                        onChange={(e) => setRemarks(e.target.value)}
                                                        className="form-control"
                                                        placeholder=""
                                                        required
                                                    />
                                                </Col>
                                            </FormGroup>                              
                                        </div>
                                    </div>
                                    <Row className="justify-content-end align-self-center">
                                    <Col lg="4">
                                        <Button 
                                            className="mt-2 "
                                            type="submit" 
                                            color="outline-primary"
                                            >
                                            Add
                                        </Button>
                                        <Button 
                                            className="mt-2 mx-1"
                                            type="submit" 
                                            color="outline-danger">
                                            Cancel
                                        </Button>
                                        <Button 
                                            type="submit" 
                                            className="mt-2 " 
                                            color="outline-dark">
                                            <i className="dripicons-export fa-sm mx-1">
                                            </i>
                                                PDF
                                        </Button>
                                        <Button 
                                            type="submit" 
                                            className="mt-2 mx-1" 
                                            color="outline-dark">
                                            <i className="bx bxs-download fa-lg"></i>
                                        </Button>
                                        <Button 
                                            type="submit" 
                                            className="mt-2 " 
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
        </>
    )
}

export default AddLicenses
