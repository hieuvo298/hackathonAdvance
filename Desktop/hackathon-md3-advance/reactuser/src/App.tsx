import React, { useState } from "react";

import "./App.css";
import Header from "./components/header/header";
import Content from "./components/content/content";
import EditModal from "./components/editModal/editModal";
import CreateModal from "./components/createModal/createModal";

function App() {

  const [openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const handleCreate = (status:boolean) => {
    setOpenCreateModal(status);
  };
  const handleEdit = (status:boolean) => {
    setOpenEditModal(status);
  };
  return (
    <div className="App">
      <Header handleCreate={handleCreate} ></Header>
      {openCreateModal ? <CreateModal handleCreate={handleCreate}></CreateModal> : null}
      <Content handleEdit={handleEdit}></Content>
      {openEditModal ? <EditModal handleEdit={handleEdit}></EditModal> : null}
    </div>
  );
}

export default App;
