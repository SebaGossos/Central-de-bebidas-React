import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useOrders } from "../context/OrdersContext";

const CartNotification = ({text='', setMostrarAgregar}) => {

  const { setShowMessage } = useOrders()
  const {key, items, cartTotal, name}= text


  const order = ` Compra N° ${key},
                  PRODUCTOS: (${items?.map((item) => {
                    return `${item.name}  ${item.cantidad} unidades`
                  }).join(", ")})
                  PRECIO TOTAL: $${cartTotal},
                  USUARIO: ${name}
                `

  useEffect(() => {
    toast.success( typeof(text) === 'string' ? text : order ,{
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
    setShowMessage(false)
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
