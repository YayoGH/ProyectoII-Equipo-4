import React from 'react';

const data = [
  { id: 'CE-001', enunciado: 'Ver en Act.Prel.', alias: 'PWB', estado: 'Finalizado', dimension: '10 días (Se finalizó en 8 días)', sprint: 1, prioridad: 'Alta', comentarios: 'Enfoque en UI UX.' },
  { id: 'CE-002', enunciado: 'Ver en Act.Prel.', alias: 'Wa', estado: 'Finalizado', dimension: '6 días (Se finalizó en 4 días)', sprint: 2, prioridad: 'Media', comentarios: 'Roles.' },
  { id: 'CE-003', enunciado: 'Ver en Act.Prel.', alias: 'BDB', estado: 'Planificada', dimension: '14 días', sprint: 3, prioridad: 'Media', comentarios: 'MySQL' },
];

const Table = () => {
  return (
    <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
      <thead>
        <tr>
          <th>Identificador (ID) de la Historia</th>
          <th>Enunciado de la Historia</th>
          <th>Alias</th>
          <th>Estado</th>
          <th>Dimensión/ Esfuerzo</th>
          <th>Interacción (Sprint)</th>
          <th>Prioridad</th>
          <th>Comentarios</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.id}</td>
            <td>{row.enunciado}</td>
            <td>{row.alias}</td>
            <td>{row.estado}</td>
            <td>{row.dimension}</td>
            <td>{row.sprint}</td>
            <td>{row.prioridad}</td>
            <td>{row.comentarios}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;