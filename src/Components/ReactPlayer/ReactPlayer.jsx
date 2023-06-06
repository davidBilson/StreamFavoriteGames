
import Games from "../Games/Games"
import ReactLesson from "../ReactLesson/ReactLesson"

const ReactPlayers  = () => {
  return (
    <section className="library">
      <h2>Games</h2>
      <Games />
      <h2>NODEJS CODEVOLUTION</h2>
      <ReactLesson />
    </section>
  )
}

export default ReactPlayers