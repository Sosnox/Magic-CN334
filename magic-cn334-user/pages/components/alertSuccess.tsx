import { toast } from 'react-toastify';

export const AlertSuccess = (text : string) => {
    toast.success(`Success ${text} !`, {
        position: "bottom-right"
      });
};
