import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";



function FetchCuriosityPhotos() {
    const [photos, setPhotos] = useState([]);
    const [pending, setPending] = React.useState(true);
    const [rows, setRows] = React.useState([]);
	
    

    const columns = [
        {
          name: "ID",
          selector: (row) => row.id,

        },
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
        .get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=h2OACWIHRgevQbyXtWaIK890hECXDo7oekNSzcKS")
        .then((response) => {
            const photos = response.data.latest_photos;
            setPhotos(photos);
            const timeout = setTimeout(() => {
              setRows(response)
              setPending(false);
            }, 2000);
            return () => clearTimeout(timeout);
        });

       

    }, []);


    
    return (
     
        <>
        <h1>Latest Photos from the Curiosity Rover</h1>
        <DataTable columns={columns} data={photos} progressPending={pending} pagination />
        </>
    );
}

export default FetchCuriosityPhotos;