import React, { useState } from 'react';

var styles = {"controlsContainer":"_styles-module__controlsContainer__2gR4P"};

function EmployeesTable({
  data,
  columns
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesDisplayed, setEntriesDisplayed] = useState(10);
  const [displayedData, setDisplayedData] = useState(data);
  const totalEntries = displayedData.length;
  const totalPages = Math.ceil(totalEntries / entriesDisplayed);

  const createDataChunks = chunkSize => {
    const chunkList = [];
    const datas = displayedData.slice();

    while (datas.length) {
      chunkList.push(datas.splice(0, chunkSize));
    }

    return chunkList;
  };

  const onEntriesDisplayedChange = e => {
    setEntriesDisplayed(e.target.value);
    setCurrentPage(1);
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

  const handleSearchChange = e => {
    const datas = data.slice().filter(employee => employee.firstname.toLowerCase().includes(e.target.value.toLowerCase()));
    setDisplayedData(datas);
    setCurrentPage(1);
    console.log(currentPage);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: styles.controlsContainer
  }, /*#__PURE__*/React.createElement("select", {
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
  }, "100"))), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Search",
    onChange: handleSearchChange
  }), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(column => /*#__PURE__*/React.createElement("th", {
    key: column.accessor
  }, column.Header)))), /*#__PURE__*/React.createElement("tbody", null, displayedData.length > 0 ? createDataChunks(entriesDisplayed)[currentPage - 1].map((row, idx) => /*#__PURE__*/React.createElement("tr", {
    key: idx
  }, Object.values(row).map((cell, idx) => /*#__PURE__*/React.createElement("td", {
    key: idx
  }, cell)))) : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "No matching records found")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: previousPage
  }, "Previous"), /*#__PURE__*/React.createElement("button", {
    onClick: nextPage
  }, "Next")), /*#__PURE__*/React.createElement("div", null, `Page ${currentPage} of ${totalPages} (${totalEntries} entries)`));
}

export default EmployeesTable;
//# sourceMappingURL=index.modern.js.map
