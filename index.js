window.onload=()=>{
    const getProduct =()=>{
        fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzA3NzQ5OTFlYjc2ZDAwMTUxNTAxODkiLCJpYXQiOjE2NjE0MzI5ODYsImV4cCI6MTY2MjY0MjU4Nn0.-tfZ460SQ5hyaKIEli4FEMIwRW6WBkAscfGMNqo5utY"
}
})
        .then(response=>response.json())
        .then(data=> console.log(data))
    }

    getProduct()
}