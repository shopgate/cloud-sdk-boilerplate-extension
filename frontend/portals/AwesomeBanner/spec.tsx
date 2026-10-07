import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AwesomeBanner from './index';

describe('<AwesomeBanner />', () => {
  it('renders the banner with its texts', () => {
    render(<AwesomeBanner />);

    expect(screen.getByText('awesomeExtension.banner.title')).toBeInTheDocument();
    expect(screen.getByText('awesomeExtension.banner.text')).toBeInTheDocument();
  });

  it('disappears after it was dismissed', () => {
    const { container } = render(<AwesomeBanner />);

    fireEvent.click(screen.getByRole('button'));

    expect(container).toBeEmptyDOMElement();
  });
});
