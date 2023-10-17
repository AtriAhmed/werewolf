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
            name: "Ancien",
            repeat: false,
            image: "ancien.jpg"
        },
        {
            id: 12,
            name: "Alien",
            repeat: false,
            image: "alien.jpg"
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
        {
            id: 16,
            name: "Ange",
            repeat: false,
            image: "ange.jpg"
        },
        {
            id: 17,
            name: "Detective",
            repeat: false,
            image: "detective.jpg"
        },
        {
            id: 18,
            name: "Berger",
            repeat: false,
            image: "berger.jpg"
        },
        {
            id: 19,
            name: "Loup Rouge",
            repeat: false,
            image: "loup-rouge.jpg"
        },
        {
            id: 20,
            name: "Pyromane",
            repeat: false,
            image: "pyromane.jpg"
        },
        {
            id: 21,
            name: "Fils de lune",
            repeat: false,
            image: "fils-de-lune.jpg"
        },
        {
            id: 22,
            name: "Juge",
            repeat: false,
            image: "juge.jpg"
        },
        {
            id: 23,
            name: "Loup Blanc",
            repeat: false,
            image: "loup-blanc.jpg"
        },
        {
            id: 24,
            name: "Enfant sauvage",
            repeat: false,
            image: "enfant-sauvage.jpg"
        },
        {
            id: 25,
            name: "Joueur de flute",
            repeat: false,
            image: "joueur-de-flute.jpg"
        },
        {
            id: 26,
            name: "Capitain",
            repeat: false,
            image: "capitain.jpg"
        },
        {
            id: 27,
            name: "Idiot",
            repeat: false,
            image: "idiot.jpg"
        },
        {
            id: 28,
            name: "Voleur",
            repeat: false,
            image: "voleur.jpg"
        },
        {
            id: 29,
            name: "Servante",
            repeat: false,
            image: "servante.jpg"
        },
        {
            id: 30,
            name: "Petite Fille",
            repeat: false,
            image: "petite-fille.jpg"
        },
    ]);
});
db.open();


