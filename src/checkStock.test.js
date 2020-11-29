import { isMatch } from './checkStock'

describe('if the expected array is contained in the actual array', () => {
    it('should return true', () => {
        const actual = 'instock'
        const expected = ['instock', 'ps5']

        expect(isMatch(actual, expected)).toBe(true)
    })
})