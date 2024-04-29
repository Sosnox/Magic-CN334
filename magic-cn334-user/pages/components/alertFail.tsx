import { toast } from 'react-toastify';

export const AlertFail = (text : string) => {
    toast.error(`Error ${text}`, {
        position: "top-right"
      })};