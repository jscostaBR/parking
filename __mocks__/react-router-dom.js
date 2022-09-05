/* eslint-disable no-undef */
const originalModule = jest.requireActual('react-router-dom')
module.exports = {
  __esModule: true,
  ...originalModule,
  useLocation: jest.fn().mockReturnValue({ pathname: '/'}),
  useNavigate: jest.fn()
}

