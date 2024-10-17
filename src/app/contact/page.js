import React from "react";

const contactCards = [
  {
    title: "Talk to Sales",
    description:
      "Interested in HubSpot’s software? Just pick up the phone to chat with a member of our sales team.",
    phone: "+1 857 829 5060",
    linkText: "View all global numbers",
    href: "/",
    iconPath: "M3 5h18M8 12h8m-8 7h6",
    button: null, // No button for this card
  },
  {
    title: "Contact Customer Support",
    description:
      "Sometimes you need a little help from your friends. Or a HubSpot support rep. Don’t worry… we’re here for you.",
    phone: null, // No phone for this card
    linkText: null,
    href: null,
    iconPath: "M3 5h18M8 12h8m-8 7h6",
    button: {
      text: "Contact Support",
      style:
        "bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md",
    },
  },
];

const ContactCard = ({ card }) => {
  return (
    <div className="p-8 w-full md:w-[400px] bg-white border border-gray-300 rounded-lg">
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 p-4 rounded-full mb-4">
          <svg
            className="w-8 h-8 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={card.iconPath}
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
        <p className="text-gray-700 text-center mb-4">{card.description}</p>
        {card.phone && (
          <a
            href={`tel:${card.phone}`}
            className="text-blue-600 text-lg font-semibold"
          >
            {card.phone}
          </a>
        )}
        {card.linkText && (
          <a href={card.href} className="text-blue-600 mt-2 underline">
            {card.linkText}
          </a>
        )}
        {card.button && (
          <button className={card.button.style}>{card.button.text}</button>
        )}
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-full">
      <div className="relative">
        <div className="bg-gray-900 text-white flex flex-col lg:flex-row gap-8 lg:gap-14 justify-between h-[250px] md:h-[400px] relative">
          <div className="absolute lg:relative z-10 h-[250px] md:h-full flex flex-col justify-center px-8 lg:pl-48 w-full lg:w-[60%]">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Get in touch
            </h1>
            <p className="text-base lg:text-lg mb-8">
              Want to get in touch? We'd love to hear from you. Here's how you
              can reach us.
            </p>
          </div>

          <div
            className="absolute lg:relative z-0 w-full lg:w-[40%] h-full lg:h-full bg-cover bg-left opacity-50"
            style={{ backgroundImage: `url(/images/contact.jpg)` }}
          ></div>
        </div>

        <div className="relative lg:absolute lg:bottom-[-250px] flex flex-col items-center w-full px-4 py-8 lg:px-0">
          <div className="flex flex-col md:flex-row justify-center gap-10 w-full max-w-7xl">
            {contactCards.map((card, index) => (
              <ContactCard key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
