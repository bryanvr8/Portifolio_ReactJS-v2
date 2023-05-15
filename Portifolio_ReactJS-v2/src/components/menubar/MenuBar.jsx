import './MenuBar.css'

function MenuBar() {
    return (
        <div className='menubar'>
            <header></header>
            <nav>
                <div className="menu">
                    <h1>Porti<span>folio</span></h1>
                    <div className='search'>
                        <input type='text' placeholder='Search'/>
                        <button type='submit'>Search</button>
                    </div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/github">GitHub</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/aboutme">About me</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default MenuBar;