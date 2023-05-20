import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartNotification = ({text='', setMostrarAgregar}) => {
  useEffect(() => {
    toast.success(text, {
      position: "top-right",
      autoClose: 2000, // Ocultar después de 2 segundos
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "custom-toast", // Clase personalizada para el estilo
    });
    setMostrarAgregar(false)
  }, []);

  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export default CartNotification;
