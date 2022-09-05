import * as React from 'react'
import { Historic } from '.'
import renderer from 'react-test-renderer'
import { HashRouter } from 'react-router-dom'

describe('render Historic', () => {

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    useNavigate: () => ({ url: '/' }),
  }));

  it('render correctly', () => {
    const tree = renderer.create(
      <HashRouter>
        <Historic plate="AAA-1234" />
      </HashRouter>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
