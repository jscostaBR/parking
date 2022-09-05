import React from 'react'
import { Tabs } from '.'
import renderer from 'react-test-renderer'

const tabList = [
  {
    tabName: 'TestComponent0',
    isActive: true,
    component: <div>TestComponent0</div>,
  },
  {
    tabName: 'TestComponent1',
    isActive: false,
    component: <div>TestComponent1</div>
  }
]

describe('render Tabs', () => {
  it('render Tabs with data', () => {
    const tree = renderer.create(<Tabs dependencies={{tabList}}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
