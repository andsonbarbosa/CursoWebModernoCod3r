import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filhos from './componentes/Filho'

//import Saudacao from './componentes/Saudacao'
// import BomDia from './componentes/BomDia'
//ReactDOM.render(<BomDia nome='Andson' />, document.getElementById('root'))

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passo os componentes Filhos aqui? */}
            <Filhos nome="Pedro" />
            <Filhos nome="Paulo" />
            <Filhos nome="Carla" />
        </Pai>
    </div>
    , document.getElementById('root'))

//ReactDOM.render(
//    <div>
//       <Saudacao tipo="Bom dia" nome="Andson" />
//    </div>
//    , document.getElementById('root'))