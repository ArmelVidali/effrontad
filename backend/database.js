const sql = require("mssql");

const config = {
  user: "CloudSAd97320de", // better stored in an app setting such as process.env.DB_USER
  password: "^v*6*dmQJH>uM4c", // better stored in an app setting such as process.env.DB_PASSWORD
  server: "efrontadserver.database.windows.net", // better stored in an app setting such as process.env.DB_SERVER
  port: 1433, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
  database: "efrontad_db", // better stored in an app setting such as process.env.DB_NAME
  authentication: {
    type: "default",
  },
  options: {
    encrypt: true,
  },
};

const sql_queries = {
  clients: `SELECT 
              client.client_id AS client_id,
              client.prenom AS client_prenom,
              client.nom AS client_nom,
              COUNT(commandes.commandes_id) AS total_commandes,
              COALESCE(SUM(detail_commande.prix_ttc), 0) AS prix_total
            FROM client 
            LEFT JOIN commandes 
            ON
              client.client_id = commandes.id_client
            LEFT JOIN detail_commande
            ON
              commandes.commandes_id = detail_commande.id_commande
            GROUP BY 
              client.client_id, client.prenom, client.nom;`,
  commandes: `SELECT 
                commandes.commandes_id,
                client.prenom,
                client.nom,
                FORMAT(commandes.date_commande, 'dd - MM - yyyy', 'fr-FR') AS date,
                commandes.adresse_livraison as adresse,
                detail_commande.quantite,
                detail_commande.prix_ttc as prix_total_commande,
                CASE
                    WHEN commandes.status = 1 THEN 'Traitée'
                    WHEN commandes.status = 0 THEN 'Non traitée'
                    ELSE 'unknown'
                END AS status            
              FROM commandes 
              LEFT JOIN client
              ON
                commandes.id_client = client.client_id
              LEFT JOIN detail_commande
              ON
                commandes.commandes_id = detail_commande.id_commande
                `,
  produits: `SELECT *
              FROM
              produit
  `,
  analytics_number_orders: `SELECT 
                              (COUNT (*) AS nb_total_commandes),
                              (SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) as commandes_en_cours)
                              (SELECT 
                                COUNT (commandes.commande_id)
                                FORMAT(commandes.date_commande, 'dd - MM - yyyy', 'fr-FR') AS date,
                                detail_commande.prix_ttc as prix_total_commande,
                                CASE
                                    WHEN commandes.status = 1 THEN 'Traitée'
                                    WHEN commandes.status = 0 THEN 'Non traitée'
                                    ELSE 'unknown'
                                END AS status            
                              FROM commandes 
                              LEFT JOIN detail_commande
                              ON
                                commandes.commandes_id = detail_commande.id_commande
                              )
                              `,
};

// Create a database connection pool

// Function to connect to the database

const pool = new sql.ConnectionPool(config);
async function connectToDatabase() {
  try {
    console.log("Connecting to the database...");
    await pool.connect();
    console.log("Connected to the database");
    return pool;
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    throw error; // Throw the error for proper error handling
  }
}

async function runQuery(table) {
  try {
    const result = await pool.request().query(sql_queries[table]);
    console.log("Query run sucessfully");
    return result.recordset;
  } catch (error) {
    console.error("Error executing query:", error.message);
  }
}

module.exports = { connectToDatabase, runQuery };
