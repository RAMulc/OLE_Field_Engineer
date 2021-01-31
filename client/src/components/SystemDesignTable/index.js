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

const scrnSize = Math.max(window.screen.availWidth, window.screen.availHeight);
console.log("scrnSize", scrnSize);

let columns = [
    {
        name: 'PTA Drawing No.',
        selector: 'ptaDgnNumber',
        sortable: true,
        width: '120px',
    },
    {
        name: 'Allocation Reference',
        selector: 'allocReference',
        sortable: true,
        width: '100px',
    },
    {
        name: 'Title',
        selector: 'title',
        sortable: true,
        wrap: true,
        allowOverflow: false
    },
];

if (scrnSize > 1000) {
    columns = [
        ...columns,
        {
            name: 'Other Drawing Nos',
            selector: 'otherDgnNumbers',
            cell: row => <p>{row.otherDgnNumbers.join(" ")}</p>,
            sortable: true,
            //minWidth: '250px',
            wrap: true,
        },
        {
            name: 'Revision',
            selector: 'revision',
            center: true,
            //width: '75px',
        },
    ];
}

columns = [
    ...columns,
    {
        name: 'Open',
        selector: '_id',
        cell: () => <button raised primary >....</button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        center: true,
        //width: '75px',
    },];

    console.log("cols", columns);

function EmpTable(props) {
    return (
        <DataTable
            columns={columns}
            data={props.DataTable}
            keyField={"_id"}
            customStyles={tableStyle}
            fixedHeader={true}
            fixedHeaderScrollHeight={'75vh'}
        />)
};

export default EmpTable;