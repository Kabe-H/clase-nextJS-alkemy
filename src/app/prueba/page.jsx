"use client";

export default function prueba() {
  const makeApiCall = async () => {
    await fetch("/api/hello", {
      method: "POST",
      body: JSON.stringify({ hello: "world" }),
    });
  };
  const funcionCookie = async () => {
    await fetch("/api/pruebaCookie", {
      method: "POST",
      body: JSON.stringify({ hello: "world" }),
    });
  };
  const funcionRedirect = async () => {
    await fetch("/api/pruebaRedirect", {
      method: "POST",
      body: JSON.stringify({ hello: "world" }),
    });
  };
  const funcionRevalidate = async () => {
    await fetch("/api/pruebaRevalidate", {
      method: "POST",
      body: JSON.stringify({ hello: "world" }),
    });
  };
  const funcionSend = async () => {
    await fetch("/api/pruebaSend", {
      method: "POST",
      body: JSON.stringify({ hello: "world" }),
    });
  };
  return (
    <>
      <div><button onClick={makeApiCall}>Veamoooos</button></div>
      <div><button onClick={funcionCookie}>Cookie</button></div>
      <div><button onClick={funcionRedirect}>Redirect</button></div>
    </>
  );
}
