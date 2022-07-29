import { waitFor } from '@testing-library/react'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

export async function ariaLabelInTheDocument(text: string): Promise<void> {
  const re = new RegExp(text)
  await waitFor(() => {
    expect(screen.getByLabelText(re)).toBeInTheDocument()
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

export function typeInInputByAriaLabel(
  arialLabel: string,
  value: string
): Promise<void> {
  return userEvent.type(screen.getByLabelText(arialLabel), value)
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
