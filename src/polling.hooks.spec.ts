import { renderHook } from '@testing-library/react-hooks';
import { usePolling } from './polling.hooks';

describe('usePolling specs', () => {
  it('should call clearInterval when it unmounts the component', () => {
    // Arrange
    const stub = jest.spyOn(window, 'clearInterval');

    // Act
    const { unmount } = renderHook(() => usePolling());

    // Assert
    expect(stub).not.toHaveBeenCalled();
    unmount();
    expect(stub).toHaveBeenCalled();
  });

  it('should return count equals 0 when initialize the hook', () => {
    // Arrange
    // Act
    const { result } = renderHook(() => usePolling());

    // Assert
    expect(result.current.count).toEqual(0);
  });

  it('should return count equals 1 when it waits for next update', async() => {
    // Arrange
    // Act
    const { result, waitForNextUpdate } = renderHook(() => usePolling());

    await waitForNextUpdate();

    // Assert
    expect(result.current.count).toEqual(1);
  });
});
