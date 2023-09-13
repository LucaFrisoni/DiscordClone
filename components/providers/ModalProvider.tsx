"use client";

import React, { useEffect, useState } from "react";
import CreateServerModal from "../modals/CreateServerModal";

const ModalProvider = () => {
  //   Solucion para hidratacion
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateServerModal />
    </>
  );
};

export default ModalProvider;
