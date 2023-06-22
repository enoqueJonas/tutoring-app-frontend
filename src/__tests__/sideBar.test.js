import '../matchMedia';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import SideBar from '../components/side-nav/sideBar';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('SideNav', () => {
  test('renders the Navigation menu', () => {
    useDispatch.mockReturnValue(jest.fn());

    const { navContainer } = render(
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>,
    );
    const logoText = screen.getByText('Tutoring');
    const homeLink = screen.getByText('Home');
    const reservationsLink = screen.getByText('Reservations');
    const myReservationsLink = screen.getByText('My Reservations');
    const addClassLink = screen.getByText('Add Class');
    const deleteClasseLink = screen.getByText('Delete Class');

    expect(logoText).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(reservationsLink).toBeInTheDocument();
    expect(myReservationsLink).toBeInTheDocument();
    expect(addClassLink).toBeInTheDocument();
    expect(deleteClasseLink).toBeInTheDocument();
    expect(navContainer).toMatchSnapshot();
  });
});
