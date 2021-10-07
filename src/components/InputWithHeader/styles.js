import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  FlexContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    width: "90vw",
  },
  TextBold: {
    fontWeight: "bold",
  },
  FlexContainerColumn: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
}));
