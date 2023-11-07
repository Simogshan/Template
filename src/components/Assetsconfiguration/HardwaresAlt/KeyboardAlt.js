import React, { useState } from "react"
import {
    Row,
    Col,
    CardBody,
    CardTitle,
    Input,
    Label,
    Button,
} from "reactstrap"

import { useDispatch } from "react-redux"

import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

import Select from "react-select";
import { addKeyboard } from "../../../store/actions"


const KeyboardsAlt = () => {

    const inpRow = [{ name: "", file: "" }]
    const [inputFields, setinputFields] = useState(inpRow)

    const [selectedConnection, setSelectedConnection] = useState('');
    const optionConnectivity = [
        {
          options: [
            { label: "USB", value: "USB" },
            { label: "Wired", value: "wired" },
            { label: "Wireless", value: "wireless" },
            { label: "Bluetooth", value: "bluetooth" },
          ],
        },
    ];

    const handleConnectionChange = (selectedConnection) => {
        console.log(selectedConnection)
        setSelectedConnection(selectedConnection.value);
    };

    const [keyboardsId, setKeyboardsId] = useState('');
    const [keyboardBrand, setKeyboardBrand] = useState('');
    const [keyboardModel, setKeyboardModel] = useState('');
    const [keyboardSerialNumber, setKeyboardSerialNumber] = useState('');
    const [keyboardConnectivity, setkeyboardConnectivity] = useState('');

    const keyboardInfo = {
        keyboardsId,
        keyboardBrand,
        keyboardModel,
        keyboardSerialNumber,
        keyboardConnectivity,
    };

    const initialKeyboard = {
        keyboardId: '',
        brandName: '',
        modelName: '',
        serialNumber:'',
        connectivity:'',
    };

    const [asset, setAsset] = useState({
        items: [],
    });

    const handleKeyboardChange = (e, index) => {
        const { name, value } = e.target;
        const updatedKeyboards = [...asset.items];
        updatedKeyboards[index][name] = value;
    };

    const addKeyboards = (e) => {
        e.preventDefault();
        
        const newKeyboard = { ...initialKeyboard };
        asset.items.push(newKeyboard);

        // Auto-generate serial number based on the number of items
        newKeyboard.keyboardId = asset.items.length;

        setAsset({ ...asset });
    };

    const removeKeyboards = (index) => {
        const updatedKeyboards = [...asset.items];
        updatedKeyboards.splice(index, 1);
        setAsset({ ...asset, items: updatedKeyboards });

        // Update serial numbers after removing an item
        for (let i = 0; i < updatedKeyboards.length; i++) {
        updatedKeyboards[i].keyboardId = i + 1;
        }
        setAsset({ ...asset, items: updatedKeyboards });

    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        
        e.preventDefault();

        dispatch(addKeyboard({keyboard: keyboardInfo}));

        window.location.href='/licenses/list';
   
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
                <CardBody>
                    <CardTitle className="mb-4"> Keyboards Details</CardTitle>
                    <form className="outer-repeater" onSubmit={handleSubmit}>
                        <div data-repeater-list="group-a">
                            {asset.items.map((item, index) => (
                                <div data-repeater-item className="row" key={index}>
                                    <div className="mb-3 col-lg-2">
                                        <Label
                                            htmlFor="inventoryname"
                                            className=""
                                        >
                                            Keyboard ID
                                        </Label> 
                                        <Input
                                                id="id"
                                                name="keyboardid"
                                                type="text"
                                                className="form-control"
                                                value={item.keyboardId}
                                                onChange={(e) => setKeyboardsId(e.target.value)}
                                                placeholder=""
                                                readOnly
                                        /> 
                                    </div>
                                    <div className="mb-3 col-lg-2">
                                            <Label
                                                htmlFor="inventoryname"
                                                className=""
                                            >
                                                Brand Name
                                            </Label> 
                                            <Input
                                                    id="brandName"
                                                    name="brandName"
                                                    type="text"
                                                    className="form-control"
                                                    value={item.brandName}
                                                    onChange={(e) => {handleKeyboardChange(e, index); setKeyboardBrand(e.target.value); }}
                                                    placeholder=""
                                                    required
                                            /> 
                                    </div>
                                    <div className="mb-3 col-lg-2">
                                            <Label
                                                htmlFor="inventoryname"
                                                className=""
                                            >
                                                Model
                                            </Label> 
                                            <Input
                                                    id="modelName"
                                                    name="modelName"
                                                    type="text"
                                                    className="form-control"
                                                    value={item.modelName}
                                                    onChange={(e) => {handleKeyboardChange(e, index); setKeyboardModel(e.target.value); }}
                                                    placeholder=""
                                                    required
                                            /> 
                                    </div>
                                    <div className="mb-3 col-lg-3">
                                            <Label
                                                htmlFor="inventoryname"
                                                className=""
                                            >
                                                Serial Number
                                            </Label> 
                                            <Input
                                                    id="serialNumber"
                                                    name="serialNumber"
                                                    type="text"
                                                    className="form-control"
                                                    value={item.serialNumber}
                                                    onChange={(e) => {handleKeyboardChange(e, index); setKeyboardSerialNumber(e.target.value); }}
                                                    placeholder=""
                                                    required
                                            /> 
                                    </div>
                                    <div className="mb-3 col-lg-2 my-auto align-self-center">
                                            <Label
                                                htmlFor="inventoryname"
                                                className=""
                                            >
                                            Connectivity
                                            </Label> 
                                            <Select
                                                    id="connectionMode"
                                                    name="connectionMode"
                                                    className="select2-selection"
                                                    value={item.connectivity}
                                                    onChange={(e) => {handleKeyboardChange(e, index); handleConnectionChange(); setkeyboardConnectivity(e.target.value); }}
                                                    options={optionConnectivity}
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
                                                onClick={() => removeKeyboards(index)}>
                                                <i className="mdi mdi-delete fa-lg"></i>
                                            </Button>
                                        </div>
                                    </Col>                     
                                </div>
                            ))}
                        </div>
                        <Row className="justify-content-end align-self-center">
                            <Col lg="5">
                                <Button 
                                    type="submit" 
                                    className="mt-2" 
                                    color="outline-success"
                                    onClick={addKeyboards}>
                                    Add...
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
                                    className="mt-2 mx-1" 
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
                                    className="mt-2 mx-1" 
                                    color="outline-dark">
                                    <i className="mdi mdi-reload fa-lg"></i>
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </CardBody>
            </Col>                   
        </Row>
    )
}

export default KeyboardsAlt