async function fetchUser(id: String) {
    try {
        return await findUser(id);
    } catch (err) {
        console.log(console.error());

    }
}

function findUser(id: String) {
    return id;
}