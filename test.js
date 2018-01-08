const assert = require('assert')
const b64u = require('.')

assert.equal(b64u.fromBinaryString('hi there? '), 'aGkgdGhlcmU_IA')
assert.equal(b64u.fromBinaryString('hi there? ', true), 'aGkgdGhlcmU_IA==')
assert.equal(b64u.toBinaryString('aGkgdGhlcmU_IA'), 'hi there? ')
assert.equal(b64u.toBinaryString('aGkgdGhlcmU_IA=='), 'hi there? ')
assert.equal(b64u.toBase64Url('hi there? 你好'), 'aGkgdGhlcmU_IOS9oOWlvQ')
assert.equal(b64u.toBase64Url('hi there? 你好', true), 'aGkgdGhlcmU_IOS9oOWlvQ==')
assert.equal(b64u.fromBase64Url('aGkgdGhlcmU_IOS9oOWlvQ=='), 'hi there? 你好')
assert.equal(b64u.fromBase64Url('aGkgdGhlcmU_IOS9oOWlvQ'), 'hi there? 你好')

console.log(`✅ Success!`)
