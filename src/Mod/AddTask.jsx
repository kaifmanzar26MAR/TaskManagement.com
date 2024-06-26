import axios from "axios";
import React, { useEffect, useState } from "react";

const AddTask = (props) => {

  // console.log(props)
  const [taskData, setTaskData] = useState({
    task_title: "",
    task_description: "",
    task_team: "",
    task_priroty: "P0"
  });

  const handleCreateTask= async(e)=>{
    e.preventDefault();
    // console.log(taskData)

    try {
        const res= await axios.post("https://kaidprojecttemp-8e3kkvzw2-dhruvanand24s-projects.vercel.app/api/v1/task/createtask",
        taskData,
        {
            headers:{
                "Content-Type":"application/json",
            },
            withCredentials:true,
        });

        if(res.status!=201){
            throw new Error("Error in Creation of Task!!");
        }
        alert(res.data.message);
        window.location.reload();
    } catch (error) {
        console.log(error);
        alert(error.response.data.message)
    }
  }


  return (
    <dialog id="addtask_modal" className="modal ">
      <div className="modal-box rounded-lg bg-gradient-to-r from-pink-200 to-blue-200 p-0">
        <form method="dialog" className="flex items-center justify-between px-4 py-2 bg-white">
          <h3 className="font-bold text-lg">Create New Task</h3>
          <button className="btn btn-sm btn-circle btn-ghost  right-2 top-2">
            ✕
          </button>
        </form>
        <form onSubmit={handleCreateTask} className="px-4 py-2 flex flex-col gap-y-5 font-semibold">
            <label htmlFor="title" className="w-full flex justify-between items-center">
                Title: 
                <input type="text" className=" w-2/3 rounded-sm bg-gray-400 outline-none px-2 py-1 font-normal " name="title" id="title" value={taskData.task_title} onChange={(e)=>{setTaskData({...taskData,task_title:e.target.value})}} />
            </label>
            <label htmlFor="description" className="w-full flex justify-between items-start">
                Description:
                <textarea type="text" className=" w-2/3 rounded-sm bg-gray-400 outline-none px-2 py-1 font-normal " name="description" id='description' value={taskData.task_description} onChange={(e)=>{setTaskData({...taskData,task_description:e.target.value})}} />
            </label>
            <label htmlFor="team" className="w-full flex justify-between items-center">
                Team:
                <input type="text" className=" w-2/3 rounded-sm bg-gray-400 outline-none px-2 py-1 font-normal " name="team" id="team" value={taskData.task_team} onChange={(e)=>{setTaskData({...taskData,task_team:e.target.value})}} />
            </label>
            <label htmlFor="assignees" className="w-full flex justify-between items-center">
                Assignees:
                <div type="text" className=" w-2/3 rounded-sm bg-gray-400 outline-none px-2 py-1 font-normal " name="assignees" id="assignees"  >
                    @{props?.props?.fullName}
                </div>
            </label>
            <label htmlFor="priority" className="w-full flex justify-between items-center">
                Priority: 
                <select name="priority" id="priority" className="bg-gray-400 rounded-sm w-20" value={taskData.task_priroty} onChange={(e)=>{setTaskData({...taskData,task_priroty:e.target.value})}}>
                    <option className="bg-white" value="P0">P0</option>
                    <option className="bg-white" value="P1">P1</option>
                    <option className="bg-white" value="P2">P2</option>
                </select>
            </label>

            <input type="submit" className="btn bg-blue-800 hover:bg-blue-900 text-white" value="Create Task"/>
        </form>
      </div>
    </dialog>
  );
};

export default AddTask;
