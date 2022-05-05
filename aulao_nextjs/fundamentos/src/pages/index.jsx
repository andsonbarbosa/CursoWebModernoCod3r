import Navegador from '../components/Navegador'

export default function Inicio(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" cor="#361c9b" />
            <Navegador texto="Exemplo" destino="/exemplo" cor="#8a287d" />
            <Navegador texto="JSX" destino="/jsx" cor="#d10f16" />
            <Navegador texto="Navegação #01" destino="/navegacao" cor="green" />
            <Navegador texto="Navegação #02" destino="/cliente/123" cor="blue" />
            <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="red" />
            <Navegador texto="Componente com Estado" destino="/estado" cor="pink" />
            <Navegador texto="Integração com API #01" destino="/integracao_1" cor="yellow" />
            <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#51E056" />
        </div>
    )
}