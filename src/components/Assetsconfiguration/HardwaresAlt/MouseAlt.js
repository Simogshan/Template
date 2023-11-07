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
import { addMouse } from "../../../store/actions"


const MouseAlt = () => {

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

    const [mousesId, setMousesId] = useState('');
    const [mouseBrand, setMouseBrand] = useState('');
    const [mouseModel, setMouseModel] = useState('');
    const [mouseSerialNumber, setMouseSerialNumber] = useState('');
    const [mouseConnectivity, setMouseConnectivity] = useState('');

    const mouseInfo = {
        mousesId,
        mouseBrand,
        mouseModel,
        mouseSerialNumber,
        mouseConnectivity,
    };

    const initialMouse = {
        mouseId: '',
        brandName: '',
        modelName: '',
        serialNumber:'',
        connectivity:'',
    };

    const [asset, setAsset] = useState({
        items: [],
    });

    const handleMouseChange = (e, index) => {
        const { name, value } = e.target;
        const updatedMice = [...asset.items];
        updatedMice[index][name] = value;
    };

    const addMice = (e) => {
        e.preventDefault();
        
        const newMouse = { ...initialMouse };
        asset.items.push(newMouse);

        // Auto-generate serial number based on the number of items
        newMouse.mouseId = asset.items.length;

        setAsset({ ...asset });
    };

    const removeMice = (index) => {
        const updatedMice = [...asset.items];
        updatedMice.splice(index, 1);
        setAsset({ ...asset, items: updatedMice });

        // Update serial numbers after removing an item
        for (let i = 0; i < updatedMice.length; i++) {
        updatedMice[i].keyboardId = i + 1;
        }
        setAsset({ ...asset, items: updatedMice });

    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        
        e.preventDefault();

        dispatch(addMouse({mouse: mouseInfo}));

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
                    <CardTitle className="mb-4"> Mouse Details</CardTitle>
                    <form className="outer-repeater" onSubmit={handleSubmit}>
                        <div data-repeater-list="group-a">
                            {asset.items.map((item, index) => (
                                <div data-repeater-item className="row" key={index}>
                                    <div className="mb-3 col-lg-2">
                                        <Label
                                            htmlFor="inventoryname"
                                            className=""
                                        >
                                            Mouse ID
                                        </Label> 
                                        <Input
                                                id="id"
                                                name="mouseId"
                                                type="text"
                                                className="form-control"
                                                value={item.mouseId}
                                                onChange={(e) => setMousesId(e.target.value)}
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
                                                    onChange={(e) => {handleMouseChange(e, index); setMouseBrand(e.target.value); }}
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
                                                    onChange={(e) => {handleMouseChange(e, index); setMouseModel(e.target.value); }}
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
                                                    onChange={(e) => {handleMouseChange(e, index); setMouseSerialNumber(e.target.value); }}
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
                                                    name="connectivity"
                                                    className="select2-selection"
                                                    value={selectedConnection}
                                                    onChange={(e) => {handleMouseChange(e, index); handleConnectionChange(e); setMouseConnectivity(e.value); }}
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
                                                onClick={() => removeMice(index)}>
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
                                    onClick={addMice}>
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

export default MouseAlt