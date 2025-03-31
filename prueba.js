try {
  const response = await fetch("https://nodemysql-its2.onrender.com/api/products");
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error al obtener productos", error);
}