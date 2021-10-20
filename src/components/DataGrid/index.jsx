import { DataGrid as DataGridMUI, GridOverlay } from "@mui/x-data-grid";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";
import clsx from "clsx";

/**
 * DataGrid
 * @function
 * @param {object} props [Objeto de propiedades extras que recibe el dataGrid]
 * @param {array[object]} props.columns [Array con el nombre de las columnas que va a tener el datagrid. Requerido]
 * @param {array[object]} props.rows [Array con la data que se va a mostrar en el dataGrid. Requerido]
 * @param {number} props.rowHeight [Valor de altura de las filas]
 * @param {number} props.headerHeight [Valor de altura del header]
 * @param {array{number}} props.rowsPerPageOptions [Arreglo con la cantidad de filas por pagina que muestra el dataGrid]
 * @param {string} props.noRowsOverlayMessage [Mensaje cuando no hay filas en el array de rows]
 * @param {boolean} props.disabled [Si es true cambia el estilo del dataGrid a disabled]
 * @param {boolean} props.hideFooter [elimina el espacio que deja el footer deshabilitado]
 * @returns {JSX.Element}
 */

const DataGrid = (props) => {
  const classes = useStyles();
  const columns = props.columns;
  const rows = props.rows;
  const rowHeight = props.rowHeight || 40;
  const headerHeight = props.headerHeight || 40;
  const rowsPerPageOptions = props.rowsPerPageOptions || [5, 10, 25, 50];
  const noRowsOverlayMessage =
    props.noRowsOverlayMessage || "No se encontraron resultados.";

  function CustomNoRowsOverlay() {
    return (
      <GridOverlay style={{ borderTop: "1px solid #CECEce" }}>
        <Typography>{noRowsOverlayMessage}</Typography>
      </GridOverlay>
    );
  }

  return (
    <DataGridMUI
      {...props}
      className={clsx({
        [classes.disabled]: props.disabled,
        [classes.hideBorderTop]: props.disabled,
        [classes.hideFooter]: props.hideFooter,
      })}
      rowsPerPageOptions={rowsPerPageOptions}
      rows={rows}
      columns={columns}
      rowHeight={rowHeight}
      headerHeight={headerHeight}
      disableColumnMenu={true}
      autoHeight={true}
      components={{
        NoRowsOverlay: CustomNoRowsOverlay,
      }}
    />
  );
};

export default DataGrid;
