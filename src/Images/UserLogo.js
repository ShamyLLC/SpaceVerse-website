import React from "react";

const UserLogo = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0002 10.0001C12.3013 10.0001 14.1668 8.1346 14.1668 5.83341C14.1668 3.53223 12.3013 1.66675 10.0002 1.66675C7.69898 1.66675 5.8335 3.53223 5.8335 5.83341C5.8335 8.1346 7.69898 10.0001 10.0002 10.0001Z"
        fill={color || "#9CA3AF"}
      />
      <path
        d="M9.9998 12.0833C5.8248 12.0833 2.4248 14.8833 2.4248 18.3333C2.4248 18.5666 2.60814 18.7499 2.84147 18.7499H17.1581C17.3915 18.7499 17.5748 18.5666 17.5748 18.3333C17.5748 14.8833 14.1748 12.0833 9.9998 12.0833Z"
        fill={color || "#9CA3AF"}
      />
    </svg>
  );
};

export default UserLogo;
