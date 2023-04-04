
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      color: "grey",
    },
  },
  paper: {
    padding: theme.spacing(2),
    color: "white",
    backgroundColor: "#212121"
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    color: 'white',
  },
  titleInput: {
    backgroundColor: 'white',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    color: 'white'
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
