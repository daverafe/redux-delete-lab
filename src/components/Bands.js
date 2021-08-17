import React from 'react' 
import Band from './Band' 

const Bands = (props) => {
    const renderBand = props.bands.map(band => {
        return <Band band={band} deleteBand={props.deleteBand}/>
    })
    return (
     <div>
         {renderBand}
     </div>
    )
}

export default Bands