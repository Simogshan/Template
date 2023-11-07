import React, { useState } from "react"
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

import AccessoriesSwitch from "./AccessoriesSwitch";

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const Accessories = () => {

    const inpRow = [{ name: "", file: "" }]
    const [inputFields, setinputFields] = useState(inpRow)

    const [selectedAccessories, setSelectedAccessories] = useState('');
    const optionAccessories = [
        {
          options: [
            { label: "Mouse", value: "mouse" },
            { label: "Keyboard", value: "keyboard" },
            { label: "Headphones", value: "headphones" },
          ],
        },
    ];

    const handleAccessoryChange = (selectedAccessories) => {
        console.log(selectedAccessories)
        setSelectedAccessories(selectedAccessories.value);
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

    return (
        <>
           
                <Row>
                    <Col lg="12">
                        <Card>
                            <CardBody>
                                <CardTitle className="mb-4"> Accessories </CardTitle>
                                    <form className="outer-repeater">
                                        <div data-repeater-list="outer-group" className="outer">
                                            <div data-repeater-item className="outer">
                                                <FormGroup className="mb-4" row>
                                                    <Label
                                                        htmlFor="inventoryname"
                                                        className="col-form-label col-lg-2"
                                                    >
                                                        Accessory Type
                                                    </Label>
                                                    <Col lg="10">
                                                        <Select 
                                                            value={selectedAccessories} 
                                                            onChange={handleAccessoryChange} 
                                                            options={optionAccessories} 
                                                            classNamePrefix="select2-selection" 
                                                        />
                                                    </Col>                                               
                                                </FormGroup>                                                                             
                                            </div>                                            
                                        </div>                               
                                    </form>
                            </CardBody>
                            <AccessoriesSwitch 
                                selectedAccessories={selectedAccessories}
                            /> 
                        </Card>
                    </Col>
                </Row>

            
        </>     
    )
}

export default Accessories