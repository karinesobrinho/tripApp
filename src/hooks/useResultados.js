import {useEffect, useState} from 'react'
const dados = require('../Components/voos.json')

export default () => {
    const [resultados, setResultados] = useState([])
    const [mensagemErro, setMensagemErro] = useState('')

    const pesquisaVoos = (localPartida,localDestino) => {
        console.log('Deve estar funcionando!')
        
        const resposta = dados.filter((localPartida, localDestino) => {
            console.log('Deve estar funcionando')
            for ( var item in dados ) {
                item.localpartida===localPartida && item.localdestino===localDestino ? 
                setResultados(resposta.dados.item): setMensagemErro('Não há viagens para esse destino :(')
                
            }
        });

        console.log(resultados)

    }

    useEffect(() => {
        pesquisaVoos('Maceió', 'São Paulo')
    }, [])
    
    return [pesquisaVoos, mensagemErro, resultados]
}