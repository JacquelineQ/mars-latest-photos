import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

function FetchCuriosityPhotos() {
    const [photos, setPhotos] = useState([]);

    const columns = [
        {
          name: "ID",
          selector: (row) => row.id,

        },
        {
          name: "Matian Sol",
          selector: (row) => row.sol,
          sortable: true
        },
        {
            name: "Earth Date",
            selector: (row) => row.earth_date,
            sortable: true
        },
        {
          name: "Camera",
          selector: (row) => row.camera.name,
          sortable: true
        },
        {
          name: "Image",
          cell: (props) => <img src={props.img_src} width={60} alt="Player" data-tag="allowRowEvents" target="_blank" />,
          
        }
      ];
      
    
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=h2OACWIHRgevQbyXtWaIK890hECXDo7oekNSzcKS")
        .then((response) => {
            const photos = response.data.latest_photos;
            setPhotos(photos);
            console.log(photos);
        });
    }, []);
    
    return (
        // <div>
        // <h1>Photos</h1>
        // <ul>
        //     {photos.map((photo) => (
        //     <li key={photo.id}>
        //         <img src={photo.img_src} alt={photo.title} />
        //     </li>
        //     ))}
        // </ul>
        // </div>
        <DataTable columns={columns} data={photos} pagination />
    );
}

export default FetchCuriosityPhotos;