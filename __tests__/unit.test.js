// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// matches valid phone numbers
test('isPhoneNumber: "123-456-7890" returns true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber: "(123) 456-7890" returns true', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber: "1234567890" returns false', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('isPhoneNumber: "phone123" returns false', () => {
  expect(isPhoneNumber('phone123')).toBe(false);
});

// Tests for isEmail

test('isEmail: "test@example.com" returns true', () => {
  expect(isEmail('test@example.com')).toBe(true);
});

test('isEmail: "abc123@domain.org" returns true', () => {
  expect(isEmail('abc123@domain.org')).toBe(true);
});

test('isEmail: "not-an-email" returns false', () => {
  expect(isEmail('not-an-email')).toBe(false);
});

test('isEmail: "test@.com" returns false', () => {
  expect(isEmail('test@.com')).toBe(false);
});

// Tests for isStrongPassword

test('isStrongPassword: "abc1" returns true', () => {
  expect(isStrongPassword('abc1')).toBe(true);
});

test('isStrongPassword: "A_password123" returns true', () => {
  expect(isStrongPassword('A_password123')).toBe(true);
});

test('isStrongPassword: "1abc" returns false', () => {
  expect(isStrongPassword('1abc')).toBe(false);
});

test('isStrongPassword: "ab" returns false', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

// Tests for isDate

test('isDate: "1/1/2020" returns true', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('isDate: "12/31/1999" returns true', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('isDate: "2020/12/31" returns false', () => {
  expect(isDate('2020/12/31')).toBe(false);
});

test('isDate: "12/15/20" returns false', () => {
  expect(isDate('12/15/20')).toBe(false);
});

// Tests for isHexColor

test('isHexColor: "#fff" returns true', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('isHexColor: "123abc" returns true', () => {
  expect(isHexColor('123abc')).toBe(true);
});

test('isHexColor: "xyz" returns false', () => {
  expect(isHexColor('xyz')).toBe(false);
});

test('isHexColor: "#1234" returns false', () => {
  expect(isHexColor('#1234')).toBe(false);
});