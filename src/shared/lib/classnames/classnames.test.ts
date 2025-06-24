import { classnames } from './classnames';

describe('classnames', () => {
  test('only one string', () => {
    expect(classnames('container')).toBe('container');
  });

  test('only string', () => {
    expect(classnames('container', 'bg-primary')).toBe('container bg-primary');
  });

  test('only one record', () => {
    expect(classnames({ container: true })).toBe('container');
  });

  test('only records', () => {
    expect(classnames({ container: true, 'bg-primary': false })).toBe(
      'container',
    );
  });

  test('string and record', () => {
    expect(classnames('container', { 'bg-primary': true })).toBe(
      'container bg-primary',
    );
  });
});
