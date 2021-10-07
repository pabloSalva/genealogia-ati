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
  },
  mensaje: {
    fontSize: 18,
    marginTop: 30,
  },
}));

export default useStyles;
