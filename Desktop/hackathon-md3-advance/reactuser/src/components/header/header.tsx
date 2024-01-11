import React from "react";
import "./header.css";
interface Props {
    handleCreate: Function;
}
const Header: React.FC<Props> = (props: Props) => {
  
  return (
    <div>
      <button className="add-btn" onClick={() => props.handleCreate(true)}>
        Create Student
      </button>
      <h1 className="header-content">Student List</h1>
    </div>
  );
};

export default Header;
