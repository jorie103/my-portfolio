import React from "react";
import unnamed from "../unnamed.jpg";

export default function Home() {
    return(
        <main>
            <img src={unnamed} alt="Exotic Flower" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-4xl text--100 font-bold cursive leading-none lg:leading-snug home-name">Hello I'm Marjorie.</h1>
            </section>
        </main>
    )
}