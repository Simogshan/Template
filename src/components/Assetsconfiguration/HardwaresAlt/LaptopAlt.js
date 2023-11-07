import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addLaptop } from "../../../store/laptops/actions";

import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Input,
    Label,
    Button,
} from "reactstrap"

// Import Editor
import { Eitor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import Date Picker
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const LaptopAlt = () => {

    const inpRow = [{ name: "", file: "" }]
    const [inputFields, setinputFields] = useState(inpRow)
    
    const [id, setId] = useState('');
    const [brandName, setBrandName] = useState('');
    const [memory, setMemory] = useState('');
    const [processor, setProcessor] = useState('');
    const [storage, setStorage] = useState('');
    const [serialNumber, setSerialNumber] = useState('');

    const laptopInfo = {
        id,
        brandName,
        memory,
        processor,
        storage,
        serialNumber,

    };

    const dispatch = useDispatch();


    const initialLaptop = {
        serialNo: '',
        brandName: '',
        memory: '',
        processor: '',
        storage: '',
        laptopSerialNumber:'',
    };

    const [asset, setAsset] = useState({
        items: [],
    });

    const handleLaptopChange = (e, index) => {
        console.log('printing index')
        console.log(index)
        console.log(e.target.name)
        console.log(e.target.value)
        const { name, value } = e.target;
        const updatedLaptops = [...asset.items];
        updatedLaptops[index][name] = value;
    };

    const addLaptops = (e) => {
        e.preventDefault();
        
        const newLaptop = { ...initialLaptop };
        asset.items.push(newLaptop);

        // Auto-generate serial number based on the number of items
        newLaptop.serialNo = asset.items.length;

        setAsset({ ...asset });
    };

    const removeLaptop = (index) => {
        const updatedLaptops = [...asset.items];
        updatedLaptops.splice(index, 1);
        setAsset({ ...asset, items: updatedLaptops });

        // Update serial numbers after removing an item
        for (let i = 0; i < updatedLaptops.length; i++) {
        updatedLaptops[i].serialNo = i + 1;
        }
        setAsset({ ...asset, items: updatedLaptops });

    };

    //const history = useHistory();

    const handleSubmit = (e) => {
        
        e.preventDefault();

        dispatch(addLaptop({laptop: laptopInfo}));

        window.location.href='/lists/laptops';
   
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
                <Card>
                    <CardBody>
                        <CardTitle className="mb-4"> Laptop Details</CardTitle>
                        <form className="repeater" onSubmit={handleSubmit} >
                            <div data-repeater-list="group-a">
                                {asset.items.map((item, index) => (
                                    <div data-repeater-item className="row" key={index}>
                                        <div className="mb-3 col-lg-2">
                                            <Label
                                                htmlFor="inventoryname"
                                                className=""
                                            >
                                                Laptop ID
                                            <span style={{color:"red"}}>*</span>
                                            </Label> 
                                            <Input
                                                    id="id"
                                                    name="id"
                                                    type="text"
                                                    className="form-control"
                                                    value={item.serialNo}
                                                    onChange ={(e) => setId(e.target.value)}
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
                                                    onChange={(e) => {handleLaptopChange(e, index); setBrandName(e.target.value); }}
                                                    placeholder="enter brand"
                                                    required
                                            /> 
                                        </div>
                                        <div className="mb-3 col-lg-1">
                                            <Label
                                                htmlFor="inventoryname"
                                                className=""
                                            >
                                                RAM
                                            </Label> 
                                            <Input
                                                    id="memory"
                                                    name="memory"
                                                    type="text"
                                                    className="form-control"
                                                    value={item.memory}
                                                    onChange={(e) => {handleLaptopChange(e, index); setMemory(e.target.value); }}
                                                    placeholder=""
                                                    required
                                            /> 
                                        </div>
                                        <div className="mb-3 col-lg-2">
                                            <Label
                                                htmlFor="inventoryname"
                                                className=""
                                            >
                                                Processor
                                            </Label> 
                                            <Input
                                                    id="processor"
                                                    name="processor"
                                                    type="text"
                                                    className="form-control"
                                                    value={item.processor}
                                                    onChange={(e) => {handleLaptopChange(e, index); setProcessor(e.target.value); }}
                                                    placeholder=""
                                                    required
                                            /> 
                                        </div>
                                        <div className="mb-3 col-lg-2">
                                            <Label
                                                htmlFor="inventoryname"
                                                className=""
                                            >
                                                Storage
                                            </Label> 
                                            <Input
                                                    id="storage"
                                                    name="storage"
                                                    type="text"
                                                    className="form-control"
                                                    value={item.storage}
                                                    onChange={(e) => {handleLaptopChange(e, index); setStorage(e.target.value); }}
                                                    placeholder=""
                                                    required
                                            /> 
                                        </div>
                                        <div className="mb-3 col-lg-2">
                                            <Label
                                                htmlFor="inventoryname"
                                                className=""
                                            >
                                                Serial Number
                                            </Label> 
                                            <Input
                                                    id="laptopSerialNumber"
                                                    name="laptopSerialNumber"
                                                    type="text"
                                                    className="form-control"
                                                    value={item.laptopSerialNumber}
                                                    onChange={(e) => {handleLaptopChange(e, index); setSerialNumber(e.target.value); }}
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
                                                    onClick={() => removeLaptop(index)}>
                                                    <i className="mdi mdi-delete fa-lg"></i>
                                                </Button>
                                            </div>
                                        </Col>
                                    </div>
                                ))}
                                <Row className="justify-content-end align-self-center">
                                    <Col lg="5">
                                        <Button 
                                            type="submit" 
                                            className="mt-2" 
                                            color="outline-success"
                                            onClick={addLaptops}>
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
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default LaptopAlt