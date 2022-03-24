import React from 'react';
import renderer from 'react-test-renderer';

import { Hello } from '@components/Hello/Hello';
import Onboard from '@views/onboard';
import { render, screen } from '@testing-library/react';

describe('Hello component', () => {
  test('should render component properly', () => {
    render(
      <Onboard />
    )
    expect(screen.getByTestId('highlight')).not.toBeNull()
  });
  test('should render forms', () => {
    render(
      <Onboard />
    )
    expect(screen.getByTestId('forms-wrapper')).not.toBeNull()
  });
});
