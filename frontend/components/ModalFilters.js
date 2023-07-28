import React, { useState } from "react";

export function ModalFilters({ filters }) {
  const [showModal, setShowModal] = React.useState(false)
  const [checkedItems, setCheckedItems] = useState(new Set())

  /**
   * Update filter list with a new checked filter
   *
   * @param {string} itemKey - The key of selected filter
   */
const changeHandler = (itemKey) => {
    // first, make a copy of the original set rather than mutating the original
    const newValues = new Set(checkedItems)
    if (!newValues.has(itemKey)) {
      newValues.add(itemKey)
    } else {
      newValues.delete(itemKey)
    }
    setCheckedItems(newValues)
  }

  /**
   * Resets the values of the checked items to an empty set.
   *
   * @param {type} - No parameters.
   * @return {type} - No return value.
   */
  const resetValues = () => {
    setCheckedItems(new Set())
  }

  const applyFilters = (e) => {
    console.log(checkedItems)
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
        <div>
          <div
            className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Filter NFTs
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                {Object.keys(filters).map((filter) => {
                  const valuesFilter = filters[filter]

                  return (
                    <div key={filter}>
                      <div>
                        <div className="flex space-x-2">
                          <p className="lg:text-2xl text-xl font-medium text-gray-800">{filter}</p>
                        </div>
                        <div className=" md:flex mt-4 grid grid-cols-3 gap-y-4 flex-wrap">
                          {valuesFilter.map(filterValue => {
                            const checkItem = {
                              group: filter,
                              key: `${filterValue}--${filter}`,
                              label: filterValue
                            }
                            return (
                              <div key={checkItem.key} className="flex md:justify-center md:items-center items-center justify-start mr-4">
                                <input className="w-4 h-4 mr-2" type="checkbox" checked={checkedItems.has(checkItem.key)} id={checkItem.key} name={checkItem.key} onChange={() => changeHandler(checkItem.key)} />
                                <div className=" inline-block">
                                  <div className=" flex space-x-6 justify-center items-center">
                                    <label className=" mr-2 text-sm leading-3 font-normal text-gray-600" htmlFor={checkItem.key}>
                                      {checkItem.label}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      <hr className=" bg-gray-200 w-full my-4" />
                    </div>
                  )
                })}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-red-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      resetValues()
                    }}
                  >
                    Reset
                  </button>
                  <button
                    className="bg-red-700 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      applyFilters();
                      setShowModal(false)
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
}
