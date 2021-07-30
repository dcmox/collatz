const assert = require('assert')
import { collatz, discoverLargestCollatz } from '../collatz'

describe('collatz test', () => {
	it('should detect number of steps', () => {
		expect(collatz(63728127)).toStrictEqual(949)
	})

	it('should discover min and max collatz steps given a range', () => {
		expect(discoverLargestCollatz(60000000, 63728128)).toStrictEqual({
			range: [60000000, 63728128],
			min: { number: 60817408, steps: 39 },
			max: { number: 63728127, steps: 949 },
		})
	})
})
