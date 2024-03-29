import axios from "axios";
import React, { useEffect, useState } from "react";

const AddTask = () => {
  const [taskData, setTaskData] = useState({
    assign_to: "",
    task_title: "",
    task_description: "",
    task_team: "",
    task_priroty: ""
  });
  const [allUsers, setAllUsers]=useState([])

  const handleCreateTask= async(e)=>{
    e.preventDefault();
    console.log(taskData)

    try {
        const res= await axios.post("http://localhost:5000/api/v1/task/createtask",
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
    } catch (error) {
        console.lof(error.message);
    }
  }

  const fetchAllOtherUsers= async()=>{
    try {
        const res= await axios.get("http://localhost:5000/api/v1/users/getallotherusers");
        if(res.status!=201){
            throw new Error("Error in fetching Users!!");
        }
        console.log(res.data.data);
        setAllUsers(res.data.data);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    fetchAllOtherUsers();
  },[])

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
                <select type="text" className=" w-2/3 rounded-sm bg-gray-400 outline-none px-2 py-1 font-normal " name="assignees" id="assignees" value={taskData.assign_to} onChange={(e)=>{setTaskData({...taskData,assign_to:e.target.value})}} >
                    <option className="bg-white" value="#">Select</option>
                    {
                        allUsers.length>0 ? allUsers.map((e)=>{
                            return <option className="bg-white" value={e._id} key={e._id}>{e.fullName.toUpperCase()}</option>
                        }) : <option className="bg-white" value="">No Other User Found!!</option>
                    }
                </select>
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
