import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
// import NavBAR from './components/NavBar/NavBar';
// import PostCard from './components/postCard/PostCard';
// import PostLists from './components/PostLists/PostLists';

test('renders learn react link', () => {
  // render(<PostLists />)
  // render(<PostCard />)
  // render(<App />);
  // render(<NavBAR />)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

