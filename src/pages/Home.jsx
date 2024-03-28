import React from 'react';

const Home = () => {
  return (
    <div className='flex w-full flex-col justify-start items-start p-5'>
      <h1 className='text-3xl font-semibold'>Task Board</h1>
      <div className='w-full h-[80vh] flex gap-5 mt-4 border-2 rounded-xl p-5 carousel carousel-center'>

        <div id='assign' className='w-full flex flex-col lg:w-1/5 overflow-auto border-2 rounded-xl carousel-item relative  '>
          <h1 className='w-full h-fit bg-green-600 p-2 text-center sticky top-0 rounded-t-lg'>Assign</h1>

          <div className='task-container p-2 w-full flex flex-col gap-y-5' >

            <div className='p-2 text-sm flex flex-col gap-y-3 border-2 rounded-lg '>
                <div className="headding  w-full  flex justify-between items-center">
                  <h1 className='font-bold text-xl'>Task 1</h1>
                  <span className='p-1 rounded-sm bg-blue-800 text-white w-8 text-center'>P0</span>
                </div>

                <hr />

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus minima distinctio maxime, corporis neque voluptas veritatis ipsa unde perferendis.</p>

                <div className="lower w-full flex justify-between items-center">
                    <h1 className='font-semibold text-lg'>@kaif</h1>
                    <span className='p-1 rounded-sm bg-blue-800 text-white w-8 text-center'>:</span>
                </div>

                <div className='cursor-pointer p-2 text-center bg-blue-800 w-32 rounded-lg text-white'>In Progress</div>
            </div>

          </div>
          <div className='task-container p-2 w-full flex flex-col gap-y-5' >

            <div className='p-2 text-sm flex flex-col gap-y-3 border-2 rounded-lg '>
                <div className="headding  w-full  flex justify-between items-center">
                  <h1 className='font-bold text-xl'>Task 1</h1>
                  <span className='p-1 rounded-sm bg-blue-800 text-white w-8 text-center'>P0</span>
                </div>

                <hr />

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus minima distinctio maxime, corporis neque voluptas veritatis ipsa unde perferendis.</p>

                <div className="lower w-full flex justify-between items-center">
                    <h1 className='font-semibold text-lg'>@kaif</h1>
                    <span className='p-1 rounded-sm bg-blue-800 text-white w-8 text-center'>:</span>
                </div>

                <div className='cursor-pointer p-2 text-center bg-blue-800 w-32 rounded-lg text-white'>In Progress</div>
            </div>

          </div>


        </div>


        <div id='inProgress' className='w-full flex flex-col lg:w-1/5 overflow-auto border-2 rounded-xl carousel- relative item '>
          <h1 className='w-full h-fit bg-green-600 p-2 text-center sticky top-0 rounded-t-lg'>Assign</h1>

          <div className='task-container p-2 w-full flex flex-col gap-y-5' >


            <div className='p-2 text-sm flex flex-col gap-y-3 border-2 rounded-lg '>
                <div className="headding  w-full  flex justify-between items-center">
                  <h1 className='font-bold text-xl'>Task 1</h1>
                  <span className='p-1 rounded-sm bg-blue-800 text-white w-8 text-center'>P0</span>
                </div>

                <hr />

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus minima distinctio maxime, corporis neque voluptas veritatis ipsa unde perferendis.</p>

                <div className="lower w-full flex justify-between items-center">
                    <h1 className='font-semibold text-lg'>@kaif</h1>
                    <span className='p-1 rounded-sm bg-blue-800 text-white w-8 text-center'>:</span>
                </div>

                <div className='cursor-pointer p-2 text-center bg-blue-800 w-32 rounded-lg text-white'>In Progress</div>
            </div>


          </div>


        </div>


        <div id='complete' className='w-full flex flex-col lg:w-1/5 overflow-auto border-2 rounded-xl carousel-it relative em '>
          <h1 className='w-full h-fit bg-green-600 p-2 text-center sticky top-0 rounded-t-lg'>Assign</h1>

          <div className='task-container p-2 w-full flex flex-col gap-y-5' >


            <div className='p-2 text-sm flex flex-col gap-y-3 border-2 rounded-lg '>
                <div className="headding  w-full  flex justify-between items-center">
                  <h1 className='font-bold text-xl'>Task 1</h1>
                  <span className='p-1 rounded-sm bg-blue-800 text-white w-8 text-center'>P0</span>
                </div>

                <hr />

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus minima distinctio maxime, corporis neque voluptas veritatis ipsa unde perferendis.</p>

                <div className="lower w-full flex justify-between items-center">
                    <h1 className='font-semibold text-lg'>@kaif</h1>
                    <span className='p-1 rounded-sm bg-blue-800 text-white w-8 text-center'>:</span>
                </div>

                <div className='cursor-pointer p-2 text-center bg-blue-800 w-32 rounded-lg text-white'>In Progress</div>
            </div>


          </div>


        </div>


        <div id='deployed' className='w-full flex flex-col lg:w-1/5 overflow-auto border-2 rounded-xl carousel-it relative em '>
          <h1 className='w-full h-fit bg-green-600 p-2 text-center sticky top-0 rounded-t-lg'>Assign</h1>

          <div className='task-container p-2 w-full flex flex-col gap-y-5' >


            <div className='p-2 text-sm flex flex-col gap-y-3 border-2 rounded-lg '>
                <div className="headding  w-full  flex justify-between items-center">
                  <h1 className='font-bold text-xl'>Task 1</h1>
                  <span className='p-1 rounded-sm bg-blue-800 text-white w-8 text-center'>P0</span>
                </div>

                <hr />

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus minima distinctio maxime, corporis neque voluptas veritatis ipsa unde perferendis.</p>

                <div className="lower w-full flex justify-between items-center">
                    <h1 className='font-semibold text-lg'>@kaif</h1>
                    <span className='p-1 rounded-sm bg-blue-800 text-white w-8 text-center'>:</span>
                </div>

                <div className='cursor-pointer p-2 text-center bg-blue-800 w-32 rounded-lg text-white'>In Progress</div>
            </div>


          </div>


        </div>


        <div id='differed' className='w-full flex flex-col lg:w-1/5 overflow-auto border-2 rounded-xl carousel-it relative em '>
          <h1 className='w-full h-fit bg-green-600 p-2 text-center sticky top-0 rounded-t-lg'>Assign</h1>

          <div className='task-container p-2 w-full flex flex-col gap-y-5' >


            <div className='p-2 text-sm flex flex-col gap-y-3 border-2 rounded-lg '>
                <div className="headding  w-full  flex justify-between items-center">
                  <h1 className='font-bold text-xl'>Task 1</h1>
                  <span className='p-1 rounded-sm bg-blue-800 text-white w-8 text-center'>P0</span>
                </div>

                <hr />

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloribus minima distinctio maxime, corporis neque voluptas veritatis ipsa unde perferendis.</p>

                <div className="lower w-full flex justify-between items-center">
                    <h1 className='font-semibold text-lg'>@kaif</h1>
                    <span className='p-1 rounded-sm bg-blue-800 text-white w-8 text-center'>:</span>
                </div>

                <div className='cursor-pointer p-2 text-center bg-blue-800 w-32 rounded-lg text-white'>In Progress</div>
            </div>


          </div>


        </div>


      </div>
    </div>
  );
};

export default Home;
