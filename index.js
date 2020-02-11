/* global require */
const core = require('@actions/core')
const checkMinCoverage = require('./lib/checkMinCoverage')

// ======================== //
// START RUNNING THE ACTION //
// ======================== //

const path = core.getInput('path')
const threshold = core.getInput('min')

checkMinCoverage(path, threshold, (err, res) => {
  if (err) core.setFailed(err.message)
  if (res) {
    const { key, value } = res
    core.setOutput(key, value)
  }
})
