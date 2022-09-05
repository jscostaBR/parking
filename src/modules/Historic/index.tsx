import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import axios from 'axios'
import { ListItem } from './components/ListItem'
import ArrowLeft from '../../assets/images/arrow-left.svg'
import { useNavigate } from 'react-router-dom'
import { Menu } from '../../components/Menu'
import { HistoricListProps, HistoricProps } from './types'

export const Historic = ({ plate }: HistoricProps): JSX.Element => {
  const [historicList, setHistoricList] = useState<HistoricListProps[]>()
  const [completeHistoricItem, setCompleteHistoricItem] =
    useState<HistoricListProps>({
      time: '',
      paid: false,
      left: false,
      plate: '',
      reservation: '',
    })
  const navigate = useNavigate()
  const [goToFullHistory, setGoToFullHistory] = useState(false)

  useEffect(() => {
    axios
      .get(`/parking/${plate}`, {
        baseURL: 'https://parking-lot-to-pfz.herokuapp.com',
      })
      .then((response) => {
        if (response.status === 200 && response.data.length > 0) {
          setHistoricList(response.data.reverse())
        }
        console.log(response)
      })
      .catch((err) => console.log(err))
  }, [plate])

  const handleHistoric = (data: HistoricListProps): void => {
    setCompleteHistoricItem(data)
  }

  const handleGoToFullHistoric = (): void => {
    setGoToFullHistory(!goToFullHistory)
  }

  return (
    <>
      <Menu />
      <Container>
        {!goToFullHistory && (
          <section>
            <div className="header">
              <img src={ArrowLeft} onClick={() => navigate('/')} />
              Placa {plate.toUpperCase()}
            </div>
            {historicList?.map((list, index) => {
              return (
                <ListItem
                  payment={list.paid}
                  time={list.time}
                  key={`${list.reservation}-${index}`}
                  onClick={() => {
                    handleHistoric(list)
                    handleGoToFullHistoric()
                  }}
                />
              )
            })}
          </section>
        )}
        {goToFullHistory && (
          <section>
            <div className="header">
              <img src={ArrowLeft} onClick={handleGoToFullHistoric} />
            </div>
            <div className="data-container">
              <div>
                <p className="title">Placa</p>
                <strong className="plate">{completeHistoricItem?.plate}</strong>
              </div>
              <div>
                <p className="title">Status</p>
                <strong className="status">
                  {completeHistoricItem?.left ? '—' : 'Estacionado'}
                </strong>
              </div>
              <div>
                <p className="title">Status</p>
                <strong className="time">{completeHistoricItem?.time}</strong>
              </div>
              <div>
                <p className="title">Pagamento</p>
                <strong className="payment">
                  {completeHistoricItem?.paid ? 'Pago' : '—'}
                </strong>
              </div>
            </div>
          </section>
        )}
      </Container>
    </>
  )
}
