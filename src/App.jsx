import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import items from "./data";

const App = () => {
  const cards = items.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
};
export default App;
