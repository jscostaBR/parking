import React, { useState } from 'react'
import { Container, MenuMobile } from './styles'
import Logo from '../../assets/images/logo-short-white.svg'
import Close from '../../assets/images/close.svg'
import Hamburger from '../../assets/images/menu.svg'

export const Menu = (): any => {
  const [hamburguer, setHamburguer] = useState(false)
  return (
    <>
      <Container>
        <img src={Logo} />
        <img
          className="hamburger"
          src={Hamburger}
          onClick={() => setHamburguer(true)}
        />
      </Container>
      <MenuMobile active={hamburguer}>
        <div className="header">
          <img className="logo" src={Logo} />
          <img
            className="close"
            src={Close}
            onClick={() => setHamburguer(false)}
          />
        </div>
        <div>
          <span>Entrada</span>
          <span>Saída</span>
        </div>
      </MenuMobile>
    </>
  )
}
