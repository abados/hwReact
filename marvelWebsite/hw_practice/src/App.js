import "./App.css";
import { CardComponents } from "./components/cardComponents";
import { Header } from "./components/header";
import data from "./data";

function App() {
  let imageUrl =
    "https://cf8e2236-a-62cb3a1a-s-sites.googlegroups.com/site/marvalanddc/characters/marvel-heroes1-1024x589.jpg?attachauth=ANoY7cqGQBcaeyLKboEIh8_KFBk4zxZLsbuWYpm2l_al4YkskYh5SxtFpCo3Ltn9oqr2ji2v-eF9-kwE3PyyNLbWWH9Sc_hNbhTpqpUgJLRruu2mWgG6v3xQmZsKeYCiB-hXmKIOHl9zKWoRrvccN4FsEZUTpAupCAP2Ll-Z5-4icMEerOrg0fnJJXrbAk9bdWHJag_bJx9aUc78bS-r5aweCourieLu4JA3iRjSoL25ri_vyQ6SPyQon7tWy21uow_BttA3V4wY&attredirects=0";

  let title = "Lorem ipsum dolor sit amet, consectetur adipisicing";

  let description =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturiautem, laboriosam minima a error necessitatibus similique quae,accusamus, facere deserunt officia tempore ab eum maiores!";

  const cards = data.map((item) => {
    return <CardComponents key={item.id} {...item} />;
  });

  return (
    <div className="App">
      <Header imageUrl={imageUrl} title={title} des={description} />

      <ul class="list-style">
        <section className="cards-list">{cards}</section>
      </ul>
    </div>
  );
}

export default App;
