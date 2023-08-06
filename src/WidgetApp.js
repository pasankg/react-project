import { useState, useRef } from "react";
import ArticleWidget from "./ArticleWidget";

export default function WidgetApp() {
 
 // const [data, getData] = useState({});


 function requestData(e) {
  e.preventDefault();
  // getData()
 }

 return (
  <>
   <h1>Widget App</h1>
   <button onClick={requestData}>Load Articles</button>
   <ArticleWidget />
  </>
 );
}