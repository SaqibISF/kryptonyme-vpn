import React, { FC } from "react";
import Section, { SectionProps } from "../Section";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { User } from "@heroui/user";

const UsersRemarksSection: FC<SectionProps> = ({ ...props }) => (
  <Section
    heading="Trusted by Millions"
    description="Join over 10 million users who trust Kryptonyme with their privacy."
    {...props}
  >
    <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          name: "Mike Johnson",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29026701d",
          description: "Software Engineer",
          remarks:
            "Incredibly fast and reliable. I can stream 4K content without any buffering issues.",
        },
        {
          name: "Emma Davis",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          description: "Digital Marketer",
          remarks:
            "Best VPN I've used. Simple setup and works perfectly on all my devices.",
        },
        {
          name: "David Chen",
          avatar: "https://i.pravatar.cc/150?u=a04258114e29026703d",
          description: "Freelancer",
          remarks:
            "The privacy features are exactly what I needed. Peace of mind for my online activities.",
        },
      ].map(({ name, avatar, description, remarks }, index) => (
        <Card key={avatar + index} className="p-6">
          <CardBody className="gap-3">
            <div className="text-[#FFD700] text-2xl">
              ★★★★★ <span className="text-default-500">5.0</span>
            </div>
            <p className="text-default-500 text-justify">
              &quot;{remarks}&quot;
            </p>
          </CardBody>
          <CardFooter>
            <User
              avatarProps={{
                src: avatar,
              }}
              description={description}
              name={name}
            />
          </CardFooter>
        </Card>
      ))}
    </div>
  </Section>
);

export default UsersRemarksSection;
