import "../css/App.css";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
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

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="/cashier" element={<Cashier />} />
                <Route path="/cashier/meal" element={<CashierMeal />} />
                <Route path="/cashier/drink" element={<CashierDrink />} />
                <Route path="/manager" element={<Manager />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/customer/drink" element={<CustomerDrink />} />
                <Route path="/customer/meal" element={<CustomerMeal />} />
            </Route>
        )
    );

    return (
        <CurOrderContextProvider>
            <RouterProvider router={router} />
        </CurOrderContextProvider>
    );
}

export default App;
