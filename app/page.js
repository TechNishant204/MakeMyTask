"use client";
import React, { useState } from "react";

const page = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault(); //in built method that stop the reloading
    setMainTask([...mainTask, { task, desc }]);
    settask("");
    setdesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setMainTask(copytask);
  };
  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8">
          <div className="flex justify-between mb-5 w-2/3 font-sans hover:font-serif">
            <h5 className="text-2xl font-semibold font-sans hover:font-serif">
              {t.task}
            </h5>
            <h6 className="text-lg font-medium font-sans hover:font-serif">
              {t.desc}
            </h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-500 rounded-2xl  motion-safe:hover:scale-110 hover:bg-red-700  text-white px-4 py-2 font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-blue-400 hover:bg-blue-700 p-5 font-sans Gray-300 text-5xl text-center font-bold ">
        MakeMyTask
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl text-center focus:ring-2 focus:ring-red-600 focus:border-transparent border-blue-800 border-2 rounded-2xl m-8 px-4 py-2 "
          placeholder="Create your Task"
          value={task}
          onChange={(e) => {
            settask(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl text-center focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent  border-blue-800 border-2 rounded-2xl m-8 px-4 py-2 "
          placeholder="Describe your task"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-violet-600  motion-safe:hover:scale-110 hover:bg-purple-700 active:bg-violet-900 rounded-3xl text-white px-3 py-3 text-2xl ">
          Add Task
        </button>
      </form>
      <hr />
      <div className="px-8 py-3 m-3 bg-slate-300 rounded-2xl">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
