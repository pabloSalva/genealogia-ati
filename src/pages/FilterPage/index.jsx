import React, { useState } from "react";

import FilterTemplate from "templates/FilterTemplate";

const FilterPage = () => {
  const [chipList, setChipList] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const searchGeneral = () => {
    console.log(searchBarValue);
  };
  const getFilterPath = () => {
    console.log("hola");
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
    console.log(url);
  };
  return (
    <FilterTemplate
      chip={[chipList, setChipList]}
      search={function funct() {
        searchGeneral();
      }}
      handleFilterButton={() => {
        console.log("ho");
        getFilterPath();
      }}
      handleOnChangeSearch={(event) => setSearchBarValue(event.target.value)}
    />
  );
};

export default FilterPage;
