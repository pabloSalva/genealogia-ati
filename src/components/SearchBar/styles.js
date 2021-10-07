import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  FlexContainer: {
    display: "flex",
    width: "80vw",
  },
  FlexElementContainer: {
    display: "flex",
  },
  Grow: {
    flexGrow: "1",
  },
  GrowBar: {
    flexGrow: "5",
  },
  GrowMedium: {
    paddingLeft: "32px",
    flexGrow: "2",
  },
  FlexEnd: {
    justifyContent: "flex-end",
  },
}));
