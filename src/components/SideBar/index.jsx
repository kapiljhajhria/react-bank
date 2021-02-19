import React from "react";
import {
  SideBarContainer,
  CloseIcon,
  Icon,
  SideBtnWrap,
  SideBarRoute,
  SideBarWrapper,
  SideBarLink,
  SideBarMenu,
} from "./SideBarElements";

export const SideBar = ({ toggle, isOpen }) => {
  return (
    <>
      <SideBarContainer isOpen={isOpen} toggle={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink to="about" onClick={toggle}>
              About
            </SideBarLink>
            <SideBarLink to="discover" onClick={toggle}>
              Discover
            </SideBarLink>
            <SideBarLink to="services" onClick={toggle}>
              Services
            </SideBarLink>
            <SideBarLink to="sign-up" onClick={toggle}>
              Sign Up
            </SideBarLink>
          </SideBarMenu>
        </SideBarWrapper>
        <SideBtnWrap>
          <SideBarRoute to="/signin" onClick={toggle}>
            Sign In
          </SideBarRoute>
        </SideBtnWrap>
      </SideBarContainer>
    </>
  );
};
