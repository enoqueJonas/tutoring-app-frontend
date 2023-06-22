import '../matchMedia';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import ClassForm from '../components/add-class/AddClass';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('ClassForm', () => {
  test('renders the form', () => {
    useDispatch.mockReturnValue(jest.fn());

    const { formContainer } = render(<ClassForm />);

    const tutorNameInput = screen.getByLabelText('Tutor Name');
    const subjectInput = screen.getByLabelText('Subject');
    const durationInput = screen.getByLabelText('Duration');
    const imageInput = screen.getByLabelText('image');

    const submitButton = screen.getAllByText('Add Class');

    expect(tutorNameInput).toBeInTheDocument();
    expect(subjectInput).toBeInTheDocument();
    expect(durationInput).toBeInTheDocument();
    expect(imageInput).toBeInTheDocument();
    expect(submitButton.length).toBeGreaterThan(0);

    expect(formContainer).toMatchSnapshot();
  });
});
