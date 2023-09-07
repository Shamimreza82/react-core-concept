export default function Person ({name = 0, age = 5, address = " null"}) {
    return (
        <div>
            <h2>Name: {name} </h2>
            <h2>Address: {age} </h2>
            <h2>Phone: {address} </h2>
        </div>
    )
}