function Planets() {
    const planets = [
        {name: "Mercury", isGasPlanet: false},
        {name: "Venus", isGasPlanet: false},
        {name: "Earth", isGasPlanet: false},
        {name: "Mars", isGasPlanet: false},
        {name: "Jupiter", isGasPlanet: true},
        {name: "Saturn", isGasPlanet: true},
        {name: "Uranus", isGasPlanet: true},
        {name: "Neptune", isGasPlanet: true},
    ];
    
    return (
        <div>
            {
                planets.map(planet =>
                !planet.isGasPlanet ? <h1 key={planet.name}>{planet.name}</h1> : null
                )
            }
        </div>
    );
};

export default Planets;

