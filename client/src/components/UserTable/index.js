import React, { useState, useContext, useEffect } from "react";
import DataTable, { createTheme } from 'react-data-table-component';
import API from "../../utils/API";
import AllUsersContext from '../../context/allUsersContext';
import AllUsersSearchContext from '../../context/allUsersSearchContext';

function UserTable(props) {
    const [activeUser, setActiveUser] = useState({});;
    const { users, setUsers } = useContext(AllUsersContext);
    const { formObject, setFormObject } = useContext(AllUsersSearchContext);
    const [tableData, setTableData] = useState();

    useEffect(() => {
        setTableData(users.users);
    }, [users.users]);

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

    createTheme('users', {
        text: {
            primary: 'rgb(87, 85, 85)',
        },
        background: {
            default: 'whitesmoke',
        },
        divider: {
            default: 'green',
        }
    });

    const columnsMain = [
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'email',
            cell: row => <a href={`mailto: ${row.email}`}>{row.email}</a>,
        },
        {
            name: 'Administrator',
            selector: 'isAdmin',
            cell: row => <p>{row.isAdmin ? 'Yes' : 'No'}</p>,
            sortable: true,
        },
        {
            name: 'Toggle Admin',
            selector: '_id',
            cell: row => <button onClick={toggleAdmin} name={row._id}>...</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            center: true,
            width: '75px',
        },
    ];

    function toggleAdmin(event) {
        const eUser = getSelectedUser(event.target.name);
        const nUser = { ...eUser, isAdmin: !eUser.isAdmin };
        API.updateUser(nUser._id, nUser)
            .then((res) => {
                setActiveUser(res.data.result);
                refreshTable();
            })
            .catch(err => console.log(err));
    }

    function refreshTable() {
        const userName = {
            name: formObject.name
        };

        API.getUsersByFilter(JSON.stringify(userName))
            .then((res) => {
                setUsers(res.data);
                // console.log("results:", res.data);
            })
            .catch(err => console.log(err));
    };

    function getSelectedUser(id) {
        let data = tableData.filter(function (user) {
            return user._id == id;
        });
        return data[0];
    }

    return (
        <DataTable
            columns={columnsMain}
            data={tableData}
            keyField={"_id"}
            customStyles={tableStyle}
            fixedHeader={true}
            fixedHeaderScrollHeight={'75vh'}
            theme="users"
        />
    )
};

export default UserTable;