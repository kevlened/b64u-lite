import { toBase64, fromBase64 } from 'b64-lite'

export function toBase64Url(binaryString, padding) {
  return toBase64(binaryString)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, padding ? '=' : '')
}

export function fromBase64Url(b64u) {
  return fromBase64(b64u
    .replace(/-/g, '+')
    .replace(/_/g, '/'))
}
