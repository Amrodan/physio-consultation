import './verifyEmail.css'
import {useAuthValue} from '../context/AuthContext'
import {useState,useEffect} from 'react'
import {auth} from '../components/firebase'
import {useNavigate} from 'react-router-dom'
import {sendEmailVerification,} from 'firebase/auth'
function VerifyEmail() {
  const {currentUser} = useAuthValue()
  const [, setButtonDisabled] = useState(false)
  const [time, setTime] = useState(60)
  // const [timeActive, setTimeActive] = useState(false)
  
const history = useNavigate()

useEffect(() => {
  const interval = setInterval(() => {
    currentUser?.reload()
    .then(() => {
      if(currentUser?.emailVerified){
        clearInterval(interval)
        history('/Profile')
      }
    })
    .catch((err) => {
      alert(err.message)
    })
  }, 1000)
}, [history, currentUser])

  const {timeActive, setTimeActive} = useAuthValue()
  useEffect(() => {
    let interval = null
    if(timeActive && time !== 0 ){
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    }else if(time === 0){
      setTimeActive(false)
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [timeActive, time])
  const resendEmailVerification = () => {
    setButtonDisabled(true)
    sendEmailVerification(auth.currentUser)
    .then(() => {
      setButtonDisabled(false)
      setTimeActive(true)
    }).catch((err) => {
      alert(err.message)
      setButtonDisabled(false)
    })
  }
  
  return (
    <div className='center justify-center flex m-8'>
      <div className='verifyEmail'>
        <h1>Verify your Email Address</h1>
        <p>
          <strong>A Verification email has been sent to:</strong><br/>
          <span>{currentUser?.email}</span>
        </p>
        <span>Follow the instruction in the email to verify your account</span>
        <button  className="resend_btn"
  onClick={resendEmailVerification}
  disabled={timeActive}
>Resend Email {timeActive && time}</button>
      </div>
    </div>
  )
}

export default VerifyEmail
 