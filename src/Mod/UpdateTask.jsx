import axios from "axios";
import React, { useEffect, useState } from "react";

const UpdateTask = (props) => {
  // console.log(props.props);
  const [updateData, setUpdateData] = useState({
    assign_to: props.props.assign_to,
    task_priroty: props.props.task_priroty,
    task_status: props.props.task_status,
    task_id: props.props._id,
  });
  // console.log(updateData);
  const handleUpdateTask = async (e) => {
    e.preventDefault();
    // console.log(updateData);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/task/updatetask",
        updateData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.status != 201) {
        throw new Error("Error in Updation!!");
      }

      alert(res.data.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    setUpdateData({
      assign_by:props.props.assign_by,
      task_priroty: props.props.task_priroty,
      task_status: props.props.task_status,
      task_id: props.props._id,
    });
  }, [props]);
  return (
    <dialog id="update_task_modal" className="modal ">
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
          onSubmit={handleUpdateTask}
          className="px-4 py-2 flex flex-col flex-wrap gap-y-5 font-semibold"
        >
          <label htmlFor="title" className="w-full ">
            Title:
            <div
              type="text"
              className=" w-full rounded-sm bg-gray-400 outline-none px-2 py-1 font-normal "
              name="title"
              id="title"
            >
              {props.props.task_title}
            </div>
          </label>
          <label htmlFor="description" className="w-full ">
            Description:
            <div
              type="text"
              className=" w-full h-fit rounded-sm bg-gray-400 outline-none px-2 py-1 font-normal "
              name="description"
              id="description"
            >
              {props.props.task_description}
            </div>
          </label>
          <label htmlFor="team" className="w-full ">
            Team:
            <div
              type="text"
              className=" w-full rounded-sm bg-gray-400 outline-none px-2 py-1 font-normal "
              name="team"
              id="team"
            >
              {props.props.task_team}
            </div>
          </label>
          <label htmlFor="assignees" className="w-full ">
            Assignees:
            <div
              type="text"
              className=" w-full rounded-sm bg-gray-400 outline-none px-2 py-1 font-normal "
              name="assignees"
              id="assignees"
            >
              {props.props.assign_by_name}
            </div>
          </label>

          <div className="w-full flex gap-5 justify-between items-center">
            <label
              htmlFor="priority"
              className="w-full flex gap-2 justify-start items-start"
            >
              Priority:
              <select
                name="priority"
                id="priority"
                className="bg-gray-300 border-2 cursor-pointer border-gray-400 rounded-sm w-20 p-1"
                value={updateData.task_priroty}
                onChange={(e) => {
                  setUpdateData({
                    ...updateData,
                    task_priroty: e.target.value,
                  });
                }}
              >
                <option className="bg-white" value="P0">
                  P0
                </option>
                <option className="bg-white" value="P1">
                  P1
                </option>
                <option className="bg-white" value="P2">
                  P2
                </option>
              </select>
            </label>

            <label
              htmlFor="assignees"
              className="w-full flex gap-2 justify-start items-start"
            >
              Status:
              <select
                type="text"
                className=" w-2/3 cursor-pointer border-2 border-gray-400 rounded-sm bg-gray-300 outline-none px-2 py-1 font-normal "
                name="assignees"
                id="assignees"
                value={updateData.task_status}
                onChange={(e) => {
                  setUpdateData({ ...updateData, task_status: e.target.value });
                }}
              >
                <option className="bg-white cursor-pointer" value="In Process">
                  In Process
                </option>
                <option className="bg-white cursor-pointer" value="Completed">
                  Completed
                </option>
                <option className="bg-white cursor-pointer" value="Deployed">
                  Deployed
                </option>
                <option className="bg-white cursor-pointer" value="Assign">
                  Assign
                </option>
                <option className="bg-white cursor-pointer" value="Deffered">
                  Deffered
                </option>
              </select>
            </label>
          </div>

          <input
            type="submit"
            className="btn bg-blue-800 hover:bg-blue-900 text-white"
            value="Update Task"
          />
        </form>
      </div>
    </dialog>
  );
};

export default UpdateTask;
