import { Link } from "react-router-dom/cjs/react-router-dom.min";

//data
 const licenses = {	
    columns :[
            {
                label: "Name",
                field: "softwareName",
                sort: "asc",
                width: 150,
            },
            {
                label: "Expiry Date",
                field: "expirationDate",
                sort: "asc",
                width: 100,
            },
            {
                label: "Total Seats",
                field: "totalSeats",
                sort: "asc",
                width: 100,
            },
            {
                label: "Available",
                field: "availableSeats",
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
        {
            softwareName:"Office",
            expirationDate: "15-December-2025",
            totalSeats: "10", 
            availableSeats: "7",
            assign: <Link to="#">Checkout</Link>},
    ]
}


export default licenses;
