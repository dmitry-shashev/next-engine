import React from 'react'
import { render, RenderResult, waitFor } from '@testing-library/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from 'react'
import { Provider } from 'react-redux'
import Layout from '@components/composite/layouts/Layout'
import EMPTY_PAGE_META from '@lib/constants/empty-page-meta'
import { AppStore, store } from '@store/store'
import ObjHelper from '@lib/helpers/obj.helper'
import RequestService from '@lib/services/request.service'
import { getTestProductsList } from './test-data'
import { PayloadAction } from '@reduxjs/toolkit'
import { requestSlice } from '@store/reducers/requestSlice'
import { errorSlice } from '@store/reducers/errorSlice'
import { put } from '@redux-saga/core/effects'

jest.mock('@lib/services/request.service')

function mockServices() {
  // @ts-ignore
  RequestService.getAllProducts.mockImplementation(async () =>
    getTestProductsList()
  )
}

export async function renderWithProviders(
  component: ReactElement,
  waitForText?: string
): Promise<RenderResult & { store: AppStore }> {
  mockServices()
  const newStore = ObjHelper.cloneDeep(store)
  const result = render(
    <Provider store={newStore}>
      <Layout pageMeta={EMPTY_PAGE_META}>{component}</Layout>
    </Provider>
  )
  if (waitForText) {
    await screen.findByText(waitForText)
  }
  return {
    ...result,
    store: newStore,
  }
}

export async function textNotInTheDocument(text: string): Promise<void> {
  const re = new RegExp(text)
  const arr = screen.queryAllByText(re)
  await waitFor(() => {
    expect(arr.length).toBe(0)
  })
}

export async function textInTheDocument(text: string): Promise<void> {
  const re = new RegExp(text)
  await waitFor(() => {
    expect(screen.getByText(re)).toBeInTheDocument()
  })
}

export async function ariaLabelInTheDocument(
  text: string,
  amount = 1
): Promise<void> {
  const re = new RegExp(text)
  await waitFor(() => {
    const elems = screen.getAllByLabelText(re)
    elems.forEach((elem) => {
      expect(elem).toBeInTheDocument()
    })
    expect(elems).toHaveLength(amount)
  })
}

export async function ariaLabelNotInTheDocument(text: string): Promise<void> {
  const re = new RegExp(text)
  const arr = screen.queryAllByLabelText(re)
  await waitFor(() => {
    expect(arr.length).toBe(0)
  })
}

export async function ariaLabelContainText(
  ariaLabel: string,
  text: string | number
): Promise<void> {
  await waitFor(() => {
    expect(screen.getByLabelText(ariaLabel)).toHaveTextContent(String(text))
  })
}

export async function linkIsVisible(
  text: string,
  link: string,
  classNames: Array<string> = []
): Promise<void> {
  const linkElem = screen.getByRole('link', { name: text })
  await waitFor(() => {
    expect(linkElem).toHaveAttribute('href', link)
    expect(linkElem).toBeVisible()
    if (classNames.length > 0) {
      expect(linkElem).toHaveClass(...classNames)
    }
  })
}

export async function linkInTheDocument(
  ariaLabel: string,
  link: string,
  classNames: Array<string> = []
): Promise<void> {
  const linkElem = screen.getByLabelText(ariaLabel)
  await waitFor(() => {
    expect(linkElem).toHaveAttribute('href', link)
    if (classNames.length > 0) {
      expect(linkElem).toHaveClass(...classNames)
    }
  })
}

export async function typeInInputByAriaLabel(
  arialLabel: string,
  value: string
): Promise<void> {
  const elem = screen.getByLabelText(arialLabel)
  await userEvent.clear(elem)
  if (value) {
    return userEvent.type(elem, value)
  }
}

export function clickByAriaLabel(
  ariaLabel: string,
  position = 0
): Promise<void> {
  const elements = screen.getAllByLabelText(ariaLabel)
  if (!elements[position]) {
    throw new Error('Click by aria label selector is wrong')
  }
  return userEvent.click(elements[position]!)
}

export function clickByRole(roleName: string, position = 0): Promise<void> {
  const elements = screen.getAllByRole(roleName)
  if (!elements[position]) {
    throw new Error('Click by role selector is wrong')
  }
  return userEvent.click(elements[position]!)
}

export function clickByTestId(testId: string): Promise<void> {
  return userEvent.click(screen.getByTestId(testId))
}

export function clickByText(text: string): Promise<void> {
  return userEvent.click(screen.getByText(text))
}

export async function nextPaginationPage(): Promise<void> {
  await clickByAriaLabel('Go to next page')
}

export async function prevPaginationPage(): Promise<void> {
  await clickByAriaLabel('Go to previous page')
}

export function testSimpleRequest<T>(
  responseData: T,
  action: PayloadAction,
  sagaName: (a: PayloadAction) => Generator,
  checkRequest: (requestGenerator: Generator) => void,
  checkResponse: (responseGenerator: Generator) => void
) {
  const { clearError } = errorSlice.actions
  const { startRequest, stopRequest } = requestSlice.actions
  const g = sagaName(action)

  const simpleGenerator = g.next().value as Generator
  expect(simpleGenerator.next().value).toEqual(put(clearError(action.type)))
  expect(simpleGenerator.next().value).toEqual(put(startRequest(action.type)))

  // request
  const requestGenerator = simpleGenerator.next().value
  checkRequest(requestGenerator)

  // response
  const responseGenerator = simpleGenerator.next(responseData).value
  checkResponse(responseGenerator)

  expect(simpleGenerator.next().value).toEqual(put(stopRequest(action.type)))
}
