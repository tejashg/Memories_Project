import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  mainContainer: {
    borderRadius: "25px",
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    background: `linear-gradient(45deg, ${"#fe617b"}, ${"#36d1dc"})`,
    boxShadow: "0 10px 30px rgba(56, 125, 255, 0.2)",
    height: "100px",
    width: "80%",
    marginBottom: "50px"
  },
  heading: {
    color: `${theme.palette.secondary.main}`,
    textDecoration: "none",
    fontFamily: `'Roboto', sans-serif`,
    fontSize: "2.5rem",
    letterSpacing: "2px",
    fontWeight: "bold",
    textShadow: "3px 3px 0 rgba(255, 255, 255, 0.1)",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      transform: "rotate(-8deg)",
      textShadow: "2px 2px 0 rgba(255, 255, 255, 0.3)",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    }
  },
  image: {
    marginLeft: "15px",
    borderRadius: "50%",
    height: "80px",
    width: "80px",
    boxShadow: "2px 2px 15px rgba(0, 0, 0, 0.2)",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      transform: "rotate(8deg)",
      boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.5)",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "50%",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50%",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    marginRight: "15px",
    fontFamily: `'Montserrat', sans-serif`,
    fontSize: "1rem",
    textTransform: "uppercase",
    fontWeight: "bold",
    color: `${theme.palette.primary.main}`,
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: `${theme.palette.secondary.main}`,
    boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.5)",
    transition: "all 0.2s ease-in-out",

    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.7)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    appBar: {
      padding: "10px 20px",
    },
    userName: {
      display: "none",
    },
    image: {
      height: "60px",
      width: "60px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "flex-end",
      width: "40%",
    },
  },

  actionDiv: {
    textAlign: "center",
    marginTop: "50px",
  },
}));