import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';
import './SolarSystem.css';

function SolarSystem() {
  return (
    <div className="solar-system" data-testid="solar-system">
      <Title headline="Planetas" />
      <div className="planets-system">
        {
          planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))
        }
      </div>
    </div>
  );
}

export default SolarSystem;
