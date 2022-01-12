# hrnet-table

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/hrnet-employees-table.svg)](https://www.npmjs.com/package/hrnet-employees-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @laurenthrt/hrnet-table
```

## Usage

```jsx
import EmployeeTable from '@laurenthrt/hrnet-table'
import '@laurenthrt/hrnet-table/dist/index.css'

function Example() {
  const employees = useSelector(selectEmployees)
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

  return <EmployeeTable data={employees} columns={columns} />
}
```

## License

MIT © [LaurentHrt](https://github.com/LaurentHrt)
