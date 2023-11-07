import React, { useState } from "react";

export default function LoginControl() {
  const [isLoggedIn, setisLoggedIn] = useState(true);

  const handleLogin = () => {
    setisLoggedIn(!isLoggedIn); // 현재 상태를 반전시킵니다.
  };

  return (
    <div style={{ color: "white" }}>
      <button
        onClick={handleLogin}
        style={{
          margin: "0 10px",
          borderRadius: "15px",
          width: "70px",
          height: "30px",
        }}
      >
        {isLoggedIn ? "로그인" : "로그아웃"}
      </button>
      {isLoggedIn ? "로그인해주세요!" : "환영합니다!"}
    </div>
  );
}
