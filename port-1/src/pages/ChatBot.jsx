import React, { useState } from "react";

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Predefined portfolio-related responses
  const portfolioResponses = {
    "what do you do":
      "I am a full-stack developer skilled in React, Node.js, Express, MongoDB, and more.",
    "tell me about your skills":
      "I have experience in front-end and back-end development, working with technologies like React, Node.js, Express, MongoDB, and Tailwind CSS.",
    "what is your experience":
      "I have several years of experience in full-stack development, building applications from scratch and solving complex problems.",
    "tell me about your projects":
      "I have worked on various projects including chat applications, music streaming websites, and virtual assistants.",
  };

  const handleSendMessage = async () => {
    if (message.trim()) {
      const newMessage = { role: "user", content: message };
      setChatHistory([...chatHistory, newMessage]);
      setIsLoading(true);

      const lowerCaseMessage = message.toLowerCase().trim();

      // Check if the message matches any predefined portfolio questions
      if (portfolioResponses[lowerCaseMessage]) {
        const aiResponse = portfolioResponses[lowerCaseMessage];
        setChatHistory((prev) => [
          ...prev,
          { role: "ai", content: aiResponse },
        ]);
        setIsLoading(false);
        setMessage("");
        return;
      }

      // Otherwise, make API request to Gemini AI
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${
            import.meta.env.VITE_GEMINI_API_KEY
          }`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                {
                  role: "user",
                  parts: [
                    {
                      text: message,
                    },
                  ],
                },
              ],
            }),
          }
        );

        const data = await response.json();
        console.log(`data: ${data}`);

        if (
          data.candidates &&
          data.candidates.length > 0 &&
          data.candidates[0].content &&
          data.candidates[0].content.parts &&
          data.candidates[0].content.parts.length > 0
        ) {
          const aiResponse = data.candidates[0].content.parts[0].text;
          console.log(`AI response: ${aiResponse}`);
          setChatHistory((prev) => [
            ...prev,
            { role: "ai", content: aiResponse },
          ]);
        } else {
          setChatHistory((prev) => [
            ...prev,
            { role: "ai", content: "No response from AI" },
          ]);
        }
      } catch (error) {
        console.error("Error:", error);
        setChatHistory((prev) => [
          ...prev,
          { role: "ai", content: "Error fetching response" },
        ]);
      } finally {
        setIsLoading(false);
        setMessage("");
      }
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`chat-message ${chat.role}`}>
            {chat.content}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Ask me anything..."
        />
        <button onClick={handleSendMessage} disabled={isLoading}>
          {isLoading ? "Loading..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
