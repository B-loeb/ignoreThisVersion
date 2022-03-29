const React = require('react')
const Def =  require('../default')

function index (data){
    let placesFormatted = data.places.map((place) => {
        return (
            <div className=".col-sm-6">
                <h2>{place.name}</h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} />
                <p className="text-center">
                    Located in {place.city}, {place.sate}
                </p>
            </div>
        )
    })
        return(
            <def>
                <main>
                    <h1>This Place is for Ranting and Raving</h1>
                    <div className="row">
                    {placesFormatted}
                    </div>
                </main>
            </def>
        )
}

module.exports = index