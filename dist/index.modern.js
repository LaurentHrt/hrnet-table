import React, { useState } from 'react';

function EmployeesTable({
  data,
  columns
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesDisplayed, setEntriesDisplayed] = useState(10);
  const totalEntries = data.length;
  const totalPages = Math.ceil(totalEntries / entriesDisplayed);

  const createDataChunks = chunkSize => {
    const chunkList = [];
    const datas = data.slice();

    while (datas.length) {
      chunkList.push(datas.splice(0, chunkSize));
    }

    return chunkList;
  };

  const [displayedData, setDisplayedData] = useState(createDataChunks(entriesDisplayed));

  const onEntriesDisplayedChange = e => {
    setEntriesDisplayed(e.target.value);
    setCurrentPage(1);
    setDisplayedData(createDataChunks(e.target.value));
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("select", {
    onChange: onEntriesDisplayedChange,
    value: entriesDisplayed
  }, /*#__PURE__*/React.createElement("option", {
    value: 1
  }, "1"), /*#__PURE__*/React.createElement("option", {
    value: 2
  }, "2"), /*#__PURE__*/React.createElement("option", {
    value: 10
  }, "10"), /*#__PURE__*/React.createElement("option", {
    value: 25
  }, "25"), /*#__PURE__*/React.createElement("option", {
    value: 50
  }, "50"), /*#__PURE__*/React.createElement("option", {
    value: 100
  }, "100")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Search"
  }), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(column => /*#__PURE__*/React.createElement("th", {
    key: column.accessor
  }, column.Header)))), /*#__PURE__*/React.createElement("tbody", null, displayedData[currentPage - 1].map((row, idx) => /*#__PURE__*/React.createElement("tr", {
    key: idx
  }, Object.values(row).map((cell, idx) => /*#__PURE__*/React.createElement("td", {
    key: idx
  }, cell)))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: previousPage
  }, "Previous"), /*#__PURE__*/React.createElement("button", {
    onClick: nextPage
  }, "Next")), /*#__PURE__*/React.createElement("div", null, `${currentPage} of ${totalPages} (entries: ${totalEntries})`));
}

export default EmployeesTable;
//# sourceMappingURL=index.modern.js.map
