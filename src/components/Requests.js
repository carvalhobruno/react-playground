import React, { useState, useEffect } from 'react';
import { database } from "../helpers/firebase";

const Requests = (props) => {
  const [requests, setRequests] = useState([]);


  useEffect(() => {
    database.ref("/usuarios/").on("value", function(snapshot) {
        const result = snapshot.val();
        setRequests(Object.keys(result).map((item) => result[item]))
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
  }, []);
  
  return(
    <div> 
        <ul>
        {
            requests.map((item) => (
                <li>{item.nome}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default Requests;