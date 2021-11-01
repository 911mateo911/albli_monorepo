import { render } from '@testing-library/react';

import AlbliUi from './albli-ui';

describe('AlbliUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlbliUi />);
    expect(baseElement).toBeTruthy();
  });
});
