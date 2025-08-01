import * as bcrypt from 'bcrypt'

const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS!!)

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, saltRounds)
}

export const comparePassword = async (
  plainPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return bcrypt.compare(plainPassword, hashedPassword)
}
