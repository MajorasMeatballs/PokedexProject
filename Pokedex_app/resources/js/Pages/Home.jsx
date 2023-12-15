import React from "react";
import Layout from "../components/Layout";

const pokedexTitleImageUrl =
    "https://fontmeme.com/permalink/231129/8e2920a6a7a57388ec6b8d59b238e8ba.png";

const Home = () => {
    return (
        <Layout>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80vh",
                }}
            >
                <img
                    src={pokedexTitleImageUrl}
                    alt="PokedexTitle"
                    style={{ width: "50%", height: "50%" }}
                />
            </div>
        </Layout>
    );
};

export default Home;
