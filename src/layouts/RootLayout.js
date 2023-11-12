import { NavLink, Outlet} from 'react-router-dom'

export default function RootLayout(){
    return(
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Shopping Lists App</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="shoppingLists">Shopping Lists</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                    <NavLink to="profile">Profile</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}