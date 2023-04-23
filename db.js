// db.js
import Dexie from 'dexie';

export const db = new Dexie('loupsgaroux');
db.version(2).stores({
    roles: '++id, name, image, required, repeat',
    currentGame: 'id, name, image, required, repeat, nb, player',
});

db.on('populate', () => {
    db.roles.bulkAdd([
        {
            id: 0,
            name: "Salvateur",
            repeat: false,
            image: "salvateur.jpg"
        },
        {
            id: 1,
            name: "Sorciere",
            repeat: false,
            image: "sorciere.jpg"
        },
        {
            id: 2,
            name: "Voyante",
            repeat: false,
            image: "voyante.jpg"
        },
        {
            id: 3,
            name: "Loup",
            repeat: true,
            image: "loup.png"
        },
        {
            id: 4,
            name: "Villagoie",
            repeat: true,
            image: "villagoie.jpg"
        },
        {
            id: 5,
            name: "Chasseur",
            repeat: false,
            image: "chasseur.jpg"
        },
        {
            id: 6,
            name: "Loup Bleu",
            repeat: false,
            image: "loup-bleu.png"
        },
        {
            id: 7,
            name: "Barbier",
            repeat: false,
            image: "barbier.jpg"
        },
        {
            id: 8,
            name: "Cupident",
            repeat: false,
            image: "cupident.jpg"
        },
        {
            id: 9,
            name: "Pere Infect",
            repeat: false,
            image: "pere-infect.jpg"
        },
        {
            id: 10,
            name: "Courbeau",
            repeat: false,
            image: "courbeau.jpg"
        },
        {
            id: 11,
            name: "Alien",
            repeat: false,
            image: "alien.jpg"
        },
        {
            id: 12,
            name: "Ancien",
            repeat: false,
            image: "ancien.jpg"
        },
        {
            id: 13,
            name: "Renard",
            repeat: false,
            image: "salvateur.jpg"
        },
        {
            id: 14,
            name: "Loup Noir",
            repeat: false,
            image: "loup-noir.jpg"
        },
        {
            id: 15,
            name: "Ours",
            repeat: false,
            image: "ours.jpg"
        },
    ]);
});
db.open();


