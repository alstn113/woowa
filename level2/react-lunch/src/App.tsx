import Header from './components/base/Header';
import RestaurantFilter from './components/RestaurantFilter/RestaurantFilter';
import RestaurantList from './components/RestaurantList/RestaurantList';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <RestaurantFilter />
        <RestaurantList />
      </main>
    </>
  );
};

export default App;
