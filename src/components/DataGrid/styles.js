import { makeStyles } from "@material-ui/styles";
import palette from "theme/palette";

export const useStyles = makeStyles((theme) => {
  return {
    disabled: {
      "& .MuiDataGrid-columnsContainer": {
        color: palette.action.selected,
        backgroundColor: palette.action.disabled,
      },
      "& .MuiDataGrid-cell": {
        color: palette.action.selected,
        backgroundColor: palette.action.disabled,
      },
    },
    hideFooter: {
      "& .MuiDataGrid-footer": {
        height: "0px",
      },
    },
    hideBorderTop: {
      "& .MuiDataGrid-colCellWrapper": {
        borderTop: 0,
      },
      "& ..MuiDataGrid-columnsContainer": {
        borderLeft: "red",
      },
    },
  };
});
export default useStyles;
