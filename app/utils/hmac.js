function hmacWithSjcl(sjcl, privateKey, content) {
  if ((typeof sjcl !== 'object') || (typeof privateKey !== 'string') || (typeof content !== 'string')) {
    throw new Error('Invalid arguments');
  }
  const resultBits = (new sjcl.misc.hmac(privateKey, sjcl.hash.sha256)).mac(content);
  const result = sjcl.codec.hex.fromBits(resultBits);
  return result;
}

export default hmacWithSjcl;
