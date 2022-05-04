import React, {useEffect} from 'react';
import './App.css';

function App() {
    useEffect(() => {
        if ('OTPCredential' in window) {
            const ac = new AbortController();
            navigator.credentials.get({
                // @ts-ignore
                otp: {transport: ['sms']},
                signal: ac.signal
            }).then(otp => {
                // @ts-ignore
                console.log({code});
                ac.abort();
            }).catch(err => {
                console.log(err);
            });
        }
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                OTP
            </header>
        </div>
    );
}

export default App;
