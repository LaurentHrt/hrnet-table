import React, { useState } from 'react'
// import styles from './styles.module.css'

export default function EmployeesTable({ data, columns }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [entriesDisplayed, setEntriesDisplayed] = useState(10)
  const totalEntries = data.length
  const totalPages = Math.ceil(totalEntries / entriesDisplayed)

  const createDataChunks = (chunkSize) => {
    const chunkList = []
    const datas = data.slice()
    while (datas.length) {
      chunkList.push(datas.splice(0, chunkSize))
    }
    return chunkList
  }

  const [displayedData, setDisplayedData] = useState(
    createDataChunks(entriesDisplayed)
  )

  const onEntriesDisplayedChange = (e) => {
    setEntriesDisplayed(e.target.value)
    setCurrentPage(1)
    setDisplayedData(createDataChunks(e.target.value))
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

  return (
    <div>
      <select onChange={onEntriesDisplayedChange} value={entriesDisplayed}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      <input type='text' placeholder='Search' />
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData[currentPage - 1].map((row, idx) => (
            <tr key={idx}>
              {Object.values(row).map((cell, idx) => (
                <td key={idx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <p />
      </div>
      <div>
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </div>
      <div>{`${currentPage} of ${totalPages} (entries: ${totalEntries})`}</div>
    </div>
  )
}
