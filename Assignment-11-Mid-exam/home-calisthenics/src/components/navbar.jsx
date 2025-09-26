import { NavLink } from "react-router-dom";

export default function Navbar () {
    return (
        <nav className="navbar">
            <ul>
                <li className="navbar-home">
                    <NavLink to="/components/home">Home</NavLink>
                </li>
                <li className="navbar-calisthenicsPlanner">
                    <NavLink to="/components/calisthenicsPlanner">Workout Planner</NavLink>
                </li>
                <li className="navbar-FAQs">
                    <NavLink to="/components/FAQs">FAQs</NavLink>
                </li>
                <li className="navbar-BuildAndBurn">
                    <NavLink to="/components/BuildAndBurn">Build & Burn</NavLink>
                </li>
                <li className="navbar-nutritionAdvice">
                    <NavLink to="/components/nutritionAdvice">Nutrition Advice</NavLink>
                </li>
            </ul>
        </nav>
    );
}