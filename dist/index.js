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

  var totalEntries = data.length;
  var totalPages = Math.ceil(totalEntries / entriesDisplayed);

  var createDataChunks = function createDataChunks(chunkSize) {
    var chunkList = [];
    var datas = data.slice();

    while (datas.length) {
      chunkList.push(datas.splice(0, chunkSize));
    }

    return chunkList;
  };

  var _useState3 = React.useState(createDataChunks(entriesDisplayed)),
      displayedData = _useState3[0],
      setDisplayedData = _useState3[1];

  var onEntriesDisplayedChange = function onEntriesDisplayedChange(e) {
    setEntriesDisplayed(e.target.value);
    setCurrentPage(1);
    setDisplayedData(createDataChunks(e.target.value));
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

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("select", {
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
  }, "100")), /*#__PURE__*/React__default.createElement("input", {
    type: "text",
    placeholder: "Search"
  }), /*#__PURE__*/React__default.createElement("table", null, /*#__PURE__*/React__default.createElement("thead", null, /*#__PURE__*/React__default.createElement("tr", null, columns.map(function (column) {
    return /*#__PURE__*/React__default.createElement("th", {
      key: column.accessor
    }, column.Header);
  }))), /*#__PURE__*/React__default.createElement("tbody", null, displayedData[currentPage - 1].map(function (row, idx) {
    return /*#__PURE__*/React__default.createElement("tr", {
      key: idx
    }, Object.values(row).map(function (cell, idx) {
      return /*#__PURE__*/React__default.createElement("td", {
        key: idx
      }, cell);
    }));
  }))), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", null)), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("button", {
    onClick: previousPage
  }, "Previous"), /*#__PURE__*/React__default.createElement("button", {
    onClick: nextPage
  }, "Next")), /*#__PURE__*/React__default.createElement("div", null, currentPage + " of " + totalPages + " (entries: " + totalEntries + ")"));
}

module.exports = EmployeesTable;
//# sourceMappingURL=index.js.map
