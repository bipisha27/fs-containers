import {render, screen} from '@testing-library/react'
import {expect, test} from 'vitest'
import Todo from './Todo'

test('renders todo text', () => {
  const todo = {_id: '1', text: 'Write code', done: false}
  render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)

  const element = screen.getByText('Write code')
  expect(element).toBeDefined()
})

test('shows "not done" status when todo is not done', () => {
  const todo = {_id: '1', text: 'Write code', done: false}
  render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)

  const element = screen.getByText('This todo is not done')
  expect(element).toBeDefined()
})

test('shows "done" status when todo is done', () => {
  const todo = { _id: '1', text: 'Write code', done: true }
  render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)

  const element = screen.getByText('This todo is done')
  expect(element).toBeDefined()
})