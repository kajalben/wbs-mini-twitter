import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import theme from "./components/theme";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
