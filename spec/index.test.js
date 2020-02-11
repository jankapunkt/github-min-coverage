/* global test expect */
const getOverallPercent = require('../lib/getOverallPercent')
const checkMinCoverage = require('../lib/checkMinCoverage')

const exampleData = {
  'imports/api/A.js': {
    lines: { total: 68, covered: 47, skipped: 0, pct: 69.12 },
    functions: { total: 7, covered: 5, skipped: 0, pct: 71.43 },
    statements: { total: 71, covered: 49, skipped: 0, pct: 69.01 },
    branches: { total: 40, covered: 18, skipped: 0, pct: 45 }
  },
  'imports/api/B.js': {
    lines: { total: 28, covered: 22, skipped: 0, pct: 78.57 },
    functions: { total: 9, covered: 7, skipped: 0, pct: 77.78 },
    statements: { total: 34, covered: 24, skipped: 0, pct: 70.59 },
    branches: { total: 30, covered: 19, skipped: 0, pct: 63.33 }
  }
}

test(getOverallPercent.name, () => {
  const overallPercent = getOverallPercent(exampleData)
  const expectedPercent = 100 * (191 / 287)
  expect(overallPercent).toEqual(expectedPercent)
})

test(checkMinCoverage.name, (done) => {
  const filePath = 'spec/.coverage/example_summary.json'
  const threshold = 64

  checkMinCoverage(filePath, threshold, (err, res) => {
    if (err) return done(err)
    expect(res.key).toEqual('message')
    expect(res.value.indexOf('Coverage passed')).toBeGreaterThan(-1)
    done()
  })
})
