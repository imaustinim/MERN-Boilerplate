export function getUser() {
    const url = "http://localhost:5000/api/users/getuser"
    const options = { 
        method: "GET",
        credentials: 'include',
    }
    fetch(url, options)
    .then((res) => res.json())
    .then((res) => {
        if (res) {
            console.log(res)
            return res
        }
    })
}


