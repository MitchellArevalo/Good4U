import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";

const ChatBotComponent = () => {
  const [name, setName] = useState("");
  const [userResponses, setUserResponses] = useState({});

  const handleNameChange = (value) => {
    // Validación: Permitir solo letras y espacios en el nombre
    if (/^[A-Za-z\s]+$/.test(value)) {
      setName(value);
      return true;
    } else {
      return "Por favor, ingrese un nombre válido sin números ni caracteres especiales.";
    }
  };

  const handleUserResponse = (response) => {
    setUserResponses({ ...userResponses, [response.step.id]: response.value });
  };

  return (
    <div className="chatbot-container">
      <ChatBot
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
            message: `Hola {previousValue}! ¿En qué puedo ayudarte hoy?`,
            trigger: "4",
          },
          {
            id: "4",
            user: true,
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
                trigger: "6",
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
                value: "Añadir al carrito",
                label: "Añadir al carrito",
                trigger: "7",
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
            id: "wa_link_emey2m",
            component: (
              <a
                href="http://localhost:3000/settingsuser"
                target="_blank"
                rel="noopener noreferrer"
              >
                Para modificar sus datos personales, primero debe de estar
                registrado y haber iniciado sesión. De click aquí
              </a>
            ),
            asMessage: true,
          },
          {
            id: "wa_link_ver_productos",
            component: (
              <a
                href="https://wa.link/mnv8h5"
                target="_blank"
                rel="noopener noreferrer"
              >
                ¡Mira nuestros productos aquí!
              </a>
            ),
            asMessage: true,
          },
          {
            id: "wa_link_politica_devolucion",
            component: (
              <a
                href="https://wa.link/mnv8h5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulta nuestra política de devolución aquí.
              </a>
            ),
            asMessage: true,
          },
          {
            id: "wa_link_no_puedo_ayudar",
            component: (
              <a
                href="https://wa.link/r320n3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lamentablemente, no puedo ayudarte con eso. ¡Haz clic aquí para
                contactarnos en WhatsApp!
              </a>
            ),
            asMessage: true,
          },
          {
            id: "5",
            message:
              "Los tiempos de envío son de 3-5 días hábiles. ¿Hay algo más en lo que pueda ayudarte?",
            trigger: "options",
          },
          {
            id: "6",
            message:
              "Para realizar un seguimiento de tu pedido, por favor ingresa el número de seguimiento:",
            trigger: "tracking_number",
          },
          {
            id: "tracking_number",
            user: true,
            trigger: "tracking_result",
          },
          {
            id: "tracking_result",
            message:
              "Gracias por proporcionar el número de seguimiento. Estamos buscando la información de tu pedido...",
            trigger: "options",
          },
          {
            id: "7", // Paso para "Añadir al carrito"
            message:
              "¡El producto se ha añadido al carrito! ¿En qué más puedo ayudarte?",
            trigger: "options",
          },
        ]}
        userResponses={userResponses}
        onUserInput={handleUserResponse}
      />
    </div>
  );
};

export default ChatBotComponent;
