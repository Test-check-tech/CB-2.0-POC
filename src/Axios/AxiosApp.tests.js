// __tests__/fetch.test.js
import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, fireEvent, screen, wait } from '@testing-library/react'
import AxiosApp from './AxiosApp'
// import '@testing-library/jest-dom/extend-expect'
const server = setupServer(
    rest.get(`https://jsonplaceholder.typicode.com/todos/1`, (req, res, ctx) => {
        return res(ctx.json(greeting = 'Student Details Fetched Successfully !!')
            )
    })
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('loads and displays greeting', async () => {
    render(<AxiosApp />)
    fireEvent.click(screen.getByText('Load Student Details'))
    await expect(screen.getByRole('greeting')).toHaveTextContent('Student Details Fetched Successfully Open Console !!')
     expect(screen.getByRole('button')).toHaveAttribute('disabled')
    //  expect(screen.getByRole('button')).toHaveBeenCalledTimes(1)
})

test('handles server error', async () => {
    server.use(
        rest.get(`https://jsonplaceholder.typicode.com/todos/1`, (req, res, ctx) => {
            return res(ctx.status(500))
        })
    )
    render(<AxiosApp />);

    fireEvent.click(screen.getByText('Load Student Details'))
    await wait(() => screen.getByRole('alert'))
// console.log(screen.getByRole('button'))
//     expect(getByText('"Oops, failed to fetch details!"')).toBeInTheDocument()
    // await expect(screen.getByRole('alert')).toHaveTextContent("Oops, failed to fetch details!")

    expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
})