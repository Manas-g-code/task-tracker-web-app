import { useParams } from "react-router-dom";

function EditTask() {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Edit Task</h1>

      <p>Task ID: {id}</p>
    </div>
  );
}

export default EditTask;