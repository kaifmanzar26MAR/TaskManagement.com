import React, { useEffect, useState } from "react";
import Task from "../components/Task";
import axios from "axios";
import AddTask from "../Mod/AddTask";
import UpdateTask from "../Mod/UpdateTask";

const Home = () => {
  const [assignTask, setAssignTask] = useState([]);
  const [inProgressTask, setInprogressTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);
  const [deployedTask, setDeployedTask] = useState([]);
  const [defferedTask, setDefferedTask] = useState([]);
  const [update, setUpdate] = useState({});

  const fetchAssignTask = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/task/getassigntask",
        { task_status: "Assign" },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.status != 201) {
        throw new Error("Error in fetching assing Task!!");
      }
      console.log(res.data.data);
      setAssignTask(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchInprocessTask = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/task/getassigntask",
        { task_status: "In Process" },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.status != 201) {
        throw new Error("Error in fetching assing Task!!");
      }
      console.log(res.data.data);
      setInprogressTask(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCompletedTask = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/task/getassigntask",
        { task_status: "Completed" },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.status != 201) {
        throw new Error("Error in fetching assing Task!!");
      }
      console.log(res.data.data);
      setCompletedTask(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDeployedTask = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/task/getassigntask",
        { task_status: "Deployed" },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.status != 201) {
        throw new Error("Error in fetching assing Task!!");
      }
      console.log(res.data.data);
      setDeployedTask(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDefferedTask = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/task/getassigntask",
        { task_status: "Deffered" },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res.status != 201) {
        throw new Error("Error in fetching assing Task!!");
      }
      console.log(res.data.data);
      setDefferedTask(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAssignTask();
    fetchInprocessTask();
    fetchCompletedTask();
    fetchDeployedTask();
    fetchDefferedTask();
  }, []);
  return (
    <div className="flex w-full h-screen flex-col justify-start items-start p-5 bg-gradient-to-r from-pink-200 to-blue-200">
      <h1 className="text-3xl font-semibold">Task Board</h1>
      <br />

      <div className="w-full h-fit border-4 rounded-xl shadow-sm shadow-white">
        <div className="w-full flex items-center p-2">
          <div className="filters w-[80%]">
            <div className="w-full flex gap-4 p-2 items-center justify-start">
              <h1 className="font-semibold">Filter By</h1>
              <select
                name="assign_to"
                id="assign_to"
                className="bg-whi bg-base-200te border-2 px-2 rounded-lg"
              >
                <option value="one">Assignee Name</option>
                <option value="one">kaif</option>
                <option value="two">dhruv</option>
              </select>
              <select
                name="priroty"
                id="priroty"
                className="bg-white border-2 px-2 rounded-lg"
              >
                <option value="one">Priroty</option>
                <option value="one">p0</option>
                <option value="two">p1</option>
              </select>

              <input
                type="date"
                className="bg-white border-2 px-2 rounded-lg"
              />
              <input
                type="date"
                className="bg-white border-2 px-2 rounded-lg"
              />
            </div>

            <div className="w-full flex gap-4 p-2 items-center justify-start">
              <h1 className="font-semibold">Sort By</h1>

              <select
                name="priroty"
                id="priroty"
                className="bg-white border-2 px-2 rounded-lg"
              >
                <option value="one">Priroty</option>
                <option value="one">p0</option>
                <option value="two">p1</option>
              </select>
            </div>
          </div>
          {/* <button className="btn" >open modal</button> */}

          <button
            className=" btn p-2 bg-blue-800 text-white w-[20%] rounded-lg hover:bg-blue-900"
            onClick={() => document.getElementById("addtask_modal").showModal()}
          >
            ADD TASK
          </button>
        </div>
        <AddTask />
        <UpdateTask props={update} />

        <div className="h-[65vh] flex gap-[11px] mt-2   p-2 carousel carousel-center lg:justify-center">
          <div
            id="assign"
            className="w-full bg-base-200 flex flex-col lg:w-[19%] overflow-auto border-2 rounded-xl carousel-item relative  "
          >
            <h1 className="w-full h-fit bg-gray-500 text-white font-semibold text-lg p-2 text-center sticky top-0 rounded-t-lg ">
              Pending{" "}
              <span className="px-2 flex items-center justify-center rounded-full bg-red-600 absolute -top-1 -right-1 ">
                {assignTask.length}
              </span>
            </h1>

            {assignTask.length > 0
              ? assignTask.map((e) => {
                  console.log(e);
                  const {
                    task_title,
                    task_priroty,
                    task_description,
                    assign_to_name,
                    assign_to,
                    task_status,
                    task_team,
                    createdAt,
                  } = e;
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

                        <p>{task_description}</p>

                        <div className="lower w-full flex justify-between items-center">
                          <h1 className="font-semibold text-lg">
                            @{assign_to_name}
                          </h1>
                          <span
                            className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                            onClick={() => {
                              setUpdate(e);
                              document
                                .getElementById("update_task_modal")
                                .showModal();
                            }}
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
                })
              : "No task found"}
          </div>

          <div
            id="inProgress"
            className="w-full bg-base-200 flex flex-col lg:w-[19%] overflow-auto border-2 rounded-xl carousel-item relative  "
          >
            <h1 className="w-full h-fit bg-orange-400 text-white text-lg font-semibold p-2 text-center sticky top-0 rounded-t-lg">
              In Progress{" "}
              <span className="px-2 flex items-center justify-center rounded-full bg-red-600 absolute -top-1 -right-1 ">
                {inProgressTask.length}
              </span>
            </h1>
            {inProgressTask.length > 0
              ? inProgressTask.map((e) => {
                  console.log(e);
                  const {
                    task_title,
                    task_priroty,
                    task_description,
                    assign_to_name,
                    assign_to,
                    task_status,
                    task_team,
                    createdAt,
                  } = e;
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

                        <p>{task_description}</p>

                        <div className="lower w-full flex justify-between items-center">
                          <h1 className="font-semibold text-lg">
                            @{assign_to_name}
                          </h1>
                          <span
                            className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                            onClick={() => {
                              setUpdate(e);
                              document
                                .getElementById("update_task_modal")
                                .showModal();
                            }}
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
                })
              : "No task found"}
          </div>

          <div
            id="complete"
            className="w-full bg-base-200 flex flex-col lg:w-[19%] overflow-auto border-2 rounded-xl carousel-item relative  "
          >
            <h1 className="w-full h-fit bg-green-600 text-white text-lg font-semibold p-2 text-center sticky top-0 rounded-t-lg">
              Completed
              <span className="px-2 flex items-center justify-center rounded-full bg-red-600 absolute -top-1 -right-1 ">
                {completedTask.length}
              </span>
            </h1>
            {completedTask.length > 0
              ? completedTask.map((e) => {
                  console.log(e);
                  const {
                    task_title,
                    task_priroty,
                    task_description,
                    assign_to_name,
                    assign_to,
                    task_status,
                    task_team,
                    createdAt,
                  } = e;
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

                        <p>{task_description}</p>

                        <div className="lower w-full flex justify-between items-center">
                          <h1 className="font-semibold text-lg">
                            @{assign_to_name}
                          </h1>
                          <span
                            className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                            onClick={() => {
                              setUpdate(e);
                              document
                                .getElementById("update_task_modal")
                                .showModal();
                            }}
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
                })
              : "No task found"}
          </div>

          <div
            id="deployed"
            className="w-full bg-base-200 flex flex-col lg:w-[19%] overflow-auto border-2 rounded-xl carousel-item relative  "
          >
            <h1 className="w-full h-fit bg-purple-800 text-white text-lg font-semibold p-2 text-center sticky top-0 rounded-t-lg">
              Deployed{" "}
              <span className="px-2 flex items-center justify-center rounded-full bg-red-600 absolute -top-1 -right-1 ">
                {deployedTask.length}
              </span>
            </h1>
            {deployedTask.length > 0
              ? deployedTask.map((e) => {
                  console.log(e);
                  const {
                    task_title,
                    task_priroty,
                    task_description,
                    assign_to_name,
                    assign_to,
                    task_status,
                    task_team,
                    createdAt,
                  } = e;
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

                        <p>{task_description}</p>

                        <div className="lower w-full flex justify-between items-center">
                          <h1 className="font-semibold text-lg">
                            @{assign_to_name}
                          </h1>
                          <span
                            className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                            onClick={() => {
                              setUpdate(e);
                              document
                                .getElementById("update_task_modal")
                                .showModal();
                            }}
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
                })
              : "No task found"}
          </div>

          <div
            id="differed"
            className="w-full bg-base-200 flex flex-col lg:w-[19%] overflow-auto border-2 rounded-xl carousel-item relative  "
          >
            <h1 className="w-full h-fit bg-red-400 text-white text-lg font-semibold p-2 text-center sticky top-0 rounded-t-lg">
              Deffered{" "}
              <span className="px-2 flex items-center justify-center rounded-full bg-red-600 absolute -top-1 -right-1 ">
                {defferedTask.length}
              </span>
            </h1>
            {defferedTask.length > 0
              ? defferedTask.map((e) => {
                  const {
                    task_title,
                    task_priroty,
                    task_description,
                    assign_to_name,
                    assign_to,
                    task_status,
                    task_team,
                    createdAt,
                  } = e;
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

                        <p>{task_description}</p>

                        <div className="lower w-full flex justify-between items-center">
                          <h1 className="font-semibold text-lg">
                            @{assign_to_name}
                          </h1>
                          <span
                            className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                            onClick={() => {
                              setUpdate(e);
                              document
                                .getElementById("update_task_modal")
                                .showModal();
                            }}
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
                })
              : "No task found"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
