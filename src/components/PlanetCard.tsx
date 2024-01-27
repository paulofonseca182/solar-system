import './PlanetCard.css';

type PlanetProps = {
  planetName: string;
  planetImage: string;
};

function PlanetCard({ planetName, planetImage }: PlanetProps) {
  return (
    <div className="planets" data-testid="planet-card">
      <img className={ planetName } src={ planetImage } alt={ `Planeta ${planetName}` } />
      <p data-testid="planet-name">{planetName}</p>
    </div>
  );
}

export default PlanetCard;
