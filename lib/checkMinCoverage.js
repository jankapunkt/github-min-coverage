const fs = require('fs')
const path = require('path')
const process = require('process')
const getOverallPercent = require('./getOverallPercent')

module.exports = function checkMinCoverage (summaryFilePath, threshold, callback) {
  const cwdPath = process.cwd()
  const coverageFilePath = path.resolve(cwdPath, summaryFilePath)
  const onFileRead = (readFileError, data) => {
    if (readFileError) return callback(readFileError)

    try {
      const summary = JSON.parse(data)
      const overallPercent = getOverallPercent(summary)
      if (overallPercent < threshold) {
        return callback(new Error(`Expected min. ${threshold}% coverage, got ${overallPercent}`))
      }

      callback(undefined, { key: 'message', value: `Coverage passed: ${overallPercent}% >= ${threshold}%` })
    } catch (processingError) {
      return callback(processingError)
    }
  }

  fs.readFile(coverageFilePath, 'UTF-8', onFileRead)
}
