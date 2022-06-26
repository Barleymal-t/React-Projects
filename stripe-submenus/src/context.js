import React, {useState, useContext, createContext} from 'react'
import sublinks from './data'

const AppContext = createContext()

const AppProvider = ({children})=>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(true)
    return <AppContext.Provider>
        {children}
    </AppContext.Provider>
}

