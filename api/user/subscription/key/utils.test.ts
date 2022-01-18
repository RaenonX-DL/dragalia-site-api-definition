import {subKeysInclude} from './utils';


describe('Subscription key utils', () => {
  it('returns `true`', async () => {
    const result = subKeysInclude(
      [{type: 'const', name: 'ALL_QUEST'}],
      {type: 'const', name: 'ALL_QUEST'},
    );

    expect(result).toBeTruthy();
  });

  it('returns `false`', async () => {
    const result = subKeysInclude(
      [{type: 'const', name: 'ALL_QUEST'}],
      {type: 'const', name: 'ALL_MISC'},
    );

    expect(result).toBeFalsy();
  });

  it('returns `false` on empty list', async () => {
    const result = subKeysInclude([], {type: 'const', name: 'ALL_MISC'});

    expect(result).toBeFalsy();
  });
});
