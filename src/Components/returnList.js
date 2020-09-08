import React from 'react'
import Cards from './cards'

const returnVoos = ( data ) => (
    <Cards data={data} />
)
const returnHoteis = ( data ) => (
    <Cards data={data} />
)
const returnViagens = ( data ) => (
    <Cards data={data} />
)

export{
    returnHoteis, returnVoos, returnViagens
}