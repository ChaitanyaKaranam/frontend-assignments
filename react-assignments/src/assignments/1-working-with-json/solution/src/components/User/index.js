function User(props) {
    const { name, username, email, website } = props;
    return (
        <div>
            <h3>{name}</h3>
            <span>{username}, </span>
            <span>{email}, </span>
            <span>{website}, </span>
            <hr />
        </div>
    );
}

export default User;
