import React, { useState } from 'react';

var styles = {"table":"_styles-module__table__FnYjQ","th":"_styles-module__th__2MlMJ","td":"_styles-module__td__qcjXT","tr":"_styles-module__tr__kcP3k","controlsBar":"_styles-module__controlsBar__vj6nK","paginationContainer":"_styles-module__paginationContainer__34dm0","arrow":"_styles-module__arrow__35l6Q"};

function EmployeesTable({
  data,
  columns
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesDisplayed, setEntriesDisplayed] = useState(10);
  const [displayedData, setDisplayedData] = useState(data);
  const [sort, setSort] = useState('');
  const [sortType, setSortType] = useState('');
  const totalEntries = displayedData.length;
  const totalPages = Math.ceil(totalEntries / entriesDisplayed);
  const showingFirst = currentPage * entriesDisplayed - entriesDisplayed + 1;
  const showingLast = showingFirst + parseInt(entriesDisplayed - 1) > totalEntries ? totalEntries : showingFirst + parseInt(entriesDisplayed - 1);

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

  const onClickHeader = (e, column) => {
    setCurrentPage(1);

    if (sort === column) {
      if (sortType === '') {
        setDisplayedData(displayedData.slice().sort((a, b) => {
          if (a[column] > b[column]) return 1;else return -1;
        }));
        setSortType('DESC');
        return;
      } else if (sortType === 'DESC') {
        setDisplayedData(displayedData.slice().reverse());
        setSortType('ASC');
        return;
      } else {
        setDisplayedData(data);
        setSortType('');
        setSort('');
        return;
      }
    } else {
      setDisplayedData(displayedData.slice().sort((a, b) => {
        if (a[column] > b[column]) return 1;else return -1;
      }));
      setSortType('DESC');
    }

    setSort(column);
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

  console.log(sort);
  console.log(sortType);

  const handleSearchChange = e => {
    const datas = data.slice().filter(employee => employee.firstname.toLowerCase().includes(e.target.value.toLowerCase()) || employee.lastname.toLowerCase().includes(e.target.value.toLowerCase()) || employee.dateOfBirth.toLowerCase().includes(e.target.value.toLowerCase()) || employee.startDate.toLowerCase().includes(e.target.value.toLowerCase()) || employee.street.toLowerCase().includes(e.target.value.toLowerCase()) || employee.city.toLowerCase().includes(e.target.value.toLowerCase()) || employee.state.toLowerCase().includes(e.target.value.toLowerCase()) || employee.zip.toString().toLowerCase().includes(e.target.value.toLowerCase()) || employee.department.toLowerCase().includes(e.target.value.toLowerCase()));
    setDisplayedData(datas);
    setCurrentPage(1);
  };

  const createPaginationButtons = pageNumber => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push( /*#__PURE__*/React.createElement("button", {
        disabled: currentPage === i ? true : undefined,
        onClick: () => setCurrentPage(i),
        key: i
      }, i));
    }

    return buttons;
  };

  const disablePreviousButton = totalPages <= 1 || currentPage <= 1 ? true : undefined;
  const disableNextButton = totalPages <= 1 || currentPage >= totalPages ? true : undefined;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: styles.controlsBar
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Show", /*#__PURE__*/React.createElement("select", {
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
  }, "100")), "entries")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Search:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Search",
    onChange: handleSearchChange
  })))), /*#__PURE__*/React.createElement("table", {
    className: styles.table
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(column => /*#__PURE__*/React.createElement("th", {
    className: styles.th,
    key: column.accessor,
    value: column.accessor,
    onClick: (e, value) => onClickHeader(e, column.accessor)
  }, column.Header, sort !== column.accessor && /*#__PURE__*/React.createElement("span", {
    className: styles.arrow
  }, "\u2195"), sort === column.accessor && sortType === 'ASC' && /*#__PURE__*/React.createElement("span", {
    className: styles.arrow
  }, "\u2191"), sort === column.accessor && sortType === 'DESC' && /*#__PURE__*/React.createElement("span", {
    className: styles.arrow
  }, "\u2193"))))), /*#__PURE__*/React.createElement("tbody", null, displayedData.length > 0 ? createDataChunks(entriesDisplayed)[currentPage - 1].map((row, idx) => /*#__PURE__*/React.createElement("tr", {
    className: styles.tr,
    key: idx
  }, Object.values(row).map((cell, idx) => /*#__PURE__*/React.createElement("td", {
    className: styles.td,
    key: idx
  }, cell)))) : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "No matching records found")))), /*#__PURE__*/React.createElement("div", {
    className: styles.paginationContainer
  }, /*#__PURE__*/React.createElement("div", null, `Showing ${showingFirst} to ${showingLast} of ${totalEntries} entries`), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    disabled: disablePreviousButton,
    onClick: previousPage
  }, "Previous"), createPaginationButtons(), /*#__PURE__*/React.createElement("button", {
    disabled: disableNextButton,
    onClick: nextPage
  }, "Next"))));
}

export default EmployeesTable;
//# sourceMappingURL=index.modern.js.map
