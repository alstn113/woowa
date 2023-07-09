import RestaurantFilter from './components/RestaurantFilter/RestaurantFilter';
import RestaurantList from './components/RestaurantList/RestaurantList';
import Header from './components/base/Header';

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
