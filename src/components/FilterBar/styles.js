import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  Box: {
    boxSizing: "content-box",
    borderBottom: "solid gray 1px",
    paddingTop: "2%",
    paddingLeft: "1%",
    marginTop: "2%",
    background: "white",
    paddingBottom: "2%",
    boxShadow: "0px 2px 0px rgba(255, 255, 255, 0.25)",
    borderRadius: "8px",
  },

  ResultsChips: {
    paddingTop: "2%",
  },
}));

export default useStyles;
