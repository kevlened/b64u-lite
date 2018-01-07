const assert = require('assert')
const b64u = require('.')

assert.equal(b64u.toBase64Url('hi there'), 'aGkgdGhlcmU')
assert.equal(b64u.toBase64Url('hi there', true), 'aGkgdGhlcmU=')
assert.equal(b64u.fromBase64Url('aGkgdGhlcmU='), 'hi there')
assert.equal(b64u.fromBase64Url('aGkgdGhlcmU'), 'hi there')

console.log(`✅ Success!`)
