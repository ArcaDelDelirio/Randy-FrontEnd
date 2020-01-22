import React, { FC, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { LogoApp } from "../logoApp/logoApp";
import { Hello } from "../hello/hello";
import { useLocation } from "react-router-dom";


interface HeaderProps {
  className?: string;
}

const navOptions = {
  link1: '/dashboard',
  link2: '/calendar',
  link3: '/tasklist',
  link4: '/bill',
  link5: '/settings'
}

const HelloProps = {
  name: "Jhon Doe",
  srcAvatar: "https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg"
};


export const HeaderTop: FC<HeaderProps> = () => {
  const [text, setText] = useState<string>('');
  let location = useLocation();

  useEffect(() => {
    setText(handleText(location.pathname))
  }, [location])

  return (
    <HeaderPage>
      <LogoApp></LogoApp>
      <h2>{text}</h2>
      <Hello {...HelloProps}></Hello>
    </HeaderPage>
  );
};




function handleText(location: string) {
  switch (location) {
    case navOptions.link1:
      return 'Dashboard ✨'
    case navOptions.link2:
      return 'Calendario 📅'
    case navOptions.link3:
      return 'Lista de tareas 📌'
    case navOptions.link4:
      return 'Facturación 💸'
    case navOptions.link5:
      return 'Ajustes 🔧'
    default:
      return ''
  }

}

const HeaderPage = styled.div`
  max-height: 100px;
  padding-right: 50px;
  padding-left: 50px;
  margin-top:1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

