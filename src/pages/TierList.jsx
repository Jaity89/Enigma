import characters from '../data/characters.json';
import { Link } from 'react-router-dom';

const TierList = () => (
  <main className="p-4">
    <h2 className="text-xl mb-4">Tier List</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {characters.map(char => (
        <Link to={\`/character/\${char.id}\`} key={char.id} className="bg-gray-900 p-2 rounded hover:bg-primary">
          <img src={char.image} alt={char.name} className="w-full h-32 object-cover rounded" />
          <h3 className="mt-2 font-bold">{char.name}</h3>
          <p>{char.tier} Tier - {char.role}</p>
        </Link>
      ))}
    </div>
  </main>
);
export default TierList;