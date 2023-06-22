import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '../pages/Home';

const mockStore = configureStore([]);

describe('Home', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      tutories: { tutories: [], tutoriesStatus: 'idle' },
    });
    component = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
  });

  test('renders the tutories gallery', () => {
    const gallery = component.getByTestId('tutories-gallery');
    expect(gallery).toBeInTheDocument();
  });

  test('clicking the left arrow button translate the gallery left', () => {
    const leftArrow = component.getByRole('button', { name: 'arrow-left' });
    fireEvent.click(leftArrow);
    expect(component.getByTestId('tutories-gallery')).toHaveStyle('transform: translate(33.33%);');
  });

  test('clicking the right arrow button translate the gallery right', () => {
    const rightArrow = component.getByRole('button', { name: 'arrow-right' });
    fireEvent.click(rightArrow);
    expect(component.getByTestId('tutories-gallery')).toHaveStyle('transform: translate(-33.33%);');
  });

  test('left arrow button is disabled if translated is 0', () => {
    const leftArrow = component.getByRole('button', { name: 'arrow-left' });
    expect(leftArrow).toBeDisabled();
  });

  test('right arrow button is disabled if the gallery has reached max scroll', () => {
    store = mockStore({
      tutories: {
        tutories: [
          { id: 0, subject: 'math' },
          { id: 1, subject: 'science' },
          { id: 2, subject: 'english' },
        ],
        tutoriesStatus: 'fulfilled',
      },
    });
    component.rerender(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    const rightArrow = component.getByRole('button', { name: 'arrow-right' });
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    fireEvent.click(rightArrow);
    expect(rightArrow).toBeDisabled();
  });
});
