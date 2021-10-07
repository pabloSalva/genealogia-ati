import React from "react";
import PropTypes from "prop-types";
import AddIcon from "@mui/icons-material/Add";
import SearchBar from "components/SearchBar";
// import FilterResultChip from "components/FilterResultChip";
import FilterList from "components/FilterList";
import { useStyles } from "./styles";

const FilterBar = ({
  // SearchBar fields
  valueSearch,
  placeholderSearch = "Ingrese la persona que desea buscar",
  addButtonName,
  showSearchField,
  showFilterButton,
  showFilterBox = true,
  handleAddButton,
  handleFilterButton,
  handleOnChangeSearch,
  handleSearchBar,
  addButtonDisabled,
  searchbarDisabled,
  variantAddButton = "contained",
  colorAddButton = "primary",
  iconAddButton = <AddIcon />,
  aditionalButtons = [],
  // FilterList fields
  fullWidth = true,
  filterfields,
  itemsFields,
  // FilterResultChip Fields
  numberResults,
  chipList,
}) => {
  const classes = useStyles();
  // ---------------------States fields -----------------------------
  const [fieldsValues, setFieldsValues] = filterfields;
  // --------------------Chips list State ----------------------------
  const [filters, setFilters] = chipList;

  // =================== Function for Chips ============================

  const handleDelete = (filterToDelete) => {
    setFilters((filters) =>
      filters.filter((chip) => chip.key !== filterToDelete)
    );
    cleanFieldValues(filterToDelete);
  };

  const updateTextChip = (event, idFields) => {
    // Update Chip Text
    if (filters.find((data) => data.key === idFields)) {
      if (event.target.value === "") {
        handleDelete(idFields);
      } else {
        setFilters(
          filters.map((data) => {
            if (data.key === idFields) {
              data.label = event.target.value;
              data.value = event.target.value;
            }
            return data;
          })
        );
      }
    } else {
      event.target.value !== "" && createChip("text", event, idFields);
    }
  };

  const updateSelectChip = (event, idFields, options) => {
    // Update Chip Select
    if (filters.find((data) => data.key === idFields)) {
      const valueLabel = options.filter(
        (data) => data.value === event.target.value
      )[0].label;
      setFilters(
        filters.map((data) => {
          if (data.key === idFields) {
            data.label = valueLabel;
            data.value = event.target.value;
          }
          return data;
        })
      );
    } else {
      createChip("select", event, idFields, options);
    }
  };

  const createChip = (type = "", event, idFields = "", optionsFields) => {
    // Create Chip
    const key = idFields !== "" ? idFields : Math.random();
    const labelData = !optionsFields
      ? event.target.value
      : optionsFields.filter((opt) => event.target.value === opt.value)[0]
          .label;

    const data = {
      key: key,
      label: labelData,
      type: type,
      value: event.target.value,
    };
    setFilters([...filters, data]);
  };

  const setFieldValues = (value, key) => {
    if (fieldsValues.find((val) => val.key === key)) {
      setFieldsValues(
        fieldsValues.map((field) => {
          if (field.key === key) {
            field.value = value;
          }
          return field;
        })
      );
    }
  };
  const cleanFieldValues = (key) => {
    setFieldsValues(
      fieldsValues.map((field) => {
        if (field.key === key) {
          field.value = field.type === "select" ? "-1" : "";
        }
        return field;
      })
    );
  };
  // ================================================================

  const parseFields = (fields) => {
    return fields.map((data) => {
      return data.field.type === "select"
        ? {
            title: data.title,
            field: {
              component: "SelectField",
              id: data.field.id,
              options: data.field.options,
              value: fieldsValues.find((v) => v.key === data.field.id).value,
              handleChange: (event) => {
                data.field.handleChange && data.field.handleChange(event);
                updateSelectChip(event, data.field.id, data.field.options);
                setFieldValues(event.target.value, data.field.id);
              },
              width: data.field.width,
              name: data.field.name,
            },
          }
        : data.field.type === "button"
        ? {
            field: {
              component: "IconButton",
              label: data.field.id,
              variant: data.field.variant ? data.field.variant : "contained",
              color: data.field.color ? data.field.color : "secondary",
              icon: data.field.icon,
              iconPosition: "end",
              handleClick: () => data.field.handleEventClick(),
            },
          }
        : data.field.type === "date"
        ? {
            title: data.title,
            field: {
              component: "TextField",
              label: "",
              placeholder: data.field.placeholder,
              id: data.field.id,
              type: "date",
              icon: data.field.icon,
              iconPosition: "end",
              value: fieldsValues.find((v) => v.key === data.field.id).value,
              onChange: (event) => {
                updateTextChip(event, data.field.id);
                setFieldValues(event.target.value, data.field.id);
              },
              width: data.field.width,
            },
          }
        : {
            title: data.title,
            field: {
              component: "TextField",
              label: "",
              placeholder: data.field.placeholder,
              id: data.field.id,
              type: data.field.type,
              icon: data.field.icon,
              iconPosition: "end",
              value: fieldsValues.find((v) => v.key === data.field.id).value,
              onKeyUp: (event) => {
                updateTextChip(event, data.field.id);
              },
              onChange: (event) => {
                setFieldValues(event.target.value, data.field.id);
              },
              width: data.field.width,
              disabled: data.field.disabled,
            },
          };
    });
  };
  return (
    <div>
      <SearchBar
        placeholderSearch={placeholderSearch}
        addButtonName={addButtonName}
        handleAddButton={handleAddButton}
        showSearchField={showSearchField}
        showFilterButton={showFilterButton}
        handleOnChangeSearch={handleOnChangeSearch}
        handleSearchBar={handleSearchBar}
        addButtonDisabled={addButtonDisabled}
        handleFilterButton={handleFilterButton}
        colorAddButton={colorAddButton}
        iconAddButton={iconAddButton}
        variantAddButton={variantAddButton}
        searchbarDisabled={searchbarDisabled}
        showFilterBox={showFilterBox}
        aditionalButtons={aditionalButtons}
        valueSearch={valueSearch}
      />
      {showFilterBox && !addButtonDisabled && (
        <div className={classes.Box}>
          <FilterList
            fullWidth={fullWidth}
            filterfields={parseFields(itemsFields)}
          />

          {/* <div className={classes.ResultsChips}>
            <FilterResultChip
              numberResults={numberResults}
              filters={filters}
              onDelete={handleDelete}
            />
          </div> */}
        </div>
      )}
    </div>
  );
};

FilterBar.propTypes = {
  // SearchBar fields
  showSearchField: PropTypes.bool,
  showFilterBox: PropTypes.bool,
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
  valueSearch: PropTypes.any,
  // FilterList fields
  filterfields: PropTypes.array,
  fullWidth: PropTypes.bool,
  itemsFields: PropTypes.array,
  // FilterResultChip Fields
  numberResults: PropTypes.number,
  chipList: PropTypes.array,
  aditionalButtons: PropTypes.array,
};
export default FilterBar;
