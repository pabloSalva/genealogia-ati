import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  FlexContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  FlexElement: {
    display: "flex",
    flexDirection: "row",
    paddingRight: "32px",
    paddingTop: "8px",
  },
  FlexGrow: {
    flexGrow: 1,
  },
}));
