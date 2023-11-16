import { Routes, Route, Link } from 'react-router-dom';
import { ReactComponent as XMarkIcon } from '../../icons/xmark-solid.svg'
import s from './Modal.module.css';
import FormElem from '../FormElem/FormElem';
function Modal({active, setActive}) {
  return (
    <div className={`${s.modal}  ${active && s.active}`}>
        <div className={`${s.modal_content}  ${active && s.active}`}>        
            {/* <button onClick={() => setActive(false)}>X</button> */}
            <XMarkIcon onClick={() => setActive(false)} className={s.xmark_icon}/>
            <Routes>
                <Route path='/login'
                 element={<FormElem title='AUTHORIZE'
                 button={{submit:'auth', redirect: 'register'}}
                 link={'/registration'}
                 type={'login'}
                 input={{email: 'email', password: 'password'}}
                 infoText='Your data here:'
                 />}/>
            <Route path='/registration'
                 element={<FormElem title='REGISTER'
                 button={{submit:'auth', redirect: 'auth'}}
                 link={'/login'}
                 type={'reg'}
                 input={{email: 'email', password: 'password', secondPassword: 'repeat password'}}
                 infoText= 'You should accept cookies to register here'
                 />}/>
            <Route path='/reset'
                 element={<FormElem title='RESET PASSWORD'
                 button={{submit:'auth', redirect: 'auth'}}
                 link={'/login'}
                 type={'reset'}
                 input={{email: 'email'
                 }}
                 infoText= 'link will be acceptable for 24h'
                 />}/>
            </Routes>
        </div>
    </div>
  );
}

export default Modal;
