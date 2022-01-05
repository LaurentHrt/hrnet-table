import React, { useState } from 'react'
import styles from './styles.module.css'

export default function EmployeesTable({ data, columns }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [entriesDisplayed, setEntriesDisplayed] = useState(10)
  const [displayedData, setDisplayedData] = useState(data)
  const totalEntries = displayedData.length
  const totalPages = Math.ceil(totalEntries / entriesDisplayed)

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
      .filter((employee) =>
        employee.firstname.toLowerCase().includes(e.target.value.toLowerCase())
      )
    setDisplayedData(datas)
    setCurrentPage(1)
    console.log(currentPage)
  }

  return (
    <div>
      <div className={styles.controlsContainer}>
        <select onChange={onEntriesDisplayedChange} value={entriesDisplayed}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <input type='text' placeholder='Search' onChange={handleSearchChange} />
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData.length > 0 ? (
            createDataChunks(entriesDisplayed)[currentPage - 1].map(
              (row, idx) => (
                <tr key={idx}>
                  {Object.values(row).map((cell, idx) => (
                    <td key={idx}>{cell}</td>
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
      <div>
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
      <div>{`Page ${currentPage} of ${totalPages} (${totalEntries} entries)`}</div>
    </div>
  )
}
