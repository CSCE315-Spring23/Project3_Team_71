import "../css/App.css";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Cashier from "./cashier/Cashier";
import Manager from "./manager/Manager";
import Customer from "./customer/Customer";
import Menu from "./menu/Menu";
import CashierMeal from "./cashier/CashierMeal";
import Home from "./home/Home";
import { CurOrderContextProvider } from "../hooks/CurOrderContext";
import CashierDrink from "./cashier/CashierDrink";
import CustomerMeal from "./customer/CustomerMeal";
import CustomerDrink from "./customer/CustomerDrink";
import CustomerNew from "./customer/CustomerNew";
import CashierSeasonal from "./cashier/CashierSeasonal";
import { useLocalState } from "./util/useLocalStorage";
import PrivateRouteManager from "./PrivateRoute/privateManager";
import PrivateRouteCashier from "./PrivateRoute/privateCashier";
import Header from "../components/Header";
import CashierSauce from "./cashier/CashierSauce";

function App() {


    const [user, setUser] = useLocalState("", "user");

    function HandleSignOut() {
        setUser({});
        console.log(user);
        window.location.href = "/";
    }

    return (
        <div id="app">
            <Header user={user} HandleSignOut={HandleSignOut} />


            <CurOrderContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home user={user} setUser={setUser} HandleSignOut={HandleSignOut} />} />
                        <Route
                            path="/cashier"
                            element={
                                <PrivateRouteCashier>
                                    <Cashier />
                                </PrivateRouteCashier>
                            }
                        />
                        <Route path="/cashier/meal" element={<CashierMeal />} />
                        <Route
                            path="/cashier/drink"
                            element={<CashierDrink />}
                        />
                        <Route
                            path="/cashier/seasonal"
                            element={<CashierSeasonal />}
                        />
                        <Route
                            path="/cashier/sauce"
                            element={<CashierSauce />}
                        />
                        <Route
                            path="/manager"
                            element={
                                <PrivateRouteManager>
                                    <Manager />
                                </PrivateRouteManager>
                            }
                        />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/customer" element={<Customer />} />
                        <Route
                            path="/customer/drink"
                            element={<CustomerDrink />}
                        />
                        <Route
                            path="/customer/meal"
                            element={<CustomerMeal />}
                        />
                        <Route
                            path="/customer/seasonal"
                            element={<CustomerNew />}
                        />
                    </Routes>
                </BrowserRouter>
            </CurOrderContextProvider>
        </div>
    );
}

export default App;
