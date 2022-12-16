import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import scrollreveal from "scrollreveal";
import './dashboard.scss'
export default function Dashboard() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        .row__one,
        .row__two
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);
  return (
    <div className="dashboard">
        <div className="section">
        <Navbar />
      <div className="grid">
        {/* <div className="row__one">
          <Analytics />
          <FAQ />
        </div> */}
        {/* <div className="row__two">
          <Earnings />
          <Transfers />
          <Profile />
        </div> */}
      </div>
        </div>
      
    </div>
  );
}

