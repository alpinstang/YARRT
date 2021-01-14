import React from "react";
import "./home.page.scss";

const Home = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div className="homepage">
      <section class="hero">
        <h1>
          Do you like cats{currentUser ? " " + currentUser.displayName : null}?
        </h1>
        {currentUser ? currentUser.displayName : null}
        <article>
          <p>
            Plop down in the middle where everybody walks time to go zooooom,
            cats go for world domination. Climb into cupboard and lick the salt
            off rice cakes do i like standing on litter cuz i sits when i have
            spaces, my cat buddies have no litter i live in luxury cat life.
          </p>
          <a href="#breweries">Go to this place</a>
        </article>
      </section>
      <section class="breweries" id="breweries">
        <ul>
          <li>
            <figure>
              <img src="https://placekitten.com/400/200" alt="cat" />
              <figcaption>
                <h3>Litter boxes love thm</h3>
              </figcaption>
            </figure>
            <p>
              Plays league of legends sugar, my siamese, stalks me (in a good
              way), day and night but lick butt and make a weird face, plan your
              travel poop on couch trip on catnip?
            </p>
            <a href="/">Visit Website</a>
          </li>
          <li>
            <figure>
              <img src="https://placekitten.com/400/201" alt="cat" />
              <figcaption>
                <h3>Best Biscuit Bakers</h3>
              </figcaption>
            </figure>
            <p>
              Stinky cat attack like a vicious monster hopped up on catnip, or
              eat prawns daintily with a claw then lick paws clean wash down
              prawns with a lap of carnation milk then retire to the warmest
              spot on the couch.
            </p>
            <a href="/">Visit Website</a>
          </li>
          <li>
            <figure>
              <img src="https://placekitten.com/400/202" alt="cat" />
              <figcaption>
                <h3>haha cat go PURRRR</h3>
              </figcaption>
            </figure>
            <p>
              Ooooh feather moving feather! lay on arms while you're using the
              keyboard. Cough hairball on conveniently placed pants stinky cat
              but cats secretly make all the worlds muffins.
            </p>
            <a href="/">Meow</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
