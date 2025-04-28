function Owner({ name, picture }) {
  return (
    <div className="owner">
      <p className="owner-name">{name}</p>
      <img src={picture} alt={`Photo de ${name}`} className="owner-picture" />
    </div>
  );
}
export default Owner;
