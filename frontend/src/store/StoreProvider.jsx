import React, { createContext, useState } from "react";
// import dataJSON from "../temp/images_nouser.json";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [activeData, setActiveData] = useState(null);
  const [scrollStatus, setScrollStatus] = useState("");
  const [uploadStatus, setUploadStatus] = useState(false);
  const [logged, setLogged] = useState(false);
  const [newBeer, setNewBeer] = useState(false);
  const [user, setUser] = useState("nouser");
  const [errMsg, setErrMsg] = useState(false);
  const [passImg, setPassImg] = useState(false);
  const [convertMsg, setConvertMsg] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isAddBeerModalOpen, setIsAddBeerModalOpen] = useState(false);
  const [isEditBeerModalOpen, setIsEditBeerModalOpen] = useState(false);
  const [isDeleteBeerModalOpen, setIsDeleteBeerModalOpen] = useState(false);
  const [isBeerModalOpen, setIsBeerModalOpen] = useState(false);

  return (
    <StoreContext.Provider
      value={{
        data,
        setData,
        passImg,
        setPassImg,
        activeData,
        setActiveData,
        scrollStatus,
        setScrollStatus,
        logged,
        setLogged,
        user,
        setUser,
        errMsg,
        setErrMsg,
        convertMsg,
        setConvertMsg,
        newBeer,
        setNewBeer,
        uploadStatus,
        setUploadStatus,
        isLoginModalOpen,
        setIsLoginModalOpen,
        isAddBeerModalOpen,
        setIsAddBeerModalOpen,
        isRegisterModalOpen,
        setIsRegisterModalOpen,
        isBeerModalOpen,
        setIsBeerModalOpen,
        isEditBeerModalOpen,
        setIsEditBeerModalOpen,
        isDeleteBeerModalOpen,
        setIsDeleteBeerModalOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
