//data
 const assets = {	
    columns :[
            {
                label: "Software Name",
                field: "softwareName",
                sort: "asc",
                width: 100,
            },
            {
                label: "Expiry Date",
                field: "expiryDate",
                sort: "asc",
                width: 100,
            },
            {
                label: "License count",
                field: "total",
                sort: "asc",
                width: 100,
            },
    ],
    rows:[
        {softwareName:"Adobe",expiryDate: "22-May-2025",total: "10",},
        {softwareName:"Ms Word",expiryDate: "22-May-2025",total: "10",},
        {softwareName:"Norton Antivirus",expiryDate: "22-May-2025",total: "10",},
    ]
}


export default assets;
