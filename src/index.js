import React, { useState } from 'react'
import styles from './styles.module.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { styled } from '@mui/material'
import red from '@mui/material/colors/red'
import grey from '@mui/material/colors/grey'

export default function EmployeesTable({ data, columns }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [entriesDisplayed, setEntriesDisplayed] = useState(10)
  const [displayedData, setDisplayedData] = useState(data)
  const [sort, setSort] = useState('')
  const [sortType, setSortType] = useState('')
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

  const onClickHeader = (e, column) => {
    setCurrentPage(1)

    if (sort === column) {
      if (sortType === '') {
        setDisplayedData(
          displayedData.slice().sort((a, b) => {
            if (a[column] > b[column]) return 1
            else return -1
          })
        )
        setSortType('DESC')
        return
      } else if (sortType === 'DESC') {
        setDisplayedData(displayedData.slice().reverse())
        setSortType('ASC')
        return
      } else {
        setDisplayedData(data)
        setSortType('')
        setSort('')
        return
      }
    } else {
      setDisplayedData(
        displayedData.slice().sort((a, b) => {
          if (a[column] > b[column]) return 1
          else return -1
        })
      )
      setSortType('DESC')
    }

    setSort(column)
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

  const createPaginationButtons = (pageNumber) => {
    const buttons = []
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <ColorButton
          disabled={currentPage === i ? true : undefined}
          onClick={() => setCurrentPage(i)}
          key={i}
        >
          {i}
        </ColorButton>
      )
    }
    return buttons
  }

  const disablePreviousButton =
    totalPages <= 1 || currentPage <= 1 ? true : undefined
  const disableNextButton =
    totalPages <= 1 || currentPage >= totalPages ? true : undefined

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[900]),
    backgroundColor: red[900],
    '&:hover': {
      backgroundColor: red[700]
    },
    '&:disabled': {
      backgroundColor: grey[500]
    }
  }))

  return (
    <div>
      <div className={styles.controlsBar}>
        <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id='Entries'>Entries per page</InputLabel>
          <Select
            name='Entries'
            labelId='Entries'
            label='Entries per page'
            onChange={onEntriesDisplayedChange}
            value={entriesDisplayed}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>

        <div>
          <TextField
            fullWidth
            name='Search'
            id='Search'
            onChange={handleSearchChange}
            label='Search'
            variant='outlined'
          />
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                className={styles.th}
                key={column.accessor}
                value={column.accessor}
                onClick={(e, value) => onClickHeader(e, column.accessor)}
              >
                {column.Header}
                {sort !== column.accessor && (
                  <span className={styles.arrow}>↕</span>
                )}
                {sort === column.accessor && sortType === 'ASC' && (
                  <span className={styles.arrow}>↑</span>
                )}
                {sort === column.accessor && sortType === 'DESC' && (
                  <span className={styles.arrow}>↓</span>
                )}
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
        <div className={styles.paginationButtonsContainer}>
          <ColorButton disabled={disablePreviousButton} onClick={previousPage}>
            Previous
          </ColorButton>
          {createPaginationButtons(totalPages)}
          <ColorButton disabled={disableNextButton} onClick={nextPage}>
            Next
          </ColorButton>
        </div>
      </div>
    </div>
  )
}
