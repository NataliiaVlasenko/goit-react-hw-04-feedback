import { useState, useEffect } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        return setGood(good + 1);
      
      case 'neutral':
        return setNeutral(neutral + 1);

      case 'bad':
        return setBad(bad + 1);

      default:
        throw new Error(`Unsuported action type`);
    }
  };

  useEffect(() => {
    setTotal(good + bad + neutral);
  }, [good, bad, neutral]);

  const countPositiveFeedbackPercentage = () => {
    if (!total) {
      return 0;
    }
    return (good * 100) / total;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>

      {total === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={Math.round(countPositiveFeedbackPercentage())}
          ></Statistics>
        </Section>
      )}
    </Container>
  );
};
