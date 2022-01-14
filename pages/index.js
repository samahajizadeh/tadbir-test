import React from "react";
import dynamic from "next/dynamic";

// project components

// import Layout from "../src/components/Layout/Layout";
// import HomePage from "../src/components/HomePage";

const Layout = dynamic(() => import("../src/components/Layout/Layout"));
const HomePage = dynamic(() => import("../src/components/HomePage"));

export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
