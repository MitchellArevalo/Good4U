//Hay que instalar esta libreria      npm install react-simple-chatbot --save
import React, { useState } from "react";
import ChatBotDialog from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
const theme = {
  background: "#f5f8fb",
  headerBgColor: "#eb3449",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#eb3449",
  botFontColor: "#fff",
  userBubbleColor: "#0cb3c9",
  userFontColor: "#fff",
};

const ChatBot = () => {
  const [showRepeatedStep, setShowRepeatedStep] = useState(true);

  const handleChatBotStep = (step) => {
    // Puedes personalizar esta lógica según tus necesidades
    if (step.id === "3" && showRepeatedStep) {
      setShowRepeatedStep(false); // Desactiva la repetición del paso después de mostrarse una vez
      return true; // Muestra este paso solo una vez
    }
    return true; // Muestra todos los demás pasos
  };

  return (
    <div className="fixed bottom-3 right-5 ">
      <ThemeProvider theme={theme}>
        <ChatBotDialog
          headerTitle="Asistente virtual"
          headerIcon={<CloseIcon />}
          speechSynthesis={{ enable: false, lang: "es" }}
          handleStep={handleChatBotStep}
          steps={[
            {
              id: "1",
              message:
                "¡Hola! Soy el asistente virtual de Opra. ¿Cuál es tu nombre?",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Hola, {previousValue} ¿En qué puedo ayudarte hoy?",
              trigger: "preguntaFrecuente",
            },
            {
              id: "preguntaFrecuente",
              message:
                "¿Tienes alguna pregunta en particular o quieres saber acerca de alguna de estas opciones?",
              trigger: "opcionesPreguntaFrecuente",
            },
            {
              id: "opcionesPreguntaFrecuente",
              options: [
                {
                  value: "producto",
                  label: "¿Dónde puedo ver los productos?",
                  trigger: "respuestaProducto",
                },
                {
                  value: "envio",
                  label: "¿Cuál es el tiempo de envío?",
                  trigger: "respuestaEnvio",
                },
                // Agrega más opciones de preguntas frecuentes aquí
                {
                  value: "otra",
                  label: "Otra pregunta",
                  trigger: "otraPregunta",
                },
              ],
            },
            {
              id: "respuestaProducto",
              message:
                "Puedes ver nuestros productos en la sección 'Productos' en nuestro sitio web.",
              trigger: "otraPregunta",
            },
            {
              id: "respuestaEnvio",
              message:
                "El tiempo de envío varía según la ubicación. Por lo general, entregamos en 3-5 días hábiles.",
              trigger: "otraPregunta",
            },
            {
              id: "otraPregunta",
              message: "¡Claro! ¿En qué más puedo ayudarte?",
              trigger: "preguntaFrecuente",
            },
          ]}
        />
      </ThemeProvider>
    </div>
  );
};
export default ChatBot;

// // {
// //   id: "Instragram",
// //   component: (
// //     <div>
// //       {" "}
// //       <p>
// //         Dale click{" "}
// //         <a href="https://www.instagram.com/opra_design/"> aquí</a>{" "}
// //         para redirigirte al instagram
// //       </p>{" "}
// //     </div>
// //   ),
// //   trigger: "preguntaVuelta",
// // },
// // {
// //   id: "WhatsApp",
// //   component: (
// //     <div>
// //       {" "}
// //       <p>
// //         Dale click{" "}
// //         <a href="https://api.whatsapp.com/send?phone=573177270463&text=%C2%A1Hola!%20Vi%20tu%20pagina%20y%20estoy%20interesad@%20en%20comprar%20tus%20productos,%20%C2%BFMe%20podr%C3%ADas%20dar%20m%C3%A1s%20informaci%C3%B3n?">
// //           {" "}
// //           aquí
// //         </a>{" "}
// //         para redirigirte al WhatsApp
// //       </p>{" "}
// //     </div>
// //   ),
// //   trigger: "preguntaVuelta",
// // },
