# Minimal Coverage 

[![Greenkeeper badge](https://badges.greenkeeper.io/jankapunkt/github-min-coverage.svg)](https://greenkeeper.io/)

This action is a lightweight coverage checker with no dependencies to third party services
and no token required.

It's sole purpose is to check the current coverage against a given threshold and fails, 
if the threshold is not exceeded (less than).

It currently works only using the [json summary reporter](https://istanbul.js.org/docs/advanced/alternative-reporters/#json-summary).
A future implementation will definitely include a pure `lcov` check.

## Inputs

### `path`

**Required** The path to your coverage file.

### `min`

**Required** The minimal threshold of required coverage

## Outputs

### `message`

On success, a short message with the current overall coverage is returned.


## Example usage

```yaml
uses: actions/minimal-coverage@v1
with:
  path: 'path/to/coverage/jsonSummary.json'
  min: 85
```
