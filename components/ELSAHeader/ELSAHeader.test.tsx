import { render, screen } from '@/test-utils';
import { ELSAHeader } from './ELSAHeader';

describe('ELSAHeader component', () => {
  it('renders the link with the correct href and text', () => {
    render(<ELSAHeader />);
    const link = screen.getByText('Conoce ELSA');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://www.elsa.la/');
  });
});
