import Product from "./Product";

function App() {
  const products = [
    {
      id: 1,
      title: "Backpack",
      price: 500,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      title: "T-Shirt",
      price: 200,
      image: "https://images.unsplash.com/photo-1718731236356-3b984904ac7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dC1zaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      title: "Jacket",
      price: 999,
      image: "https://images.unsplash.com/photo-1706765779494-2705542ebe74?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFja2V0fGVufDB8fDB8fHww",
    },
    {
      id: 4,
      title: "Shirt",
      price: 1600,
      image: "https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      title: "Bracelet",
      price: 8899,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnJhY2VsZXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      title: "Ring",
      price: 2999,
      image: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl text-center mb-6">Result</h1>

      <div className="border p-6 bg-gradient-to-b from-gray-100 to-yellow-400 flex flex-wrap">
        {products.map((item) => (
          <Product
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;