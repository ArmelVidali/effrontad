create table client (
    id INT IDENTITY(1,1) PRIMARY KEY,
    prenom VARCHAR(15),
    nom VARCHAR(15),
)

create table commandes (
    id INT IDENTITY(1,1) PRIMARY KEY,
    id_client INT,
    FOREIGN KEY (id_client) REFERENCES client(id),
    date_commande DATE,
    prix_ttc FLOAT,
    adresse_livraison VARCHAR(50)
)

create table produit(
    id INT IDENTITY(1,1) PRIMARY KEY,
    stock INT,
    prix_ttc FLOAT
)

create table detail_commande(
    id INT IDENTITY(1,1) PRIMARY KEY,
    id_commande INT,
    FOREIGN KEY (id_commande) REFERENCES commandes(id),
    id_produit INT,
    FOREIGN KEY (id_produit) REFERENCES produit(id),
    quantite INT,
    prix_ttc FLOAT
)