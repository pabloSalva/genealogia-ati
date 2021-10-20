import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  Box: {
    boxSizing: "content-box",
    paddingTop: "2%",
    paddingRight: 32,
    background: "white",
    paddingBottom: "2%",
    boxShadow: "10px 2px 10px rgba(255, 255, 255, 0.25)",
    borderRadius: "8px",
  },

  ResultsChips: {
    paddingTop: "100%",
  },
}));

export default useStyles;
