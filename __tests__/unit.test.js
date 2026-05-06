// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber 
test('isPhoneNumber: "123-456-7890" is a valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber: "(123) 456-7890" is a valid phone number', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber: "1234567890" is not a valid phone number', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber: "phone-number" is not a valid phone number', () => {
  expect(isPhoneNumber('phone-number')).toBe(false);
});

// isEmail
test('isEmail: "user@example.com" is a valid email', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('isEmail: "hello@world.io" is a valid email', () => {
  expect(isEmail('hello@world.io')).toBe(true);
});

test('isEmail: "not-an-email" is not a valid email', () => {
  expect(isEmail('not-an-email')).toBe(false);
});

test('isEmail: "user@.com" is not a valid email', () => {
  expect(isEmail('user@.com')).toBe(false);
});

// isStrongPassword 
test('isStrongPassword: "abcd" is a valid strong password', () => {
  expect(isStrongPassword('abcd')).toBe(true);
});

test('isStrongPassword: "Password_1" is a valid strong password', () => {
  expect(isStrongPassword('Password_1')).toBe(true);
});

test('isStrongPassword: "abc" is not a valid strong password (too short)', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

test('isStrongPassword: "1abcd" is not a valid strong password (starts with a digit)', () => {
  expect(isStrongPassword('1abcd')).toBe(false);
});

// isDate 
test('isDate: "12/25/2020" is a valid date', () => {
  expect(isDate('12/25/2020')).toBe(true);
});

test('isDate: "1/1/2026" is a valid date', () => {
  expect(isDate('1/1/2026')).toBe(true);
});

test('isDate: "12-25-2020" is not a valid date', () => {
  expect(isDate('12-25-2020')).toBe(false);
});

test('isDate: "12/25/20" is not a valid date (year too short)', () => {
  expect(isDate('12/25/20')).toBe(false);
});

//  isHexColor 
test('isHexColor: "#FFFFFF" is a valid hex color', () => {
  expect(isHexColor('#FFFFFF')).toBe(true);
});

test('isHexColor: "abc" is a valid hex color (3 chars, no #)', () => {
  expect(isHexColor('abc')).toBe(true);
});

test('isHexColor: "#FFFF" is not a valid hex color (wrong length)', () => {
  expect(isHexColor('#FFFF')).toBe(false);
});

test('isHexColor: "GGGGGG" is not a valid hex color (non-hex characters)', () => {
  expect(isHexColor('GGGGGG')).toBe(false);
});
