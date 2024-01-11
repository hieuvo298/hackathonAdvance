import React, { useEffect, useState } from "react";
import "./createModal.css";
import axios from "axios";

interface Props {
  handleCreate: Function;
}

const CreateModal: React.FC<Props> = (props: Props) => {
  const [name, setName] = useState<string>("");

  const [description, setDescription] = useState<string>("");
  console.log(description);
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true); 

  const handleSave = async () => {
    try {
      const response = await axios.post("http://localhost:8000/user", {
        name,
        description,
      });
  
      props.handleCreate(response.data.user); 
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setName("");
      setDescription("");
    }
  };
  
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user");
        setData(response.data);
      } catch (error) {
        console.error("Error   :" );
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 
  return (
    <div>
      <div className="box-modal-add">
        <div className="table-add-student">
          <p className="header-table-modal-add-student">Create student</p>
          <div className="add-name-student">
            <strong>Name</strong>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

          </div>
          <div className="add-description-student">
            <strong>Description</strong>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="btn-add-student">
            <button onClick={handleSave}>Save</button>
          </div>
          <button
            onClick={() => props.handleCreate(false)}
            className="btn-close-modal-add"
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
