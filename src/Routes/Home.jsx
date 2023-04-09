import React, { useState, useEffect, useContext } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import "./Home.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);
  const { data, setData } = useContext(ContextGlobal);

  const getDentists = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setDentists(data);
    setData(data);
  };

  useEffect(() => {
    if (data.length === 0) getDentists();
    else setDentists(data);
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid cardLink">
        {/* Aqui deberias renderizar las cards */}
        {dentists.map((dentist) => {
          return (
            <Link key={dentist.id} to={`/dentist/${dentist.id}`}>
              <Card {...dentist} />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
