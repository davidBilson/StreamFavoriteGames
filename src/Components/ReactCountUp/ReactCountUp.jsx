import CountUp from 'react-countup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReactCountUp = () => {

    const startCounter = () => toast.success("Started! 💨");
    const endCounter = () => toast.info('Ended! 👏');

  return (
    <div style={{'color':"red", "fontSize":"32px"}}>
        <CountUp 
            start={0}
            end={300}
            onEnd={() => endCounter()}
            onStart={() => startCounter()}
        />
        <ToastContainer position="top-center" />
    </div>
  )
}

export default ReactCountUp