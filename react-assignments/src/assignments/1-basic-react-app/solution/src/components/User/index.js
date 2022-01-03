function User(props) {
    const { name, username, email, website, address } = props;
    return (
        <div>
            <h3>{name}</h3>
            <div>
                <span>{username}, </span>
                <span>{email}, </span>
                <span>{website}</span>
            </div>
            <address>
                <div>
                    <span>{address.street}, </span>
                    <span>{address.suite}, </span>
                </div>
                <div>
                    <span>{address.city}, </span>
                    <span>{address.zipcode}, </span>
                </div>
            </address>
        </div>
    );
}

export default User;
