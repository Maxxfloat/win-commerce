import { GetStaticProps } from "next";
import { resourceUsage } from "process";
import React from "react";

const About = () => {
  return <div>about</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default About;
