import ReactPlayer from "react-player/youtube"

const ReactPlayers  = () => {
  return (
    <div className="react-player">
        <div>
            <ReactPlayer controls light={false} width={'100%'} url='https://www.youtube.com/watch?v=z2XS_RryJGk' />
            <p>THE LAST OF US 2 PS5 Gameplay 4K</p>
        </div>
        <div>
            <ReactPlayer controls light={false} width={'100%'} url='https://www.youtube.com/watch?v=Shx25VagEKU' />
            <p>Call of Duty: Modern Warfare</p>
        </div>
        <div>
            <ReactPlayer controls light={false} width={'100%'} url='https://www.youtube.com/watch?v=sF-1cVKf6V0' />
            <p>Rebuilding Bugatti Chiron - Forza Horizon 5</p>
        </div>
    </div>
  )
}

export default ReactPlayers