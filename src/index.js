import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components'

ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
