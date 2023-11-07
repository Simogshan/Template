//import
import React, { useEffect, useState } from 'react';
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody } from "reactstrap"
import "../List.scss"

import Breadcrumbs from "../../../components/Common/Breadcrumb"
import headphones from './HeadphonesData';

const HeadphonesGrid = () => {

    // Initialize the state with a dictionary containing nested dictionaries
    const [data, setData] = useState({});

    // useEffect to fetch data when the component mounts
    useEffect(() => {
    
        setData(headphones);
    
    }, []); // The empty dependency array ensures this runs only once when the component mounts



//rendering
    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumbs title="Lists" breadcrumbItem="Headphones" />
                <Row>
                    <Col className="col-12">
                        <Card>
                            <CardBody>

                                <MDBDataTable responsive striped bordered data={data} />
    
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>

        </React.Fragment>
    )

}

export default HeadphonesGrid
