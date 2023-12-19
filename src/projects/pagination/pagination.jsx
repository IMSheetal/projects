import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { PaginationWrapper } from "./paginatiionStyle";

const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(20);
  const pokemonCount = 100;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=${pokemonPerPage}&offset=${
            (currentPage - 1) * pokemonPerPage
          }`
        );
        setPokemonList(response.data.results);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    };

    fetchPokemon();
  }, [currentPage, pokemonPerPage]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log(pokemonList);
  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {" "}
      <PaginationWrapper>
        <h2>POKEMON</h2>
        <div className="header">
          <div className="left">
            <select
              className="selectCards"
              value={pokemonPerPage}
              onChange={(e) => setPokemonPerPage(e.target.value)}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          <div className="right">
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        <div className="container">
          {filteredPokemon.map((pokemon) => (
            <div key={pokemon.name}>
              <Card
                title={pokemon.name.toUpperCase()}
                description="This is the description for card 1."
                imageUrl="https://picsum.photos/200"
              />
            </div>
          ))}
        </div>
        <div className="footer">
          {[...Array(Math.ceil(pokemonCount / pokemonPerPage)).keys()].map(
            (number) => (
              <span
                onClick={() => handlePaginationClick(number + 1)}
                className={`${currentPage === number + 1 ? "active" : ""}`}
                key={number + 1}
              >
                {`${number + 1} | `}
              </span>
            )
          )}
        </div>
      </PaginationWrapper>
    </>
  );
};

export default Pokemon;
