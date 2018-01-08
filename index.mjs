import { atob, btoa, toBase64, fromBase64 } from 'b64-lite'

export function toBinaryString(b64u) {
  return atob(b64u
    .replace(/-/g, '+')
    .replace(/_/g, '/'))
}

export function fromBinaryString(binaryString, padding) {
  return btoa(binaryString)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, padding ? '=' : '')
}

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
