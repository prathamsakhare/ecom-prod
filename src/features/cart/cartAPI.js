export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    // TODO : on server, it will only return relevant information (not password)
    resolve({ data });
  });
}

export function fetchItemsByUserId(userId){
  return new Promise(async (resolve) => {
    // TODO : we will not hardcode server url here
    const response = await fetch('http://localhost:8080/cart?user=' + userId);
    const data = await response.json();
    resolve(data)
  })
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart"+update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    // TODO : on server, it will only return relevant information (not password)
    resolve({ data });
  });
}
