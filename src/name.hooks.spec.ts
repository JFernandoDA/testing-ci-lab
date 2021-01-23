import { renderHook, act } from '@testing-library/react-hooks';
import { useName } from './name.hooks';

describe('useName specs', () => {
  it('should return an object with name equals "John Doe" and setName a function when it calls it', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useName());

    // Assert
    expect(result.current.name).toEqual('John Doe');
    const anyFunction = expect.any(Function);
    expect(result.current.setName).toEqual(anyFunction);
  });

  it('should update name when it calls setName', () => {
    // Arrange
    const newName = 'updated name';

    // Act
    const { result } = renderHook(() => useName());

    act(() => {
      result.current.setName(newName);
    });

    // Assert
    expect(result.current.name).toEqual(newName);
  });
});
