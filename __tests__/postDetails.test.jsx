import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import PostDetails from '../src/components/postDetails'
 
const fakeData={
  title:"this is a test"
}
describe('Post Details', () => {
  it('should find the title', () => {
    render(
        <PostDetails post={fakeData} />
    )
 
    const title = screen.getByText(fakeData.title)
 
    expect(title).toBeInTheDocument()
  })
})