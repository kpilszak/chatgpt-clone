import { useState, useEffect } from 'react'

const App = () => {
  const [ value, setValue ] = useState(null)
  const [ message, setMessage ] = useState(null)

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', options)
      const data = await response.json()
      setMessage(data.choices[0].message)
    } catch (error) {
      console.error(error)
    }
  }

  console.log(message)

  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history">
          <li>BLUGH</li>
        </ul>
        <nav>
          <p>Made by Klaudia</p>
        </nav>
      </section>
      <section className="main">
        <h1>KlaudiaGPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <div id="submit" onClick={getMessages}>➢</div>
          </div>
          <p className="info">
            Chat GPT Mar 14 Version. Free Research Preview.
            Our goal is to make AI systems more natural and safe to interact with.
            Your feedback will help us improve.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
