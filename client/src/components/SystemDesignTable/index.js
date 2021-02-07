import React, { useContext } from "react";
import DataTable from 'react-data-table-component';
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import UserContext from '../../context/userContext';

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
        minWidth: '350px',
        allowOverflow: false
    },
];

const columnsOptional = [
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
        width: '75px',
    },
];

const columnsView = [
    {
        name: 'View',
        selector: '_id',
        cell: row => <button>
            <Link to={"/pdf/" + row.ptaDgnNumber + ".pdf"}>...</Link>
        </button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        center: true,
        width: '75px',
    },];

const columnsEdit = [
    {
        name: 'Edit',
        selector: '_id',
        cell: row => <button>
            <Link to={"/pdf/" + row.ptaDgnNumber + ".pdf"}>...</Link>
        </button>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        center: true,
        width: '75px',
    },];

function EmpTable(props) {
    const isMobile = useMediaQuery({ query: '(max-width: 1000px)' });
    const { userData } = useContext(UserContext);

    return (
        <DataTable
            columns={isMobile ?
                [...columnsMain, ...columnsView] :
                userData.isAdmin ?
                    [...columnsMain, ...columnsOptional, ...columnsEdit] :
                    [...columnsMain, ...columnsOptional, ...columnsView]
            }
            data={props.DataTable}
            keyField={"_id"}
            customStyles={tableStyle}
            fixedHeader={true}
            fixedHeaderScrollHeight={'75vh'}
        />)
};

export default EmpTable;