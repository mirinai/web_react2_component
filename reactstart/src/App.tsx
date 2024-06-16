// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// import HardBtn from "./HardBtn";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { IoWarningOutline } from "react-icons/io5";
// import { TiWarningOutline } from "react-icons/ci";
import { FaBeer } from "react-icons/fa";

import Button from "./Button";
import Snackbar from "./snackbar";
import StatusIcon from "./StatusIcon";
// import LargeButton from "./LargeButton";
// import LunchButton from "./LunchButton";
import { IoIosInformationCircle } from "react-icons/io";

// import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";
// import { IoIosInformationCircle } from "react-icons/io";
// import { IoWarningOutline } from "react-icons/io5";

// import { FaFacebook, FaApple } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import SNSIcon from "./SNSIcon";
import SNSText from "./SNSIcon";
import SNSLogin from "./SNSLogin";
function App() {
  return (
    <>
      {/* <LunchButton />
      <LunchButton />
      <LunchButton></LunchButton>
      <LunchButton></LunchButton>
      <LunchButton></LunchButton>
      <LargeButton />
      <LargeButton />
      <LargeButton></LargeButton>
      <LargeButton></LargeButton> */}
      {/* <HardBtn content="Home" />
      <HardBtn content="Q&A" />
      <HardBtn content="About" /> */}
      {/* */}
      <div>
        <Button content="Home" backgroundColor="main" borderRadius="hard" />
        <Button content="Home" backgroundColor="side" borderRadius="smooth" />
        <Button
          content="Home"
          backgroundColor="deactive"
          borderRadius="circle"
        />
      </div>
      <div>
        {/* <FaBeer />
        <Snackbar content="Message" icon="icon1" />
        <Snackbar content="Message" icon="icon2" />
        <Snackbar content="Message" icon="icon3" /> */}
        {/* <StatusIcon color="check" Icon={IoIosInformationCircle} />
        <StatusIcon color="warning" Icon={IoWarningOutline} /> */}
        <Snackbar
          statusIcon={{ color: "check", Icon: CiCircleCheck }}
          messageText={{ message: "Message" }}
        />
        <Snackbar
          statusIcon={{ color: "info", Icon: CiCircleInfo }}
          messageText={{ message: "Message" }}
        />
        <Snackbar
          statusIcon={{ color: "warning", Icon: IoWarningOutline }}
          messageText={{ message: "Message" }}
        />
      </div>
      <div>
        <SNSLogin
          backgroundColor="blue"
          snsText={{ sns: "Facebook" }}
          snsIcon={{ Icon: FaFacebook }}
        />
        <SNSLogin
          backgroundColor="black"
          snsText={{ sns: "Apple" }}
          snsIcon={{ Icon: FaApple }}
        />
        <SNSLogin
          backgroundColor="grey"
          snsText={{ sns: "Google" }}
          snsIcon={{ Icon: FaGoogle }}
        />
      </div>
    </>
  );
}
export default App;
