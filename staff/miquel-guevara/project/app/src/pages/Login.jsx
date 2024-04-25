import { logger } from '../utils'

import logic from '../logic'

import { useContext } from '../context'

function Login({ onUserLoggedIn, onRegisterClick }) {
    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        logger.debug('Login -> handleSubmit', username, password)

        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset()

                    onUserLoggedIn()
                })
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    logger.debug('Login -> render')

    return (
        <main className="flex justify-center items-center h-screen bg-[#1B1F47]">
            <div>
                
               
                <img className="w-[200px] absolute top-20" src="../../public/Logo-letras-blanco.png" alt="BAFFLE" />
                

                <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="username" className="text-white mb-1">Username</label>
                        <input id="username" className="rounded-lg px-2 py-1" />
                    </div>
    
                    <div className="flex flex-col mb-4">
                        <label htmlFor="password" className="text-white mb-1">Password</label>
                        <input type="password" id="password" className="rounded-lg px-2 py-1" />
                    </div>
    
                    <button className="bg-[#4C5D8B] hover:bg-[#6B99C3] text-white font-bold py-2 px-4 rounded mt-4" type="submit">Login</button>
                </form>
    
                </div>
                <div class="fixed bottom-8 items-center">
                   <p class="font-bold text-white">New user?<a href="" onClick={handleRegisterClick} class="text-[#F7C815] mt-2"> Sign up</a></p>
                </div>

        </main>
    );
    
}

export default Login