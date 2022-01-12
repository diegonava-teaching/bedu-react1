import Luz from '../Luz';

function Foco() {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'gray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Luz />
    </div>
  );
}

export default Foco;
