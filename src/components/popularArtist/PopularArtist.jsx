import React from 'react'
import './popularArtist.css'
import ArtistCard from '../artistCard/ArtistCard'
const popularArtist=({setCurrentPage})=>{
    return(
        <div className='popularArtistSectionContainer trendingSectionMainContainer'>
        PopularArtist
        <ArtistCard setCurrentPage={setCurrentPage}/>
        </div>
    )
}
export default popularArtist