import { useDispatch, useSelector } from "react-redux";
import CartScreen from "../views/Cart/CartScreen"
import { RootState } from "../redux/store";
import { removeItem } from "../redux/slice/CartSlice";

const CartScreenViewModel = () =>{
    const cartItems = useSelector((state: RootState) => state?.cart?.items);
    const dispatch = useDispatch();

    const deleteData = (id: number) => {
        dispatch(removeItem(id))
    };

    return (
        <CartScreen 
        {
            ...{
                cartItems,
                deleteData
            }
        }
        />
    )
};

export default CartScreenViewModel;