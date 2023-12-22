import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '../src/components/header'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '@/app/store/reducers/themeReducer'
 

describe('Header', () => {
  const store = configureStore({
    reducer: {
      theme: themeReducer,
    },
  });

  it('should find theme toggle', () => {

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
 
    const toggle = screen.getByTestId("theme-toggle-test-id")
 
    expect(toggle).toBeInTheDocument()
  })
})