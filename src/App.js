import DarkTheme from "./DarkTheme";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {useState} from "react";
import LoginPage from "./LoginPage";

import {ToastContainer} from "react-toastify";

function App() {

    DarkTheme.setup();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <>
            <BrowserRouter>
                <Switch>

                    <Route
                        path="/login"
                        render={props => <LoginPage onLogin={setIsAuthenticated} {...props} />}
                    />

                </Switch>

                <ToastContainer
                    position="top-right"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                />
            </BrowserRouter>
        </>
    );
}

export default App;
