import React from "react";

interface figmaIconsProps {
  [key: string]: ((stroke?: string) => React.JSX.Element);
}
let figmaIcons: figmaIconsProps = {
  dashBoardIcons: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <g clipPath="url(#clip0_3713_2827)">
        <circle cx="14.7724" cy="15.0004" r="15.2275" fill="#2E90FA" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.9111 -0.540587C22.6544 0.202751 22.6544 1.40794 21.9111 2.15128L7.55301 16.5093C6.80968 17.2527 5.60449 17.2527 4.86115 16.5093L-0.40602 11.2422C-1.14936 10.4988 -1.14936 9.29365 -0.40602 8.55031L13.952 -5.80775C14.6954 -6.55109 15.9006 -6.55109 16.6439 -5.80775L21.9111 -0.540587Z"
          fill="white"
          fillOpacity="0.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.9821 19.6917C29.7255 20.4351 29.7255 21.6403 28.9821 22.3836L16.4818 34.8839C15.7385 35.6273 14.5333 35.6273 13.7899 34.8839L7.35765 28.4516C6.61431 27.7083 6.61431 26.5031 7.35765 25.7598L19.858 13.2595C20.6013 12.5161 21.8065 12.5161 22.5498 13.2595L28.9821 19.6917Z"
          fill="black"
          fillOpacity="0.3"
        />
      </g>
      <defs>
        <clipPath id="clip0_3713_2827">
          <rect width="30" height="30" rx="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  collapseIcons: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.6001 4.36401C4.94324 4.36401 3.6001 5.70716 3.6001 7.36401V16.6367C3.6001 18.2936 4.94324 19.6367 6.6001 19.6367H17.4001C19.0569 19.6367 20.4001 18.2936 20.4001 16.6367V7.36401C20.4001 5.70716 19.0569 4.36401 17.4001 4.36401H6.6001ZM12.6258 5.89155C11.5212 5.89155 10.6258 6.78698 10.6258 7.89155V16.1097C10.6258 17.2143 11.5212 18.1097 12.6258 18.1097H16.7203C17.8249 18.1097 18.7203 17.2143 18.7203 16.1097V7.89155C18.7203 6.78698 17.8249 5.89155 16.7203 5.89155H12.6258Z"
        fill="#676E85"
      />
    </svg>
  ),
  sideBarDashBoardIcons: (fill) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M12.9734 2.5C12.7631 2.49998 12.5583 2.49995 12.3848 2.51413C12.1943 2.52969 11.9695 2.56641 11.7434 2.68166C11.4297 2.84145 11.1748 3.09642 11.015 3.41002C10.8997 3.63621 10.863 3.86099 10.8475 4.05148C10.8333 4.22494 10.8333 4.42977 10.8333 4.64009V7.02659C10.8333 7.2369 10.8333 7.44173 10.8475 7.6152C10.863 7.80569 10.8997 8.03047 11.015 8.25666C11.1748 8.57026 11.4297 8.82523 11.7434 8.98501C11.9695 9.10026 12.1943 9.13699 12.3848 9.15255C12.5583 9.16672 12.7631 9.1667 12.9734 9.16667H15.3599C15.5702 9.1667 15.7751 9.16672 15.9485 9.15255C16.139 9.13699 16.3638 9.10026 16.59 8.98501C16.9036 8.82523 17.1586 8.57026 17.3183 8.25666C17.4336 8.03047 17.4703 7.80569 17.4859 7.6152C17.5001 7.44173 17.5 7.2369 17.5 7.02659V4.64009C17.5 4.42977 17.5001 4.22494 17.4859 4.05148C17.4703 3.86099 17.4336 3.63621 17.3183 3.41002C17.1586 3.09642 16.9036 2.84145 16.59 2.68166C16.3638 2.56641 16.139 2.52969 15.9485 2.51413C15.7751 2.49995 15.5702 2.49998 15.3599 2.5L12.9734 2.5Z"
        fill={fill || "#4950FF"}
      />
      <path
        d="M4.64009 10.8333C4.42977 10.8333 4.22494 10.8333 4.05148 10.8475C3.86099 10.863 3.63621 10.8997 3.41002 11.015C3.09642 11.1748 2.84145 11.4297 2.68166 11.7434C2.56641 11.9695 2.52969 12.1943 2.51413 12.3848C2.49995 12.5583 2.49998 12.7631 2.5 12.9734L2.5 15.3599C2.49998 15.5702 2.49995 15.7751 2.51413 15.9485C2.52969 16.139 2.56641 16.3638 2.68166 16.59C2.84145 16.9036 3.09642 17.1586 3.41002 17.3183C3.63621 17.4336 3.86099 17.4703 4.05148 17.4859C4.22494 17.5001 4.42977 17.5 4.64009 17.5H7.02659C7.2369 17.5 7.44173 17.5001 7.6152 17.4859C7.80569 17.4703 8.03047 17.4336 8.25666 17.3183C8.57026 17.1586 8.82523 16.9036 8.98501 16.59C9.10026 16.3638 9.13699 16.139 9.15255 15.9485C9.16672 15.7751 9.1667 15.5703 9.16667 15.3599V12.9734C9.1667 12.7631 9.16672 12.5583 9.15255 12.3848C9.13699 12.1943 9.10026 11.9695 8.98501 11.7434C8.82523 11.4297 8.57026 11.1748 8.25666 11.015C8.03047 10.8997 7.80569 10.863 7.6152 10.8475C7.44173 10.8333 7.2369 10.8333 7.02659 10.8333H4.64009Z"
        fill={fill || "#4950FF"}
      />
      <path
        d="M12.9734 10.8333C12.7631 10.8333 12.5583 10.8333 12.3848 10.8475C12.1943 10.863 11.9695 10.8997 11.7434 11.015C11.4297 11.1748 11.1748 11.4297 11.015 11.7434C10.8997 11.9695 10.863 12.1943 10.8475 12.3848C10.8333 12.5583 10.8333 12.7631 10.8333 12.9734V15.3599C10.8333 15.5702 10.8333 15.7751 10.8475 15.9485C10.863 16.139 10.8997 16.3638 11.015 16.59C11.1748 16.9036 11.4297 17.1586 11.7434 17.3183C11.9695 17.4336 12.1943 17.4703 12.3848 17.4859C12.5583 17.5001 12.7631 17.5 12.9734 17.5H15.3599C15.5702 17.5 15.7751 17.5001 15.9485 17.4859C16.139 17.4703 16.3638 17.4336 16.59 17.3183C16.9036 17.1586 17.1586 16.9036 17.3183 16.59C17.4336 16.3638 17.4703 16.139 17.4859 15.9485C17.5001 15.7751 17.5 15.5702 17.5 15.3599V12.9734C17.5 12.7631 17.5001 12.5583 17.4859 12.3848C17.4703 12.1943 17.4336 11.9695 17.3183 11.7434C17.1586 11.4297 16.9036 11.1748 16.59 11.015C16.3638 10.8997 16.139 10.863 15.9485 10.8475C15.7751 10.8333 15.5702 10.8333 15.3599 10.8333H12.9734Z"
        fill={fill || "#4950FF"}
      />
      <path
        d="M4.64009 2.5C4.42977 2.49998 4.22494 2.49995 4.05148 2.51413C3.86099 2.52969 3.63621 2.56641 3.41002 2.68166C3.09642 2.84145 2.84145 3.09642 2.68166 3.41002C2.56641 3.63621 2.52969 3.86099 2.51413 4.05148C2.49995 4.22494 2.49998 4.42976 2.5 4.64008L2.5 7.02659C2.49998 7.2369 2.49995 7.44173 2.51413 7.6152C2.52969 7.80569 2.56641 8.03047 2.68166 8.25666C2.84145 8.57026 3.09642 8.82523 3.41002 8.98502C3.63621 9.10026 3.86099 9.13699 4.05148 9.15255C4.22494 9.16672 4.42975 9.1667 4.64006 9.16667H7.02659C7.23689 9.1667 7.44174 9.16672 7.6152 9.15255C7.80569 9.13699 8.03047 9.10026 8.25666 8.98502C8.57026 8.82523 8.82523 8.57026 8.98502 8.25666C9.10026 8.03047 9.13699 7.80569 9.15255 7.6152C9.16672 7.44174 9.1667 7.23692 9.16667 7.02661V4.64009C9.1667 4.42978 9.16672 4.22494 9.15255 4.05148C9.13699 3.86099 9.10026 3.63621 8.98502 3.41002C8.82523 3.09642 8.57026 2.84145 8.25666 2.68166C8.03047 2.56641 7.80569 2.52969 7.6152 2.51413C7.44173 2.49995 7.23691 2.49998 7.0266 2.5L4.64009 2.5Z"
        fill={fill || "#4950FF"}
      />
    </svg>
  ),
  dashBoardProfileIcons: (stroke) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M10.0999 10.65C10.0416 10.6417 9.9666 10.6417 9.89994 10.65C8.43327 10.6 7.2666 9.39998 7.2666 7.92498C7.2666 6.41665 8.48327 5.19165 9.99993 5.19165C11.5083 5.19165 12.7333 6.41665 12.7333 7.92498C12.7249 9.39998 11.5666 10.6 10.0999 10.65Z"
        stroke={stroke || "#4950FF"}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.6166 16.15C14.1333 17.5084 12.1666 18.3334 9.99997 18.3334C7.8333 18.3334 5.86663 17.5084 4.3833 16.15C4.46663 15.3667 4.96663 14.6 5.8583 14C8.14163 12.4834 11.875 12.4834 14.1416 14C15.0333 14.6 15.5333 15.3667 15.6166 16.15Z"
        stroke={stroke || "#4950FF"}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0001 18.3333C14.6025 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6025 1.66667 10.0001 1.66667C5.39771 1.66667 1.66675 5.39763 1.66675 10C1.66675 14.6024 5.39771 18.3333 10.0001 18.3333Z"
        stroke={stroke || "#4950FF"}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  postJobIcons: (stroke) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
    >
      <path
        d="M6.68553 19.3565H13.3707C16.73 19.3565 17.3317 18.0111 17.5072 16.3733L18.1339 9.68807C18.3595 7.64909 17.7746 5.98615 14.2064 5.98615H5.84988C2.28167 5.98615 1.69671 7.64909 1.92234 9.68807L2.54907 16.3733C2.72456 18.0111 3.32623 19.3565 6.68553 19.3565Z"
        stroke={stroke || "#4950FF"}
        strokeWidth="1.25347"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.68555 5.98615V5.31763C6.68555 3.83853 6.68555 2.64355 9.35962 2.64355H10.6967C13.3707 2.64355 13.3707 3.83853 13.3707 5.31763V5.98615"
        stroke={stroke || "#4950FF"}
        strokeWidth="1.25347"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.699 11.8356V12.6713C11.699 12.6797 11.699 12.6797 11.699 12.688C11.699 13.5989 11.6907 14.3426 10.0277 14.3426C8.37316 14.3426 8.35645 13.6072 8.35645 12.6964V11.8356C8.35645 11 8.35645 11 9.19209 11H10.8634C11.699 11 11.699 11 11.699 11.8356Z"
        stroke={stroke || "#4950FF"}
        strokeWidth="1.25347"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0919 10.1644C16.1616 11.5683 13.9555 12.4039 11.6992 12.688"
        stroke={stroke || "#4950FF"}
        strokeWidth="1.25347"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.18945 10.39C4.06966 11.6769 6.19221 12.4541 8.35654 12.6964"
        stroke={stroke || "#4950FF"}
        strokeWidth="1.25347"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  messageIcons: (stroke) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9965 11H16.0054"
        stroke="#292D32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9955 11H12.0045"
        stroke="#292D32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99451 11H8.00349"
        stroke="#292D32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  notificationIcons: (stroke) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.0201 2.91003C8.71009 2.91003 6.02009 5.60003 6.02009 8.91003V11.8C6.02009 12.41 5.76009 13.34 5.45009 13.86L4.30009 15.77C3.59009 16.95 4.08009 18.26 5.38009 18.7C9.69009 20.14 14.3401 20.14 18.6501 18.7C19.8601 18.3 20.3901 16.87 19.7301 15.77L18.5801 13.86C18.2801 13.34 18.0201 12.41 18.0201 11.8V8.91003C18.0201 5.61003 15.3201 2.91003 12.0201 2.91003Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  ),
  activeJobBoxIcon: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      cursor="pointer"
    >
      <rect width="24" height="24" fill="white" />
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        fill="black"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
        fill="black"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
        fill="black"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  AI: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="24"
      viewBox="0 0 31 24"
      fill="none"
    >
      <path
        d="M8.96834 12.7495C8.27953 12.4872 8.27953 11.5128 8.96834 11.2505C13.2448 9.62212 16.6221 6.24477 18.2505 1.96834C18.5128 1.27953 19.4872 1.27953 19.7495 1.96834C21.3779 6.24477 24.7552 9.62212 29.0317 11.2505C29.7205 11.5128 29.7205 12.4872 29.0317 12.7495C24.7552 14.3779 21.3779 17.7552 19.7495 22.0317C19.4872 22.7205 18.5128 22.7205 18.2505 22.0317C16.6221 17.7552 13.2448 14.3779 8.96834 12.7495Z"
        fill="#4950FF"
      />
      <path
        d="M4.65611 5.24983C4.42651 5.16241 4.42651 4.83759 4.65611 4.75016C6.08159 4.20737 7.20737 3.08159 7.75017 1.65611C7.83759 1.42651 8.16241 1.42651 8.24984 1.65611C8.79263 3.08159 9.91841 4.20737 11.3439 4.75016C11.5735 4.83759 11.5735 5.16241 11.3439 5.24983C9.91841 5.79263 8.79263 6.91841 8.24984 8.34389C8.16241 8.57349 7.83759 8.57349 7.75017 8.34389C7.20737 6.91841 6.08159 5.79263 4.65611 5.24983Z"
        fill="#4950FF"
      />
      <path
        d="M0.738127 17.7811C0.479824 17.6827 0.479824 17.3173 0.738127 17.2189C2.34179 16.6083 3.60829 15.3418 4.21894 13.7381C4.31729 13.4798 4.68271 13.4798 4.78106 13.7381C5.39171 15.3418 6.65821 16.6083 8.26187 17.2189C8.52018 17.3173 8.52018 17.6827 8.26187 17.7811C6.65821 18.3917 5.39171 19.6582 4.78106 21.2619C4.68271 21.5202 4.31729 21.5202 4.21894 21.2619C3.60829 19.6582 2.34179 18.3917 0.738127 17.7811Z"
        fill="#4950FF"
      />
    </svg>
  ),
  moreHorizontalIcon: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
        fill="#292D32"
        stroke="#292D32"
      />
      <path
        d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
        fill="#292D32"
        stroke="#292D32"
      />
      <path
        d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
        fill="#292D32"
        stroke="#292D32"
      />
    </svg>
  ),
  shareIcon: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 12C9 12.663 8.73661 13.2989 8.26777 13.7678C7.79893 14.2366 7.16304 14.5 6.5 14.5C5.83696 14.5 5.20107 14.2366 4.73223 13.7678C4.26339 13.2989 4 12.663 4 12C4 11.337 4.26339 10.7011 4.73223 10.2322C5.20107 9.76339 5.83696 9.5 6.5 9.5C7.16304 9.5 7.79893 9.76339 8.26777 10.2322C8.73661 10.7011 9 11.337 9 12Z"
        stroke="black"
        strokeWidth="1.5"
      />
      <path
        d="M14 6.5L9 10M14 17.5L9 14"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19 18.5C19 19.163 18.7366 19.7989 18.2678 20.2678C17.7989 20.7366 17.163 21 16.5 21C15.837 21 15.2011 20.7366 14.7322 20.2678C14.2634 19.7989 14 19.163 14 18.5C14 17.837 14.2634 17.2011 14.7322 16.7322C15.2011 16.2634 15.837 16 16.5 16C17.163 16 17.7989 16.2634 18.2678 16.7322C18.7366 17.2011 19 17.837 19 18.5ZM19 5.5C19 6.16304 18.7366 6.79893 18.2678 7.26777C17.7989 7.73661 17.163 8 16.5 8C15.837 8 15.2011 7.73661 14.7322 7.26777C14.2634 6.79893 14 6.16304 14 5.5C14 4.83696 14.2634 4.20107 14.7322 3.73223C15.2011 3.26339 15.837 3 16.5 3C17.163 3 17.7989 3.26339 18.2678 3.73223C18.7366 4.20107 19 4.83696 19 5.5Z"
        stroke="black"
        strokeWidth="1.5"
      />
    </svg>
  ),
  bookmarkIcon: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default figmaIcons;
