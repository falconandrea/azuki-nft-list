import React, { useState } from "react";

export function ModalFilters({ filters }) {
  const [showModal, setShowModal] = React.useState(false)
  const [check, setCheck] = useState([])

  const changeHandler = (e) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    });
  };

  const applyFilters = (e) => {

  }

  return (
    <div className="flex flex-row-reverse mb-4">
      <button
        className="bg-red-700 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded us:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Show filters
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Filter NFTs
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                {Object.keys(filters).map((filter) => {
                  const valuesFilter = filters[filter]

                  return (
                    <div>
                      <div>
                        <div className=" flex space-x-2">
                          <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">{filter}</p>
                        </div>
                        <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                          {valuesFilter.map(filterValue => {
                            return (
                              <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
                                <input className="w-4 h-4 mr-2" type="checkbox" id={filterValue} name={filterValue} value={filterValue} onChange={changeHandler} />
                                <div className=" inline-block">
                                  <div className=" flex space-x-6 justify-center items-center">
                                    <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor={filterValue}>
                                      {filterValue}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
                    </div>
                  )
                })
                }
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-red-700 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
