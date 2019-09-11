import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistic = ({ text, value, symbol = '' }) => (
  <tr>
    <th>{text}</th>
    <td>{value} {symbol}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => (
  <>
    <table>
      <Statistic text='good' value={good} />
      <Statistic text='neutral' value={neutral} />
      <Statistic text='bad' value={bad} />
      <Statistic text='all' value={good + neutral + bad} />
      <Statistic text='average' value={(good - bad) / (good + bad + neutral)} />
      <Statistic text='positive' value={good / (good + bad + neutral) * 100} symbol={'%'} />
    </table>
  </>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <h2>statistics</h2>
      {(good + neutral + bad) === 0 ? <p>No feedback given</p> : <Statistics good={good} neutral={neutral} bad={bad} />}
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)