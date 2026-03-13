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
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
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
    <table>
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='all' value={props.good + props.neutral + props.bad} />
      <StatisticLine text='average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad || 1)} />
      <StatisticLine text='positive' value={props.good / (props.good + props.neutral + props.bad || 1) * 100 + ' %'} />
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

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 const [selected, setSelected] = useState(0)
const goodClick = () => {
  setGood(good + 1)
}
const neutralClick = () => {
  setNeutral(neutral + 1)
}
const badClick = () => {
  setBad(bad + 1)
}

const randomString = () => {
  const randomIndex = Math.floor(Math.random() * anecdotes.length)
  setSelected(randomIndex)

}

 const initialVotes = new Array(anecdotes.length).fill(0) ;
//  console.log(initialVotes)
  const [votes, setVotes] = useState(initialVotes)

  const handleVote = () => {
    const newVotes = [...votes]
    console.log(anecdotes)
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const mostVotedIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
  <Header />
  <Button handleClick={goodClick} text='good' />
  <Button handleClick={neutralClick} text='neutral' />
  <Button handleClick={badClick} text='bad' />

  <Content />
  <Statistics good={good} neutral={neutral} bad={bad} />

  <h1>Anecdotes of the Day</h1>
  <p>{anecdotes[selected]}</p>
  <p>has {votes[selected]} votes</p>

  <button onClick={handleVote}>vote</button>
  <button onClick={randomString}>next anecdote</button>

  <h1>Anecdotes with most votes</h1>

  {votes[mostVotedIndex] === 0 ? (
    <p>No votes yet</p>
  ) : (
    <div>
      <p>{anecdotes[mostVotedIndex]}</p>
      <p>has {votes[mostVotedIndex]} votes</p>
    </div>
  )}
</div>
  )
  
}

export default App