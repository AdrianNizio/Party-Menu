import { secondsToMinutes } from './seconds-to-minutes-pipe.pipe';

describe('secondsToMinutes', () => {
  it('create an instance', () => {
    const pipe = new secondsToMinutes();
    expect(pipe).toBeTruthy();
  });
});
