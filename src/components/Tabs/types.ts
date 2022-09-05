export interface ItemTabProps {
  tabName: string
  isActive: boolean
  component: JSX.Element
}
export interface TabsProps {
  dependencies: {
    tabList: ItemTabProps[]
  }
}
