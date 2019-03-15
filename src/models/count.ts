import { createModel, RematchDispatch } from '@rematch/core';

export const delay = (ms: number) => new Promise((resolve: (value?: {} | PromiseLike<{}>) => void) => setTimeout(resolve, ms));

export const count = createModel({
  state: 0,
  reducers: {
    increment: (state: number) => state + 1
  },
  effects: (dispatch: RematchDispatch) => ({
    async incrementAsync(): Promise<void> {
      await delay(500);
      dispatch.count.increment();
    }
  })
});
