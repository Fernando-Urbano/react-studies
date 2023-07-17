function ModeToggler() {
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode is On!</h1>
    const lightMode = <h1>Light Mode is On!</h1>

    const handleClick = () => {
        darkModeOn = !darkModeOn;
    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>
                Click    
            </button>
        </div>
    )
}

export default ModeToggler