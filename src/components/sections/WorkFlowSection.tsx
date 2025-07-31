import React, { FC } from "react";
import Section from "../Section";
import { ArrowRightIcon } from "@/icons";

const WorkFlowSection: FC = () => (
  <Section
    heading="How Kryptonyme VPN Works"
    description="Get started with Kryptonyme VPN in just three simple steps and enjoy secure, private browsing."
  >
    <div className="max-w-5xl grid md:grid-cols-8 place-items-center gap-4">
      {[
        {
          id: 1,
          title: "Download & Install",
          description:
            "Get the KryptonymeVPN app for your device from our website or app stores.",
        },
        null,
        {
          id: 2,
          title: "Connect to a Server",
          description:
            "Choose from our global network of servers and connect with a single click.",
        },
        null,
        {
          id: 3,
          title: "Browse Securely",
          description:
            "Enjoy encrypted, private internet access with no bandwidth limits.",
        },
      ].map((item, index) =>
        item ? (
          <div
            key={index}
            className="md:col-span-2 flex flex-col items-center gap-y-4"
          >
            <span className="bg-primary size-20 rounded-full flex items-center justify-center">
              <h1 className="text-white text-3xl font-bold">{item.id}</h1>
            </span>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-default-500 text-base">{item.description}</p>
          </div>
        ) : (
          <ArrowRightIcon
            key={index}
            className="text-primary size-10 rotate-90 md:rotate-0"
          />
        )
      )}
    </div>
  </Section>
);

export default WorkFlowSection;
