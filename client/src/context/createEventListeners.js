import { ethers } from 'ethers'
import { ABI } from '../contract'

const AddNewEvent = (eventFilter, provider, cb) => {
    provider.removeListener(eventFilter);

    provider.on(eventFilter, (logs) => {
        const parsedLog = (new ethers.utils.Interface(ABI)).parseLog(Logs)
    })

    cb(parsedLog)
}

export const createEventListeners = ({ navigate, contract, provider, walletAddress, setShowAlert }) => {
    const newPlayerEventFilter = contract.filters.NewPlayer();

    AddNewEvent(newPlayerEventFilter, provider, ({ args }) => {
        console.log("New player created!", args);

        if (walletAddress === args.owner) {
            setShowAlert({
                status: true,
                type: "success",
                message: "Player has been successfully registered"
            })
        }
    })
}