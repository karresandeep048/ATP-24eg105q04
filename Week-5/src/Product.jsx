function Product({ image, title, price }) {
  return (
    <div className="w-1/3 p-5 flex justify-center">
      <div className="w-40 h-40 bg-gradient-to-b from-gray-200 to-yellow-400 rounded-xl shadow-md flex flex-col items-center justify-center">
        <img src={image} alt={title} className="h-16 object-contain mb-2" />
        <p className="text-xs text-center px-2">{title}</p>
        <p className="text-sm font-bold">₹{price}</p>
      </div>
    </div>
  );
}

export default Product;