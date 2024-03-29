import React from "react";
import UpdateTask from "../Mod/UpdateTask";

const Task = ({ props }) => {
    if(!props){
        return<>loading...</>
    }
    const { task_title, task_priroty, task_description, assign_to_name, assign_to, task_status, task_team, createdAt } = props;
  
    return (

        <div className="task-container p-2 w-full flex flex-col gap-y-5">
        {/* <UpdateTask props={props}/> */}
            <div className="p-2 bg-gray-200 text-sm flex flex-col gap-y-3 border-2 border-gray-300 rounded-lg ">
                <div className="heading w-full flex justify-between items-center">
                    <h1 className="font-bold text-xl">{task_title}</h1>
                    <span className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center">
                        {task_priroty}
                    </span>
                </div>

                <hr />

                <p>
                    {task_description}
                </p>

                <div className="lower w-full flex justify-between items-center">
                    <h1 className="font-semibold text-lg">@{assign_to_name}</h1>
                    <span className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                    onClick={()=>{
                        // setUpdate(props)
                        document.getElementById('update_task_modal').showModal()}}
                    >
                        :
                    </span>
                </div>

                <div className=" p-2 text-center bg-blue-800 w-32 rounded-lg text-white">
                    {task_status}
                </div>
            </div>
        </div>
    );
};

export default Task;
