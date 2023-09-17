"use client";

import React, { useEffect, useState } from "react";
import CreateServerModal from "../modals/CreateServerModal";
import InviteModal from "../modals/InviteModal";
import EditServerModal from "../modals/EditServerModal";
import MembersModal from "../modals/MembersModal";
import CreateChannelModal from "../modals/CreateChannelModal";
import LeaveServerModal from "../modals/LeaveServerModal";
import DeleteServerModal from "../modals/DeleteServerModal";
import {DeleteChannelModal} from "../modals/DeleteChannelModal";
import { EditChannelModal } from "../modals/EditChannelModal";

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
      <InviteModal />
      <MembersModal />
      <LeaveServerModal />
      <CreateServerModal />
      <CreateChannelModal />
      <EditServerModal />
      <EditChannelModal />
      <DeleteServerModal />
      <DeleteChannelModal />
    </>
  );
};

export default ModalProvider;
