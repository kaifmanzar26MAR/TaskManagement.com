import React from "react";

const Home = () => {
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
                className="bg-white border-2 px-2 rounded-lg"
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

          <button className="p-2 bg-blue-800 text-white w-[20%] rounded-lg">ADD TASK</button>
        </div>

        <div className="h-[65vh] flex gap-[11px] mt-2   p-2 carousel carousel-center lg:justify-center">
          <div
            id="assign"
            className="w-full flex flex-col lg:w-[19%] overflow-auto border-2 rounded-xl carousel-item relative  "
          >
            <h1 className="w-full h-fit bg-gray-500 text-white font-semibold text-lg p-2 text-center sticky top-0 rounded-t-lg">
              Pending
            </h1>

            <div className="task-container p-2 w-full flex flex-col gap-y-5">
              <div className="p-2 bg-gray-100 text-sm flex flex-col gap-y-3 border-2 rounded-lg ">
                <div className="headding  w-full  flex justify-between items-center">
                  <h1 className="font-bold text-xl">Task 1</h1>
                  <span className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center">
                    P0
                  </span>
                </div>

                <hr />

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid doloribus minima distinctio maxime, corporis neque
                  voluptas veritatis ipsa unde perferendis.
                </p>

                <div className="lower w-full flex justify-between items-center">
                  <h1 className="font-semibold text-lg">@kaif</h1>
                  <span className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center">
                    :
                  </span>
                </div>

                <div className="cursor-pointer p-2 text-center bg-blue-800 w-32 rounded-lg text-white">
                  In Progress
                </div>
              </div>
            </div>
            <div className="task-container p-2 w-full flex flex-col gap-y-5">
              <div className="p-2 bg-gray-100 text-sm flex flex-col gap-y-3 border-2 rounded-lg ">
                <div className="headding  w-full  flex justify-between items-center">
                  <h1 className="font-bold text-xl">Task 1</h1>
                  <span className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center">
                    P0
                  </span>
                </div>

                <hr />

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid doloribus minima distinctio maxime, corporis neque
                  voluptas veritatis ipsa unde perferendis.
                </p>

                <div className="lower w-full flex justify-between items-center">
                  <h1 className="font-semibold text-lg">@kaif</h1>
                  <span className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center">
                    :
                  </span>
                </div>

                <div className="cursor-pointer p-2 text-center bg-blue-800 w-32 rounded-lg text-white">
                  In Progress
                </div>
              </div>
            </div>
          </div>

          <div
            id="inProgress"
            className="w-full flex flex-col lg:w-[19%] overflow-auto border-2 rounded-xl carousel-item relative  "
          >
            <h1 className="w-full h-fit bg-orange-400 text-white text-lg font-semibold p-2 text-center sticky top-0 rounded-t-lg">
              In Progress
            </h1>

            <div className="task-container p-2 w-full flex flex-col gap-y-5">
              <div className="p-2 bg-gray-100 text-sm flex flex-col gap-y-3 border-2 rounded-lg ">
                <div className="headding  w-full  flex justify-between items-center">
                  <h1 className="font-bold text-xl">Task 1</h1>
                  <span className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center">
                    P0
                  </span>
                </div>

                <hr />

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid doloribus minima distinctio maxime, corporis neque
                  voluptas veritatis ipsa unde perferendis.
                </p>

                <div className="lower w-full flex justify-between items-center">
                  <h1 className="font-semibold text-lg">@kaif</h1>
                  <span className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center">
                    :
                  </span>
                </div>

                <div className="cursor-pointer p-2 text-center bg-blue-800 w-32 rounded-lg text-white">
                  In Progress
                </div>
              </div>
            </div>
          </div>

          <div
            id="complete"
            className="w-full flex flex-col lg:w-[19%] overflow-auto border-2 rounded-xl carousel-item relative  "
          >
            <h1 className="w-full h-fit bg-green-600 text-white text-lg font-semibold p-2 text-center sticky top-0 rounded-t-lg">
              Completed
            </h1>

            <div className="task-container p-2 w-full flex flex-col gap-y-5">
              <div className="p-2 bg-gray-100 text-sm flex flex-col gap-y-3 border-2 rounded-lg ">
                <div className="headding  w-full  flex justify-between items-center">
                  <h1 className="font-bold text-xl">Task 1</h1>
                  <span className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center">
                    P0
                  </span>
                </div>

                <hr />

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid doloribus minima distinctio maxime, corporis neque
                  voluptas veritatis ipsa unde perferendis.
                </p>

                <div className="lower w-full flex justify-between items-center">
                  <h1 className="font-semibold text-lg">@kaif</h1>
                  <span className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center">
                    :
                  </span>
                </div>

                <div className="cursor-pointer p-2 text-center bg-blue-800 w-32 rounded-lg text-white">
                  In Progress
                </div>
              </div>
            </div>
          </div>

          <div
            id="deployed"
            className="w-full flex flex-col lg:w-[19%] overflow-auto border-2 rounded-xl carousel-item relative  "
          >
            <h1 className="w-full h-fit bg-purple-800 text-white text-lg font-semibold p-2 text-center sticky top-0 rounded-t-lg">
              Deployed
            </h1>

            <div className="task-container p-2 w-full flex flex-col gap-y-5">
              <div className="p-2 bg-gray-100 text-sm flex flex-col gap-y-3 border-2 rounded-lg ">
                <div className="headding  w-full  flex justify-between items-center">
                  <h1 className="font-bold text-xl">Task 1</h1>
                  <span className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center">
                    P0
                  </span>
                </div>

                <hr />

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid doloribus minima distinctio maxime, corporis neque
                  voluptas veritatis ipsa unde perferendis.
                </p>

                <div className="lower w-full flex justify-between items-center">
                  <h1 className="font-semibold text-lg">@kaif</h1>
                  <span className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center">
                    :
                  </span>
                </div>

                <div className="cursor-pointer p-2 text-center bg-blue-800 w-32 rounded-lg text-white">
                  In Progress
                </div>
              </div>
            </div>
          </div>

          <div
            id="differed"
            className="w-full flex flex-col lg:w-[19%] overflow-auto border-2 rounded-xl carousel-item relative  "
          >
            <h1 className="w-full h-fit bg-red-400 text-white text-lg font-semibold p-2 text-center sticky top-0 rounded-t-lg">
              Deffered
            </h1>

            <div className="task-container p-2 w-full flex flex-col gap-y-5">
              <div className="p-2 bg-gray-100 text-sm flex flex-col gap-y-3 border-2 rounded-lg ">
                <div className="headding  w-full  flex justify-between items-center">
                  <h1 className="font-bold text-xl">Task 1</h1>
                  <span className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center">
                    P0
                  </span>
                </div>

                <hr />

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid doloribus minima distinctio maxime, corporis neque
                  voluptas veritatis ipsa unde perferendis.
                </p>

                <div className="lower w-full flex justify-between items-center">
                  <h1 className="font-semibold text-lg">@kaif</h1>
                  <span className="p-1 rounded-sm bg-blue-800 text-white w-8 text-center">
                    :
                  </span>
                </div>

                <div className="cursor-pointer p-2 text-center bg-blue-800 w-32 rounded-lg text-white">
                  In Progress
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
