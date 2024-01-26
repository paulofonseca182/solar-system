import PlanetCard from './PlanetCard';
import Title from './Title';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      <PlanetCard planetName="Plutao" planetImage="aasd" />
    </div>
  );
}

export default SolarSystem;
