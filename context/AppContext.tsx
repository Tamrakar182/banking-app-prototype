import { createContext, useContext, useState, ReactNode } from 'react'

interface AppContext {
    showAmount: boolean;
    toggleShowAmount: () => void;
}

export const AppContext = createContext<AppContext | null>(
    null
)

export const AppProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const [showAmount, setShowAmount] = useState<boolean>(false)

    const toggleShowAmount = () => {
        setShowAmount(!showAmount);
    }

    return (
        <AppContext.Provider
            value={{
                showAmount,
                toggleShowAmount
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === null) {
        throw new Error(
            "useAppContext must be used within a AppProvider"
        )
    }

    return context
}