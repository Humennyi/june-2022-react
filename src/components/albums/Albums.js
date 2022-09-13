import React, {useEffect, useState} from 'react';
import {albumsService} from "../../service";
import Album from "../album/Album";

function Albums() {
    const [albums, setAlbums] = useState([]);
    useEffect(()=>{
        albumsService.getAll().then(value => setAlbums(value.data))
    },[])
    return (
        <div>{
            albums.map(album=><Album key={album.id} album={album}/>)
        }</div>
    );
}

export default Albums;