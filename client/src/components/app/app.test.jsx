import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './app.component';

it('Renders Strikes', () => {
  const wrapper = rtl.render(<App />);
  const hasStrikesText = wrapper.queryByText(/strikes/i);
  expect(hasStrikesText).toBeInTheDocument;
});

it('Renders Balls', () => {
  const wrapper = rtl.render(<App />);
  const hasBallsText = wrapper.queryByText(/balls/i);
  expect(hasBallsText).toBeInTheDocument;
});

it('Strike Button clicked with correct count', () => {
  const wrapper = rtl.render(<App />);
  const strikeButton = wrapper.getByTestId('strike-button');
  const strikeCount = wrapper.getByTestId('strike-count');
  expect(strikeCount.textContent)
    .toBe(`Strikes: 0`);
  rtl.fireEvent.click(strikeButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 1`);
  rtl.fireEvent.click(strikeButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 2`);
  rtl.fireEvent.click(strikeButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 0`);
});

it('Ball Button clicked with correct count', () => {
  const wrapper = rtl.render(<App />);
  const ballButton = wrapper.getByTestId('ball-button');
  const ballCount = wrapper.getByTestId('ball-count');
  expect(ballCount.textContent)
    .toBe(`Balls: 0`);
  rtl.fireEvent.click(ballButton);
  expect(ballCount.textContent)
    .toBe(`Balls: 1`);
  rtl.fireEvent.click(ballButton);
  expect(ballCount.textContent)
    .toBe(`Balls: 2`);
  rtl.fireEvent.click(ballButton);
  expect(ballCount.textContent)
    .toBe(`Balls: 3`);
  rtl.fireEvent.click(ballButton);
  expect(ballCount.textContent)
    .toBe(`Balls: 0`);
});

it('Foul Button clicked 10 times, strike count maxxes out at 2', () => {
  const wrapper = rtl.render(<App />);
  const foulButton = wrapper.getByTestId('foul-button');
  const strikeCount = wrapper.getByTestId('strike-count');
  expect(strikeCount.textContent)
    .toBe(`Strikes: 0`);
  rtl.fireEvent.click(foulButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 1`);
  rtl.fireEvent.click(foulButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 2`);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 2`);
});

it('With Strikes at 2, Balls at 2, resetButton sets counts to 0', () => {
  const wrapper = rtl.render(<App />);
  const resetButton = wrapper.getByTestId('reset-button');
  const ballButton = wrapper.getByTestId('ball-button');
  const ballCount = wrapper.getByTestId('ball-count');
  const strikeButton = wrapper.getByTestId('strike-button');
  const strikeCount = wrapper.getByTestId('strike-count');
  rtl.fireEvent.click(ballButton);
  rtl.fireEvent.click(strikeButton);
  rtl.fireEvent.click(ballButton);
  rtl.fireEvent.click(strikeButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 2`);
  expect(ballCount.textContent)
    .toBe(`Balls: 2`);
  rtl.fireEvent.click(resetButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 0`);
  expect(ballCount.textContent)
    .toBe(`Balls: 0`);
});