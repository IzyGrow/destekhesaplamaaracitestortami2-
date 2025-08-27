import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Lütfen isim ve telefon numarasını doldurun.");
      return;
    }

    const text = `Merhabalar, bilgi almak istiyorum.%0Aİsim: ${name}%0ATelefon: ${phone}%0AMesaj: ${message}`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=905050359990&text=${text}&type=phone_number&app_absent=0`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Bilgi Almak İstiyorum</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">İsim</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Telefon</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Mesaj</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            rows={4}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
        >
          WhatsApp ile Gönder
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
