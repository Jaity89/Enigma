import { useParams } from 'react-router-dom';
import characters from '../data/characters.json';

const Character = () => {
  const { id } = useParams();
  const char = characters.find(c => c.id === id);
  if (!char) return <div className="p-4">Personaje no encontrado</div>;

  return (
    <main className="p-4">
      <h2 className="text-2xl font-bold mb-4">{char.name}</h2>
      <img src={char.image} alt={char.name} className="w-64 mx-auto mb-4" />
      <p><strong>Rol:</strong> {char.role}</p>
      <p><strong>Elemento:</strong> {char.element}</p>
      <p><strong>Rareza:</strong> {char.rarity}</p>
      <h3 className="mt-4 font-bold">Estadísticas</h3>
      <ul>
        <li>ATK: {char.stats.atk}</li>
        <li>DEF: {char.stats.def}</li>
        <li>HP: {char.stats.hp}</li>
      </ul>
      <h3 className="mt-4 font-bold">Habilidades</h3>
      <ul className="list-disc list-inside">
        {char.skills.map((skill, i) => (
          <li key={i}><strong>{skill.name}:</strong> {skill.description}</li>
        ))}
      </ul>
      <p className="mt-4"><strong>Sinergias:</strong> {char.synergies}</p>
    </main>
  );
};
export default Character;