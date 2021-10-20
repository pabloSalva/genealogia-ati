import React from "react";
import PropTypes from "prop-types";
import InputWithHeader from "components/InputWithHeader";
import clsx from "clsx";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useStyles } from "./styles";
import { Button } from "@mui/material";

const SearchBar = ({
  showSearchField = true,
  showFilterButton = true,
  handleAddButton,
  handleFilterButton,
  handleSearchBar,
  handleOnChangeSearch,
  addButtonName = "Agregar Elemento",
  placeholderSearch = "Ingrese los datos que desea buscar",
  addButtonDisabled = true,
  variantAddButton = "contained",
  colorAddButton = "primary",
  iconAddButton = <AddIcon />,
  searchbarDisabled,
  aditionalButtons = [],
  valueSearch,
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div
        className={clsx({
          [classes.FlexElementContainer]: true,
        })}
      >
        {showSearchField && (
          <div className={`${classes.FlexElementContainer} ${classes.GrowBar}`}>
            <InputWithHeader
              element={{
                field: {
                  title: "Ingresar Apellido",
                  component: "TextField",
                  label: "Ingresar apellido",
                  placeholder: placeholderSearch,
                  id: "search-field",
                  icon: <SearchIcon />,
                  iconPosition: "end",
                  disabled: searchbarDisabled,
                  onKeyUp: (event) =>
                    event.keyCode === 13 && handleSearchBar(event),
                  onChange: (event) => handleOnChangeSearch(event),
                  value: valueSearch,
                },
                title: "Ingresar Apellido",
              }}
            />
          </div>
        )}
        {showFilterButton && (
          <div
            className={`${classes.FlexElementContainer} ${classes.GrowMedium}`}
          >
            {/* <InputWithHeader
                element={{
                  field: {
                    title: "Filtrar",
                    component: "IconButton",
                    label: "Filtrar",
                    variant: "outlined",
                    color: "secondary",
                    icon: <Button />,
                    handleClick: handleFilterButton,
                  },
                  title: "Buscar",
                }}
              /> */}
            <Button
              onClick={handleFilterButton}
              variant="outlined"
              size="medium"
            >
              Buscar
            </Button>
          </div>
        )}

        {handleAddButton && (
          <div className={`${classes.FlexElementContainer}`}>
            {aditionalButtons.map((button, index) => {
              return (
                <div key={index} className={`${classes.FlexElementContainer} `}>
                  <InputWithHeader
                    element={{
                      field: {
                        component: "IconButton",
                        label: button.label,
                        variant: "outlined",
                        color: "secondary",
                        icon: button.icon,
                        handleClick: button.onClick,
                        size: button.size,
                        disabled: addButtonDisabled,
                      },
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}

        {handleAddButton && (
          <div
            className={`${classes.FlexElementContainer} ${classes.Grow} ${classes.FlexEnd}`}
          >
            <div className={`${classes.FlexElementContainer} `}>
              <InputWithHeader
                element={{
                  field: {
                    component: "IconButton",
                    label: addButtonName,
                    variant: variantAddButton,
                    color: colorAddButton,
                    icon: iconAddButton,
                    handleClick: () => handleAddButton(),
                    size: "medium",
                    disabled: addButtonDisabled,
                  },
                }}
              />
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

SearchBar.propTypes = {
  showSearchField: PropTypes.bool,
  showFilterButton: PropTypes.bool,
  handleAddButton: PropTypes.func,
  handleFilterButton: PropTypes.func,
  handleSearchBar: PropTypes.func,
  handleOnChangeSearch: PropTypes.func,
  addButtonName: PropTypes.string,
  placeholderSearch: PropTypes.string,
  addButtonDisabled: PropTypes.bool,
  searchbarDisabled: PropTypes.bool,
  variantAddButton: PropTypes.string,
  colorAddButton: PropTypes.string,
  iconAddButton: PropTypes.node,
  aditionalButtons: PropTypes.array,
  valueSearch: PropTypes.any,
};

export default SearchBar;
