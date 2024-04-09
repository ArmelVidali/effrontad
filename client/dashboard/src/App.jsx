import { useState, useEffect } from "react";
import "./App.css";
import SideMenu from "./SideMenu";
import DataFrame from "./DataFrame";
import MyLineChart from "./MyCharts";

function App() {
  // Selected table on the side menu
  const [selected_table, setSelectedTable] = useState("clients");
  // Fetched data from database
  const [data, setData] = useState([]);
  // Helps to build the fields header and values of the dataframe
  const dataframe_view = {
    clients: [
      "Identifiant client",
      "Prenom",
      "Nom",
      "Nombre de commandes",
      "Total TTC des commandes",
    ],
    commandes: [
      "Identifiant commande",
      "Prenom",
      "Nom",
      "Date",
      "Adresse",
      "Nombre de produits",
      "Total TTC",
      "Commande traitée",
    ],
    produits: ["Id produit", "Stock", "Prix unitaire ttc"],
  };

  return (
    <>
      <SideMenu
        selected_table={selected_table}
        setSelectedTable={setSelectedTable}
      />
      <DataFrame
        selected_table={selected_table}
        dataframe_view={dataframe_view}
        data={data}
        setData={setData}
      />
    </>
  );
}

export default App;
