import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '../src';

describe('Button', () => {
  describe('should be rendered correct', () => {
    test('default', () => {
      render(<Button onClick={console.log}>Click</Button>);
      const button = screen.getByText('Click');
      expect(button.classList.contains('button-primary')).toBeTruthy();
    });

    test('success', () => {
      const { container } = render(
        <Button onClick={console.log} variant="success">
          Click
        </Button>
      );
      const button = container.querySelector('button');
      expect(button!.classList.contains('button-success')).toBeTruthy();
    });

    test('disabled', () => {
      const { asFragment } = render(
        <Button onClick={console.log} isDisabled={true}>
          Click
        </Button>
      );

      expect(asFragment()).toMatchInlineSnapshot(`
        <DocumentFragment>
          <button
            class="button button-primary"
            disabled=""
          >
            Click
          </button>
        </DocumentFragment>
      `);
    });
  });

  test('should be clickable', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('should not be clickable if disabled', () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} isDisabled={true}>
        Click
      </Button>
    );
    fireEvent.click(screen.getByText('Click'));
    expect(onClick).not.toHaveBeenCalled();
  });
});
