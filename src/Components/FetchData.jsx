import React from 'react';
import useFetch from './UseFetch';
import './FetchData.css';

const FetchData = () => {

    // Ejecutamos el hook personalizado.
    // useFetch devuelve un array: [data]
    // Mediante desestructuración obtenemos el primer elemento
    const [data] = useFetch(
      'https://api.npoint.io/9045c260b1565daa9e15'
    );

    // Mostramos los datos en consola para depuración
    //console.log(data);

    // JSX que React va a renderizar
    return (
      <>
        {/* Título principal */}
        <h1 className='useFetch_heading'>
          Use Fetch Custom Hook
        </h1>

        {/* Lista principal */}
        <ul className='list_data_main'>

          {/* 
            Si data existe, recorremos cada elemento.
            Si data es undefined o null, no se renderiza nada.
          */}
          {data && data.map((e, index) => (

            <li
              key={index}
              className='list_data'
            >
              {/* Nombre del alimento */}
              <h3>{e.name}</h3>

              {/* Importancia */}
              <p>
                <strong>Importance: </strong>
                {e.importance}
              </p>

              {/* Beneficios */}
              <p>
                <strong>Benefits: </strong>
                {e.benefits}
              </p>

              {/* Mejor momento para consumir */}
              <p>
                <strong>Time to eat: </strong>
                {e.best_time_to_intake}
              </p>

            </li>

          ))}
        </ul>
      </>
    );
};

export default FetchData;