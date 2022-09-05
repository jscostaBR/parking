import React, { Fragment, useState } from 'react'
import { Container, ButtonsTabs, Content, ButtonTab } from './styles'
import { TabsProps, ItemTabProps } from './types'

export const Tabs = ({ dependencies: { tabList } }: TabsProps): JSX.Element => {
  const [listOfTabs, setListOfTabs] = useState<ItemTabProps[]>(tabList)

  const handleActiveTab = (activeTab: string): void => {
    const activeTabs = listOfTabs.map((tabs) =>
      tabs.tabName === activeTab
        ? {
            ...tabs,
            isActive: true,
          }
        : {
            ...tabs,
            isActive: false,
          }
    )
    setListOfTabs(activeTabs)
  }
  return (
    <Container>
      <ButtonsTabs>
        {listOfTabs.map((tab) => (
          <ButtonTab
            key={tab.tabName}
            onClick={() => handleActiveTab(tab.tabName)}
            isActiveTab={tab.isActive}
          >
            {tab.tabName}
          </ButtonTab>
        ))}
      </ButtonsTabs>
      <Content>
        {listOfTabs.map(
          (content) =>
            content.isActive && (
              <Fragment key={content.tabName}>{content.component}</Fragment>
            )
        )}
      </Content>
    </Container>
  )
}
