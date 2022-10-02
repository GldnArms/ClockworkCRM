import React, {useState} from 'react'

export default function Login({ setOpenLogin, changeLoggedIn }) {
    const [showPassword, setShowPassword] = useState(false)

    function togglePassword(){
        setShowPassword(prevShowPassword => !prevShowPassword)
    }

    return (
        <div className='login-form-overlay'>
            <div className='login-form'>
                <header className='login-form-header'>
                    <h1 className='login-form-header-text'>Welcome</h1>
                    <button className='btn close' onClick={() => setOpenLogin(false)}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M15 1.25C7.40625 1.25 1.25 7.40625 1.25 15C1.25 22.5937 7.40625 28.75 15 28.75C22.5937 28.75 28.75 22.5937 28.75 15C28.75 7.40625 22.5937 1.25 15 1.25ZM19.6337 12.1337C19.8614 11.898 19.9874 11.5822 19.9846 11.2545C19.9817 10.9268 19.8503 10.6132 19.6185 10.3815C19.3868 10.1497 19.0732 10.0183 18.7455 10.0154C18.4178 10.0126 18.102 10.1386 17.8663 10.3663L15 13.2325L12.1337 10.3663C12.0184 10.2469 11.8805 10.1516 11.728 10.0861C11.5755 10.0206 11.4115 9.98613 11.2455 9.98469C11.0795 9.98324 10.9149 10.0149 10.7613 10.0777C10.6077 10.1406 10.4681 10.2334 10.3508 10.3508C10.2334 10.4681 10.1406 10.6077 10.0777 10.7613C10.0149 10.9149 9.98324 11.0795 9.98469 11.2455C9.98613 11.4115 10.0206 11.5755 10.0861 11.728C10.1516 11.8805 10.2469 12.0184 10.3663 12.1337L13.2325 15L10.3663 17.8663C10.2469 17.9816 10.1516 18.1195 10.0861 18.272C10.0206 18.4245 9.98613 18.5885 9.98469 18.7545C9.98324 18.9205 10.0149 19.0851 10.0777 19.2387C10.1406 19.3923 10.2334 19.5319 10.3508 19.6492C10.4681 19.7666 10.6077 19.8594 10.7613 19.9223C10.9149 19.9851 11.0795 20.0168 11.2455 20.0153C11.4115 20.0139 11.5755 19.9794 11.728 19.9139C11.8805 19.8484 12.0184 19.7531 12.1337 19.6337L15 16.7675L17.8663 19.6337C18.102 19.8614 18.4178 19.9874 18.7455 19.9846C19.0732 19.9817 19.3868 19.8503 19.6185 19.6185C19.8503 19.3868 19.9817 19.0732 19.9846 18.7455C19.9874 18.4178 19.8614 18.102 19.6337 17.8663L16.7675 15L19.6337 12.1337Z" fill="white"/>
                        </svg>
                    </button>
                </header>

                <div className='login-form-field'>
                    <label htmlFor='login-id' className='login-form-field-label'>
                        <svg className='login-form-field-label-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.579 2 2 6.579 2 12C2 17.421 6.579 22 12 22C17.421 22 22 17.421 22 12C22 6.579 17.421 2 12 2ZM12 7C13.727 7 15 8.272 15 10C15 11.728 13.727 13 12 13C10.274 13 9 11.728 9 10C9 8.272 10.274 7 12 7ZM6.894 16.772C7.791 15.452 9.287 14.572 11 14.572H13C14.714 14.572 16.209 15.452 17.106 16.772C15.828 18.14 14.015 19 12 19C9.985 19 8.172 18.14 6.894 16.772Z" fill="white"/>
                        </svg>
                        <h2 className='login-form-field-label-text'>Email</h2>
                    </label>
                    <input name='login-id' className='login-form-field-input' id='login-id'/>
                </div>

                <div className='login-form-field'>
                    <label htmlFor='login-password' className='login-form-field-label'>
                        <svg className='login-form-field-label-icon' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0C4.92486 0 0 4.92486 0 11C0 17.0751 4.92486 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92486 17.0751 0 11 0ZM10.9208 5.0354C12.4063 5.04247 13.7641 5.98976 14.3408 7.31141C14.5381 7.77174 14.6429 8.24463 14.6429 8.75758V10.0655H16.4449V16.9646H5.55505V10.0654H7.21204C7.19702 9.14131 7.17801 8.08414 7.50207 7.31137C8.13219 5.9197 9.43529 5.02832 10.9208 5.0354ZM10.8402 7.23217C10.0174 7.24948 9.47474 7.87517 9.39536 8.75754V10.0654H12.4596V8.74414C12.4218 7.90739 11.7885 7.25521 10.9207 7.23217C10.8939 7.23154 10.867 7.23154 10.8402 7.23217V7.23217Z" fill="white"/>
                        </svg>
                        <h2 className='login-form-field-label-text'>Password</h2>
                    </label>
                    <div className='password'>
                        <input name='login-password' className='login-form-field-input' id='login-password' type={showPassword ? 'text' : 'password'}/>
                        <button className='btn password-toggle-btn' onClick={togglePassword}>
                            <svg className='password-toggle-icon' width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.07393 14.3438C2.32983 8.76365 6.85008 4.40625 12.5 4.40625C18.1499 4.40625 22.6702 8.76365 22.9261 14.3438H22.3624C22.0999 9.14139 17.7647 4.96875 12.5 4.96875C7.23525 4.96875 2.90014 9.14139 2.63759 14.3438H2.07393ZM8.3125 14.8438C8.3125 12.4636 10.1199 10.6562 12.5 10.6562C14.8801 10.6562 16.6875 12.4636 16.6875 14.8438C16.6875 17.2239 14.8801 19.0312 12.5 19.0312C10.1199 19.0312 8.3125 17.2239 8.3125 14.8438ZM8.875 14.8438C8.875 16.8386 10.5051 18.4688 12.5 18.4688C14.4949 18.4688 16.125 16.8386 16.125 14.8438C16.125 12.8489 14.4949 11.2188 12.5 11.2188C10.5051 11.2188 8.875 12.8489 8.875 14.8438Z" fill="#808080" stroke="#808080"/>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Fix Error Message */}
                {/* <small className='login-error-message'>Error Message</small> */}
                
                <button className='btn login' onClick={() => changeLoggedIn(document.getElementById("login-id").value, document.getElementById("login-password").value) } >Login</button>
            </div>
        </div>

  )
}
