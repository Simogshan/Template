import React, { useEffect, useState } from "react"
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    FormGroup,
    Label,
} from "reactstrap"

import Select from "react-select";

import InventorySwitch from "./InventorySwitch";

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const AddInventoryAlt = () => {

    const inpRow = [{ name: "", file: "" }]
    const [inputFields, setinputFields] = useState(inpRow)

    const [selectedInventory, setSelectedInventory] = useState('');
    const optionInventory = [
        {
          options: [
            { label: "Laptop", value: "laptop" },
            { label: "Licenses", value: "licenses" },
            { label: "Accessories", value: "accessories" },
          ],
        },
    ];

    const handleInventoryChange = (selectedInventory) => {
        console.log(selectedInventory)
        setSelectedInventory(selectedInventory.value);
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
                /<Breadcrumbs title="Assets" breadcrumbItem="New Asset" />

                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-4">Create New Asset</CardTitle>
                                <form className="outer-repeater">
                                    <div data-repeater-list="outer-group" className="outer">
                                        <div data-repeater-item className="outer">
                                            <FormGroup className="mb-4" row>
                                                <Label
                                                    htmlFor="inventoryname"
                                                    className="col-form-label col-lg-2"
                                                >
                                                    Asset Type
                                                </Label>
                                                <Col lg="10">
                                                    <Select 
                                                        value={selectedInventory} 
                                                        onChange={handleInventoryChange} 
                                                        options={optionInventory} 
                                                        classNamePrefix="select2-selection" 
                                                    />
                                                </Col>                                                               
                                                
                                            </FormGroup>
                                        </div>
                                    </div>
                                </form>
                            </CardBody>

                        </Card>
                    </Col>
                </Row>
                <InventorySwitch 
                    selectedInventory={selectedInventory}
                />

            </div>
        </>
    )
}

export default AddInventoryAlt
