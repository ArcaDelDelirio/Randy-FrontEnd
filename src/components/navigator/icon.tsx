import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import "./navigator.css";

// Primary : #FFFFF
// Secundary : #EAEAEA  | #7DF779
// Selected : #47AB43
// Background: #484848

type iconName = "dashboard" | "calendar" | "tasklist" | "bill" | "settings";
type iconState = "selected" | "no-selected";

const InHoverAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.3);
  }
}
`;
const OutHoverAnimation = keyframes`
  from {
    transform: scale(1.3);
  }
  to {
    transform: scale(1);
  }
}
`;

const DivIcon = styled.div`
  padding: 10px;
  animation: ${OutHoverAnimation} 0.2s ease-in-out both alternate;
  cursor: pointer;
  &:hover:not(.isActive) {
    animation: ${InHoverAnimation} 0.2s ease-in-out both alternate;
    svg > path,
    rect {
      fill: #7df779;
    }
  }
`;

interface IconProps {
  name: iconName;
  state: iconState;
  className?: string;
}

export const Icon: FC<IconProps> = ({ name }) => {
  const [menuActive, setMenuState] = useState(false);
  const [color, setColor] = useState("#FFFFFF");
  const handleActive = () => {
    setMenuState(!menuActive);
    setColor(menuActive ? "white" : "#47AB43");
  };

  switch (name) {
    case "dashboard":
      return (
        <DivIcon onClick={handleActive} className={`${menuActive ? "isActive" : ""}`}>
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="21.4286" height="13.0645" rx="2" fill={color} />
            <rect y="15.9677" width="21.4286" height="29.0323" rx="2" fill={color} />
            <rect width="21.4286" height="13.0645" rx="2" transform="matrix(1 0 0 -1 23.5714 45)" fill={color} />
            <rect width="21.4286" height="29.0323" rx="2" transform="matrix(1 0 0 -1 23.5714 29.0323)" fill={color} />
          </svg>
        </DivIcon>
      );
    case "calendar":
      return (
        <DivIcon onClick={handleActive} className={`${menuActive ? "isActive" : ""}`}>
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 3C0 1.34315 1.34315 0 3 0H42C43.6569 0 45 1.34315 45 3V8.85246H0V3ZM0 10.3279H45V42C45 43.6569 43.6569 45 42 45H3C1.34315 45 0 43.6569 0 42V10.3279ZM14.587 24.8788H12.5251V28.1336H14.6518C15.4904 28.1336 16.1474 28.3325 16.6229 28.7301C17.0983 29.1278 17.3361 29.8021 17.3361 30.7531C17.3361 31.4187 17.107 31.9677 16.6488 32.3999C16.1906 32.8235 15.5768 33.0353 14.8074 33.0353C14.1245 33.0353 13.5496 32.8235 13.0827 32.3999C12.6159 31.9763 12.3825 31.4749 12.3825 30.8957H7.98652C7.98652 31.959 8.25884 32.91 8.80347 33.7486C9.3481 34.5785 10.1478 35.2312 11.2025 35.7066C12.2658 36.1735 13.4156 36.4069 14.6518 36.4069C16.7612 36.4069 18.4642 35.9012 19.761 34.8897C21.0577 33.8782 21.7061 32.5296 21.7061 30.8438C21.7061 29.7546 21.4208 28.8425 20.8502 28.1077C20.2797 27.3642 19.493 26.811 18.4902 26.4479C19.4411 25.9983 20.163 25.4148 20.6557 24.6973C21.1571 23.9711 21.4079 23.2017 21.4079 22.3891C21.4079 20.7119 20.807 19.3936 19.6054 18.434C18.4037 17.4744 16.7525 16.9946 14.6518 16.9946C13.4761 16.9946 12.3955 17.215 11.4099 17.6559C10.433 18.0882 9.66797 18.6933 9.11469 19.4714C8.56141 20.2494 8.28477 21.1355 8.28477 22.1297H12.6548C12.6548 21.6283 12.8666 21.209 13.2902 20.8719C13.7225 20.5347 14.2282 20.3661 14.8074 20.3661C15.5163 20.3661 16.0653 20.565 16.4543 20.9626C16.8433 21.3517 17.0378 21.8574 17.0378 22.4798C17.0378 24.0791 16.2209 24.8788 14.587 24.8788ZM29.2143 36.1475H33.5973V17.2669H33.1953L24.9091 20.1327V23.4524L29.2143 22.1945V36.1475Z"
              fill={color}
            />
          </svg>
        </DivIcon>
      );
    case "tasklist":
      return (
        <DivIcon onClick={handleActive} className={`${menuActive ? "isActive" : ""}`}>
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2.25" y="24.75" width="7.5" height="7.5" rx="2" fill={color} />
            <rect x="13.5" y="25.5" width="30" height="6" rx="3" fill={color} />
            <rect x="2.25" y="36.75" width="7.5" height="7.5" rx="2" fill={color} />
            <rect x="13.5" y="37.5" width="30" height="6" rx="3" fill={color} />
            <rect x="13.5" y="13.5" width="30" height="6" rx="3" fill={color} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 12.75C3.14543 12.75 2.25 13.6454 2.25 14.75V16.7891V18.25C2.25 19.3546 3.14543 20.25 4.25 20.25H7.75C8.85457 20.25 9.75 19.3546 9.75 18.25V14.75C9.75 14.6279 9.73905 14.5083 9.71808 14.3922L5.14652 19.6856L2.25 16.7891L3.17522 15.8638L5.07635 17.765L8.75973 13.5L9.70236 14.3141C9.50342 13.4191 8.70485 12.75 7.75 12.75H4.25Z" fill={color} />
            <rect x="13.5" y="1.5" width="30" height="6" rx="3" fill={color} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 0.75C3.14543 0.75 2.25 1.64543 2.25 2.75V4.78905V6.25C2.25 7.35457 3.14543 8.25 4.25 8.25H7.75C8.85457 8.25 9.75 7.35457 9.75 6.25V2.75C9.75 2.62786 9.73905 2.50828 9.71808 2.39219L5.14652 7.68557L2.25 4.78905L3.17522 3.86384L5.07635 5.76497L8.75973 1.5L9.70236 2.31408C9.50342 1.41914 8.70485 0.75 7.75 0.75H4.25Z" fill={color} />
          </svg>
        </DivIcon>
      );
    case "bill":
      return (
        <DivIcon onClick={handleActive} className={`${menuActive ? "isActive" : ""}`}>
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6974 3.93701C15.8891 3.93701 10.1543 8.52129 8.42687 14.7638H26.6447L24.6711 18.7008L7.89473 18.7008C7.89473 19.3682 7.93914 20.0253 8.02516 20.6693H23.6842L21.7105 24.6063H9.12644C11.4107 29.8206 16.6273 33.4646 22.6974 33.4646C26.0304 33.4646 29.1061 32.3659 31.5804 30.5118L34.2072 33.4646C31.0302 35.932 27.0359 37.4016 22.6974 37.4016C14.4111 37.4016 7.38026 32.0405 4.90145 24.6063H0L1.97368 20.6693H4.05C3.98215 20.0224 3.94736 19.3656 3.94736 18.7008L0 18.7008L1.97368 14.7638H4.36361C6.17634 6.32611 13.6961 0 22.6974 0C27.5852 0 32.0362 1.86536 35.3737 4.92126L32.7613 7.87402C30.1202 5.43076 26.5837 3.93701 22.6974 3.93701Z" fill={color} />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.7135 26.7206C36.0945 25.6784 36.9868 24.0258 36.9868 22.1654C36.9868 19.0126 34.4243 16.4567 31.2632 16.4567C28.1021 16.4567 25.5395 19.0126 25.5395 22.1654C25.5395 23.9819 26.3901 25.6002 27.7158 26.6457C25.0522 30.2474 23.6664 37.4218 23.25 41.5748H38.1316C37.9937 37.4504 37.099 30.346 34.7135 26.7206Z" fill="#EAEAEA" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.5819 30.1458C42.9629 29.1036 43.8553 27.451 43.8553 25.5905C43.8553 22.4377 41.2927 19.8819 38.1316 19.8819C34.9705 19.8819 32.4079 22.4377 32.4079 25.5905C32.4079 27.407 33.2586 29.0254 34.5842 30.0709C31.9206 33.6726 30.5348 40.847 30.1184 45H45C44.8621 40.8755 43.9674 33.7712 41.5819 30.1458Z" fill={color} />
          </svg>
        </DivIcon>
      );
    case "settings":
      return (
        <DivIcon onClick={handleActive} className={`${menuActive ? "isActive" : ""}`}>
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.41444 10.5784C2.27462 12.3993 1.38816 14.395 0.804439 16.5162C3.71043 16.7355 6.00004 19.1629 6.00004 22.125C6.00004 25.1514 3.6101 27.6195 0.614624 27.745C1.14147 29.9514 1.99332 32.0317 3.11676 33.9324C5.32176 31.8616 8.78845 31.9033 10.9426 34.0575C13.0968 36.2116 13.1385 39.6783 11.0677 41.8833C12.9684 43.0067 15.0486 43.8586 17.2551 44.3854C17.3806 41.39 19.8487 39 22.875 39C25.8372 39 28.2645 41.2896 28.4839 44.1956C30.605 43.6119 32.6008 42.7254 34.4217 41.5856C32.6194 39.3762 32.7479 36.117 34.8075 34.0574C36.8031 32.0618 39.9253 31.8791 42.1271 33.5095C43.1433 31.7017 43.917 29.7394 44.404 27.6665C41.7602 27.2065 39.75 24.9005 39.75 22.125C39.75 19.4131 41.6692 17.1494 44.2234 16.618C43.6795 14.6044 42.8631 12.7027 41.8162 10.9549C39.6391 12.3501 36.7109 12.096 34.8075 10.1926C32.904 8.28912 32.6499 5.3609 34.0452 3.18385C32.2974 2.13695 30.3956 1.32055 28.382 0.776648C27.8506 3.33089 25.587 5.25002 22.875 5.25002C20.0996 5.25002 17.7936 3.23987 17.3335 0.596008C15.2607 1.08306 13.2983 1.85675 11.4905 2.87297C13.1209 5.07482 12.9383 8.19694 10.9426 10.1926C8.88306 12.2521 5.6238 12.3807 3.41444 10.5784ZM22.5 33.75C28.7132 33.75 33.75 28.7132 33.75 22.5C33.75 16.2868 28.7132 11.25 22.5 11.25C16.2868 11.25 11.25 16.2868 11.25 22.5C11.25 28.7132 16.2868 33.75 22.5 33.75Z"
              fill={color}
            />
          </svg>
        </DivIcon>
      );
    default:
      return <p>Error al renderizar el icono</p>;
  }
};
