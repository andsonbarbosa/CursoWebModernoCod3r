import Cabecalho from "../components/Cabecalho"
import Layout from "../components/layout"

export default function Exemplo(){
    return (
        <Layout titulo="Usando Componentes">
            <Cabecalho titulo="Next.js e React" />
            <Cabecalho titulo="Aprenda Next na prática." />
        </Layout>
        
    )
}