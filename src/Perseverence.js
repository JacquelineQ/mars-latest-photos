import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

function FetchPerseverancePhotos() {
    const [photos, setPhotos] = useState([]);
    const [pending, setPending] = React.useState(true);
	  const [rows, setRows] = React.useState([]);

    const columns = [
        {
          name: "Matian Sol",
          selector: (row) => row.sol,
        },
        {
            name: "Earth Date",
            selector: (row) => row.earth_date,
        },
        {
          name: "Camera",
          selector: (row) => row.camera.name,
          sortable: true
        },
        {
          name: "Image",
          cell: (props) => <a href={props.img_src} target="_blank" rel="noreferrer"><img src={props.img_src} width={60} alt="Mars"  /></a>,
         
        }
      ];
      
      useEffect(() => {
        axios
        .get("https://mars-photos.herokuapp.com//api/v1/rovers/perseverance/latest_photos?")
        .then((response) => {
            const photos = response.data.latest_photos;
            // setPhotos(photos);
            
              setPhotos(photos)
              setRows(response)
              setPending(false);
        });
    }, []);

    

 
    
    return (
     
        <>
        <h1>Latest Photos from the Perseverence Rover</h1>
        <DataTable className="dataTable" columns={columns} data={photos} progressPending={pending} pagination />
        </>
    );
}

export default FetchPerseverancePhotos;