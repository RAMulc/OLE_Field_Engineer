import React from "react";
import DataTable from 'react-data-table-component';

const tableStyle = {
    headCells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingTop: '15px',
            paddingBottom: '15px'
        },
    },
};

const columnsMain = [
    {
        name: 'Name',
        selector: 'name',
        sortable: true,
    },
    {
        name: 'email',
        selector: 'email',
        sortable: true,
    },
    {
        name: 'Administrator',
        selector: 'isAdmin',
        cell: row => <p>{row.isAdmin ? 'Yes' : 'No'}</p>,
        sortable: true,
    },
    // {
    //     name: 'Reset Password',
    //     selector: '_id',
    //     cell: row => <button><Link to={"/"}>...</Link></button>,
    //     ignoreRowClick: true,
    //     allowOverflow: true,
    //     button: true,
    //     center: true,
    //     width: '75px',
    // },
];

function UserTable(props) {
    //console.log("dt", props.DataTable);
    return (
        <DataTable
            columns={columnsMain}
            data={props.DataTable.users}
            keyField={"_id"}
            customStyles={tableStyle}
            fixedHeader={true}
            fixedHeaderScrollHeight={'75vh'}
        />)
};

export default UserTable;