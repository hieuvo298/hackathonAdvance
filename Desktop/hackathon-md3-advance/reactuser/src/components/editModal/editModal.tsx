
import "./editModal.css";
interface Props {
  handleEdit: Function;
}
const EditModal: React.FC<Props> = (props: Props) => {
 
  return (
    <div className="box-modal-edit">
      <div className="table-edit-student">
        <p className="header-table-modal-edit-student">Edit student</p>
        <div className="edit-name-student">
          <strong>Name</strong>
          <input type="text" placeholder="Name" />
        </div>
        <div className="edit-description-student">
          <strong>Description</strong>
          <textarea  />
        </div>
        <div className="btn-edit-student">
          <button>Save</button>
        </div>
        <button
          className="btn-close-modal-edit"
          onClick={() => {
            props.handleEdit(false);
          }}
        >
          x
        </button>
      </div>
    </div>
  );
};
export default EditModal;
