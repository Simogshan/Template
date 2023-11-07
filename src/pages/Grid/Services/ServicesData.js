
//data
 const services = {	
    columns :[
            {
                label: "ID",
                field: "serviceID",
                sort: "asc",
                width: 100,
            },
            {
                label: "Description",
                field: "serviceDesc",
                sort: "asc",
                width: 200,
            },
            {
                label: "Type",
                field: "serviceType",
                sort: "asc",
                width: 100,
            },
            {
                label: "Status",
                field: "serviceStatus",
                sort: "asc",
                width: 100,
            },
            {
                label: "Created By",
                field: "createdBy",
                sort: "asc",
                width: 150,
            },
            {
                label: "Date",
                field: "createdDate",
                sort: "asc",
                width: 100,
            },
            {
                label: "Close Date",
                field: "closeDate",
                sort: "asc",
                width: 100,
            },
            {
                label: "SLA Performance",
                field: "performance",
                sort: "asc",
                width: 100,
            },
    ],
    rows:[
        {
            serviceID:"1",
            serviceDesc:"Laptop for 5 new Employees",
            serviceType: "Allocation",
            serviceStatus: "New", 
            createdBy: "Ram",
            createdDate: "30-OCTOBER-2023",
            closeDate: "",
            performance:"High",
        },
    ]
}


export default services;
