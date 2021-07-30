export function collatz(n: number) {
	let steps = 0
	while (true) {
		steps++
		if (n % 2 === 0) {
			n /= 2
		} else {
			n = 3 * n + 1
		}
		if (n === 1) {
			break
		}
	}
	return steps
}

export function discoverLargestCollatz(
	rangeStart: number,
	rangeEnd: number,
): any {
	let minSteps = -1
	let maxSteps = -1
	let results: any[] = []
	for (let i = rangeStart; i < rangeEnd + 1; i++) {
		const result: number = collatz(i)
		results.push({ index: i, result })
		if (i % 10000 === 0) {
			minSteps = Math.min(...results.map((r) => r.result))
			maxSteps = Math.max(...results.map((r) => r.result))
			results = [
				{
					index: results.find((r) => r.result === minSteps).index,
					result: minSteps,
				},
				{
					index: results.find((r) => r.result === maxSteps).index,
					result: maxSteps,
				},
			]
		}
	}

	minSteps = Math.min(...results.map((r) => r.result))
	maxSteps = Math.max(...results.map((r) => r.result))
	const min = {
		number: results.find((r) => r.result === minSteps).index,
		steps: minSteps,
	}
	const max = {
		number: results.find((r) => r.result === maxSteps).index,
		steps: maxSteps,
	}
	return {
		range: [rangeStart, rangeEnd],
		min,
		max,
	}
}
