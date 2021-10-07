import React, { useState } from "react";
import { useStyles } from "./styles";

import Typography from "@mui/material/Typography";

import FilterBar from "components/FilterBar";
import Search from "@mui/icons-material/Search";

const FilterTemplate = (props) => {
  const classes = useStyles();
  // filtrando por Apellido,
  // nombre, año, número de acta (por alguno de ellos o por todos ellos).

  const items = [
    {
      title: "Nombre",
      field: {
        placeholder: "Ingreso valores a filtrar",
        type: "text",
        id: "nombre",
        icon: <Search />,
        width: 400,
      },
    },
    {
      title: "Apellido",
      field: {
        placeholder: "Ingreso valores a filtrar",
        type: "text",
        id: "apellido",
        icon: <Search />,
        width: 400,
      },
    },
    {
      title: "Año",
      field: {
        placeholder: "Ingreso valores a filtrar",
        type: "number",
        id: "anio",
        icon: <Search />,
        width: 400,
      },
    },
    {
      title: "Padre",
      field: {
        placeholder: "Ingrese valores a filtrar",
        type: "text",
        id: "padre",
        icon: <Search />,
        width: 400,
      },
    },
    {
      title: "Madre",
      field: {
        placeholder: "Ingrese valores a filtrar",
        type: "text",
        id: "madre",
        icon: <Search />,
        width: 400,
      },
    },
  ];
  const initializeFieldsState = (fields) => {
    return fields.map((data) => {
      const field = {
        key: data.field.id,
        value: data.field.type !== "select" ? "" : "-1",
        type: data.field.type || "text",
      };
      return field;
    });
  };

  const [fieldsValues, setfieldsValues] = useState(
    initializeFieldsState(items)
  );

  return (
    <div>
      <Typography variant="h2" className={classes.titulo}>
        Buscador de personas
      </Typography>
      <FilterBar
        handleAddButton={props.add}
        addButtonName="agregar Persona"
        placeholderSearch="Ingrese persona que desea buscar"
        handleSearchBar={props.search}
        addButtonDisabled={props.disabledButton}
        handleOnChangeSearch={props.handleOnChangeSearch}
        handleFilterButton={props.handleFilterButton}
        filterfields={[fieldsValues, setfieldsValues]}
        itemsFields={items}
        chipList={props.chip}
        showFilterBox={props.showfilterbox}
        numberResults={props.numberResults}
      />
    </div>
  );
};

FilterTemplate.propTypes = {};

export default FilterTemplate;
