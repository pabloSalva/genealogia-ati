import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {},
  action: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  data: { maxWidth: "1678px", paddingTop: "32px" },
  noData: {
    paddingTop: "32px",
  },

  view: {
    height: "16px",
  },
  edit: {
    height: "16px",
  },
  delete: {
    height: "14px",
  },
  titulo: {
    paddingBottom: 24,
    paddingTop: 32,
    paddingLeft: 32,
  },
  mensaje: {
    fontSize: 18,
    marginTop: 30,
  },
  filterBar: {
    // maxWidth: "100%",
    // maxHeight: 100,
    paddingTop: 32,
    paddingLeft: 32,
  },
  dataGrid: {
    paddingTop: 32,
    paddingLeft: 32,
    paddingRight: 32,
  },
}));

export default useStyles;
