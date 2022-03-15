import 'yup'
declare module 'yup' {
  interface StringSchema {
    containsUppercase(message?: string): StringSchema
    containsLowercase(message?: string): StringSchema
    containsSpecialCharacter(message?: string): StringSchema
    containsNumber(message?: string): StringSchema
    isNumeric(message?: string): StringSchema
    isAlphabet(message?: string): StringSchema
  }
}
