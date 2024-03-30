import React, { useEffect, useState } from "react";
import axios from "axios";
import AddTask from "../Mod/AddTask";
import UpdateTask from "../Mod/UpdateTask";
import { useNavigate } from "react-router-dom";
import DeleteTask from "../Mod/DeleteTask.jsx";

const Home = () => {
  const [user, setUser] = useState(null);
  const [assignTask, setAssignTask] = useState([]);
  const [inProgressTask, setInprogressTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);
  const [deployedTask, setDeployedTask] = useState([]);
  const [defferedTask, setDefferedTask] = useState([]);
  const [update, setUpdate] = useState({});
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterDateFrom, setFilterDateFrom] = useState("All");
  const [filterToDate, setFilterToDate] = useState("All");
  const [filterAssignee, setFilterAssignee] = useState("All");
  const [allAssignee, setAllAssignee] = useState([]);
  const [deleteTaskData, setDeleteTaskData]=useState({});

  const [displayAssign, setDisplayAssign] = useState([]);
  const [displayInProcess, setDisplayInProcess] = useState([]);
  const [displayCompleted, setDisplayCompleted] = useState([]);
  const [displayDeployed, setDisplayDeployed] = useState([]);
  const [displayDeffered, setDisplayDeffered] = useState([]);

  const navigate = useNavigate();
  const assigneeSet = new Set();
  assigneeSet.add("All");

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
      // console.log(res.data.data);
      setAssignTask(res.data.data);
      setDisplayAssign(res.data.data);

      res.data.data.forEach((task) => {
        assigneeSet.add(task.assign_by_name);
      });
      // console.log(assigneeSet);

      setAllAssignee(Array.from(assigneeSet));
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
      // console.log(res.data.data);
      setInprogressTask(res.data.data);
      setDisplayInProcess(res.data.data);
      res.data.data.forEach((task) => {
        assigneeSet.add(task.assign_by_name);
      });
      // console.log(assigneeSet);

      setAllAssignee(Array.from(assigneeSet));
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
      // console.log(res.data.data);
      setCompletedTask(res.data.data);
      setDisplayCompleted(res.data.data);
      res.data.data.forEach((task) => {
        assigneeSet.add(task.assign_by_name);
      });
      // console.log(assigneeSet);

      setAllAssignee(Array.from(assigneeSet));
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
      // console.log(res.data.data);
      setDeployedTask(res.data.data);
      setDisplayDeployed(res.data.data);
      res.data.data.forEach((task) => {
        assigneeSet.add(task.assign_by_name);
      });
      // console.log(assigneeSet);

      setAllAssignee(Array.from(assigneeSet));
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
      // console.log(res.data.data);
      setDefferedTask(res.data.data);
      setDisplayDeffered(res.data.data);
      res.data.data.forEach((task) => {
        assigneeSet.add(task.assign_by_name);
      });
      // console.log(assigneeSet);

      setAllAssignee(Array.from(assigneeSet));
    } catch (error) {
      console.log(error);
    }
  };

  const filterData = (dataToFilter) => {
    console.log(
      "filter data",
      filterPriority,
      filterDateFrom,
      filterToDate,
      filterAssignee
    );

    const filterStartDate = new Date(filterDateFrom);
    const filterEndDate = new Date(filterToDate);

    const filteredData = dataToFilter.filter((item) => {
      //Check assignee by
      if (filterAssignee != "All" && item.assign_by_name !== filterAssignee) {
        return false;
      }
      // Check priority
      if (filterPriority !== "All" && item.task_priroty !== filterPriority) {
        return false;
      }

      // Check creation date
      if (filterDateFrom !== "All") {
        const createdAtDate = new Date(item.createdAt);
        if (createdAtDate <= filterStartDate) {
          return false;
        }
      }

      // Check completion date
      if (filterToDate !== "All") {
        const createdAtDate = new Date(item.createdAt);
        if (createdAtDate >= filterEndDate) {
          return false;
        }
      }

      return true;
    });

    console.log("after filter", filteredData);
    return filteredData;
  };

  const sortByPriorityAscending = (tasks) => {
    const sortedData = tasks.slice().sort((a, b) => {
      // Assuming task_priority is a string like "P1", "P2", etc.
      const priorityA = parseInt(a.task_priroty.substring(1)); // Extract the numeric part
      const priorityB = parseInt(b.task_priroty.substring(1));
      return a.task_priroty - b.task_priroty;
    });
    console.log(sortedData);
    return sortedData;
  };
  
  const sortByPriorityDescending = (tasks) => {
    const sortedData = tasks.slice().sort((a, b) => {
      // Assuming task_priority is a string like "P1", "P2", etc.
      const priorityA = parseInt(a.task_priroty.substring(1)); // Extract the numeric part
      const priorityB = parseInt(b.task_priroty.substring(1));
      return b.task_priroty - a.task_priroty;
    });
    console.log(sortedData);
    return sortedData;
  };
  

  const handleSort = (value) => {
    console.log("hiii ", value);
    if (value) {
      setDisplayAssign(sortByPriorityAscending([...displayAssign]));
      setDisplayInProcess(sortByPriorityAscending([...displayInProcess]));
      setDisplayCompleted(sortByPriorityAscending([...displayCompleted]));
      setDisplayDeffered(sortByPriorityAscending([...displayDeffered])); 
      setDisplayDeployed(sortByPriorityAscending([...displayDeployed]));
    } else {
      setDisplayAssign(sortByPriorityDescending([...displayAssign]));
      setDisplayInProcess(sortByPriorityDescending([...displayInProcess]));
      setDisplayCompleted(sortByPriorityDescending([...displayCompleted]));
      setDisplayDeffered(sortByPriorityDescending([...displayDeffered])); 
      setDisplayDeployed(sortByPriorityDescending([...displayDeployed]));
    }
  };



  const handleDelete= async(data)=>{
    delete_task_modal
  }

  useEffect(() => {
    setDisplayAssign(filterData(assignTask));
    setDisplayInProcess(filterData(inProgressTask));
    setDisplayCompleted(filterData(completedTask));
    setDisplayDeployed(filterData(deployedTask));
    setDisplayDeffered(filterData(defferedTask));
  }, [filterPriority, filterDateFrom, filterToDate, filterAssignee]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/users/current-user"
        );
        if (response.status !== 200) {
          navigate("/login");
        }
        setUser(response.data.data);
        console.log("userr...........", response.data.data);
      } catch (error) {
        console.error("Error fetching user:", error);
        navigate("/login");
      }
    };

    fetchUser();
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
                value={filterAssignee}
                onChange={(e) => {
                  setFilterAssignee(e.target.value);
                }}
              >
                {allAssignee?.map((e) => {
                  return (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  );
                })}
              </select>
              <select
                name="priroty"
                id="priroty"
                className="bg-white border-2 px-2 rounded-lg"
                value={filterPriority}
                onChange={(e) => {
                  setFilterPriority(e.target.value);
                }}
              >
                <option value="All">All</option>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
              </select>

              <input
                type="date"
                className="bg-white border-2 px-2 rounded-lg"
                value={filterDateFrom}
                onChange={(e) => {
                  setFilterDateFrom(e.target.value);
                }}
              />
              <input
                type="date"
                className="bg-white border-2 px-2 rounded-lg"
                value={filterToDate}
                onChange={(e) => {
                  setFilterToDate(e.target.value);
                }}
              />
            </div>

            <div className="w-full flex gap-4 p-2 items-center justify-start">
              <h1 className="font-semibold">Sort By</h1>

              <select
                name="priroty"
                id="priroty"
                className="bg-white border-2 px-2 rounded-lg"
                onChange={(e) => {
                  handleSort(e.target.value);
                }}
              >
                <option value="">Select</option>
                <option value={true}>Inc To Dec</option>
                <option value={false}>Dec To Inc</option>
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
        <AddTask props={user} />
        <UpdateTask props={update} />
        <DeleteTask props={deleteTaskData}/>

        <div className="h-[65vh] flex gap-[11px] mt-2   p-2 carousel carousel-center lg:justify-center">
          <div
            id="assign"
            className="w-full bg-base-200 flex flex-col lg:w-[19%] overflow-auto border-2 rounded-xl carousel-item relative  "
          >
            <h1 className="w-full h-fit bg-gray-500 text-white font-semibold text-lg p-2 text-center sticky top-0 rounded-t-lg z-20 ">
              Pending{" "}
              <span className="px-2 flex items-center justify-center rounded-full bg-red-600 absolute -top-1 -right-1 ">
                {displayAssign.length}
              </span>
            </h1>

            {displayAssign.length > 0
              ? displayAssign.map((e) => {
                  {
                    /* console.log(e); */
                  }
                  const {
                    task_title,
                    task_priroty,
                    task_description,
                    assign_by_name,
                    assign_to,
                    task_status,
                    task_team,
                    createdAt,
                  } = e;
                  const DOC = new Date(createdAt.toString());
                  return (
                    <div
                      className="task-container p-2 w-full flex flex-col gap-y-5"
                      key={e._id}
                    >
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
                            @{assign_by_name}
                          </h1>
                          {/* <span
                            className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                            onClick={() => {
                              setUpdate(e);
                              document
                                .getElementById("update_task_modal")
                                .showModal();
                            }}
                          >
                            :
                          </span> */}

                          <div className="dropdown dropdown-bottom dropdown-end">
                            <div
                              tabIndex={0}
                              role="button"
                              className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                            >
                              :
                            </div>
                            <ul
                              tabIndex={0}
                              className="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-32"
                            >
                              <li>
                                <p
                                  onClick={() => {
                                    setUpdate(e);
                                    document
                                      .getElementById("update_task_modal")
                                      .showModal();
                                  }}
                                >
                                  Edit
                                </p>
                              </li>
                              <li>
                                <p onClick={()=>{
                                  setDeleteTaskData(e);
                                  document.getElementById("delete_task_modal").showModal()
                                }}>Delete</p>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className=" p-2 text-center bg-blue-800 w-32 rounded-lg text-white">
                          {task_status}
                        </div>
                        <p>
                          Created At:{" "}
                          {`${DOC.getDate()}-${DOC.getMonth()}-${DOC.getFullYear()}`}
                        </p>
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
            <h1 className="w-full h-fit bg-orange-400 text-white text-lg font-semibold p-2 text-center sticky top-0 rounded-t-lg z-20">
              In Progress{" "}
              <span className="px-2 flex items-center justify-center rounded-full bg-red-600 absolute -top-1 -right-1 ">
                {displayInProcess.length}
              </span>
            </h1>
            {displayInProcess.length > 0
              ? displayInProcess.map((e) => {
                  {
                    /* console.log(e); */
                  }
                  const {
                    task_title,
                    task_priroty,
                    task_description,
                    assign_by_name,
                    assign_to,
                    task_status,
                    task_team,
                    createdAt,
                  } = e;
                  const DOC = new Date(createdAt.toString());
                  return (
                    <div
                      className="task-container p-2 w-full flex flex-col gap-y-5"
                      key={e._id}
                    >
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
                            @{assign_by_name}
                          </h1>
                          {/* <span
                            className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                            onClick={() => {
                              setUpdate(e);
                              document
                                .getElementById("update_task_modal")
                                .showModal();
                            }}
                          >
                            :
                          </span> */}
                          <div className="dropdown dropdown-bottom dropdown-end">
                            <div
                              tabIndex={0}
                              role="button"
                              className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                            >
                              :
                            </div>
                            <ul
                              tabIndex={0}
                              className="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-32"
                            >
                              <li>
                                <p
                                  onClick={() => {
                                    setUpdate(e);
                                    document
                                      .getElementById("update_task_modal")
                                      .showModal();
                                  }}
                                >
                                  Edit
                                </p>
                              </li>
                              <li>
                                <p onClick={()=>{
                                  setDeleteTaskData(e);
                                  document.getElementById("delete_task_modal").showModal()
                                }}>Delete</p>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className=" p-2 text-center bg-blue-800 w-32 rounded-lg text-white">
                          {task_status}
                        </div>

                        <p>
                          Created At:{" "}
                          {`${DOC.getDate()}-${DOC.getMonth()}-${DOC.getFullYear()}`}
                        </p>
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
            <h1 className="w-full h-fit bg-green-600 text-white text-lg font-semibold p-2 text-center sticky top-0 rounded-t-lg z-20">
              Completed
              <span className="px-2 flex items-center justify-center rounded-full bg-red-600 absolute -top-1 -right-1 ">
                {displayCompleted.length}
              </span>
            </h1>
            {displayCompleted.length > 0
              ? displayCompleted.map((e) => {
                  {
                    /* console.log(e); */
                  }
                  const {
                    task_title,
                    task_priroty,
                    task_description,
                    assign_by_name,
                    assign_to,
                    task_status,
                    task_team,
                    createdAt,
                    updatedAt,
                  } = e;

                  const DOC = new Date(createdAt.toString());
                  const DOCom = new Date(updatedAt.toString());

                  return (
                    <div
                      className="task-container p-2 w-full flex flex-col gap-y-5"
                      key={e._id}
                    >
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
                            @{assign_by_name}
                          </h1>
                          {/* <span
                            className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                            onClick={() => {
                              setUpdate(e);
                              document
                                .getElementById("update_task_modal")
                                .showModal();
                            }}
                          >
                            :
                          </span> */}

                          <div className="dropdown dropdown-bottom dropdown-end">
                            <div
                              tabIndex={0}
                              role="button"
                              className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                            >
                              :
                            </div>
                            <ul
                              tabIndex={0}
                              className="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-32"
                            >
                              <li>
                                <p
                                  onClick={() => {
                                    setUpdate(e);
                                    document
                                      .getElementById("update_task_modal")
                                      .showModal();
                                  }}
                                >
                                  Edit
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className=" p-2 text-center bg-blue-800 w-32 rounded-lg text-white">
                          {task_status}
                        </div>
                        <div className="flex flex-col gap-y-0">
                          <p>
                            Created At:{" "}
                            {`${DOC.getDate()}-${DOC.getMonth()}-${DOC.getFullYear()}`}
                          </p>
                          <p>
                            Completed At:{" "}
                            {`${DOCom.getDate()}-${DOCom.getMonth()}-${DOCom.getFullYear()}`}
                          </p>
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
            <h1 className="w-full h-fit bg-purple-800 text-white text-lg font-semibold p-2 text-center sticky top-0 rounded-t-lg z-20">
              Deployed{" "}
              <span className="px-2 flex items-center justify-center rounded-full bg-red-600 absolute -top-1 -right-1 ">
                {displayDeployed.length}
              </span>
            </h1>
            {displayDeployed.length > 0
              ? displayDeployed.map((e) => {
                  {
                    /* console.log(e); */
                  }
                  const {
                    task_title,
                    task_priroty,
                    task_description,
                    assign_by_name,
                    assign_to,
                    task_status,
                    task_team,
                    createdAt,
                  } = e;
                  const DOC = new Date(createdAt.toString());
                  return (
                    <div
                      className="task-container p-2 w-full flex flex-col gap-y-5"
                      key={e._id}
                    >
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
                            @{assign_by_name}
                          </h1>
                          {/* <span
                            className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                            onClick={() => {
                              setUpdate(e);
                              document
                                .getElementById("update_task_modal")
                                .showModal();
                            }}
                          >
                            :
                          </span> */}

                          <div className="dropdown dropdown-bottom dropdown-end">
                            <div
                              tabIndex={0}
                              role="button"
                              className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                            >
                              :
                            </div>
                            <ul
                              tabIndex={0}
                              className="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-32"
                            >
                              <li>
                                <p
                                  onClick={() => {
                                    setUpdate(e);
                                    document
                                      .getElementById("update_task_modal")
                                      .showModal();
                                  }}
                                >
                                  Edit
                                </p>
                              </li>
                              <li>
                                <p onClick={()=>{
                                  setDeleteTaskData(e);
                                  document.getElementById("delete_task_modal").showModal()
                                }}>Delete</p>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className=" p-2 text-center bg-blue-800 w-32 rounded-lg text-white">
                          {task_status}
                        </div>
                        <p>
                          Created At:{" "}
                          {`${DOC.getDate()}-${DOC.getMonth()}-${DOC.getFullYear()}`}
                        </p>
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
            <h1 className="w-full h-fit bg-red-400 text-white text-lg font-semibold p-2 text-center sticky top-0 rounded-t-lg z-20">
              Deffered{" "}
              <span className="px-2 flex items-center justify-center rounded-full bg-red-600 absolute -top-1 -right-1 ">
                {displayDeffered.length}
              </span>
            </h1>
            {displayDeffered.length > 0
              ? displayDeffered.map((e) => {
                  const {
                    task_title,
                    task_priroty,
                    task_description,
                    assign_by_name,
                    assign_to,
                    task_status,
                    task_team,
                    createdAt,
                  } = e;

                  const DOC = new Date(createdAt.toString());
                  return (
                    <div
                      className="task-container p-2 w-full flex flex-col gap-y-5"
                      key={e._id}
                    >
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
                            @{assign_by_name}
                          </h1>
                          {/* <span
                            className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                            onClick={() => {
                              setUpdate(e);
                              document
                                .getElementById("update_task_modal")
                                .showModal();
                            }}
                          >
                            :
                          </span> */}

                          <div className="dropdown dropdown-bottom dropdown-end">
                            <div
                              tabIndex={0}
                              role="button"
                              className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center hover:bg-blue-900 cursor-pointer"
                            >
                              :
                            </div>
                            <ul
                              tabIndex={0}
                              className="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-32"
                            >
                              <li>
                                <p
                                  onClick={() => {
                                    setUpdate(e);
                                    document
                                      .getElementById("update_task_modal")
                                      .showModal();
                                  }}
                                >
                                  Edit
                                </p>
                              </li>
                              <li>
                                <p onClick={()=>{
                                  setDeleteTaskData(e);
                                  document.getElementById("delete_task_modal").showModal()
                                }}>Delete</p>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className=" p-2 text-center bg-blue-800 w-32 rounded-lg text-white">
                          {task_status}
                        </div>
                        <p>
                          Created At:{" "}
                          {`${DOC.getDate()}-${DOC.getMonth()}-${DOC.getFullYear()}`}
                        </p>
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
