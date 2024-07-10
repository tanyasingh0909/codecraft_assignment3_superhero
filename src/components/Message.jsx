const Message = ({ loading, error }) => {

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1 style={{ color: "red" }}>Hero not found!</h1>
    }

    return null

}

export default Message