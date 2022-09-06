import React, { useState } from 'react'
import { Container, MenuOffCanvas } from './styles'
import Logo from '../../assets/images/logo-short-white.svg'
import Close from '../../assets/images/close.svg'
import Hamburger from '../../assets/images/menu.svg'
import { useWindowSize } from 'usehooks-ts'
import { getMenuShiftedRight } from './functions'

export const Menu = (): any => {
  const [hamburguer, setHamburguer] = useState(false)
  const { width } = useWindowSize()
  const { shiftedRight } = getMenuShiftedRight(width)

  return (
    <>
      <Container>
        <img src={Logo} alt="" />
        <img
          className="hamburger"
          src={Hamburger}
          onClick={() => setHamburguer(true)}
          alt=""
        />
      </Container>
      <MenuOffCanvas isOpen={hamburguer} shiftedRight={shiftedRight}>
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
      </MenuOffCanvas>
    </>
  )
}
