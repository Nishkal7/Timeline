import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  footerContainer: {
    margin: "10px",
    borderRadius: 15,
  },
  footer2Container:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));