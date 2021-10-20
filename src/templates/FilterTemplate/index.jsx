import React, { useState } from "react";
import { useStyles } from "./styles";

import Typography from "@mui/material/Typography";

import FilterBar from "components/FilterBar";
import Search from "@mui/icons-material/Search";
import Datagrid from "components/DataGrid";

/**
 * Template de pagina de filtrado y busqueda de personas
 * @function
 * @param {object} props [Objeto de propiedades extras que recibe el dataGrid]
 * @param {array[object]} props.rows [Array con la data que se va a mostrar en el dataGrid. Requerido]
 * @param {boolean} props.dataGrid [Si es true se muestra el datagrid. Por defecto false]
 * @returns {JSX.Element}
 */

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

  const columns = [
    {
      field: "nombre",
      headerName: "Nombre",
      flex: 0.4,
    },
    { field: "apellido", headerName: "Apellido", flex: 0.2 },

    {
      field: "anio",
      headerName: "Año",
      flex: 0.3,
    },
    {
      field: "padre",
      headerName: "Padre",
      flex: 0.3,
    },
    {
      field: "madre",
      headerName: "Madre",
      flex: 0.3,
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
      <Typography variant="h4" className={classes.titulo}>
        Buscar un antepasado
      </Typography>
      <div className={classes.filterBar}>
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

      {props.dataGrid && (
        <div className={classes.dataGrid}>
          <Datagrid columns={columns} rows={props.rows} />
        </div>
      )}
    </div>
  );
};

FilterTemplate.propTypes = {};

export default FilterTemplate;
