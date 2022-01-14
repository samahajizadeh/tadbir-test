import React from "react";
import dynamic from "next/dynamic";

// project components



const Layout = dynamic(() => import("../src/components/Layout/Layout"));
const HomePage = dynamic(() => import("../src/components/HomePage"));

export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
