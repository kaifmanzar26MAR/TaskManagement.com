import axios from "axios";
import React from "react";

const DeleteTask = (props) => {
  // console.log(props.props);
  const deleteTask = async (e) => {
    e.preventDefault();
    const data = props.props;

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/task/deletetask",
        {
          assign_by: data.assign_by,
          task_id: data._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.status != 201) {
        throw new Error("Error in Deletion!!");
      }
      alert(res.data.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };
  return (
    <dialog id="delete_task_modal" className="modal ">
      <div className="modal-box w-96 rounded-lg bg-gradient-to-r from-pink-200 to-blue-200 p-0">
        <form
          method="dialog"
          className="flex items-center justify-between px-4 py-2 bg-white"
        >
          <h3 className="font-bold text-lg">Update Task</h3>
          <button className="btn btn-sm btn-circle btn-ghost  right-2 top-2">
            ✕
          </button>
        </form>
        <form
          onSubmit={deleteTask}
          className="px-4 py-2 flex flex-col flex-wrap gap-y-5 font-semibold"
        >
          <p>Are you Sure Want To Detele This Task?</p>
          <input
            type="submit"
            className="btn bg-blue-800 hover:bg-blue-900 text-white"
            value="Yes"
          />

          <div
            className="btn bg-blue-800 hover:bg-blue-900 text-white"
            onClick={() => document.getElementById("delete_task_modal").close()}
          >
            No
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default DeleteTask;
