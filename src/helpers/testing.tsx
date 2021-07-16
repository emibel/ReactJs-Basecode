import React, { ReactNode } from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { Queries } from '@testing-library/dom';

import configureStore from '../stateManagement/store/configureStore';

const store = configureStore() as Store;

const Wrapper = ({ children }: { children?: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

function renderWithStore(ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult;
function renderWithStore<Q extends Queries>(ui: React.ReactElement, options: RenderOptions<Q>): RenderResult<Q>;
function renderWithStore<Q extends Queries>(
  ui: React.ReactElement,
  options?: RenderOptions<Q> | Omit<RenderOptions, 'queries'>,
): RenderResult<Q> | RenderResult {
  return render<Q>(ui, { wrapper: options?.wrapper ?? Wrapper, ...options });
}

export * from '@testing-library/react';

export { renderWithStore };
