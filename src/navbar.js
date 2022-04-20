import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">home</Link>
    </li>
    <li>
      <Link to="About">About</Link>
    </li>
    <li>
    <link to="results">results</link>
    </li>
   </div>
  );
}
export default navbar;
