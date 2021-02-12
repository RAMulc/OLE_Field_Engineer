import React, { useState, useContext, useEffect } from "react";
import DataTable, { createTheme } from 'react-data-table-component';
import API from "../../utils/API";
import AllUsersContext from '../../context/allUsersContext';
import AllUsersSearchContext from '../../context/allUsersSearchContext';
import UserContext from "../../context/userContext";

function UserTable() {
    const [activeUser, setActiveUser] = useState({});;
    const [tableData, setTableData] = useState();

    const { users, setUsers } = useContext(AllUsersContext);
    const { userData } = useContext(UserContext);
    const { formObject } = useContext(AllUsersSearchContext);


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
            cell: row => <button onClick={toggleAdmin} name={row._id}>{row.isAdmin ? 'Yes' : 'No'}</button>,
            sortable: true,
        },
        {
            name: 'Remove Account',
            selector: '_id',
            cell: row => <button onClick={removeUser} name={row._id}>X</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            center: true,
            width: '75px',
        },
    ];

    function removeUser(event) {
        const user = getSelectedUser(event.target.name);
        // Admin account cannot remove themselves
        if (userData.email !== user.email) {
            API.removeUser(user._id)
                .then((res) => {
                    refreshTable();
                })
                .catch(err => console.log(err));
        }
    }

    function toggleAdmin(event) {
        const eUser = getSelectedUser(event.target.name);
        // Admin account cannot modify level themselves
        if (userData.email !== eUser.email) {
            const nUser = { ...eUser, isAdmin: !eUser.isAdmin };
            API.updateUser(nUser._id, nUser)
                .then((res) => {
                    setActiveUser(res.data.result);
                    refreshTable();
                })
                .catch(err => console.log(err));
        }
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
            return user._id === id;
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