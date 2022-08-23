import { createContext, useContext } from "react"

const ContextApi = createContext(null)

export const ContextProvider = ({ children }) => {

    const assignValue = (data) => {
        let stringData = JSON.stringify(data)
        localStorage.setItem('sideNavData', stringData)
    }
    const getData = () => {
        const stringData = localStorage.getItem('sideNavData')
        const { data } = JSON.parse(stringData)
        return data
    }

    return (
        <ContextApi.Provider value={{ getData, assignValue }}>
            {children}
        </ContextApi.Provider >
    )
}

export const UseContextApi = () => {
    return useContext(ContextApi)
}
