import { Metadata } from "next";
import React, { FC } from "react";
import MyPlansPage from "./MyPlansPage";

export const metadata: Metadata = { title: "My Plans" };

const MyPlansServerPage: FC = () => <MyPlansPage />;

export default MyPlansServerPage;
