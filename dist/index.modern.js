import React from 'react';

function EmployeesTable({
  employees
}) {
  const data = employees;
  const columns = [{
    Header: 'First Name',
    accessor: 'firstname'
  }, {
    Header: 'Last Name',
    accessor: 'lastname'
  }, {
    Header: 'Date Of Birth',
    accessor: 'dateOfBirth'
  }, {
    Header: 'Start Date',
    accessor: 'startDate'
  }, {
    Header: 'Street',
    accessor: 'street'
  }, {
    Header: 'City',
    accessor: 'city'
  }, {
    Header: 'State',
    accessor: 'state'
  }, {
    Header: 'Zip Code',
    accessor: 'zip'
  }, {
    Header: 'Department',
    accessor: 'department'
  }];
  return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(column => /*#__PURE__*/React.createElement("th", {
    key: column.accessor
  }, column.Header)))), /*#__PURE__*/React.createElement("tbody", null, data.map((row, idx) => /*#__PURE__*/React.createElement("tr", {
    key: idx
  }, Object.values(row).map((cell, idx) => /*#__PURE__*/React.createElement("td", {
    key: idx
  }, cell))))));
}

export default EmployeesTable;
//# sourceMappingURL=index.modern.js.map
