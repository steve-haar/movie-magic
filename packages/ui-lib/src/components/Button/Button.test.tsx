import { render } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render correct colors', () => {
    const { asFragment } = render(
      <div>
        <Button color="default">Submit</Button>
        <Button color="primary">Submit</Button>
        <Button color="secondary">Submit</Button>
      </div>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should allow to add a class using className prop', () => {
    const { asFragment } = render(<Button className="ml-2">Submit</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
