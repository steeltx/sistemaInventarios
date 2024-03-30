import React from 'react'
import { Header } from '../components/Header'

export const RSILayout = ({ children }) => {
    return (
        <>
            <Header />
            { children }
        </>
    )
}
