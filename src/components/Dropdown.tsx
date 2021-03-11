import React from "react"
import styled from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
type data = {
  url: string
  name: string
}

export interface DropdownProps {
  title: JSX.Element | JSX.Element[] | string
  data: data[]
}

const Dropdown: React.FC<DropdownProps> = ({ title, data, ...props }: DropdownProps) => {
  return (
    <Wrapper {...props}>
      <Control>{title}</Control>
      <Menu>
        <Inner>
          {data.map((meta: data) => (
            <li key={meta.name}>
              <a href={meta.url} target="_blank" rel="noreferrer">
                {meta.name}
              </a>
            </li>
          ))}
        </Inner>
      </Menu>
    </Wrapper>
  )
}

const Menu = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  padding-bottom: ${rem(8)};
  transform: translate(-50%, 0) scale(0.9) rotate(-4deg);
  will-change: transform, opacity, visibility;
  transform-origin: 50% 100%;
  transition: visibility ${(props) => props.theme.transition.base}, opacity ${(props) => props.theme.transition.base},
    transform 0.3s ease;
  font-weight: ${(props) => props.theme.fontWeight.semibold};

  &:hover {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0) scale(1) rotate(0);
  }

  &:after {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(255, 255, 255, 0);
    border-top-color: ${(props) => props.theme.colors.white};
    border-width: ${rem(6)};
    margin-left: ${rem(-6)};
    margin-top: ${rem(-8)};
  }

  @media all and (max-width: 767px) {
    right: -5px;
    left: auto;
    transform: none !important;

    &:after {
      left: 80%;
    }
  }
`

const Control = styled.div`
  transition: color ${(props) => props.theme.transition.base};
  cursor: pointer;

  svg {
    opacity: 0.24;
  }

  &:active,
  &:hover {
    color: ${(props) => props.theme.colors.white};

    svg {
      opacity: 0.48;
    }

    ~ ${Menu} {
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, 0) scale(1) rotate(0);
    }
  }
`

const Wrapper = styled.div`
  position: relative;
  margin: 0 ${rem(5)};

  &:hover ${Control} {
    color: ${(props) => props.theme.colors.white};
  }

  @media all and (max-width: 767px) {
    margin: 0 0 0 8px;
  }
`

const Inner = styled.ul`
  list-style: none;
  margin: 0;
  padding: ${rem(8)};
  box-shadow: 0 3px 12px 0 rgba(83, 86, 92, 0.1), 0 2px 3px 0 rgba(83, 86, 92, 0.2);
  background-color: ${(props) => props.theme.colors.white};
  text-align: center;

  li {
    display: block;
  }

  a {
    display: block;
    font-size: ${rem(10)};
    padding: ${rem(8)} ${rem(15)};
    color: ${(props) => props.theme.colors.dark} !important;
    font-weight: ${(props) => props.theme.fontWeight.bold} !important;

    &:hover {
      background-color: #e7e7e7;
    }
  }
`

export default Dropdown
