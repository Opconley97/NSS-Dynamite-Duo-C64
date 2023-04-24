const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Icebox",
            power: "Freezing Winds"
        },
        {
            id: 2,
            name: "Stopwatch",
            power: "Slows Time"
        },
        {
            id: 3,
            name: "Pepsi-Man",
            power: "Tooth Decay"
        },
        {
            id: 4,
            name: "Botulinnium",
            power: "Plague"
        }
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}