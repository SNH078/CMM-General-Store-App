import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

// Modal Component
const OrderModal = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white max-w-2xl w-full p-6 rounded shadow-lg overflow-y-auto max-h-[90vh] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold mb-4">Order #{order.orderNumber} Details</h2>

        <div className="space-y-4">
          {order.items.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <img
                src={`http://localhost:5000/images/${item.product.image[0]}`}
                alt={item.product.name}
                className="w-14 h-14 object-cover border"
              />
              <div>
                <p className="font-medium">{item.product.name}</p>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                <p className="text-sm text-gray-600">
                  ₹{item.product.offerPrice} each
                </p>
                <p className="text-sm text-gray-700 font-medium">
                  Subtotal: ₹{item.product.offerPrice * item.quantity}
                </p>
              </div>
            </div>
          ))}

          <div className="border-t pt-3">
            <p><strong>Total:</strong> ₹{order.amount}</p>
            <p>
              <strong>Payment:</strong> {order.paymentType} -{" "}
              {order.isPaid ? "Paid" : "Pending"}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>

          <div className="border-t pt-3">
            <p className="font-medium">Shipping Address:</p>
            <p className="text-sm text-gray-600">
              {order.address.firstName} {order.address.lastName}
            </p>
            <p className="text-sm text-gray-600">
              {order.address.street}, {order.address.city},{" "}
              {order.address.state} - {order.address.zipcode},{" "}
              {order.address.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Orders Component
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { axios } = useContext(AppContext);

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/seller");
      if (data.success) {
        // sort latest first and assign order numbers
        const sortedOrders = [...data.orders].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        const numberedOrders = sortedOrders.map((order, i) => ({
          ...order,
          orderNumber: sortedOrders.length - i,
        }));

        setOrders(numberedOrders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="md:p-10 p-4 space-y-4">
      <h2 className="text-lg font-medium">Orders List</h2>

      {orders.map((order) => (
        <div
          key={order._id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 p-4 border border-gray-300 rounded-md max-w-4xl"
        >
          <div>
            <p className="font-medium text-orange-500">Order #{order.orderNumber}</p>
            <p className="text-sm text-gray-600">
              {order.items.length} item(s)
            </p>
          </div>
 <p className="font-medium text-black/70"> {order.address.firstName} {order.address.lastName}</p>
 <p className="font-medium text-black/70"> {order.address.phone}</p>

          <p className="font-medium text-black/70">₹ {order.amount}</p>

          <button
            onClick={() => setSelectedOrder(order)}
            className="px-4 py-1 rounded border bg-orange-100 text-orange-500 hover:bg-orange-200"
          >
            View Details
          </button>
        </div>
      ))}

      {selectedOrder && (
        <OrderModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />
      )}
    </div>
  );
};

export default Orders;
