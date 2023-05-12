"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import styles from "./Navigation.module.css";
import Image from "next/image";

const link = [
  { label: "Home", route: "/" },
  { label: "posts", route: "/posts" },
  { label: "about", route: "/about" },
];

export default function Navigation() {
  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          MUI
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {link.map((item) => (
            <Button key={item.label} sx={{ color: "#fff" }}>
              <Link href={item.route}>{item.label}</Link>
            </Button>
          ))}
          <Button sx={{ color: "#fff" }}>
            <Link href="/pagePassHref" replace>
              Prueba
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
