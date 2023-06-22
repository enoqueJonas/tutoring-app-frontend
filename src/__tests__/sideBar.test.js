import '../matchMedia';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as reactRedux from 'react-redux';
import SideBar from '../components/side-nav/sideBar';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('SideNav', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  test('renders the Navigation menu', () => {
    useDispatch.mockReturnValue(jest.fn());

    useSelectorMock.mockReturnValue({
      // Mock the values you expect from useSelector
      user: { name: 'John Doe' },
      loggedIn: true,
    });

    render(
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
  });
});
