import { useState } from 'react'

const Header = () => {
  return <h1>Give Feedback</h1>
}

const Content = () => {
  return <h1>Statistics</h1>
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad

  if (total === 0) {
    return <p>No feedback given</p>
  }

  const average = (props.good - props.bad) / total
  const positive = (props.good / total) * 100

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={props.good} />
        <StatisticLine text="Neutral" value={props.neutral} />
        <StatisticLine text="Bad" value={props.bad} />
        <StatisticLine text="All" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={`${positive} %`} />
      </tbody>
    </table>
  )
}

const App = () => {
 const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const ramdomString =() => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
    return randomIndex
  }
const initialVotes = new Array(anecdotes.length).fill(0)
// console.log(initialVotes)
const [votes, setVotes] = useState(initialVotes)

const handleVote = () => {
  const newVotes = [...votes]
  console.log(newVotes)
  newVotes[selected] += 1
  setVotes(newVotes)
}

const maxVotes = Math.max(...votes)
const maxVotesIndex = votes.indexOf(maxVotes)

  return (
    <div>
      <Header />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Content />
      <Statistics good={good} neutral={neutral} bad={bad} />
      <h2>Anecdotes of the day</h2>
      <p>
        {anecdotes[selected]}
      </p> 
      <h1>has {votes[selected]} vote(s)</h1>
      <button onClick={handleVote}>Vote</button>
       <button onClick={ramdomString}>next anecdote</button>
            <h2>Anecdotes with most votes</h2>

      {maxVotes === 0 ? (
        <p>No votes yet</p>
      ) : (
        <div>
          <p>{anecdotes[maxVotesIndex]}</p>
          <p>has {votes[maxVotesIndex]} vote(s)</p>
        </div>
      )}

    </div>   
  )
}

export default App