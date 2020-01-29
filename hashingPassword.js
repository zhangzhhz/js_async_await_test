const crypto = require('crypto');
const util = require('util');

const randomBytes = util.promisify(crypto.randomBytes);

async function hashPassword(password) {
  // Hash a password for storing.
  try {
    const buf = await randomBytes(64);
    const salt = crypto.createHash('sha256').update(buf.toString('hex')).digest('hex');
    const hashedPassword = crypto.scryptSync(password, salt, 64);
    return salt + hashedPassword.toString('hex'); // prefix salt
  }
  catch (err) {
    return null;
  }
}

function comparePasswords(storedPassword, providedPassword) {
  const salt = storedPassword.substring(0, 64);
  storedPassword = storedPassword.substring(64);

  let hashedPassword = crypto.scryptSync(providedPassword, salt, 64);
  hashedPassword = hashedPassword.toString('hex');
  
  if (hashedPassword === storedPassword) {
    return true;
  }
  return false;
}

// test
(async () => {
  const passwordHashed = await hashPassword('我的密码');
  console.log(`Hashed password is [${passwordHashed}]`);
  // correct password
  console.log(comparePasswords(passwordHashed, '我的密码'));
  // incorrect password
  console.log(comparePasswords(passwordHashed, '错误的密码'));
})();
