import React, { Component, useEffect, useState } from "react";
import useUsers from "../../store/usersStore";
import DataTable from "react-data-table-component";
import { Modal, ModalBody, ModalHeader, ModalFooter, Input, Button } from 'reactstrap';


const Users = () => {
  const {users, fetch, add, removeUser} = useUsers((state)=>state)
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    email: "",
    gender: "",
    address: {
      street: "",
      city: ""
    },
    phone: ""
  });

  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);

  const toggle = () => setModal(!modal);
  const changeUnmountOnClose = (e) => {
    let { value } = e.target;
    setUnmountOnClose(JSON.parse(value));
  };

  useEffect(() => {
    fetch();
  }, []);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "Address",
      selector: (row) => {
        return row.address.city + "-" + row.address.street
      },
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "Action",
      selector: (row) => <button onClick={() => removeUser(row.id)}>Delete</button>
    }
  ]
  return(
    <div>
      <h1>Users</h1>
      <Button color="danger" onClick={toggle}>
        Add User
      </Button>
      <Modal  isOpen={modal} toggle={toggle} unmountOnClose={unmountOnClose}>
        <ModalHeader>
          Modal title
        </ModalHeader>
        <ModalBody>
          <Input type="text" placeholder="Name" onChange={(e) => {
            setUser({...user, name: e.target.value});
            console.log(user)
          }}/>
          <Input type="text" placeholder="Email" onChange={(e) => {
            setUser({...user, email: e.target.value});
            console.log(user)
          }}/>
          <Input type="text" placeholder="Gender" onChange={(e) => {
            setUser({...user, gender: e.target.value});
            console.log(user)
          }}/>
          <Input type="text" placeholder="City" onChange={(e) => {
            setUser({...user, address: {...user.address, city: e.target.value}});
            console.log(user)
          }}/>
          <Input type="text" placeholder="Street" onChange={(e) => {
            setUser({...user, address: {...user.address, street: e.target.value}});
            console.log(user)
          }}/>
          <Input type="text" placeholder="Phone" onChange={(e) => {
            setUser({...user, phone: e.target.value});
            console.log(user)
          }}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={()=> {
            add(user);
            toggle();
          }}>
            Add
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <DataTable columns={columns} data={users} />
    </div>
  )

}
export default Users;