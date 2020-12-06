import { renderHook } from '@testing-library/react-hooks';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Tests for custome hook, useFetchGifs', () => {
    test('should return initial state', async () => {
        let { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Naruto')); // From external library to test hooks, hooks always have to be inside functional components to be tested.
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('should return a non empty array of imgs and loading = false', async () => {
        let { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Naruto'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });

});