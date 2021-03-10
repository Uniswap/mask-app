import React from "react"
import styled from "styled-components"
import { rem, rgba } from "polished"

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

const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  padding-top: ${rem(8)};
  transform: translate(-50%, 0);
  transition: all ${(props) => props.theme.transition.base};
  color: ${(props) => props.theme.colors.gray};
  font-weight: ${(props) => props.theme.fontWeight.semibold};

  &:hover {
    opacity: 1;
    visibility: visible;
  }

  &:after {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: ${(props) => props.theme.colors.primary};
    border-width: ${rem(6)};
    margin-left: ${rem(-6)};
    margin-bottom: ${rem(-8)};
  }

  @media all and (max-width: 767px) {
    right: -5px;
    left: auto;
    transform: none;

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
      opacity: 1;

      path {
        fill: ${(props) => props.theme.colors.primary};
      }
    }

    ~ ${Menu} {
      opacity: 1;
      visibility: visible;
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
  padding: 0;
  background-color: ${(props) => props.theme.colors.primary};

  li {
    display: block;
  }

  a {
    display: block;
    padding: ${rem(15)} ${rem(20)};
    color: ${(props) => props.theme.colors.white} !important;

    &:hover {
      background-color: ${rgba("#000", 0.08)};
    }
  }
`

const Dropdown: React.FC<DropdownProps> = ({ title, data, ...props }: DropdownProps) => {
  return (
    <Wrapper {...props}>
      <Control>{title}</Control>
      <Menu>
        <Inner>
          {data.map((meta: any) => (
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

export default Dropdown
