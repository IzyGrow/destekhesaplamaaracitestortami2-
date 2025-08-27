import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // WhatsApp mesaj formatı
    const phone = "905050359990"; // Footer’daki numara, başında ülke kodu ile
    const text = `Merhaba, bilgi almak istiyorum.%0A%0AAd: ${name}%0AE-posta: ${email}%0AMesaj: ${message}`;
    
    // WhatsApp yönlendirmesi
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${text}`, "_blank");
    
    // Formu temizleme
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Bilgi Almak İstiyorum</h2>

      <input
        type="text"
        placeholder="Adınız"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded"
        required
      />

      <input
        type="email"
        placeholder="E-posta"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded"
        required
      />

      <textarea
        placeholder="Mesajınız"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded"
        required
      />

      <button
        type="submit"
        className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600 transition-colors"
      >
        Gönder ve WhatsApp’a Git
      </button>
    </form>
  );
};
