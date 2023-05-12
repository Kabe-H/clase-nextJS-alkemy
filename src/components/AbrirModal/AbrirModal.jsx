"use client"
import { Button } from "@mui/material";
import React, { useState } from "react";
import MiDialog from "../MiDialog/MiDialog";

export default function AbrirModal() {
  const [open, setOpen] = useState(false);

  const onClickOpenDialog = () => {
    setOpen(true);
  };

  return (
    <>
      <Button onClick={onClickOpenDialog}>Abrir Modal</Button>
      <MiDialog
        open={open}
        title="Prueba"
        message="Este es el mensaje"
        actions={[
          {
            text: "Cancelar",
            variant: "contained",
            onClick: () => {
              setOpen(false);
            },
          },
        ]}
      />
    </>
  );
}
