function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function EmployeesTable(_ref) {
  var employees = _ref.employees;
  var data = employees;
  var columns = [{
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
  return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(function (column) {
    return /*#__PURE__*/React.createElement("th", {
      key: column.accessor
    }, column.Header);
  }))), /*#__PURE__*/React.createElement("tbody", null, data.map(function (row, idx) {
    return /*#__PURE__*/React.createElement("tr", {
      key: idx
    }, Object.values(row).map(function (cell, idx) {
      return /*#__PURE__*/React.createElement("td", {
        key: idx
      }, cell);
    }));
  })));
}

module.exports = EmployeesTable;
//# sourceMappingURL=index.js.map
