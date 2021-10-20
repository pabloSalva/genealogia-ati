import React, { useState } from "react";

import FilterTemplate from "templates/FilterTemplate";

const FilterPage = () => {
  const [chipList, setChipList] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [rows, setRows] = useState([]);
  const [dataGrid, setDataGrid] = useState(false);

  const searchGeneral = () => {
    console.log(searchBarValue);
  };
  const getFilterPath = () => {
    const searchBar = `?search=${searchBarValue}`;
    const filtradoTipo = chipList.filter((data) => {
      return data.key !== "tipo";
    });
    const filterOptions = filtradoTipo
      .map((data) => {
        return `${data.key}=${data.label}`;
      })
      .join("&");
    const url =
      searchBarValue !== "" && filterOptions
        ? [searchBar, filterOptions].join("&")
        : searchBarValue !== ""
        ? searchBar
        : filterOptions
        ? `?${filterOptions}`
        : "";
    alert("La busqueda será: " + url);
    setDataGrid(true);
  };

  return (
    <FilterTemplate
      chip={[chipList, setChipList]}
      search={function funct() {
        searchGeneral();
      }}
      handleFilterButton={() => {
        getFilterPath();
      }}
      handleOnChangeSearch={(event) => setSearchBarValue(event.target.value)}
      rows={rows}
      dataGrid={dataGrid}
    />
  );
};

export default FilterPage;
