import  { useState, useEffect } from "react";
// import firebase from "firebase/app";
// import "firebase/database";

// Configura tu proyecto de Firebase
// const firebaseConfig = {
//   apiKey: "TU_API_KEY",
//   authDomain: "TU_AUTH_DOMAIN",
//   databaseURL: "TU_DATABASE_URL",
//   projectId: "TU_PROJECT_ID",
//   storageBucket: "TU_STORAGE_BUCKET",
//   messagingSenderId: "TU_MESSAGING_SENDER_ID",
//   appId: "TU_APP_ID",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

//   useEffect(() => {
//     const messagesRef = firebase.database().ref("messages");
//     messagesRef.on("value", (snapshot) => {
//       const messagesData = snapshot.val();
//       if (messagesData) {
//         const messagesArray = Object.keys(messagesData).map((key) => ({
//           id: key,
//           ...messagesData[key],
//         }));
//         setMessages(messagesArray);
//       } else {
//         setMessages([]);
//       }
//     });
//   }, []);

  const handleSendMessage = () => {
    // if (newMessage.trim() !== "") {
    //   firebase.database().ref("messages").push({
    //     text: newMessage,
    //     timestamp: firebase.database.ServerValue.TIMESTAMP,
    //   });
    //   setNewMessage("");
    // }
        if (newMessage.trim() !== "") {
          // Agrega el nuevo mensaje a la lista de mensajes
          setMessages([...messages, newMessage])
          // Limpia el campo de texto después de enviar el mensaje
          setNewMessage("");
        }

  };

  return (
    <div className="w-64 bg-slate-100 relative z-10 rounded p-4">
      <div className="bg-slate-100 w-56">
        {messages.map((message) => (
          <div key={message}>
            <p>{message}</p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Escribe tu mensaje..."
      />
      <button onClick={handleSendMessage}>Enviar</button>
    </div>
  );
};


