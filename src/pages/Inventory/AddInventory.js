import React, { useEffect, useState } from "react"
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

import InventorySwitch from "./InventorySwitch";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const AddInventory = () => {

    const inpRow = [{ name: "", file: "" }]
    const [inputFields, setinputFields] = useState(inpRow)

    const [selectedInventory, setSelectedInventory] = useState('');
    const optionInventory = [
        {
          options: [
            { label: "Laptop", value: "laptop" },
            { label: "Keyboard", value: "keyboard" },
            { label: "Headphones", value: "headphones" },
          ],
        },
    ];


    const handleInventoryChange = (selectedInventory) => {
        console.log(selectedInventory)
        setSelectedInventory(selectedInventory.value);
    };

    const [rowCount, setRowCount] = useState(1); // Initialize with one row
    const [inputValues, setInputValues] = useState(Array(1).fill(''));
 
    const handleRowCountChange = (event) => {
        // Parse the user's Input into an integer, default to 1 if it's not a valid number
        const count = parseInt(event.target.value) || 1;

        // Update the rowCount state  with the user's Input 
        setRowCount(count);
    };
 
    const handleConfirm = (e) => {
        e.preventDefault(); // Prevent the default form submission behaviour

        // Create an array of empty strings based on the current rowCount
        const emptyValues = Array(rowCount).fill('');

        // Update the inputValues state with the new array of empty values 
        setInputValues(emptyValues);
    };
 
    const handleInputChange = (index, event) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);
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

    const handleSubmit = (e) => {
    //e.preventDefault();
 
      // Dispatch the addUser action
    //dispatch(addUser({ user: newUser }));

      // Navigate to the userList component after adding
    window.location.href='/ListInventory';

  };

    return (
        <>
            <div className="page-content">

                {/* Render Breadcrumbs */}
                /<Breadcrumbs title="Inventory" breadcrumbItem="Add Inventory" />

                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-4">Create Add Inventory</CardTitle>
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
                                                    <Select 
                                                        value={selectedInventory} 
                                                        onChange={handleInventoryChange} 
                                                        options={optionInventory} 
                                                        classNamePrefix="select2-selection" 
                                                    />
                                                </Col>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Quantity
                                                </Label>
                                                <Col lg="2">
                                                    <Input
                                                        type="number"
                                                        min="1"
                                                        value={rowCount}
                                                        onChange={handleRowCountChange}
                                                    />                        
                                                </Col>
                                                <Col lg="2">
                                                    <Button onClick={handleConfirm} type="submit" color="outline-primary">
                                                        Confirm
                                                    </Button>
                                                </Col>
                                            </FormGroup>
                                        </div>
                                    </div>
                                </form>
                            </CardBody>

                        </Card>
                    </Col>
                </Row>
                {inputValues.map((value, index) => (
                    <div key={index}>
                        <InventorySwitch 
                            selectedInventory={selectedInventory}
                            value={value}
                            onChange={(e) => handleInputChange(index, e)}
                        />
                    </div>
                ))}
                <Row className="justify-content-end">
                    <Col lg="3">
                        <Button onSubmit={handleSubmit} type="submit" color="outline-primary">
                            Add Inventory
                        </Button>
                        <Button type="submit" className="mx-2" color="outline-danger">
                            Cancel
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default AddInventory
