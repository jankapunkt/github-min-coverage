module.exports = function getOverallPercent (jsonSummary) {
  let values = 0
  let totals = 0

  const parseValues = entry => {
    if (!entry) return
    const value = parseInt(entry.covered, 10)
    const total = parseInt(entry.total, 10)

    if (!isNaN(value)) values += value
    if (!isNaN(total)) totals += total
  }

  Object.values(jsonSummary).forEach(fileCoverage => {
    const { lines, functions, statements, branches } = fileCoverage
    parseValues(lines)
    parseValues(functions)
    parseValues(branches)
    parseValues(statements)
  })

  return 100 * (values / totals)
}
