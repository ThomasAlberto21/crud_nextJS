'use client';
import { useState } from 'react';

export default function AddProduct() {
  const [modal, setModal] = useState(false);

  const handleChange = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button className='btn' onClick={handleChange}>
        Add New
      </button>
      <input
        type='checkbox'
        checked={modal}
        onChange={handleChange}
        className='modal-toggle'
      />

      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Add New Product</h3>
          <form>
            <div className='form-control'>
              <label className='label font-bold'>Title</label>
              <input
                type='text'
                className='input w-full input-bordered'
                placeholder='Product Name'
              />
            </div>
            <div className='form-control'>
              <label className='label font-bold'>Price</label>
              <input
                type='text'
                className='input w-full input-bordered'
                placeholder='Price'
              />
            </div>

            <div className='modal-action'>
              <button type='button' className='btn' onClick={handleChange}>
                Close
              </button>
              <button type='submit' className='btn btn-primary'>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
