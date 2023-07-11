import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
};

type Product = {
  id: number;
  title: string;
  price: number;
};

async function getProducts() {
  const res = await fetch('http://localhost:5000/products');
  return res.json();
}

export default async function ProductList() {
  const products: Product[] = await getProducts();

  return (
    <div className='py-10 px-10'>
      <table className='table w-full'>
        <thead className='bg-white border-white'>
          <tr className='text-black'>
            <th>No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='border border-white'>
          {products.map((product, index) => (
            <tr key={product.id} className='border-white text-white'>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
