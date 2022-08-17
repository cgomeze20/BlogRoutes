import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { BrowserRouter,Routes, Route } from "react-router-dom";
import Contacto from "./routes/Contacto";
import Blog from "./routes/Blog";
import Inicio from "./routes/Inicio";
import Error from "./routes/Error";
import Post from "./routes/Post";

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Inicio/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:id" element={<Post/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>

      </Routes>
      
    </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
