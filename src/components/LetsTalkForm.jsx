import { useState } from "react";
import ServiceInquiryFormPC from "./ServiceInquiryFormPC.jsx";

function LetsTalkForm() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [brand, setBrand] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [service, setService] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://my-brightlayers-worker.bright-layers.workers.dev/api/send-email-enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            phoneno,
            brand,
            service,
          }),
        }
      );
      if (response.ok) {
        alert("Details submitted successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setBrand("");
        setPhoneno("");
        setService([]);
        setIsLoading(false);
      } else {
        alert("Failed to submit details.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
      setIsLoading(false);
    }
  };

  return (
    <form className="h-auto" onSubmit={handleSubmit}>
      {/* Grid for Form Fields */}
      <div className="grid grid-cols-2 gap-x-4 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10">
        {/* First Name */}
        <div className="relative z-0">
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            className="block pl-2 pt-4 lg:pt-5 xl:pt-6 w-full text-lg lg:text-xl xl:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="absolute pointer-events-none text-lg lg:text-xl xl:text-2xl text-[#535353] duration-300 transform origin-left -translate-y-4 lg:-translate-y-5 xl:-translate-y-6 scale-75 top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
            First Name
          </label>
        </div>

        {/* Last Name */}
        <div className="relative z-0 mb-4 lg:mb-5 xl:mb-6">
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            className="block pl-2 pt-4 lg:pt-5 xl:pt-6 w-full text-lg lg:text-xl xl:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label className="absolute pointer-events-none text-lg lg:text-xl xl:text-2xl text-[#535353] duration-300 transform origin-left -translate-y-4 lg:-translate-y-5 xl:-translate-y-6 scale-75 top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
            Last Name
          </label>
        </div>
      </div>

      {/* Email */}
      <div className="relative z-0 mb-4 lg:mb-5 xl:mb-6">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block pl-2 pt-4 lg:pt-5 xl:pt-6 w-full text-lg lg:text-xl xl:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label className="absolute pointer-events-none text-lg lg:text-xl xl:text-2xl text-[#535353] duration-300 transform origin-left -translate-y-4 lg:-translate-y-5 xl:-translate-y-6 scale-75 top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
          Email
        </label>
      </div>

      {/* Phone Number */}
      <div className="relative z-0 mb-12 lg:mb-14 xl:mb-16">
        <input
          type="text"
          value={phoneno}
          onChange={(e) => setPhoneno(e.target.value)}
          className="block pl-2 pt-4 lg:pt-5 xl:pt-6 w-full text-lg lg:text-xl xl:text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label className="absolute pointer-events-none text-lg lg:text-xl xl:text-2xl text-[#535353] duration-300 transform origin-left -translate-y-4 lg:-translate-y-5 xl:-translate-y-6 scale-75 top-3 peer-placeholder-shown:left-2 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
          Phone Number
        </label>
      </div>

      {/* Tell Us About Your Brand */}
      <div className="relative z-0 mb-12 lg:mb-14 xl:mb-16">
        <textarea
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="block pl-2 pt-4 w-full h-32 lg:h-36 xl:h-40 text-lg lg:text-xl xl:text-2xl text-gray-900 bg-transparent border border-gray-300 rounded-md appearance-none dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-600 peer resize-none"
          placeholder=" "
          required
        ></textarea>
        <label className="absolute pointer-events-none text-lg lg:text-xl xl:text-2xl text-[#535353] duration-300 transform -translate-y-6 lg:-translate-y-7 xl:-translate-y-8 scale-75 origin-left -top-2 peer-placeholder-shown:left-4 peer-placeholder-shown:translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-500 peer-focus:text-blue-600 peer-focus:opacity-0">
          Tell Us About Your Brand
        </label>
      </div>

      {/* Services Inquiry */}
      <ServiceInquiryFormPC service={service} setService={setService} />

      <div className="text-left">
        <button
          type="submit"
          className="mt-6 lg:mt-7 xl:mt-8 px-8 lg:px-9 xl:px-10 py-2 bg-[#d9d9d9] text-[#535353] text-lg lg:text-xl xl:text-2xl font-medium hover:bg-gray-400"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default LetsTalkForm;