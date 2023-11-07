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
import { addHeadphone } from "../../../store/actions"


const HeadphonesAlt = () => {

    const inpRow = [{ name: "", file: "" }]
    const [inputFields, setinputFields] = useState(inpRow)

    const [headphonesId, setHeadphonesId] = useState('');
    const [headphoneBrand, setHeadphoneBrand] = useState('');
    const [headphoneModel, setHeadphoneModel] = useState('');
    const [headphoneSerialNumber, setHeadphoneSerialNumber] = useState('');
    const [headphoneConnectivity, setHeadphoneConnectivity] = useState('');

    const headphoneInfo = {
        headphonesId,
        headphoneBrand,
        headphoneModel,
        headphoneSerialNumber,
        headphoneConnectivity,
    };

    const initialHeadphone = {
        headphoneId: '',
        brandName: '',
        modelName: '',
        serialNumber:'',
        connectivity:'',
    };

    const [asset, setAsset] = useState({
        items: [],
    });

    const handleHeadphoneChange = (e, index) => {
        const { name, value } = e.target;
        const updatedHeadphones = [...asset.items];
        updatedHeadphones[index][name] = value;
    };

    const addHeadphones = (e) => {
        e.preventDefault();
        
        const newHeadphone = { ...initialHeadphone };
        asset.items.push(newHeadphone);

        // Auto-generate serial number based on the number of items
        newHeadphone.headphoneId = asset.items.length;

        setAsset({ ...asset });
    };

    const removeHeadphones = (index) => {
        const updatedHeadphones = [...asset.items];
        updatedHeadphones.splice(index, 1);
        setAsset({ ...asset, items: updatedHeadphones });

        // Update serial numbers after removing an item
        for (let i = 0; i < updatedHeadphones.length; i++) {
        updatedHeadphones[i].headphoneId = i + 1;
        }
        setAsset({ ...asset, items: updatedHeadphones });

    };

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        
        e.preventDefault();

        dispatch(addHeadphone({headphone: headphoneInfo}));

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
                    <CardTitle className="mb-4"> Headphones Details</CardTitle>
                    <form className="outer-repeater" onSubmit={handleSubmit}>
                        <div data-repeater-list="group-a">
                            {asset.items.map((item, index) => (
                                <div data-repeater-item className="row" key={index}>
                                    <div className="mb-3 col-lg-2">
                                        <Label
                                            htmlFor="inventoryname"
                                            className=""
                                        >
                                            Headphones ID
                                        </Label> 
                                        <Input
                                                id="headphonesId"
                                                name="headphonesId"
                                                type="text"
                                                className="form-control"
                                                value={item.headphoneId}
                                                onChange={(e) => setHeadphonesId(e.target.value)}
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
                                                    onChange={(e) => {handleHeadphoneChange(e, index); setHeadphoneBrand(e.target.value); }}
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
                                                    id="headphoneModel"
                                                    name="modelName"
                                                    type="text"
                                                    className="form-control"
                                                    value={item.modelName}
                                                    onChange={(e) => {handleHeadphoneChange(e, index); setHeadphoneModel(e.target.value); }}
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
                                                    id="headphoneSerialNumber"
                                                    name="serialNumber"
                                                    type="text"
                                                    className="form-control"
                                                    value={item.serialNumber}
                                                    onChange={(e) => {handleHeadphoneChange(e, index); setHeadphoneSerialNumber(e.target.value); }}
                                                    placeholder=""
                                                    required
                                            /> 
                                    </div>
                                    <div className="mb-3 col-lg-2 my-auto align-self-center">
                                            <Label
                                                htmlFor="inventoryname"
                                                className=""
                                            >
                                                <Input
                                                    id="headphoneConnectivity"
                                                    name="connectionMode"
                                                    type="checkbox"
                                                    className="form-check-input mx-2"
                                                    value={item.connectivity}
                                                    onChange={(e) => {handleHeadphoneChange(e, index); setHeadphoneConnectivity(e.target.value); }}
                                                    placeholder=""
                                            /> 
                                            Wired
                                            </Label> 
                                            
                                    </div>
                                    <Col lg={1} className="align-self-center">
                                        <div className="d-grid"  > 
                                            <Button 
                                                type="submit" 
                                                className="mt-2" 
                                                color="outline-danger"
                                                onClick={() => removeHeadphones(index)}>
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
                                    onClick={addHeadphones}>
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

export default HeadphonesAlt