import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successToastMessage = () => {
    toast.success("Successfully sent!", {
        position: toast.POSITION.TOP_RIGHT
    })
}

export const defaultToastMessage = () => {
    toast.success("Sending Request...", {
        position: toast.POSITION.TOP_RIGHT
    })
}

export const warningToastMessage = () => {
    toast.warning("Please fill out all fields!", {
        position: toast.POSITION.TOP_RIGHT
    })
}

export const errorToastMessage = () => {
    toast.error("Error processing request...", {
        position: toast.POSITION.TOP_RIGHT
    })
}

export const infoToastMessage = () => {
    toast.info("Welcome to my Portfolio App!", {
        position: toast.POSITION.TOP_RIGHT
    })
}