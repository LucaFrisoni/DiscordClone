"use client";

import React, { useEffect, useState } from "react";
import CreateServerModal from "../modals/CreateServerModal";
import InviteModal from "../modals/InviteModal";
import EditServerModal from "../modals/EditServerModal";
import MembersModal from "../modals/MembersModal";

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
      <InviteModal />
      <EditServerModal />
      <MembersModal />
    </>
  );
};

export default ModalProvider;