import React from 'react'
import ReactDOM from 'react-dom'
import Button from './../Button'

import {render, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' 

afterEach(cleanup)
it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button></Button>, div)
})

it('renders button correctly', () => {
     const { getByTestId } = render(<Button value="Done"/>)
     expect(getByTestId('btn')).toHaveTextContent("Done")
})

it('renders button correctly', () => {
     const { getByTestId } = render(<Button value="No Redaction Needed" />)
     expect(getByTestId('btn')).toHaveTextContent("No Redaction Needed")
})

it('renders button correctly', () => {
     const { getByTestId }  = render(<Button value="Redact"/>)
     expect(getByTestId('btn')).toHaveTextContent("Redact")
})