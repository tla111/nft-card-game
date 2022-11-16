import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { useNavigate } from 'react-router-dom'
import { ABI, ADDRESS } from '../contract'

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState("")
    const [provider, setProvider] = useState("")
    const [contract, setContract] = useState("")

    const updateCurrentWalletAddress = async () => {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        })
    }

    useEffect(() => {
        updateCurrentWalletAddress()
    }, [])

    useEffect(() => {
        const setSmartContractAndProvider = async () => {
            const web3modal = new web3modal();
            const connection = await web3modal.connect()
            const newProvider = ethers.providers.Web3Provider(connection)
            const signer = newProvider.signer()
            const newContract = new ethers.Contract(ADDRESS, ABI, signer)

            setProvider(newProvider)
            setContract(newContract)

        }
    }, [])
    return (
        <GlobalContext.Provider value={{
            demo: "test"
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)