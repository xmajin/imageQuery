import React from 'react';
import '../resources/styles/Savedqueries.scss';

const Savedqueries = props => {


    return (
      <div className="Savedqueries">
          <ul>
          <li>
            {props.data}
          </li>
          </ul>
      </div>
  )
}

export default Savedqueries;
