import { createContext, useContext, useState } from "react";

export const ModalContext = createContext({
    modal: false,
    toggleModal: () => { }
});

export const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
        console.log(modal)
    }

    return (
        <ModalContext.Provider value={{
            modal,
            toggleModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext)