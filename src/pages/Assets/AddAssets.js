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

//import Select from "react-select";

import { addAsset } from "../../store/assets/actions";

import { useDispatch } from 'react-redux';

//import { useNavigate } from 'react-router-dom';


// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

//import { Redirect } from 'react-router-dom';

const AddAssets = () => {

    const dispatch = useDispatch();
    //const navigate = useNavigate();

    const [assetName, setAssetName] = useState('');
    console.log(assetName)
    const inpRow = [{ name: "", file: "" }]
    const [inputFields, setinputFields] = useState(inpRow)

    
    const newAsset = {
      assetName,
    };
    // Handle form submission or dispatch an action here


  const handleSubmit = (e) => {
    e.preventDefault();
 
      // Dispatch the addUser action
    dispatch(addAsset({ asset: newAsset }));

      // Navigate to the userList component after adding
    window.location.href = "/assets/assign";

  };

    
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
                            <CardBody >
                                <CardTitle className="mb-4">Add Assets</CardTitle>
                                <form  onSubmit={handleSubmit} className="outer-repeater">
                                    <div data-repeater-list="outer-group" className="outer">
                                        <div data-repeater-item className="outer">
                                            

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
                                                        placeholder="Asset Name"
                                                        value={assetName}
                                                        onChange={(e) => setAssetName(e.target.value)}
                                                        required
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
                                    <Row className="justify-content-end">
                                        <Col lg="3">
                                            <Button type="submit"  color="link">
                                                submit
                                            </Button>
                                            <Button type="button" color="link">
                                                Cancel
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

export default AddAssets
