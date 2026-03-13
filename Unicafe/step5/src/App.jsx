import { useState } from 'react'
const Header = () => {
  return (
    <h1>give feedback</h1>
  )
}
const Content = () => {
    return (
        <h2>statistics</h2>
    )

}

const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='all' value={props.good + props.neutral + props.bad} />
      <StatisticLine text='average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad || 1)} />
      <StatisticLine text='positive' value={props.good / (props.good + props.neutral + props.bad || 1) * 100 + ' %'} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const goodClick = () => {
  setGood(good + 1)
}
const neutralClick = () => {
  setNeutral(neutral + 1)
}
const badClick = () => {
  setBad(bad + 1)
}

  return (
    <div>
        <Header />
        <Button handleClick={goodClick} text='good' />
        <Button handleClick={neutralClick} text='neutral' />
        <Button handleClick={badClick} text='bad' />
        <Content />
        <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
  
}

export default App