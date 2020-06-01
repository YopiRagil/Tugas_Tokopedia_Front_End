import React from 'react';
import './App.css';
import "../src/style/style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import MainRoutes from "./routes/MainRoutes";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    success: {
      main: "#00b906",
    }
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <MainRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
