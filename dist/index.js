function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function EmployeesTable(_ref) {
  var data = _ref.data,
      columns = _ref.columns;

  var _useState = React.useState(1),
      currentPage = _useState[0],
      setCurrentPage = _useState[1];

  var _useState2 = React.useState(10),
      entriesDisplayed = _useState2[0],
      setEntriesDisplayed = _useState2[1];

  var _useState3 = React.useState(data),
      displayedData = _useState3[0],
      setDisplayedData = _useState3[1];

  var totalEntries = displayedData.length;
  var totalPages = Math.ceil(totalEntries / entriesDisplayed);

  var createDataChunks = function createDataChunks(chunkSize) {
    var chunkList = [];
    var datas = displayedData.slice();

    while (datas.length) {
      chunkList.push(datas.splice(0, chunkSize));
    }

    return chunkList;
  };

  var onEntriesDisplayedChange = function onEntriesDisplayedChange(e) {
    setEntriesDisplayed(e.target.value);
    setCurrentPage(1);
  };

  var previousPage = function previousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  var nextPage = function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  var handleSearchChange = function handleSearchChange(e) {
    var datas = data.slice().filter(function (employee) {
      return employee.firstname.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setDisplayedData(datas);
    setCurrentPage(1);
  };

  var handleHeaderClick = function handleHeaderClick(e) {
    console.log(e.target.attributes.value.value);
  };

  var disablePreviousButton = totalPages <= 1 || currentPage <= 1 ? true : undefined;
  var disableNextButton = totalPages <= 1 || currentPage >= totalPages ? true : undefined;
  var tableStyle = {
    width: '890px'
  };
  var headerStyle = {
    verticalAlign: 'middle'
  };
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("select", {
    onChange: onEntriesDisplayedChange,
    value: entriesDisplayed
  }, /*#__PURE__*/React__default.createElement("option", {
    value: 1
  }, "1"), /*#__PURE__*/React__default.createElement("option", {
    value: 2
  }, "2"), /*#__PURE__*/React__default.createElement("option", {
    value: 10
  }, "10"), /*#__PURE__*/React__default.createElement("option", {
    value: 25
  }, "25"), /*#__PURE__*/React__default.createElement("option", {
    value: 50
  }, "50"), /*#__PURE__*/React__default.createElement("option", {
    value: 100
  }, "100"))), /*#__PURE__*/React__default.createElement("input", {
    type: "text",
    placeholder: "Search",
    onChange: handleSearchChange
  }), /*#__PURE__*/React__default.createElement("table", {
    style: tableStyle
  }, /*#__PURE__*/React__default.createElement("thead", {
    style: headerStyle
  }, /*#__PURE__*/React__default.createElement("tr", null, columns.map(function (column) {
    return /*#__PURE__*/React__default.createElement("th", {
      onClick: function onClick(e) {
        return handleHeaderClick(e);
      },
      key: column.accessor,
      value: column.accessor
    }, column.Header);
  }))), /*#__PURE__*/React__default.createElement("tbody", null, displayedData.length > 0 ? createDataChunks(entriesDisplayed)[currentPage - 1].map(function (row, idx) {
    return /*#__PURE__*/React__default.createElement("tr", {
      key: idx
    }, Object.values(row).map(function (cell, idx) {
      return /*#__PURE__*/React__default.createElement("td", {
        key: idx
      }, cell);
    }));
  }) : /*#__PURE__*/React__default.createElement("tr", null, /*#__PURE__*/React__default.createElement("td", null, "No matching records found")))), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("button", {
    disabled: disablePreviousButton,
    onClick: previousPage
  }, "Previous"), /*#__PURE__*/React__default.createElement("button", {
    disabled: disableNextButton,
    onClick: nextPage
  }, "Next")), /*#__PURE__*/React__default.createElement("div", null, "Showing " + currentPage + " of " + totalPages + " (" + totalEntries + " entries)"));
}

module.exports = EmployeesTable;
//# sourceMappingURL=index.js.map
