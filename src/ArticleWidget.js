import { useEffect, useState } from "react";
import type { TableProps } from 'antd';
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType, FilterValue, SorterResult } from 'antd/es/table/interface';

export default function ArticleWidget() {

 const [data, setData] = useState();

 useEffect(() => {
  console.log('Request made');
  fetch('https://api.spaceflightnewsapi.net/v3/articles')
   .then(res => res.json())
   .then(obj => setData(obj))
   
  // .then(
  //  (res) => {
  //   // Success!
  //   res.json();
  //  },
  //  (reason) => {
  //   // Error!
  //   console.error(reason); 
  //  },
  // )
  // .then(
  //  (obj) => {
  //   setData(obj)
  //  }
  // )
 }, []);
 let output = '';
 if(data) {
  console.log('Rendered data');
  output = data.map(
   ({id, title, url, newsSite}) => {    
    return <tr><td> <span>{id}</span> </td>
    <td> <span>{title}</span> </td>
    <td> <span>{url}</span> </td>
    <td> <span>{newsSite}</span> </td></tr>;
   }
  )
 }

 return (
  <>
   <h2>Article Objects</h2>
   <table className="">
    <tr>
     <th>ID</th>
     <th>Title</th>
     <th>News Site</th>
     <th>Url</th>
     <th>Options</th>
    </tr>
    {output}
   </table>
  </>
 );
}