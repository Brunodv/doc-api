import MyContext from "./MyContext";
import { useState, useEffect } from "react";

function MyState({ children }) {

    const docs = [
      {
            index: "1",
            title: "Obtener lista de productos",
            route: "/products",
            method: "GET",
            request: `try {
  const response = await fetch("https://nodemysql-its2.onrender.com/api/products");
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error al obtener productos", error);
}`,
            response: `[
  {
    id: 1,
    title: 'Product 1',
    description: 'This is the description of Product 1',
    price: '19.99",
    photo: 'http://example.com/photo1.jpg'
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is the description of Product 2',
    price: '29.99',
    photo: 'http://example.com/photo2.jpg'
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'This is the description of Product 3',
    price: '39.99',
    photo: 'http://example.com/photo3.jpg'
}]`,
          },
          {
            index: "2",
            title: "Obtener un producto por ID",
            route: "/products/:id",
            method: "GET",
            request: ` try {
    const response = await fetch("https://nodemysql-its2.onrender.com/api/products/3");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error al obtener el producto", error);
  }`,
            response: `{
  id: 3,
  title: 'Product 3',
  description: 'This is the description for Product 3',
  price: '39.99',
  photo: 'http://example.com/photo3.jpg'
}`,
          },
          {
            index: "3",
            title: "Crear un nuevo producto",
            route: "/products",
            method: "POST",
            request: `try {
  const response = await fetch("https://nodemysql-its2.onrender.com/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "id": 70,
      "title": "Product 70",
      "description": "This is the description for Product 70",
      "price": "19.99",
      "photo": "http://example.com/photo1.jpg"
    })
  });
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error al crear el producto", error);
}`,
            response: `{
  id: 18,
  title: 'Product 70',
  description: 'This is the description for Product 70',
  price: '19.99',
  photo: 'http://example.com/photo1.jpg'
}`,
          },
          {
            index: "4",
            title: "Actualizar un producto",
            route: "/products/:id",
            method: "PATCH",
            request: `try {
  const response = await fetch("https://nodemysql-its2.onrender.com/api/products/18", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Producto Actualizado", price: 120.0 })
  });
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error al actualizar el producto", error);
}`,
            response: `{ message: "Product updated successfully" }`,
          },
          {
            index: "5",
            title: "Eliminar un producto",
            route: "/products/:id",
            method: "DELETE",
            request: `try {
  const response = await fetch("https://nodemysql-its2.onrender.com/api/products/18", {
    method: "DELETE"
  });
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error al eliminar el producto", error);
}`,
            response: `{ message: 'Product deleted successfully' }`,
          },
        {
          index: "6",
          title: "Obtener lista de clientes",
          route: "/clients",
          method: "GET",
          request: `try {
  const response = await fetch("https://nodemysql-its2.onrender.com/api/clients");
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error al obtener clientes", error);
}`,
          response: `[ { id: 3, name: 'BunitoElMejó', email: '', phone: '977631700' } ]`,
        },
        {
          index: "7",
          title: "Obtener un cliente por ID",
          route: "/clients/:id",
          method: "GET",
          request: `try {
  const response = await fetch("https://nodemysql-its2.onrender.com/api/clients/3");
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error al obtener el cliente", error);
}`,
          response: `{ id: 3, name: 'BunitoElMejó', email: '', phone: '977631700' }`,
        },
        {
          index: "8",
          title: "Crear un nuevo cliente",
          route: "/clients",
          method: "POST",
          request: `try {
  const response = await fetch("https://nodemysql-its2.onrender.com/api/clients", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Cliente Nuevo", email: "nuevo@email.com", phone: "0123456789" })
  });
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error al crear el cliente", error);
}`,
          response: `{
  id: 5,
  name: 'Cliente Nuevo',
  email: 'nuevo@email.com',
  phone: '0123456789'
}`,
        },
        {
          index: "9",
          title: "Actualizar un cliente",
          route: "/clients/:id",
          method: "PATCH",
          request: `try {
  const response = await fetch("https://nodemysql-its2.onrender.com/api/clients/5", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Cliente Actualizado", email: "actualizado@email.com" })
  });
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error al actualizar el cliente", error);
}`,
          response: `{
  id: 5,
  name: 'Cliente Actualizado',
  email: 'actualizado@email.com',
  phone: '0123456789'
}
`,
        },
        {
          index: "10",
          title: "Eliminar un cliente",
          route: "/clients/:id",
          method: "DELETE",
          request: `try {
  const response = await fetch("https://nodemysql-its2.onrender.com/api/clients/1", {
    method: "DELETE"
  });
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error al eliminar el cliente", error);
}`,
          response: `{ "message": "Cliente eliminado exitosamente" }`,
        },
        {
        index: "11",
        title: "Obtener lista de órdenes",
        route: "/orders",
        method: "GET",
        request: `try {
      const response = await fetch("https://nodemysql-its2.onrender.com/api/orders");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error al obtener órdenes", error);
    }`,
        response: `[
  {
    id: 1,
    client_id: 3,
    order_date: '2025-03-30T03:50:44.129Z',
    total_amount: '7777777.00',
    status: 'pending'
  },
  {
    id: 3,
    client_id: 3,
    order_date: '2025-03-30T05:02:07.935Z',
    total_amount: '7777777.00',
    status: 'pending'
  }]`
      },
      {
        index: "12",
        title: "Obtener una orden por ID",
        route: "/orders/:id",
        method: "GET",
        request: `try {
  const response = await fetch("https://nodemysql-its2.onrender.com/api/orders/1");
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error al obtener la orden", error);
}
`,
        response: `{
  id: 1,
  client_id: 3,
  order_date: '2025-03-30T03:50:44.129Z',
  total_amount: '7777777.00',
  status: 'pending'
}`
      },
      {
        index: "13",
        title: "Crear una nueva orden",
        route: "/orders",
        method: "POST",
        request: `try {
  const response = await fetch("https://nodemysql-its2.onrender.com/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          client_id: 5,
          total_amount: 150.00,
          status: "pending"
      })
  });

  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error al crear la orden", error);
}`,
        response: `{
  id: 7,
  client_id: 5,
  order_date: '2025-03-31T03:26:21.701Z',
  total_amount: '150.00',
  status: 'pending'
}`
      },
      {
        index: "14",
        title: "Actualizar una orden",
        route: "/orders/:id",
        method: "PATCH",
        request: `try {
  const response = await fetch("https://nodemysql-its2.onrender.com/api/orders/7", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          total_amount: 200.00,
          status: "completed"
      })
  });

  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error("Error al actualizar la orden", error);
}
`,
        response: `{ message: 'Order updated successfully' }`
      },
      {
        index: "15",
        title: "Eliminar una orden",
        route: "/orders/:id",
        method: "DELETE",
        request: `try {
      const response = await fetch("https://nodemysql-its2.onrender.com/api/orders/id", {
        method: "DELETE"
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error al eliminar la orden", error);
    }`,
        response: `{ message: 'Order deleted successfully' }`
      },     
      ];
      const [focusIndex, setFocusIndex] = useState(null);
      useEffect(() => {
        if (focusIndex !== null) {
          const element = document.getElementById(`doc-${focusIndex}`);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      }, [focusIndex]);

    return (
        <MyContext.Provider value={{ docs, focusIndex, setFocusIndex}}>
            {children}
        </MyContext.Provider>
    );
}

export default MyState;
