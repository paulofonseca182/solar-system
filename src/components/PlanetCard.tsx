type PlanetProps = {
  planetName: string;
  planetImage: string;
};

function PlanetCard({ planetName, planetImage }: PlanetProps) {
  return (
    <div data-testid="planet-card">
      <p>{planetName}</p>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
}

export default PlanetCard;