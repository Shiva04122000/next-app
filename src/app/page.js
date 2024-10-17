import Image from "next/image";
import Avatar from "/public/images/avatar.png";
import { FaCircleQuestion } from "react-icons/fa6";

export default function Home() {
  const contactDetails = [
    { label: "Full Name", value: "Kenneth Valdez" },
    { label: "Email", value: "fip@jukmuh.al" },
    { label: "Phone", value: "(239) 816-9029" },
    { label: "Mobile", value: "(320) 380-4539" },
    { label: "Address", value: "Bay Area, San Francisco, CA" },
  ];

  return (
    <section className="bg-gray-100 py-10 text-[#1a202c]">
      <div className="rounded-lg flex flex-col md:flex-row gap-8 w-11/12 md:w-4/5 m-auto">
        <div className="bg-white shadow-lg rounded-lg flex flex-col items-center border md:w-1/3 p-6">
          <Image
            src={Avatar}
            alt="Profile"
            width={140}
            height={140}
            className="rounded-full"
          />
          <h4 className="text-2xl font-medium mt-4">John Doe</h4>
          <p className="text-[#6c757d] mt-1">Full Stack Developer</p>
          <p className="text-[#6c757d] mt-1">Bay Area, San Francisco, CA</p>
          <div className="flex gap-2 mt-6">
            <button className="bg-[#007bff] text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Follow
            </button>
            <button className="border border-[#007bff] text-[#007bff] py-2 px-4 rounded-md hover:bg-[#007bff] hover:text-white">
              Message
            </button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg flex-1 p-6">
          <div className="flex flex-col gap-4">
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-300/30 pb-2"
              >
                <p className="w-1/3 font-semibold">{detail.label}</p>
                <p className="w-2/3 text-[#6c757d]">{detail.value}</p>
              </div>
            ))}

            <div className="mt-4">
              <button className="bg-[#17a2b8] text-white py-2 px-4 rounded-lg hover:bg-[#138496]">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-white w-11/12 md:w-4/5 m-auto rounded-lg p-5 flex flex-col md:flex-row justify-between gap-5">
        <div className="w-full md:w-3/5">
          <h1 className="text-2xl font-semibold mt-4">Cart Page Heading</h1>
          <div className="text-[#6c757d]">
            <h4 className="text-base font-medium mt-4">
              NikeCourt Air Max Volley
            </h4>
            <p className="mt-1">{`Women's Hard Court Tennis Shoe</p>
            <p>Black/White/Mettalic Red Bronze`}</p>
            <div className="flex items-center gap-3 mt-4">
              {[
                {
                  title: "Size",
                  options: [8, 9, 10],
                },
                {
                  title: "Quantity",
                  options: [1, 2, 3],
                },
              ].map((item, id) => {
                return (
                  <div key={id} className="flex items-center gap-2">
                    <span>{item?.title}</span>
                    <select className="w-20 md:w-24 outline-none cursor-pointer">
                      {item?.options.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                );
              })}
            </div>
            <p className="flex items-center gap-5 mt-5">
              <span className="underline cursor-pointer hover:text-[#333]">
                Move to Favorites
              </span>
              <span className="underline cursor-pointer hover:text-[#333]">
                Remove
              </span>
            </p>
          </div>
        </div>

        <div className="w-full md:w-2/5">
          <h1 className="text-2xl font-semibold mt-4">Summary</h1>
          <div className="mt-3 border-b border-gray-300/30 pb-2 flex justify-between">
            <p className="flex items-center gap-1">
              <span>Estimated Tax</span>
              <FaCircleQuestion className="text-xs" />
            </p>
            <p className="mr-5">-</p>
          </div>
          <div className="mt-3 border-b border-gray-300/30 pb-2 flex justify-between">
            <p>Total</p>
            <p className="mr-5">-</p>
          </div>
          <button className="mt-5 bg-black w-full text-white rounded-full py-3">
            Checkout
          </button>
          <button className="mt-3 bg-[#F4F6FF] w-full font-medium italic rounded-full py-3 ">
            <span className="text-[#00457C]">Pay</span>
            <span className="text-[#0079C1]">pal</span>
          </button>
        </div>
      </div>
    </section>
  );
}
