function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"table":"_FnYjQ","th":"_2MlMJ","td":"_qcjXT","tr":"_kcP3k","controlsBar":"_vj6nK","paginationContainer":"_34dm0"};

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
  var showingFirst = currentPage * entriesDisplayed - entriesDisplayed + 1;
  var showingLast = showingFirst + parseInt(entriesDisplayed - 1) > totalEntries ? totalEntries : showingFirst + parseInt(entriesDisplayed - 1);

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
      return employee.firstname.toLowerCase().includes(e.target.value.toLowerCase()) || employee.lastname.toLowerCase().includes(e.target.value.toLowerCase()) || employee.dateOfBirth.toLowerCase().includes(e.target.value.toLowerCase()) || employee.startDate.toLowerCase().includes(e.target.value.toLowerCase()) || employee.street.toLowerCase().includes(e.target.value.toLowerCase()) || employee.city.toLowerCase().includes(e.target.value.toLowerCase()) || employee.state.toLowerCase().includes(e.target.value.toLowerCase()) || employee.zip.toString().toLowerCase().includes(e.target.value.toLowerCase()) || employee.department.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setDisplayedData(datas);
    setCurrentPage(1);
  };

  var handleHeaderClick = function handleHeaderClick(e) {
    console.log(e.target.attributes.value.value);
  };

  var createPaginationButtons = function createPaginationButtons(pageNumber) {
    var buttons = [];

    var _loop = function _loop(i) {
      buttons.push( /*#__PURE__*/React__default.createElement("button", {
        disabled: currentPage === i ? true : undefined,
        onClick: function onClick() {
          return setCurrentPage(i);
        }
      }, i));
    };

    for (var i = 1; i <= totalPages; i++) {
      _loop(i);
    }

    return buttons;
  };

  var disablePreviousButton = totalPages <= 1 || currentPage <= 1 ? true : undefined;
  var disableNextButton = totalPages <= 1 || currentPage >= totalPages ? true : undefined;
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
    className: styles.controlsBar
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("label", null, "Show", /*#__PURE__*/React__default.createElement("select", {
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
  }, "100")), "entries")), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("label", null, "Search:", /*#__PURE__*/React__default.createElement("input", {
    type: "text",
    placeholder: "Search",
    onChange: handleSearchChange
  })))), /*#__PURE__*/React__default.createElement("table", {
    className: styles.table
  }, /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", null, columns.map(function (column) {
    return /*#__PURE__*/React__default.createElement("th", {
      className: styles.th,
      onClick: function onClick(e) {
        return handleHeaderClick(e);
      },
      key: column.accessor,
      value: column.accessor
    }, column.Header);
  }))), /*#__PURE__*/React__default.createElement("tbody", null, displayedData.length > 0 ? createDataChunks(entriesDisplayed)[currentPage - 1].map(function (row, idx) {
    return /*#__PURE__*/React__default.createElement("tr", {
      className: styles.tr,
      key: idx
    }, Object.values(row).map(function (cell, idx) {
      return /*#__PURE__*/React__default.createElement("td", {
        className: styles.td,
        key: idx
      }, cell);
    }));
  }) : /*#__PURE__*/React__default.createElement("tr", null, /*#__PURE__*/React__default.createElement("td", null, "No matching records found")))), /*#__PURE__*/React__default.createElement("div", {
    className: styles.paginationContainer
  }, /*#__PURE__*/React__default.createElement("div", null, "Showing " + showingFirst + " to " + showingLast + " of " + totalEntries + " entries"), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("button", {
    disabled: disablePreviousButton,
    onClick: previousPage
  }, "Previous"), createPaginationButtons(), /*#__PURE__*/React__default.createElement("button", {
    disabled: disableNextButton,
    onClick: nextPage
  }, "Next"))));
}

module.exports = EmployeesTable;
//# sourceMappingURL=index.js.map
