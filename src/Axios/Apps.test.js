import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, wait, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AxiosMockTest from './AxiosHooksMock'

const server = setupServer(
  rest.get('/greeting', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'Student Details Fetched Successfully Open' }))
  })
)

beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())

test('loads and displays greeting', async () => {
  render(<AxiosMockTest  />)
  fireEvent.click(screen.getByText('Load Student Details'))
  await wait(() => screen.getByRole('heading'))
  expect(screen.getByRole('heading')).toHaveTextContent('Student Details Fetched Successfully Open')
  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})

test('handles server error', async () => {
  server.use(
    rest.get('/greeting', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  )
  render(<AxiosMockTest  />)
  fireEvent.click(screen.getByText('Load Student Details'))
  await wait(() => screen.getByRole('alert'))
  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch details!')
  expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
})