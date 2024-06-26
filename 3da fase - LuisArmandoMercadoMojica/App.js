import './App.css';

function Tabla() {
  return (
    <div>
      <table border="1">
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
          <tr>
            <td>01</td>
            <td>Reunión con las personas clave del producto.</td>
            <td>REN</td>
            <td>Finalizado</td>
            <td>3 Días</td>
            <td>SPRINT 1</td>
            <td>ALTA</td>
            <td>Llegar a acuerdos con los encargados de proyecto</td>
          </tr>
          <tr>
            <td>02</td>
            <td>Delegación de responsabilidades.</td>
            <td>DR</td>
            <td>En proceso</td>
            <td>1 Día</td>
            <td>SPRINT 2</td>
            <td>BAJA</td>
            <td>Delegar responsabilidades de las partes del producto</td>
          </tr>
          <tr>
            <td>03</td>
            <td>Desarrollo del prototipo</td>
            <td>DPT</td>
            <td>PENDIENTE</td>
            <td>5 Días</td>
            <td>SPRINT 2</td>
            <td>ALTA</td>
            <td>Crear prototipos de diseño y seleccionar uno sobresaliente.</td>
          </tr>
          <tr >
            <td>04</td>
            <td>Desarrollo UX UI</td>
            <td>DUX</td>
            <td>PENDIENTE</td>
            <td>4 Días</td>
            <td>SPRINT 2</td>
            <td>ALTA</td>
            <td>Interfaz agradable con el usuario además de la funcionalidad del usuario.</td>
          </tr>
          <tr>
            <td>05</td>
            <td>Desarrollo de la base de datos</td>
            <td>DBD</td>
            <td>PENDIENTE</td>
            <td>3 Días</td>
            <td>SPRINT 2</td>
            <td>ALTA</td>
            <td>Delegar los datos correspondientes</td>
          </tr>
          <tr>
            <td>06</td>
            <td>Testeo del proyecto</td>
            <td>TEST</td>
            <td>PLANIFICADA</td>
            <td>5 Días</td>
            <td>SPRINT 2</td>
            <td>MEDIO</td>
            <td>Buscar bugs</td>
          </tr>
          <tr>
            <td>07</td>
            <td>Ponerlo en línea</td>
            <td>LINE</td>
            <td>PENDIENTE</td>
            <td>2 Días</td>
            <td>SPRINT 3</td>
            <td>MEDIO</td>
            <td>Subirlo a la web</td>
          </tr>
          <tr className="resaltado">
            <td>08</td>
            <td>Crear el grupo de WhatsApp para manejo de comunicados.</td>
            <td>WATT</td>
            <td>PENDIENTE</td>
            <td>3 Días</td>
            <td>SPRINT3</td>
            <td>MEDIO</td>
            <td>Creación del grupo de WhatsApp además de integrar a los directivos.</td>
          </tr>
          <tr className="resaltado">
            <td>09</td>
            <td>Agendar nueva reunión para fase 2 del proyecto</td>
            <td>P2.0</td>
            <td>PENDIENTE</td>
            <td>2 Días</td>
            <td>SPRINT 3</td>
            <td>BAJA</td>
            <td>Buscar nuevas mejoras al proyecto.</td>
          </tr>
        </tbody>
      </table>

      <div>
        <p>
        <strong>Octava reunión:</strong> <br/>
        Se concluyo con el sprint 2 del proyecto después de una revisión para ver si se solucionaron los errores anteriores además de agendar la 
        cita para entregar el proyecto solo falta hacer preparativos para exponerlo a los clientes además de la creación del grupo de WhatsApp.
        <br/><br/>
        <strong>Novena reunión:</strong><br/>
        Se inicio y cierre del tercer sprint se hizo la exposición a los clientes del proyecto mostrándoles el funcionamiento además de agendar 
        una próxima reunión con ellos mismos para la segunda fase del proyecto dando como resultado una actualización con varias mejoras al sitio web.

        </p>
      </div>
    </div>
  );
}

export default Tabla;