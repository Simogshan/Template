import { Link } from "react-router-dom/cjs/react-router-dom.min";

//data
 const laptops = {	
    columns :[
            {
                label: "Brand",
                field: "brandName",
                sort: "asc",
                width: 150,
            },
            {
                label: "RAM",
                field: "memory",
                sort: "asc",
                width: 100,
            },
            {
                label: "Processor",
                field: "processor",
                sort: "asc",
                width: 150,
            },
            {
                label: "Status",
                field: "status",
                sort: "asc",
                width: 150,
            },
            {
                label: "Storage",
                field: "storage",
                sort: "asc",
                width: 100,
            },
            {
                label: "Serial Number",
                field: "serialNumber",
                sort: "asc",
                width: 150,
            },
            {
                label: "Action",
                field: "assign",
                sort: "asc",
                width: 150,
            },
    ],
    rows:[
        {brandName:"Apple",memory: "8 GB",processor: "M1", status: "Ready to Deploy", storage: "1 TB", serialNumber: "4568GFHWSXCVR", assign: <Link to="#">Checkout</Link>},
    ]
}


export default laptops;
