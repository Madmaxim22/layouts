function IconSwitch({ icon, onSwitch }) {
    return (
        <button className="icon-switch" onClick={onSwitch}>
            <span className="material-icon">{icon}</span>
        </button>
    )
}

export default IconSwitch;