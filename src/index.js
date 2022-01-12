import React, { useState } from 'react'
import styles from './styles.module.css'

export default function EmployeesTable({ data, columns }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [entriesDisplayed, setEntriesDisplayed] = useState(10)
  const [displayedData, setDisplayedData] = useState(data)
  const totalEntries = displayedData.length
  const totalPages = Math.ceil(totalEntries / entriesDisplayed)
  const showingFirst = currentPage * entriesDisplayed - entriesDisplayed + 1
  const showingLast =
    showingFirst + parseInt(entriesDisplayed - 1) > totalEntries
      ? totalEntries
      : showingFirst + parseInt(entriesDisplayed - 1)

  const createDataChunks = (chunkSize) => {
    const chunkList = []
    const datas = displayedData.slice()
    while (datas.length) {
      chunkList.push(datas.splice(0, chunkSize))
    }
    return chunkList
  }

  const onEntriesDisplayedChange = (e) => {
    setEntriesDisplayed(e.target.value)
    setCurrentPage(1)
  }

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleSearchChange = (e) => {
    const datas = data
      .slice()
      .filter(
        (employee) =>
          employee.firstname
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          employee.lastname
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          employee.dateOfBirth
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          employee.startDate
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          employee.street
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          employee.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
          employee.state.toLowerCase().includes(e.target.value.toLowerCase()) ||
          employee.zip
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          employee.department
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
      )
    setDisplayedData(datas)
    setCurrentPage(1)
  }

  const handleHeaderClick = (e) => {
    console.log(e.target.attributes.value.value)
    // const datas = displayedData.slice().sort((a, b) => a.zip - b.zip)
    // setDisplayedData(datas)
  }

  const createPaginationButtons = (pageNumber) => {
    const buttons = []
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          disabled={currentPage === i ? true : undefined}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      )
    }
    return buttons
  }

  const disablePreviousButton =
    totalPages <= 1 || currentPage <= 1 ? true : undefined
  const disableNextButton =
    totalPages <= 1 || currentPage >= totalPages ? true : undefined

  return (
    <div>
      <div className={styles.controlsBar}>
        <div>
          <label>
            Show
            <select
              onChange={onEntriesDisplayedChange}
              value={entriesDisplayed}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            entries
          </label>
        </div>
        <div>
          <label>
            Search:
            <input
              type='text'
              placeholder='Search'
              onChange={handleSearchChange}
            />
          </label>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                className={styles.th}
                onClick={(e) => handleHeaderClick(e)}
                key={column.accessor}
                value={column.accessor}
              >
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData.length > 0 ? (
            createDataChunks(entriesDisplayed)[currentPage - 1].map(
              (row, idx) => (
                <tr className={styles.tr} key={idx}>
                  {Object.values(row).map((cell, idx) => (
                    <td className={styles.td} key={idx}>
                      {cell}
                    </td>
                  ))}
                </tr>
              )
            )
          ) : (
            <tr>
              <td>No matching records found</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={styles.paginationContainer}>
        <div>{`Showing ${showingFirst} to ${showingLast} of ${totalEntries} entries`}</div>
        <div>
          <button disabled={disablePreviousButton} onClick={previousPage}>
            Previous
          </button>
          {}
          {createPaginationButtons(totalPages)}
          <button disabled={disableNextButton} onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
