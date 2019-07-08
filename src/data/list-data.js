let listData = {
  lists : [
    {
      title : "Frames",
      list: [
        { title: "Ash", acquisition: "Market", components: "Manics" },
        { title: "Ash Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Atlas", acquisition: "Jordas Precept", components: "Jordas Golem" },
        { title: "Banshee", acquisition: "Tenno Lab", lab: "Tenno Lab" },
        { title: "Banshee Prime", acquisition: "Vaulted", vaulted: true, mr: 8 },
        { title: "Chroma", acquisition: "New Strange(Quest)", components: "Junctions" },
        { title: "Ember", acquisition: "Market", components: "Sargas Ruk" },
        { title: "Ember Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Equinox", acquisition: "Market", components: "Tyl Regor" },
        { title: "Excalibur", acquisition: "Market", components: "Lech Kril" },
        { title: "Excalibur Prime", acquisition: "Unobtainable", unobtainable: true },
        { title: "Frost", acquisition: "Market", components: "Lech Kril + Vor" },
        { title: "Frost Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Hydroid", acquisition: "Market", components: "Vay Hek" },
        { title: "Inaros", acquisition: "Sands of Inaros(Quest)" },
        { title: "Ivara", acquisition: "Spy" },
        { title: "Limbo", acquisition: "Market", components: "The Limbo Theorem(Quest)" },
        { title: "Loki", acquisition: "Market", components: "Hyena Pack" },
        { title: "Loki Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Mag", acquisition: "Market", components: "The Sergeant" },
        { title: "Mag Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Mesa", acquisition: "Market", components: "Mutalist Alad V" },
        { title: "Mirage", acquisition: "Hidden Messages(Quest)" },
        { title: "Nekros", acquisition: "Market", components: "Derelict Assasinations" },
        { title: "Nekros Prime", acquisition: "Vaulted", vaulted: true, mr: 0 },
        { title: "Nidus", acquisition: "Glast Gambit(Quest)", components: "Infested Salvage" },
        { title: "Nezha", acquisition: "Tenno Lab", lab: "Tenno Lab" },
        { title: "Nova", acquisition: "Market", components: "Raptors" },
        { title: "Nova Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Nyx", acquisition: "Market", components: "Phorid" },
        { title: "Nyx Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Oberon", acquisition: "Market", components: "Eximus Enemies" },
        { title: "Octavia", acquisition: "Octavia's Anthem(Quest)", components: "Lua Music Puzzle" },
        { title: "Rhino", acquisition: "Market", components: "Jackal" },
        { title: "Rhino Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Saryn", acquisition: "Market", components: "Kela De Thaym" },
        { title: "Saryn Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Titania", acquisition: "The Silver Grove(Quest)" },
        { title: "Trinity", acquisition: "Market", components: "Ambulas" },
        { title: "Trinity Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Valkyr", acquisition: "Market", components: "Alad V" },
        { title: "Valkyr Prime", acquisition: "Vaulted", vaulted: true, mr: 0 },
        { title: "Vauban", acquisition: "Market", components: "Alerts" },
        { title: "Vauban Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Volt", acquisition: "Tenno Lab", lab: "Tenno Lab" },
        { title: "Volt Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Wukong", acquisition: "Tenno Lab", lab: "Tenno Lab" },
        { title: "Zephyr", acquisition: "Tenno Lab", lab: "Tenno Lab" },
        { title: "Oberon Prime", acquisition: "Vaulted", vaulted: true, mr: 8 },
        { title: "Harrow", acquisition: "Chains of Harrow(Quest)"},
      	{ title: "Hydroid Prime", acquisition: "Relic", mr: 5 },
        { title: "Gara", acquisition: "Saya's Vigil(Quest)", components: "Bounties" },
        { title: "Mirage Prime", acquisition: "Relic", mr: 8 },
        { title: "Zephyr Prime", acquisition: "Relic", mr: 6 },
        { title: "Khora", acquisition: "Sanctuary Onslaught(Game Mode)"},
        { title: "Chroma Prime", acquisition: "Relic", mr: 6 },
        { title: "Excalibur Umbra", acquisition: "The Sacrifice (Quest)", mr: 0 },
        { title: "Limbo Prime", acquisition: "Relic", mr: 4 },
        { title: "Revenant", acquisition: "Mask of the Revenant (Quest)", mr: 0 },
        { title: "Garuda", acquisition: "Vox Solaris (Quest)", mr: 0 },
        { title: "Mesa Prime", acquisition: "Relic", mr: 2 },
        { title: "Baruuk", acquisition: "Little Duck (Vox Solaris Syndicate)", mr: 0 },
        { title: "Hildryn", acquisition:"Little Duck", components: "Exploiter Orb" },
        { title: "Equinox Prime", acquisition: "Relic", mr: 5 },
        { title: "Wukong Prime", acquisition: "Relic", mr: 5 },
      ],
    },
    {
      title : "Primaries",
      list: [
        { title: "Amprex", acquisition: "Energy Lab", lab: "Energy Lab", mr: 10 },
        { title: "Attica", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 7 },
        { title: "Boar", acquisition: "Drekar Troopers", mr: 2 },
        { title: "Boar Prime", acquisition: "Vaulted", vaulted: true, mr: 11 },
        { title: "Boltor", acquisition: "Market", mr: 2 },
        { title: "Boltor Prime", acquisition: "Vaulted", vaulted: true, mr: 13 },
        { title: "Braton", acquisition: "Market" },
        { title: "Braton Prime", acquisition: "Relic", mr: 8 },
        { title: "Braton Vandal", acquisition: "Sanctuary Onslaught(Game Mode)", mr: 4 },
        { title: "Burston", acquisition: "Market" },
        { title: "Burston Prime", acquisition: "Relic", mr: 12 },
        { title: "Buzlok", acquisition: "Chem Lab", lab: "Chem Lab", mr: 11 },
        { title: "Cernos", acquisition: "Market", mr: 6 },
        { title: "Cernos Prime", acquisition: "Vaulted", vaulted: true, mr: 12 },
        { title: "Convectrix", acquisition: "Energy Lab", lab: "Energy Lab", mr: 7 },
        { title: "Daikyu", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 10 },
        { title: "Dera", acquisition: "Energy Lab", lab: "Energy Lab", mr: 4 },
        { title: "Dera Vandal", acquisition: "Invasion", mr: 7 },
        { title: "Dex Sybaris", acquisition: "Anniversary", mr: 7 },
        { title: "Drakgoon", acquisition: "Market", mr: 5 },
        { title: "Dread", acquisition: "Stalker", mr: 5 },
        { title: "Ferrox", acquisition: "Energy Lab", lab: "Energy Lab", mr: 14 },
        { title: "Flux Rifle", acquisition: "Energy Lab", lab: "Energy Lab", mr: 6 },
        { title: "Glaxion", acquisition: "Energy Lab", lab: "Energy Lab", mr: 7 },
        { title: "Gorgon", acquisition: "Heavy Gunners", mr: 3 },
        { title: "Gorgon Wraith", acquisition: "Razorback Armada", mr: 7 },
        { title: "Grakata", acquisition: "Market", mr: 5 },
        { title: "Grinlok", acquisition: "Chem Lab", lab: "Chem Lab", mr: 7 },
        { title: "Harpak", acquisition: "Market", mr: 7 },
        { title: "Hek", acquisition: "Market", mr: 4 },
        { title: "Hema", acquisition: "Bio Lab", lab: "Bio Lab", mr: 7 },
        { title: "Hind", acquisition: "Market" },
        { title: "Ignis", acquisition: "Chem Lab", lab: "Chem Lab", mr: 5 },
        { title: "Ignis Wraith", acquisition: "Chem Lab (Limited)", lab: "Chem Lab", mr: 9 },
        { title: "Javlok", acquisition: "Chem Lab", lab: "Chem Lab", mr: 7 },
        { title: "Karak", acquisition: "Market", mr: 1 },
        { title: "Karak Wraith", acquisition: "Invasion", mr: 7 },
        { title: "Kohm", acquisition: "Market", mr: 5 },
        { title: "Lanka", acquisition: "Energy Lab", lab: "Energy Lab", mr: 10 },
        { title: "Latron", acquisition: "Market" },
        { title: "Latron Prime", acquisition: "Vaulted", vaulted: true, mr: 10 },
        { title: "Latron Wraith", acquisition: "Invasion", mr: 7 },
        { title: "Miter", acquisition: "Ceres Boss Duo", mr: 6 },
        { title: "MK1-Braton", acquisition: "Market" },
        { title: "MK1-Paris", acquisition: "Market" },
        { title: "MK1-Strun", acquisition: "Market" },
        { title: "Mutalist Cernos", acquisition: "Market", mr: 7 },
        { title: "Mutalist Quanta", acquisition: "Bio Lab", lab: "Bio Lab", mr: 2 },
        { title: "Ogris", acquisition: "Chem Lab", lab: "Chem Lab", mr: 9 },
        { title: "Opticor", acquisition: "Energy Lab", lab: "Energy Lab", mr: 14 },
        { title: "Panthera", acquisition: "Market", mr: 7 },
        { title: "Paracyst", acquisition: "Bio Lab", lab: "Bio Lab", mr: 7 },
        { title: "Paris", acquisition: "Market", mr: 3 },
        { title: "Paris Prime", acquisition: "Relic", mr: 8 },
        { title: "Penta", acquisition: "Market", mr: 6 },
        { title: "Phage", acquisition: "Bio Lab", lab: "Bio Lab", mr: 11 },
        { title: "Prisma Gorgon", acquisition: "Baro Ki'Teer", mr: 11 },
        { title: "Prisma Grakata", acquisition: "Baro Ki'Teer", mr: 11 },
        { title: "Prisma Tetra", acquisition: "Baro Ki'Teer", mr: 4 },
        { title: "Quanta", acquisition: "Energy Lab", lab: "Energy Lab", mr: 4 },
        { title: "Quanta Vandal", acquisition: "Baro Ki'Teer", mr: 10 },
        { title: "Rakta Cernos", acquisition: "Red Veil(Syndicate)", mr: 12 },
        { title: "Rubico", acquisition: "Market", mr: 6 },
        { title: "Sancti Tigris", acquisition: "New Loka(Syndicate)", mr: 12 },
        { title: "Secura Penta", acquisition: "Perrin Sequence(Syndicate)", mr: 12 },
        { title: "Simulor", acquisition: "Cephalon Simaris", mr: 5 },
        { title: "Snipetron", acquisition: "Operation: Plague Star", mr: 0 },
        { title: "Snipetron Vandal", acquisition: "Invasion", mr: 5 },
        { title: "Sobek", acquisition: "Market", mr: 7 },
        { title: "Soma", acquisition: "Market", mr: 6 },
        { title: "Soma Prime", acquisition: "Vaulted", vaulted: true, mr: 7 },
        { title: "Stradavar", acquisition: "Market", mr: 8 },
        { title: "Strun", acquisition: "Market", mr: 1 },
        { title: "Strun Wraith", acquisition: "Invasion", mr: 10 },
        { title: "Supra", acquisition: "Energy Lab", lab: "Energy Lab", mr: 12 },
        { title: "Sybaris", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 5 },
        { title: "Synapse", acquisition: "Bio Lab", lab: "Bio Lab", mr: 11 },
        { title: "Synoid Simulor", acquisition: "Cephalon Suda(Syndicate)", mr: 12 },
        { title: "Telos Boltor", acquisition: "Arbiters of Hexis(Syndicate)", mr: 12 },
        { title: "Tenora", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 10 },
        { title: "Tetra", acquisition: "Market", mr: 3 },
        { title: "Tiberon", acquisition: "Market", mr: 10 },
        { title: "Tigris", acquisition: "Market", mr: 9 },
        { title: "Tigris Prime", acquisition: "Vaulted", vaulted: true, mr: 13 },
        { title: "Tonkor", acquisition: "Market", mr: 5 },
        { title: "Torid", acquisition: "Bio Lab", lab: "Bio Lab", mr: 4 },
        { title: "Vaykor Hek", acquisition: "Steel Meridian(Syndicate)", mr: 12 },
        { title: "Vectis", acquisition: "Market", mr: 2 },
        { title: "Vectis Prime", acquisition: "Vaulted", vaulted: true, mr: 14 },
        { title: "Vulkar", acquisition: "Market", mr: 3 },
        { title: "Vulkar Wraith", acquisition: "Baro Ki'Teer", mr: 7 },
        { title: "Zarr", acquisition: "Market", mr: 7 },
        { title: "Zhuge", acquisition: "Market", mr: 10 },
        { title: "Supra Vandal", acquisition: "Baro Ki'Teer", mr: 14 },
        { title: "Sybaris Prime", acquisition: "Vaulted", vaulted: true, mr: 12 },
        { title: "Scourge", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 6},
      	{ title: "Zenith", acquisition: "Daily Login", mr: 10 },
      	{ title: "Arca Plasmor", acquisition: "Energy Lab", lab: "Energy Lab", mr: 10 },
        { title: "Lenz", acquisition: "Energy Lab", lab: "Energy Lab", mr: 8 },
        { title: "Argonak", acquisition: "Chem Lab", lab: "Chem Lab", mr: 7 },
        { title: "Astilla", acquisition: "Market", mr: 10 },
        { title: "Baza", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 7 },
        { title: "Corinth", acquisition: "Market", mr: 10 },
        { title: "Quartakk", acquisition: "Ghoul Purge Event", mr: 10 },
        { title: "Tiberon Prime", acquisition: "Ghoul Purge Event", mr: 14 },
        { title: "Veldt", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 8 },
        { title: "Rubico Prime", acquisition: "Relic", mr: 12 },
        { title: "Phantasma", acquisition: "Market", mr: 9 },
        { title: "Nagantaka", acquisition: "Market", mr: 9 },
        { title: "Battacor", acquisition: "Energy Lab", lab:"Energy Lab", mr: 10 },
        { title: "Exergis", acquisition: "Market", mr: 8},
        { title: "Prisma Grinlok", acquisition: "Baro Ki'Teer", mr: 11 },
        { title: "Stradavar Prime", acquisition: "Relic", mr: 12 },
        { title: "Zhuge Prime", acquisition: "Relic", mr: 14 },
      ],
    },
    {
      title : "Secondaries",
      list: [
        { title: "Acrid", acquisition: "Bio Lab", lab: "Bio Lab", mr: 7 },
        { title: "Afuris", acquisition: "Market", mr: 4 },
        { title: "Akbolto", acquisition: "Market", mr: 9 },
        { title: "Akbronco", acquisition: "Market", mr: 2 },
        { title: "Akbronco Prime", acquisition: "Relic", mr: 10 },
        { title: "Akjagara", acquisition: "Market", mr: 8 },
        { title: "Aklato", acquisition: "Market", mr: 3 },
        { title: "Aklex", acquisition: "Market", mr: 4 },
        { title: "Aklex Prime", acquisition: "Vaulted, Baro", vaulted: true, mr: 15 },
        { title: "Akmagnus", acquisition: "Market", mr: 12 },
        { title: "Aksomati", acquisition: "Market", mr: 9 },
        { title: "Akstiletto", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 8 },
        { title: "Akstiletto Prime", acquisition: "Vaulted", vaulted: true, mr: 10 },
        { title: "Akvasto", acquisition: "Market", mr: 8 },
        { title: "Akzani", acquisition: "Market", mr: 4 },
        { title: "Angstrum", acquisition: "Market", mr: 4 },
        { title: "Atomos", acquisition: "Market", mr: 5 },
        { title: "Azima", acquisition: "Daily Login", mr: 6 },
        { title: "Ballistica", acquisition: "Market", mr: 2 },
        { title: "Bolto", acquisition: "Market", mr: 7 },
        { title: "Brakk", acquisition: "The Grustrag Three", mr: 6 },
        { title: "Bronco", acquisition: "Market" },
        { title: "Bronco Prime", acquisition: "Relic", mr: 4 },
        { title: "Castanas", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 3 },
        { title: "Cestra", acquisition: "Market", mr: 4 },
        { title: "Despair", acquisition: "Stalker", mr: 4 },
        { title: "Detron", acquisition: "Zanuka Hunter", mr: 6 },
        { title: "Mara Detron", acquisition: "Baro Ki'Teer", mr: 9 },
        { title: "Dex Furis", acquisition: "Anniversary", mr: 10 },
        { title: "Dual Cestra", acquisition: "Energy Lab", lab: "Energy Lab", mr: 7 },
        { title: "Dual Toxocyst", acquisition: "Bio Lab", lab: "Bio Lab", mr: 11 },
        { title: "Embolist", acquisition: "Bio Lab", lab: "Bio Lab", mr: 9 },
        { title: "Euphona Prime", acquisition: "Vaulted", vaulted: true, mr: 14 },
        { title: "Furis", acquisition: "Market", mr: 2 },
        { title: "Gammacor", acquisition: "Market", mr: 2 },
        { title: "Hikou", acquisition: "Market", mr: 2 },
        { title: "Hikou Prime", acquisition: "Vaulted", vaulted: true, mr: 4 },
        { title: "Kohmak", acquisition: "Chem Lab", lab: "Chem Lab", mr: 5 },
        { title: "Kraken", acquisition: "Market" },
        { title: "Kulstar", acquisition: "Market", mr: 5 },
        { title: "Kunai", acquisition: "Market", mr: 2 },
        { title: "Lato", acquisition: "Market" },
        { title: "Lato Prime", acquisition: "Unobtainable", unobtainable: true, mr: 14 },
        { title: "Lato Vandal", acquisition: "Sanctuary Onslaught(Game Mode)", mr: 7 },
        { title: "Lex", acquisition: "Market", mr: 3 },
        { title: "Lex Prime", acquisition: "Relic", mr: 8 },
        { title: "Magnus", acquisition: "Market", mr: 10 },
        { title: "Marelok", acquisition: "Chem Lab", lab: "Chem Lab", mr: 7 },
        { title: "MK1-Furis", acquisition: "Market" },
        { title: "MK1-Kunai", acquisition: "Market" },
        { title: "Nukor", acquisition: "Chem Lab", lab: "Chem Lab", mr: 4 },
        { title: "Pandero", acquisition: "Market", mr: 8 },
        { title: "Pox", acquisition: "Bio Lab", lab: "Bio Lab", mr: 9 },
        { title: "Pyrana", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 12 },
        { title: "Rakta Ballistica", acquisition: "Red Veil(Syndicate)", mr: 6 },
        { title: "Sancti Castanas", acquisition: "New Loka(Syndicate)", mr: 10 },
        { title: "Secura Dual Cestra", acquisition: "The Perrin Sequence(Syndicate)", mr: 10 },
        { title: "Seer", acquisition: "Captain Vor" },
        { title: "Sicarus", acquisition: "Market", mr: 3 },
        { title: "Sicarus Prime", acquisition: "Vaulted", vaulted: true, mr: 14 },
        { title: "Sonicor", acquisition: "Market", mr: 2 },
        { title: "Spectra", acquisition: "Energy Lab", lab: "Energy Lab", mr: 4 },
        { title: "Spira", acquisition: "Market", mr: 8 },
        { title: "Spira Prime", acquisition: "Vaulted", vaulted: true, mr: 10 },
        { title: "Staticor", acquisition: "Energy Lab", lab: "Energy Lab", mr: 10 },
        { title: "Stug", acquisition: "Market", mr: 2 },
        { title: "Synoid Gammacor", acquisition: "Cephalon Suda(Syndicate)", mr: 7 },
        { title: "Talons", acquisition: "Tenno Lab", lab: "TennoLab", mr: 8 },
        { title: "Telos Akbolto", acquisition: "Arbiters of Hexis(Syndicate)", mr: 11 },
        { title: "Twin Grakatas", acquisition: "Market", mr: 9 },
        { title: "Twin Gremlins", acquisition: "Ceres Boss Duo", mr: 5 },
        { title: "Twin Kohmak", acquisition: "Kela De Thaym", mr: 10 },
        { title: "Twin Rogga", acquisition: "Market", mr: 9 },
        { title: "Twin Vipers", acquisition: "Market", mr: 5 },
        { title: "Tysis", acquisition: "Market", mr: 9 },
        { title: "Vasto", acquisition: "Market", mr: 4 },
        { title: "Vasto Prime", acquisition: "Vaulted", vaulted: true, mr: 10 },
        { title: "Vaykor Marelok", acquisition: "Steel Meridian(Syndicate)", mr: 10 },
        { title: "Viper", acquisition: "Market", mr: 4 },
        { title: "Twin Vipers Wraith", acquisition: "Invasion", mr: 7 },
        { title: "Cycron", acquisition: "Energy Lab", lab: "Energy Lab", mr: 8 },
        { title: "Knell", acquisition: "Market", mr: 10 },
      	{ title: "Zakti", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 10 },
      	{ title: "Arca Scisco", acquisition: "Energy Lab", lab: "Energy Lab", mr: 10 },
        { title: "Ballistica Prime", acquisition: "Relic", mr: 14 },
        { title: "Fusilai", acquisition: "Market", mr: 7 },
        { title: "Prisma Angstrum", acquisition: "Baro Ki'Teer", mr: 8 },
        { title: "Akbolto Prime", acquisition: "Relic", mr: 13 },
        { title: "Stubba", acquisition: "Ghoul Purge Event", mr: 7 },
        { title: "Viper Wraith", acquisition: "Baro Ki'Teer", mr: 4 },
        { title: "Hystrix", acquisition: "Market", mr: 7 },
        { title: "Zylok", acquisition: "The Pyrus Project Event", mr: 6 },
        { title: "Pyrana Prime", acquisition: "Relic", mr: 13 },
        { title: "Ocucor", acquisition: "Energy Lab", lab: "Energy Lab", mr: 8 },
        { title: "Kitgun (Catchmoon)", acquisition: "Rude Zuud (Fortuna)" },
        { title: "Kitgun (Gaze)", acquisition: "Rude Zuud (Fortuna)" },
        { title: "Kitgun (Rattleguts)", acquisition: "Rude Zuud (Fortuna)" },
        { title: "Kitgun (Tombfinger)", acquisition: "Rude Zuud (Fortuna)" },
        { title: "Akjagara Prime", acquisition: "Relic", mr: 12},
        { title: "Plinx", acquisition: "Market", mr: 6 },
      ],
    },
    {
      title : "Melee",
      list: [
        { title: "Ack & Brunt", acquisition: "Chem Lab", lab: "Chem Lab", mr: 3 },
        { title: "Amphis", acquisition: "Junction/Market" },
        { title: "Anku", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 3 },
        { title: "Ankyros", acquisition: "Market" },
        { title: "Ankyros Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Atterax", acquisition: "Market", mr: 2 },
        { title: "Bo", acquisition: "Market" },
        { title: "Bo Prime", acquisition: "Vaulted", vaulted: true, mr: 5 },
        { title: "Boltace", acquisition: "Market", mr: 2 },
        { title: "Broken Scepter", acquisition: "The War Within(Quest)", mr: 5 },
        { title: "Broken War", acquisition: "The Second Dream(Quest)", mr: 10 },
        { title: "Caustacyst", acquisition: "Bio Lab", lab: "Bio Lab", mr: 7 },
        { title: "Ceramic Dagger", acquisition: "Alert", mr: 3 },
        { title: "Cerata", acquisition: "Bio Lab", lab: "Bio Lab", mr: 3 },
        { title: "Cronus", acquisition: "Captain Vor" },
        { title: "Dakra Prime", acquisition: "Vaulted", vaulted: true, mr: 6 },
        { title: "Dark Dagger", acquisition: "Alert" },
        { title: "Dark Split-Sword", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 5 },
        { title: "Dark Sword", acquisition: "Alert" },
        { title: "Destreza", acquisition: "Market", mr: 7 },
        { title: "Dex Dakra", acquisition: "Anniversary" },
        { title: "Dragon Nikana", acquisition: "Market", mr: 8 },
        { title: "Dual Cleavers", acquisition: "Market", mr: 3 },
        { title: "Dual Ether", acquisition: "Market" },
        { title: "Dual Heat Swords", acquisition: "Market" },
        { title: "Dual Ichor", acquisition: "Bio Lab", mr: 6 },
        { title: "Dual Kamas", acquisition: "Market", mr: 1 },
        { title: "Dual Kamas Prime", acquisition: "Vaulted", vaulted: true, mr: 6 },
        { title: "Dual Raza", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 6 },
        { title: "Dual Skana", acquisition: "Market" },
        { title: "Dual Zoren", acquisition: "Market", mr: 2 },
        { title: "Ether Daggers", acquisition: "Stolen Dreams(Quest)/Market" },
        { title: "Ether Reaper", acquisition: "Market", mr: 3 },
        { title: "Ether Sword", acquisition: "Market" },
        { title: "Fang", acquisition: "Market" },
        { title: "Fang Prime", acquisition: "Relic" },
        { title: "Fragor", acquisition: "Market", mr: 2 },
        { title: "Fragor Prime", acquisition: "Vaulted", vaulted: true, mr: 7 },
        { title: "Furax", acquisition: "Market" },
        { title: "Furax Wraith", acquisition: "Cetus Bounty" },
        { title: "Galatine", acquisition: "Market", mr: 3 },
        { title: "Galatine Prime", acquisition: "Vaulted", vaulted: true, mr: 13 },
        { title: "Gazal Machete", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 5 },
        { title: "Glaive", acquisition: "Alert", mr: 1 },
        { title: "Glaive Prime", acquisition: "Vaulted", vaulted: true, mr: 10 },
        { title: "Gram", acquisition: "Market", mr: 2 },
        { title: "Halikar", acquisition: "Market", mr: 7 },
        { title: "Hate", acquisition: "Stalker", mr: 2 },
        { title: "Heat Dagger", acquisition: "Alert" },
        { title: "Heat Sword", acquisition: "Once Awake(Quest)/Alert" },
        { title: "Heliocor", acquisition: "Cephalon Simaris", mr: 9 },
        { title: "Hirudo", acquisition: "Market", mr: 7 },
        { title: "Jat Kittag", acquisition: "Chem Lab", lab: "Chem Lab", mr: 5 },
        { title: "Jaw Sword", acquisition: "Alert", mr: 1 },
        { title: "Kama", acquisition: "Market", mr: 1 },
        { title: "Karyst", acquisition: "Market" },
        { title: "Kesheg", acquisition: "Chem Lab", lab: "Chem Lab", mr: 7 },
        { title: "Kestrel", acquisition: "Market" },
        { title: "Kogake", acquisition: "Market" },
        { title: "Kronen", acquisition: "Market", mr: 3 },
        { title: "Lacera", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 7 },
        { title: "Lecta", acquisition: "Market" },
        { title: "Lesion", acquisition: "Market", mr: 7 },
        { title: "Machete", acquisition: "Daily Login", mr: 1 },
        { title: "Machete Wraith", acquisition: "Baro Ki'Teer", mr: 1 },
        { title: "Magistar", acquisition: "Market", mr: 1 },
        { title: "Mios", acquisition: "Bio Lab", lab: "Bio Lab", mr: 8 },
        { title: "Mire", acquisition: "Market" },
        { title: "MK1-Bo", acquisition: "Market" },
        { title: "MK1-Furax", acquisition: "Market" },
        { title: "Nami Skyla", acquisition: "Tenno Lab", lab: "Tenno Lab" },
        { title: "Nami Solo", acquisition: "Market" },
        { title: "Nikana", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 4 },
        { title: "Nikana Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Ninkondi", acquisition: "Market" },
        { title: "Obex", acquisition: "Market" },
        { title: "Ohma", acquisition: "Market", mr: 8 },
        { title: "Okina", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 5 },
        { title: "Orthos", acquisition: "Market", mr: 2 },
        { title: "Orthos Prime", acquisition: "Relic", mr: 2 },
        { title: "Orvius", acquisition: "The War Within(Quest) / Cephalon Simaris", mr: 6 },
        { title: "Pangolin Sword", acquisition: "Alert", mr: 2 },
        { title: "Plasma Sword", acquisition: "Alert" },
        { title: "Prisma Dual Cleavers", acquisition: "Baro Ki'Teer", mr: 3 },
        { title: "Prisma Skana", acquisition: "Baro Ki'Teer" },
        { title: "Prova", acquisition: "Energy Lab", lab: "Energy Lab", mr: 3 },
        { title: "Prova Vandal", acquisition: "Baro Ki'Teer", mr: 3 },
        { title: "Rakta Dark Dagger", acquisition: "Red Veil(Syndicate)", mr: 8 },
        { title: "Reaper Prime", acquisition: "Vaulted", vaulted: true, mr: 2 },
        { title: "Redeemer", acquisition: "Market", mr: 4 },
        { title: "Ripkas", acquisition: "Market", mr: 3 },
        { title: "Sancti Magistar", acquisition: "New Loka(Syndicate)", mr: 8 },
        { title: "Sarpa", acquisition: "Market", mr: 8 },
        { title: "Scindo", acquisition: "Market", mr: 2 },
        { title: "Scindo Prime", acquisition: "Vaulted", vaulted: true, mr: 4 },
        { title: "Scoliac", acquisition: "Bio Lab", lab: "Bio Lab", mr: 6 },
        { title: "Secura Lecta", acquisition: "Perrin Sequence(Syndicate)", mr: 8 },
        { title: "Serro", acquisition: "Energy Lab", lab: "Energy Lab", mr: 2 },
        { title: "Shaku", acquisition: "Tenno Lab", lab: "Tenno Lab" },
        { title: "Sheev", acquisition: "Invasion" },
        { title: "Sibear", acquisition: "Market", mr: 6 },
        { title: "Silva & Aegis", acquisition: "Tenno Lab", lab: "Tenno Lab" },
        { title: "Skana", acquisition: "Market" },
        { title: "Skana Prime", acquisition: "Unobtainable", unobtainable: true },
        { title: "Sydon", acquisition: "Chem Lab", lab: "Chem Lab", mr: 2 },
        { title: "Synoid Heliocor", acquisition: "Cephalon Suda(Syndicate)", mr: 9 },
        { title: "Tekko", acquisition: "Market", mr: 2 },
        { title: "Telos Boltace", acquisition: "Aribiters of Hexis(Syndicate)", mr: 8 },
        { title: "Tipedo", acquisition: "Market", mr: 3 },
        { title: "Tonbo", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 3 },
        { title: "Twin Basolk", acquisition: "Market", mr: 3 },
        { title: "Vaykor Sydon", acquisition: "Steel Meridian(Syndicate)", mr: 8 },
        { title: "Venka", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 3 },
        { title: "Venka Prime", acquisition: "Vaulted", vaulted: true, mr: 8 },
        { title: "War", acquisition: "Shadow Stalker", mr: 10 },
        { title: "Zenistar", acquisition: "Daily Login", mr: 6 },
        { title: "Prisma Obex", acquisition: "Baro Ki'Teer" },
        { title: "Silva & Aegis Prime", acquisition: "Vaulted", vaulted: true, mr: 12},
        { title: "Guandao", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 4 },
        { title: "Endura", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 7 },
      	{ title: "Arca Titron", acquisition: "Market", mr: 10 },
        { title: "Nami Skyla Prime", acquisition: "Relic", mr: 11 },
        { title: "Twin Krohkur", acquisition: "Chem Lab", lab: "Chem Lab", mr: 6 },
        { title: "Jat Kusar", acquisition: "Chem Lab", lab: "Chem Lab", mr: 10 },
        { title: "Krohkur", acquisition: "Market", mr: 5 },
        { title: "Volnus", acquisition: "Market", mr: 4 },
        { title: "Zaw (Balla)", acquisition: "Hok's Anvil"},
        { title: "Zaw (Ooltha)", acquisition: "Hok's Anvil"},
        { title: "Zaw (Kronsh)", acquisition: "Hok's Anvil"},
        { title: "Zaw (Dehtat)", acquisition: "Hok's Anvil"},
        { title: "Zaw (Mewan)", acquisition: "Hok's Anvil"},
        { title: "Zaw (Cyath)", acquisition: "Hok's Anvil"},
        { title: "Sigma & Octantis", acquisition: "Daily Login"},
        { title: "Zaw (Plague Keewar)", acquisition: "Operation: Plague Star"},
        { title: "Zaw (Plague Kripath)", acquisition: "Operation: Plague Star"},
        { title: "Cassowar", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 5 },
        { title: "Kogake Prime", acquisition: "Relic", mr: 10 },
        { title: "Gunsen", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 10 },
        { title: "Kronen Prime", acquisition: "Tenno Lab", lab: "Tenno Lab", mr: 8 },
        { title: "Dual Keres", acquisition: "Market", mr: 7 },
        { title: "Zaw (Sepfahn)", acquisition: "Hok's Anvil"},
        { title: "Zaw (Rabvee)", acquisition: "Hok's Anvil"},
        { title: "Zaw (Dokrahm)", acquisition: "Hok's Anvil"},
        { title: "Destreza Prime", acquisition: "Relic", mr: 10 },
        { title: "Gram Prime", acquisition: "Relic", mr: 14 },
        { title: "Paracesis", acquisition: "Chimera Prologue (Quest)", mr: 10 },
        { title: "Pupacyst", acquisition: "Bio Lab", lab: "Bio Lab", mr: 7 },
        { title: "Falcor", acquisition: "Energy Lab", lab: "Energy Lab", mr: 8 },
        { title: "Skiajati", acquisition: "The Sacrifice (Quest)", mr: 11 },
        { title: "Kreska", acquisition: "Energy Lab", lab: "Energy Lab", mr: 6 },
        { title: "Redeemer Prime", acquisition: "Relic", mr: 10 },
        { title: "Galvacord", acquisition: "Market", mr: 6 },
        { title: "Cobra & Crane", acquisition: "Market", mr: 10 },
        { title: "Wolf Sledge", acquisition: "Wolf of Saturn Six (Nightwave)", mr: 7 },
        { title: "Tatsu", acquisition: "Market", mr: 7 },
        { title: "Tipedo Prime", acquisition: "Relic", mr: 10 },
        { title: "Ninkondi Prime", acquisition: "Relic", mr: 10 },
      ],
    },
    {
      title : "Companions",
      list: [
        { title: "Helios Prime", acquisition: "Vaulted", vaulted: true, mr: 8 },
        { title: "Djinn", acquisition: "Bio Lab", lab: "Bio Lab" },
        { title: "Helios", acquisition: "Energy Lab", lab: "Energy Lab" },
        { title: "Carrier", acquisition: "Market" },
        { title: "Carrier Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Dethcube", acquisition: "Market" },
        { title: "Shade", acquisition: "Market" },
        { title: "Diriga", acquisition: "Market" },
        { title: "Prisma Shade", acquisition: "Baro Ki'Teer" },
        { title: "Taxon", acquisition: "Venus Junction" },
        { title: "Wyrm", acquisition: "Market" },
        { title: "Wyrm Prime", acquisition: "Vaulted", vaulted: true },
        { title: "Adarza Kavat", acquisition: "Incubator Segment" },
        { title: "Chesa Kubrow", acquisition: "Incubator Segment" },
        { title: "Helminth Charger", acquisition: "Incubator Segment" },
        { title: "Huras Kubrow", acquisition: "Incubator Segment" },
        { title: "Raksa Kubrow", acquisition: "Incubator Segment" },
        { title: "Sahsa Kubrow", acquisition: "Incubator Segment" },
        { title: "Smeeta Kavat", acquisition: "Incubator Segment" },
        { title: "Sunika Kubrow", acquisition: "Incubator Segment" },
        { title: "Oxylus", acquisition: "The Business" },
        { title: "Moa (Lambeo)", acquisition: "Legs (Fortuna)" },
        { title: "Moa (Oloro)", acquisition: "Legs (Fortuna)" },
        { title: "Moa (Para)", acquisition: "Legs (Fortuna)" },
      ],
    },
    {
      title : "Archwings",
      list: [
        { title: "Amesha", acquisition: "Tenno Lab", lab: "Tenno Lab" },
        { title: "Elytron", acquisition: "Tenno Lab", lab: "Tenno Lab" },
        { title: "Itzal", acquisition: "Tenno Lab", lab: "Tenno Lab" },
        { title: "Odonata", acquisition: "The Archwing(Quest)" },
        { title: "Odonata Prime", acquisition: "Vaulted", vaulted: true },
      ],
    },
    {
      title : "Arch-melee",
      list: [
        { title: "Agkuza", acquisition: "Market" },
        { title: "Centaur", acquisition: "Market" },
        { title: "Kaszas", acquisition: "Market" },
        { title: "Knux", acquisition: "Chem Lab", lab: "Chem Lab" },
        { title: "Onorix", acquisition: "Market" },
        { title: "Rathbone", acquisition: "Market" },
        { title: "Veritux", acquisition: "The Archwing(Quest)" },
        { title: "Prisma Veritux", acquisition: "Baro Ki'Teer" },
      ],
    },
    {
      title : "Arch-guns",
      list: [
        { title: "Corvas", acquisition:"Market" },
        { title: "Cyngas", acquisition:"Market" },
        { title: "Dual Decurion", acquisition:"Market" },
        { title: "Fluctus", acquisition:"Tenno Lab", lab: "Tenno Lab" },
        { title: "Grattler", acquisition:"Chem Lab", lab: "Chem Lab" },
        { title: "Imperator", acquisition:"The Archwing(Quest)" },
        { title: "Imperator Vandal", acquisition:"Fomorian Sabotage" },
        { title: "Phaedra", acquisition:"Market" },
        { title: "Velocitus", acquisition:"Tenno Lab", lab: "Tenno Lab" },
        { title: "Larkspur", acquisition:"Tenno Lab", lab: "Tenno Lab" },
      ],
    },
    {
      title : "Amps",
      list: [
        { title: "Mote", acquisition: "Quill Onkko"},
        { title: "Raplak", acquisition: "Quill Onkko"},
        { title: "Shwaak", acquisition: "Quill Onkko"},
        { title: "Granmu", acquisition: "Quill Onkko"},
        { title: "Rahn", acquisition: "Quill Onkko"},
        { title: "Cantic", acquisition: "Little Duck"},
        { title: "Lega", acquisition: "Little Duck"},
        { title: "Klamora", acquisition: "Little Duck"},
      ],
    },
    {
      title : "K-Drives",
      list: [
        { title: "Bad Baby", acquisition: "Ventkids (Fortuna)" },
        { title: "Flatbelly", acquisition: "Ventkids (Fortuna)" },
        { title: "Needlenose", acquisition: "Ventkids (Fortuna)" },
        { title: "Runway", acquisition: "Ventkids (Fortuna)" },
      ],
    },
  ]
};

export default listData;
