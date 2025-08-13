import ThemeChanger from "./ThemeChanger"

export default function Navbar()
{
    return(
        
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn btn-secondary drawer-button">Click me</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">Jahan Zaib</a>
            </div>
            <div className="navbar-end ">
                <ThemeChanger />
            </div>
        </div>       
    )
}