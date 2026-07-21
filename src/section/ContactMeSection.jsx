import React, { useState, forwardRef } from "react";
import { color, motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCopy,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterXFill,
  RiInstagramLine,
  RiWhatsappFill,
  RiLinkedinFill,
  Ri24HoursLine,
  RiPlaneFill,
} from "react-icons/ri";
import { Coffee } from "lucide-react";
import ContentCard from "../components/ui/ContentCard";
import ChannelCard from "../components/ui/ChannelCard";
import PlatformLogo from "../components/ui/platformLogo";

const ContactSection = forwardRef((props, ref) => {
  return (
    <section
      id="Contact"
      ref={ref}
      className="flex flex-col lg:flex-row  h-fit"
    >
      {/* {Right Section} */}
      <div className="px-10 py-6 flex flex-col  gap-7 lg:max-w-1/2 w-full">
        <ContentCard
          capsuleData={"Get in Touch"}
          description={
            <span className="leading-3.5">
              Have a Project in mind to say hi? <br /> I would Like to hear from
              you . Fill out the form or reach me directly through any of the
              channels below .{" "}
            </span>
          }
          firstTwoWords={"Lets Build Something "}
          secondLinefirstWord={"Amazing"}
          highlight={"Together"}
        />

        <div className="flex flex-col gap-3 w-full">
          <ChannelCard
            Icon={<FaEnvelope color="black" size={22} />}
            ChannelName={"Email"}
            ChannelId={"ak0052803@gmail.com"}
            Icon2={<FaCopy color="#101010" />}
          />

          <ChannelCard
            Icon={<FaPhoneAlt color="black" size={22} />}
            ChannelName={"Phone"}
            ChannelId={"80913-08651"}
            Icon2={<FaCopy color="#101010" />}
          />

          <ChannelCard
            Icon={<FaMapMarkerAlt color="black" size={22} />}
            ChannelName={"Location"}
            ChannelId={"Chamba , Himachal Pradesh"}
            Icon2={<FaCopy color="#101010" />}
          />
        </div>

        <h1>Connect with me</h1>

        <div className="flex gap-4">
          <PlatformLogo
            Logo={<RiGithubFill size={28} />}
            url={"https://github.com/Anmol262006/"}
          />
          <PlatformLogo
            Logo={<RiInstagramLine size={28} color={"purple"} />}
            url={"https://www.instagram.com/anmoll_2005_26/"}
          />
          <PlatformLogo
            Logo={<RiLinkedinBoxFill size={28} color="blue" />}
            url={"https://www.linkedin.com/in/anmol-kumar-725022262/"}
          />
          <PlatformLogo
            Logo={<RiWhatsappFill size={28} color="green" />}
            url={
              "https://wa.me/918091308651?text=Hi%20Anmol%2C%20I%20saw%20your%20portfolio!"
            }
          />
          <PlatformLogo Logo={<Ri24HoursLine size={28} />} />
        </div>
      </div>

      <div className="flex-1 border-2 border-dashed h-fit border-purple-200 rounded-3xl p-6 md:p-8 bg-white shadow-sm w-full lg:max-w-xl mt-8">
        <div className="flex flex-col gap-6 w-full">
          {/* Form Header */}
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <PlatformLogo
              Logo={<FaTelegramPlane size={24} className="text-purple-700" />}
            />
            <h3 className="text-lg font-bold text-gray-800">
              Send me a Message
            </h3>
          </div>

          {/* Contact Form */}
          <form
            className="flex flex-col gap-5 w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Row 1: Name and Email */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex flex-col gap-1.5 flex-1">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all text-sm bg-gray-50/50"
                />
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all text-sm bg-gray-50/50"
                />
              </div>
            </div>

            {/* Row 2: Subject */}
            <div className="flex flex-col gap-1.5 w-full">
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="What is this regarding?"
                className="w-full h-11 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all text-sm bg-gray-50/50"
              />
            </div>

            {/* Row 3: Message */}
            <div className="flex flex-col gap-1.5 w-full">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Type your message here..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100 transition-all text-sm bg-gray-50/50 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md shadow-purple-200 hover:shadow-none flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
