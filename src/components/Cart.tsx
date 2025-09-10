import React, { useState } from 'react';
import InputText from './InputText';
import Button from './Button';
import Modal from './Modal';
import Card from './Card';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

const initialProducts: Product[] = [];

const Cart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [form, setForm] = useState({ title: '', description: '', price: '' });

  const handleAdd = () => {
    setEditingProduct(null);
    setForm({ title: '', description: '', price: '' });
    setModalOpen(true);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setForm({ title: product.title, description: product.description, price: product.price.toString() });
    setModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleSave = () => {
    if (!form.title || !form.price) return;
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...editingProduct, ...form, price: Number(form.price) } : p));
    } else {
      setProducts([...products, { id: Date.now(), title: form.title, description: form.description, price: Number(form.price) }]);
    }
    setModalOpen(false);
  };

  return (
    <div>
      <Button onClick={handleAdd}>Thêm sản phẩm</Button>
      {products.map(product => (
        <Card key={product.id} title={product.title} description={product.description} price={product.price}>
          <Button onClick={() => handleEdit(product)}>Sửa</Button>
          <Button onClick={() => handleDelete(product.id)}>Xóa</Button>
        </Card>
      ))}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <InputText value={form.title} onChange={v => setForm(f => ({ ...f, title: v }))} placeholder="Tên sản phẩm" />
          <InputText value={form.description} onChange={v => setForm(f => ({ ...f, description: v }))} placeholder="Mô tả" />
          <InputText value={form.price} onChange={v => setForm(f => ({ ...f, price: v }))} placeholder="Giá" />
          <Button onClick={handleSave}>{editingProduct ? 'Lưu thay đổi' : 'Thêm mới'}</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
