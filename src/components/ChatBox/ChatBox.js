import React, { useState } from "react";
import ChatBotDialog from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const ChatBotComponent = () => {
  const [name, setName] = useState("");
  const [userResponses, setUserResponses] = useState({});
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
  const handleNameChange = (value) => {
    // Validación: Permitir solo letras y espacios en el nombre
    if (/^[A-Za-z\s]+$/.test(value)) {
      setName(value);
      return true;
    } else {
      return "Por favor, ingrese un nombre válido sin números ni caracteres especiales.";
    }
  };
  const optionStyle = {
    backgroundColor: theme.botBubbleColor,
    color: theme.botFontColor,
    padding: "8px 16px",
    borderRadius: "4px",
    marginBottom: "8px",
    with: "100%",
  };

  const handleUserResponse = (response) => {
    setUserResponses({ ...userResponses, [response.step.id]: response.value });
  };

  return (
    <div className="fixed bottom-1 right-14  z-20 ">
      <ThemeProvider theme={theme}>
        <ChatBotDialog
          headerTitle="ChatBot Opra"
          steps={[
            {
              id: "1",
              message: "¡Hola! Soy el chatbot de Opra. ¿Cuál es tu nombre?",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: (value) => handleNameChange(value),
              validator: (value) => handleNameChange(value),
              onReject: () => {
                return "Por favor, ingrese un nombre válido sin números ni caracteres especiales.";
              },
              trigger: "3",
            },
            {
              id: "3",
              message: `Hola ${name}! ¿En qué puedo ayudarte hoy?`,
              trigger: "options",
            },
            {
              id: "options",
              options: [
                {
                  value: "Tiempos de envío",
                  label: "Tiempos de envío",
                  trigger: "5",
                },
                {
                  value: "Seguimiento de mi pedido",
                  label: "Seguimiento de mi pedido",
                  trigger: "wa_link_seguiminetoPedido",
                },
                {
                  value: "Modificar mis datos",
                  label: "Modificar mis datos",
                  trigger: "wa_link_emey2m",
                },
                {
                  value: "Ver productos",
                  label: "Ver productos",
                  trigger: "wa_link_ver_productos",
                },

                {
                  value: "Política de devolución",
                  label: "Política de devolución",
                  trigger: "wa_link_politica_devolucion",
                },
                {
                  value: "No puedo encontrar lo que busco",
                  label: "No puedo encontrar lo que busco",
                  trigger: "wa_link_no_puedo_ayudar",
                },
              ],
            },
            {
              id: "wa_link_seguiminetoPedido",
              component: (
                <a
                  href="https://wa.link/emey2m"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Para saber el estado de tu pedido da clic aquí
                </a>
              ),
              asMessage: true,
              trigger: "more_questions",
            },
            {
              id: "wa_link_emey2m",
              component: (
                <a
                  href="http://localhost:3000/settingsuser"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Para modificar tus datos personales, primero debes estar
                  registrado e iniciar sesión. Da clic aquí
                </a>
              ),
              asMessage: true,
              trigger: "more_questions",
            },
            {
              id: "wa_link_ver_productos",
              component: (
                <a
                  href="http://localhost:3000/products"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ¡Mira nuestros productos aquí!
                </a>
              ),
              asMessage: true,
              trigger: "more_questions",
            },
            {
              id: "wa_link_politica_devolucion",
              component: (
                <a
                  href="https://wa.link/mnv8h"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consulta nuestra política de devolución aquí.
                </a>
              ),
              asMessage: true,
              trigger: "more_questions",
            },
            {
              id: "wa_link_no_puedo_ayudar",
              component: (
                <a
                  href="https://wa.link/r320n3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lamentablemente, no puedo ayudarte con eso. ¡Haz clic aquí
                  para contactarnos en WhatsApp!
                </a>
              ),
              asMessage: true,
              trigger: "more_questions",
            },
            {
              id: "5",
              message:
                "Los tiempos de envío son de 3-5 días hábiles en ciudades principales, el tiempo depende de la ciudad de destino. ¿Hay algo más en lo que pueda ayudarte?",
              trigger: "more_questions",
            },

            {
              id: "more_questions",
              user: true,
              message: "¿Tienes alguna otra pregunta?",
              trigger: "options",
            },
          ]}
          userResponses={userResponses}
          onUserInput={handleUserResponse}
          botDelay={2000} // Añade un retardo de 1 segundo entre las respuestas del chatbot
          bubbleOptionStyle={optionStyle}
        />
      </ThemeProvider>
    </div>
  );
};

export default ChatBotComponent;
