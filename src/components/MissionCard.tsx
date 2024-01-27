import './MissionCard.css';

type MissionProps = {
  name: string;
  year: string;
  country: string;
  destination: string;
};

function MissionCard({ name, year, country, destination }: MissionProps) {
  return (
    <div className="missions-card" data-testid="mission-card">
      <div className="mission-name">
        <p data-testid="mission-name">{name}</p>
      </div>
      <div className="data-mission">
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    </div>
  );
}

export default MissionCard;
