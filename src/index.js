import React from 'react'
// import styles from './styles.module.css'

export default function EmployeesTable({ employees }) {
  const data = employees
  const columns = [
    {
      Header: 'First Name',
      accessor: 'firstname'
    },
    {
      Header: 'Last Name',
      accessor: 'lastname'
    },
    {
      Header: 'Date Of Birth',
      accessor: 'dateOfBirth'
    },
    {
      Header: 'Start Date',
      accessor: 'startDate'
    },
    {
      Header: 'Street',
      accessor: 'street'
    },
    {
      Header: 'City',
      accessor: 'city'
    },
    {
      Header: 'State',
      accessor: 'state'
    },
    {
      Header: 'Zip Code',
      accessor: 'zip'
    },
    {
      Header: 'Department',
      accessor: 'department'
    }
  ]

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {Object.values(row).map((cell, idx) => (
              <td key={idx}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
