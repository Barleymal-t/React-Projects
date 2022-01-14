function Room() {
    return <div className='col span-3-of-5'>
        <h2>Rooms/Appartments</h2>
        <div className="room">
        <div className="col span-1-of-2">
        <p>Tenant Name:</p>
        <p>Room Name:</p>
        </div>
        <div className="col span-1-of-2">
        <p>Termination Date:</p>
        <p>Status:</p>
        </div>
        </div>
        <div className="room">
        </div>
    </div>
}

export default Room;