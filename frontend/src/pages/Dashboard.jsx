import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CoffeeForm from "../components/CoffeeForm";
import Spinner from '../components/Spinner';
import { getCoffees, reset } from "../features/coffees/coffeeSlice";
import CoffeeItem from "../components/CoffeeItem";




function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { coffees, isLoading, isError, message } = useSelector((state) => state.coffees);

  useEffect(() => {
    if (isError) console.log(message);
    if (!user) {
      navigate('/login');
    }
    dispatch(getCoffees());
  }, [user, navigate, isError, message, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    }
  }, []);

  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Coffee Dashboard</p>
      </section>
      <CoffeeForm />
      <section className="content">
        {coffees.length > 0 ?
          (<div className="coffees">
            {coffees.map((coffee) => (<CoffeeItem key={coffee._id} coffee={coffee} />))}
          </div>) :
          (<h3> You do not have any coffees.</h3>)}
      </section>
    </>
  )  
}

export default Dashboard;