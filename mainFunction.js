
//Objects definition
var LegendaryAbility = function(name,description,values,legendaries,aspectVariables) {
  this.name = name;
  this.description = description;
  this.values = values;
  this.legendaries = legendaries;
  this.aspectVariables = aspectVariables;
};

var Role = function(name,legendaries,skills) {
  this.name = name;
  this.legendaries = legendaries;
  this.skills = skills;

};
var secondOrigin = function(name,type,description,originString,originVar,approaches,domains,personalities,totalValues) {
  this.name = name;
  this.type = type;
  this.description = description;
  this.originString = originString;
  this.originVar = originVar;
  this.approaches = approaches;
  this.domains = domains;
  this.personalities = personalities;
  this.totalValues = totalValues;
};
var parameterCalculator = function(name,type,values,legendaries,skills) {
  this.name = name;
  this.type = type;
  this.values = values;
  this.legendaries = legendaries;
  this.skills = skills;

};
var adjective = function(name,values) {
  this.name = name;
  this.values = values;

};

var radios=["logos1","logqos2","logos3","logos4","kosmos1","kosmos2","kosmos3","kosmos4","eros1","eros2","eros3","eros4"]
var displayArray = []


var rolesChoiceArray = [
Default = new Role("Default",[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),
MeatShield = new Role("Tank",[2,4,3,1,3,2,3,1,1,3,3,2,-1,-1,3,-2,1,-2,-1,0,2,3,0,2,-1,3,1,-1,2,2,4,3,-1,1,2,2,-2,-1,3,2,-3,-2,0,-2,-1,4,3,4,2,-1,1,-1,0,-2,3,1,-1,2,-2,-1,-2,3,2,1,-2,3],[3,-2,-1,2,1,4,3,3,4,3,-1,-2,1,0,4]),
DamageDealer = new Role("Damage Dealer",[2,0,0,1,2,3,2,4,2,4,3,-2,-3,-1,-2,4,1,-1,0,3,1,3,4,-1,3,2,1,0,-1,4,2,-1,3,1,2,2,3,1,3,3,-4,4,1,1,4,1,4,2,-1,-2,4,-2,-2,-1,1,2,3,4,2,1,2,1,4,4,-2,3],[3,-1,-2,3,-2,4,4,1,1,0,-1,-2,4,4,3]),
PartyFace = new Role("Party Face",[1,1,0,3,1,4,2,-3,-3,-4,-3,1,4,3,3,1,1,2,4,2,4,1,-2,4,-1,-1,-1,-2,-1,-3,-3,-2,3,4,-1,-1,1,0,-3,-2,1,-3,-3,3,-2,-1,-4,-4,4,4,-4,4,4,-2,-3,3,-2,2,2,1,2,3,1,4,1,-2],[1,0,4,2,1,-2,2,2,-1,4,4,4,-2,-1,0]),
SkillMonkey = new Role("Skill Monkey",[4,4,3,4,4,4,4,-2,-3,-2,-1,4,2,2,2,-1,-1,4,3,2,2,0,-2,-1,-1,3,2,1,2,-1,-1,1,-1,-2,1,2,-2,3,1,3,3,0,1,4,2,1,-2,-3,-1,-2,-1,0,-1,3,2,1,2,2,4,-2,3,3,1,2,4,1],[3,4,1,4,2,1,4,4,1,0,1,4,1,4,3]),
SupportController = new Role("Support-Controller",[4,4,3,3,4,4,4,1,3,3,4,4,4,2,4,1,3,4,4,3,4,4,1,4,-1,3,3,4,3,2,3,3,4,3,2,3,3,0,3,3,-1,-2,3,2,2,4,-1,-1,4,4,0,4,4,2,4,2,1,2,0,1,1,-1,-3,-1,4,4],[2,-1,4,4,4,2,4,1,2,3,4,-1,-2,1,4]),


]

var parametersArray = [
// Approaches
Careful = new parameterCalculator("Careful","Approach",[0,15,0],[],[]),
Clever = new parameterCalculator("Clever","Approach",[20,0,0],[],[]),
Flashy = new parameterCalculator("Flashy","Approach",[5,10,10],[],[]),
Forceful = new parameterCalculator("Forceful","Approach",[0,15,15],[],[]),
Quick = new parameterCalculator("Quick","Approach",[10,0,10],[],[]),
Sneaky = new parameterCalculator("Sneaky","Approach",[15,0,15],[],[]),

// Domains

War = new parameterCalculator("War Deity","Domain",[0,10,15],[],[]),
Wisdom = new parameterCalculator("Wisdom Deity","Domain",[20,20,0],[],[]),
Leader = new parameterCalculator("Leader of the Gods","Domain",[10,20,5],[],[]),
Father = new parameterCalculator("Progenitor of the Gods","Domain",[10,15,10],[],[]),
Fertility = new parameterCalculator("Fertility Deity","Domain",[0,5,15],[],[]),
Love = new parameterCalculator("Love Deity","Domain",[0,0,20],[],[]),
Travel = new parameterCalculator("Travel Deity","Domain",[5,0,5],[],[]),
Water = new parameterCalculator("Water Deity","Domain",[5,10,10],[],[]),
Sky = new parameterCalculator("Sky Deity","Domain",[15,15,0],[],[]),
Wit = new parameterCalculator("Wit Deity","Domain",[15,0,10],[],[]),
Death = new parameterCalculator("Death Deity","Domain",[0,10,10],[],[]),
Fire = new parameterCalculator("Fire Deity","Domain",[5,5,10],[],[]),
Earth = new parameterCalculator("Earth Deity","Domain",[0,15,20],[],[]),
Justice = new parameterCalculator("Justice Deity","Domain",[15,20,0],[],[]),
Moon = new parameterCalculator("Moon Deity","Domain",[0,15,15],[],[]),
Sun = new parameterCalculator("Sun Deity","Domain",[15,15,10],[],[]),
Knowledge = new parameterCalculator("Knowledge Deity","Domain",[20,0,0],[],[]),
Darkness = new parameterCalculator("Darkness Deity","Domain",[5,10,15],[],[]),
Crafting = new parameterCalculator("Crafting Deity","Domain",[15,5,5],[],[]),
Nature = new parameterCalculator("Nature Deity","Domain",[0,10,15],[],[]),
Order = new parameterCalculator("Order Deity","Domain",[5,20,0],[],[]),

// Roles

General = new parameterCalculator("General","Personality",[8,16,4],[],[]),
Politician = new parameterCalculator("Politician","Personality",[12,16,8],[],[]),
FreeSpirit = new parameterCalculator("Free Spirit","Personality",[12,0,12],[],[]),
King = new parameterCalculator("King","Personality",[8,16,12],[],[]),
Mother = new parameterCalculator("Mother","Personality",[0,8,16],[],[]),
Thinker = new parameterCalculator("Thinker","Personality",[20,0,0],[],[]),
Harmonizer = new parameterCalculator("Harmonizer","Personality",[4,8,16],[],[]),
Prince = new parameterCalculator("Prince","Personality",[12,8,12],[],[]),
Enforcer = new parameterCalculator("Enforcer","Personality",[4,16,8],[],[]),
Manipulator = new parameterCalculator("Manipulator","Personality",[12,4,12],[],[]),
Trickster = new parameterCalculator("Trickster","Personality",[8,0,12],[],[]),
Diplomat = new parameterCalculator("Diplomat","Personality",[12,12,8],[],[]),
Protector = new parameterCalculator("Protector","Personality",[4,16,4],[],[]),
Hunter = new parameterCalculator("Hunter","Personality",[4,8,16],[],[]),

// Pantheons

Greek = new parameterCalculator("Greek","God",[16,8,12],[],[]),
Chinese = new parameterCalculator("Chinese","God",[8,16,4],[],[]),
African = new parameterCalculator("African","God",[4,8,12],[],[]),
Egyptian = new parameterCalculator("Egyptian","God",[8,20,4],[],[]),
Norse = new parameterCalculator("Norse","God",[8,8,16],[],[]),
Maori = new parameterCalculator("Maori","God",[4,8,16],[],[]),
Japanese = new parameterCalculator("Japanese","God",[4,16,16],[],[]),
Aztec = new parameterCalculator("Aztec","God",[4,12,12],[],[]),
Indian = new parameterCalculator("Indian","God",[12,16,12],[],[]),
Celtic = new parameterCalculator("Celtic","God",[4,8,16],[],[]),
Inca = new parameterCalculator("Inca","God",[8,12,8],[],[]),
BogiMuzhchin = new parameterCalculator("Slavic","God",[8,12,8],[],[]),

// Titans

Light = new parameterCalculator("Light","Titan",[12,18,0],[],[]),
Ocean = new parameterCalculator("Ocean","Titan",[2,10,10],[],[]),
OrderTitan = new parameterCalculator("Order","Titan",[10,20,0],[],[]),
World = new parameterCalculator("World","Titan",[2,10,10],[],[]),
FireTitan = new parameterCalculator("Fire","Titan",[6,12,16],[],[]),
Patala = new parameterCalculator("Depths","Titan",[0,10,10],[],[]),
SkyTitan = new parameterCalculator("Sky","Titan",[12,8,4],[],[]),
Night = new parameterCalculator("Night","Titan",[5,10,15],[],[]),
DeathTitan = new parameterCalculator("Death","Titan",[0,10,10],[],[]),


// Mythborn

SummerCourt = new parameterCalculator("Summer Court","Otherworld",[5,5,12],[],[]),
WinterCourt = new parameterCalculator("Winter Court","Otherworld",[0,5,12],[],[]),
DarkForest = new parameterCalculator("Dark Forest","Otherworld",[0,10,16],[],[]),
Shambhala = new parameterCalculator("Shambhala","Otherworld",[4,8,16],[],[]),
JadeSea = new parameterCalculator("Jade Sea","Otherworld",[5,10,10],[],[]),
//Utopia = new parameterCalculator("Utopia","Otherworld",[15,5,15],[],[]),

// Enlightened

Illuminati = new parameterCalculator("Illuminati","Enlightened",[12,4,0],[],[]),
OrderoftheJadeFist = new parameterCalculator("Order of the Jade Fist","Enlightened",[12,16,6],[],[]),
Cabal = new parameterCalculator("Cabal","Enlightened",[16,4,4],[],[]),
CircleofMerlin = new parameterCalculator("Circle of Merlin","Enlightened",[4,14,4],[],[]),


// Party Roles


Face = new parameterCalculator("Face","Role",[0,0,0],[],[]),
Tank = new parameterCalculator("Tank","Role",[0,0,0],[],[]),
DamageDealer = new parameterCalculator("Damage Dealer","Role",[0,0,0],[],[]),
SkillMonkey = new parameterCalculator("Skill Monkey","Role",[0,0,0],[],[]),
SupportController = new parameterCalculator("Support-Controller","Role",[0,0,0],[],[])


]
var secondOriginArray = [
 Tūmatauenga= new secondOrigin("Tūmatauenga","God","God of War and Subdueing ",Maori.name,Maori,[Forceful,Flashy,Clever],[War,Leader],[King,General]), 
 TaneMahuta= new secondOrigin("Tane Mahuta","God","God of War and Subdueing ",Maori.name,Maori,[Clever,Forceful,Careful],[Nature,Wisdom],[Harmonizer,Thinker]), 
 Tangaroa= new secondOrigin("Tangaroa","God","God of the Sea",Maori.name,Maori,[Careful,Forceful,Sneaky],[Water],[FreeSpirit,Harmonizer]), 
 Tawhirimatea= new secondOrigin("Tawhirimatea","God","Renegade God of weather, lightning and clouds",Maori.name,Maori,[Forceful,Flashy,Sneaky],[Sky],[FreeSpirit,General]), 
 Rehua= new secondOrigin("Rehua","God","God of Stars",Maori.name,Maori,[Careful,Clever,Sneaky],[Sky,Wisdom],[Thinker,FreeSpirit]), 
 HineNuiTePo= new secondOrigin("Hine-nui-te-po","God","Goddess of Night and Death",Maori.name,Maori,[Clever,Sneaky,Careful],[Death,Moon],[Thinker,Politician]), 
 Ruaumoko= new secondOrigin("Ruaumoko","God","God of Warmth, Earthquakes and Volcanoes",Maori.name,Maori,[Careful,Clever,Forceful],[Earth,Fire],[Harmonizer]), 
 Rongo= new secondOrigin("Rongo","God","God of Peace and Culture",Maori.name,Maori,[Clever,Sneaky,Careful],[Fertility,Wisdom],[Politician,Thinker]),
 HaumiaTiketike= new secondOrigin("Haumia-Tiketike","God","God of Wild Food",Maori.name,Maori,[Sneaky,Forceful,Careful],[Wit,Nature],[Hunter]),
 Mahuika= new secondOrigin("Mahuika","God","Goddess of Fire ",Maori.name,Maori,[Forceful,Flashy,Quick],[Fire],[FreeSpirit]),

 Anubis= new secondOrigin("Anubis","God","God of Death and Judge of the Underworld ",Egyptian.name,Egyptian,[Clever,Careful,Forceful],[Death,Justice],[Enforcer]),
 Horus= new secondOrigin("Horus","God","God of Justice",Egyptian.name,Egyptian,[Clever,Forceful,Quick],[Justice,Leader],[Prince,Politician]),
 Hathor= new secondOrigin("Hathor","God","Goddess of Love, Fertility and Motherhood",Egyptian.name,Egyptian,[Careful,Flashy,Clever],[Fertility ,Sun],[Mother,Diplomat]),
 Isis= new secondOrigin("Isis","God","Goddess of Magic, Inventor of Heku",Egyptian.name,Egyptian,[Clever,Sneaky,Careful],[Wisdom,Wit],[Politician,Thinker]),
 Osiris= new secondOrigin("Osiris","God","Lord of the Underworld",Egyptian.name,Egyptian,[Clever,Flashy,Sneaky],[Death],[King]),
 AtumRe= new secondOrigin("Atum Re","God","God of the Sun",Egyptian.name,Egyptian,[Clever,Flashy,Forceful],[Father,Sun],[King]),
 Set= new secondOrigin("Set","God","God of Sky and Guardian of the Desert",Egyptian.name,Egyptian,[Clever,Sneaky,Forceful],[Sky],[Manipulator,Protector]),
 Sekhmet= new secondOrigin("Sekhmet","God","Goddess of War",Egyptian.name,Egyptian,[Forceful,Quick,Flashy],[War],[General,Hunter]),
 Bastet= new secondOrigin("Bastet","God","Keeper of Secrets",Egyptian.name,Egyptian,[Clever,Sneaky,Quick],[Wisdom],[Thinker,Protector]),
 Hapi= new secondOrigin("Hapi","God","God of Healing and Self-Sacrifice",Egyptian.name,Egyptian,[Flashy,Careful,Clever],[Fertility,Love],[Harmonizer,Protector]), 
 Khepri= new secondOrigin("Khepri","God","Goddess of Leadership",Egyptian.name,Egyptian,[Forceful,Clever,Sneaky],[War,Wit],[General,Enforcer]),
 Ptah= new secondOrigin("Ptah","God","God of Artistry",Egyptian.name,Egyptian,[Clever,Quick,Flashy],[Crafting],[Thinker,FreeSpirit]),
 Rain= new secondOrigin("Rain","God","Goddess of the Veil",Egyptian.name,Egyptian,[Careful,Clever,Forceful],[Death,Travel],[FreeSpirit,Protector]),
 Sobek= new secondOrigin("Sobek","God","God of Water and Retribution",Egyptian.name,Egyptian,[Careful,Forceful,Sneaky],[Water],[FreeSpirit,Hunter]),
 Thoth= new secondOrigin("Thoth","God","God of Knowledge",Egyptian.name,Egyptian,[Clever,Sneaky,Quick],[Wisdom],[Thinker]),
 Geb= new secondOrigin("Geb","God","God of the Earth",Egyptian.name,Egyptian,[Careful,Flashy,Clever],[Earth],[Protector]),

 Agni= new secondOrigin("Agni","God","God of FIre and Sacrifice",Indian.name,Indian,[Clever,Flashy,Careful],[Fire],[FreeSpirit]),
 Brahma= new secondOrigin("Brahma","God","The Creator",Indian.name,Indian,[Clever,Careful,Sneaky],[Knowledge,Father],[Thinker]),
 Ganesha= new secondOrigin("Ganesha","God","God of good luck and Wisdom",Indian.name,Indian,[Clever,Forceful,Sneaky],[Travel,Wisdom],[Harmonizer,Protector]),
 Indra= new secondOrigin("Indra","God","God of war and weather",Indian.name,Indian,[Forceful,Clever,Flashy],[Sky,Leader],[King]),
 Kali= new secondOrigin("Kali","God","Goddess of annihilation",Indian.name,Indian,[Forceful,Flashy,Quick],[War,Darkness],[Enforcer]),
 Lakshmi= new secondOrigin("Lakshmi","God","Goddess of fortune",Indian.name,Indian,[Clever,Careful,Sneaky],[Wit],[FreeSpirit,Manipulator]),
 Parvati= new secondOrigin("Parvati","God","Goddess of feminity",Indian.name,Indian,[Clever,Sneaky,Careful],[Love,Fertility],[Diplomat,Mother]),
 Sarasvati= new secondOrigin("Sarasvati","God","Goddess of artists",Indian.name,Indian,[Flashy,Careful,Sneaky],[Crafting],[FreeSpirit]),
 Shiva= new secondOrigin("Shiva","God","The Destroyer",Indian.name,Indian,[Clever,Flashy,Forceful],[Order,Father],[FreeSpirit,Thinker]),
 Surya= new secondOrigin("Surya","God","God of the sun",Indian.name,Indian,[Flashy,Forceful,Quick],[Sun],[FreeSpirit]),
 Vishnu= new secondOrigin("Vishnu","God","The Preserver",Indian.name,Indian,[Careful,Forceful,Clever],[Wisdom,Order],[Protector,Harmonizer]),
 Yama= new secondOrigin("Yama","God","Lord of the Dead",Indian.name,Indian,[Sneaky,Careful,Clever],[Death],[Enforcer,Thinker]),
 Murugan= new secondOrigin("Murugan","God","General of the Divine Armies",Indian.name,Indian,[Forceful,Flashy,Quick],[War],[General]),
 
 Aphrodite= new secondOrigin("Aphrodite","God","Goddess of love and beauty",Greek.name,Greek,[Flashy,Forceful,Careful],[Love],[Manipulator]),
 Apollo= new secondOrigin("Apollo","God","God of prophecy, the sun, and art",Greek.name,Greek,[Flashy,Careful,Clever],[Sun,Crafting],[Politician]),
 Archimedes= new secondOrigin("Archimedes","God","God of Logic",Greek.name,Greek,[Clever,Careful,Forceful],[Crafting,Knowledge],[Thinker]),
 Ares= new secondOrigin("Ares","God","God of War",Greek.name,Greek,[Forceful,Flashy,Careful],[War],[General]),
 Artemis= new secondOrigin("Artemis","God","Goddess of chastity, the moon, and hunting",Greek.name,Greek,[Careful,Sneaky,Quick],[Moon,War],[FreeSpirit]),
 Athena= new secondOrigin("Athena","God","Goddess of strategy and wisdom",Greek.name,Greek,[Clever,Careful,Forceful],[War,Wisdom],[General]),
 Demeter= new secondOrigin("Demeter","God","Goddess of Nature and Agriculture",Greek.name,Greek,[Flashy,Forceful,Clever],[Fertility],[Mother]),
 Dionysus= new secondOrigin("Dionysus","God","God of Wine, Friendship and Liberty",Greek.name,Greek,[Flashy,Careful,Clever],[Wit],[FreeSpirit,Harmonizer]),
 Gerald= new secondOrigin("Gerald","God","God of Rock 'n' Roll",Greek.name,Greek,[Flashy,Forceful,Quick],[Fire,War],[Enforcer]),
 Hades= new secondOrigin("Hades","God","Ruler of the Underworld",Greek.name,Greek,[Careful,Sneaky,Clever],[Death],[Politician,King]),
 Hephaestus= new secondOrigin("Hephaestus","God","God of the Forge and Invention",Greek.name,Greek,[Clever,Careful,Forceful],[Crafting,Fire],[Thinker]),
 Hera= new secondOrigin("Hera","God","Goddess of marriage and politics",Greek.name,Greek,[Forceful,Sneaky,Clever],[Leader,Fertility],[]),
 Herakles= new secondOrigin("Herakles","God","God of Strength",Greek.name,Greek,[Forceful,Flashy,Quick],[War],[Prince,Enforcer]),
 Hermes= new secondOrigin("Hermes","God","God of thieves, merchants, and tricksters",Greek.name,Greek,[Quick,Clever,Sneaky],[Travel,Wit],[FreeSpirit]),
 Lyra= new secondOrigin("Lyra","God","Goddess of Freedom",Greek.name,Greek,[Clever,Quick,Sneaky],[Sky,Wit],[FreeSpirit]),
 Poseidon= new secondOrigin("Poseidon","God","God of the sea",Greek.name,Greek,[Flashy,Forceful,Careful],[Water],[King,FreeSpirit]),
 Zeus= new secondOrigin("Zeus","God","God of Leadership, Thunder, Sky, and Power",Greek.name,Greek,[Flashy,Forceful,Clever],[Leader,Sky],[King,Politician]),

 Aganju= new secondOrigin("Aganju","God","God of War",African.name,African,[Forceful,Flashy,Quick],[War,Nature],[Enforcer]),
 Anansi= new secondOrigin("Anansi","God","Spider God of Tricks and Knowledge",African.name,African,[Clever,Flashy,Quick],[Knowledge,Wisdom],[Trickster,Harmonizer]),
Ayao= new secondOrigin("Ayao","God","Goddess of Air",African.name,African,[Clever,Forceful,Sneaky],[Sky,Wit],[Hunter,General]),
Azaka= new secondOrigin("Azaka","God","Goddess of Lightning",African.name,African,[Flashy,Clever,Quick],[Sky,Fire],[FreeSpirit]),
BaronSamedi= new secondOrigin("Baron Samedi","God","God of Death, Keeper of Guinee",African.name,African,[Flashy,Clever,Sneaky],[Death],[FreeSpirit,Harmonizer]),
Damballa= new secondOrigin("Damballa","God","God of the Sky",African.name,African,[Careful,Clever,Sneaky],[Sky],[Prince,Thinker]),
DeAllende= new secondOrigin("De-Allende","God","The Dreamweaver",African.name,African,[Clever,Quick,Flashy],[Moon,Knowledge],[Thinker,Trickster]),
Eledumare= new secondOrigin("Eledumare","God","Primordial Trinity, Father of the Gods",African.name,African,[Careful,Flashy,Forceful],[Father],[General]),
Erzulie= new secondOrigin("Erzulie","God","Goddess of Love and Flowers",African.name,African,[Flashy,Clever,Sneaky],[Love,Wit],[Harmonizer,Protector]),
Kalfu= new secondOrigin("Kalfu","God","God of Darkness",African.name,African,[Clever,Sneaky,Quick],[Darkness,Travel],[Manipulator,Trickster]),
Legba= new secondOrigin("Legba","God","God of Crossroads, Psychopomp",African.name,African,[Careful,Clever,Quick],[Wisdom,Travel],[Protector,Thinker]),
MamanBrigitte= new secondOrigin("Maman Brigitte","God","Goddess of Death",African.name,African,[Flashy,Careful,Quick],[Death],[FreeSpirit,Harmonizer]),
Olorun= new secondOrigin("Olorun","God","Primordial Trinity, and Ruler of Ikole Orun",African.name,African,[Careful,Clever,Forceful],[Leader,Sun],[King,Protector]),
Ogoun= new secondOrigin("Ogoun","God","God of Iron and Crafting",African.name,African,[Careful,Clever,Sneaky],[Crafting],[FreeSpirit]),
Shapona= new secondOrigin("Shapona","God","God of Earth, Disease and Healing",African.name,African,[Sneaky,Clever,Careful],[Earth,Death],[FreeSpirit,Thinker]),
Simbi= new secondOrigin("Simbi","God","God of Rain and Magic",African.name,African,[Sneaky,Clever,Careful],[Nature,Fertility],[Enforcer,Thinker]),
Yemoja= new secondOrigin("Yemoja","God","Goddess of Fertility and Women",African.name,African,[Careful,Clever,Quick],[Fertility],[Mother,Diplomat]),

Change= new secondOrigin("Chang'e","God","Goddess of the Moon",Chinese.name,Chinese,[Clever,Quick,Sneaky],[Moon],[Diplomat,Harmonizer]),
Chiyou= new secondOrigin("Chiyou","God","God of War",Chinese.name,Chinese,[Clever,Forceful,Quick],[War],[General,Thinker]),
Erlang= new secondOrigin("Erlang","God","God of Truth",Chinese.name,Chinese,[Clever,Careful,Quick],[Leader,Justice],[General,Enforcer]),
Fuxi= new secondOrigin("Fuxi","God","Creator Goddess and Muse of mankind",Chinese.name,Chinese,[Careful,Quick,Clever],[Father,Knowledge],[FreeSpirit,Thinker]),
GaoYao= new secondOrigin("Gao Yao","God","God of Law",Chinese.name,Chinese,[Forceful,Clever,Careful],[Knowledge,Justice],[Enforcer,Thinker]),
GuanYu= new secondOrigin("Guan Yu","God","18th Jade Emperor, God of Martial Power and Brotherhoods",Chinese.name,Chinese,[Forceful,Clever,Flashy],[Justice,War],[General,Enforcer]),
Houyi= new secondOrigin("Houyi","God","God of the Sun and Archery",Chinese.name,Chinese,[Forceful,Flashy,Clever],[Sun],[Diplomat,Politician]),
LeiGong= new secondOrigin("Lei Gong","God","God of Thunder",Chinese.name,Chinese,[Flashy,Forceful,Clever],[Sky,Fire],[Enforcer,Protector]),
Nezha= new secondOrigin("Nezha","God","God of Honor and Youth",Chinese.name,Chinese,[Flashy,Quick,Clever],[Justice,Wit],[Protector,FreeSpirit]),
Nuwa= new secondOrigin("Nuwa","God","Creator Goddess and Muse of mankind",Chinese.name,Chinese,[Careful,Quick,Clever],[Father,Knowledge],[FreeSpirit,Thinker]),
Shangdi= new secondOrigin("Shangdi","God","Yellow Emperor, Overseer of Tiàn",Chinese.name,Chinese,[Forceful,Clever,Careful],[Leader,Order],[King,Enforcer]),
Shennong= new secondOrigin("Shennong","God","God of Agriculture and Medicine",Chinese.name,Chinese,[Clever,Careful,Quick],[Knowledge,Nature],[Thinker,Harmonizer]),
SunWukong= new secondOrigin("Sun Wukong","God","Monkey King, God of Trickery and Strength",Chinese.name,Chinese,[Flashy,Quick,Clever],[Wit],[FreeSpirit,Trickster]),
Xiwangmu= new secondOrigin("Xiwangmu","God","Queen-Mother of the West and Keeper of the Golden Orchard",Chinese.name,Chinese,[Careful,Quick,Clever],[Wisdom,Nature],[Mother,Harmonizer]),
Yanluo= new secondOrigin("Yanluo","God","Overseer of the Dead and Keeper of Di Yu",Chinese.name,Chinese,[Clever,Forceful,Sneaky],[Death],[Thinker,Enforcer]),
Zhuanxu= new secondOrigin("Zhuanxu","God","Chinese",Chinese.name,Chinese,[Forceful,Clever,Quick],[Sky],[Enforcer,General]),

Aengus= new secondOrigin("Aengus","God","God of Love and Youth",Celtic.name,Celtic,[Flashy,Quick,Forceful],[Love,Wit],[Harmonizer,Protector]),
Aine= new secondOrigin("Aine","God","Goddess of Summer, Agriculture and Wealth",Celtic.name,Celtic,[Careful,Quick,Sneaky],[Nature,Fertility],[Diplomat,Protector]),
Brigid= new secondOrigin("Brigid","God","Goddess of Spring, Fertility and Dawn",Celtic.name,Celtic,[Clever,Careful,Quick],[Fertility,Sky],[Diplomat,Thinker]),
Cernunnos= new secondOrigin("Cernunnos","God","God of Druidism and Nature",Celtic.name,Celtic,[Clever,Careful,Sneaky],[Nature],[Harmonizer,FreeSpirit]),
Dagda= new secondOrigin("Dagda","God","God of Masculinity and Magic, High King of Ireland",Celtic.name,Celtic,[Flashy,Forceful,Quick],[War,Nature],[General,King]),
DianCécht= new secondOrigin("Dian Cécht","God","God of Crafting and Healing",Celtic.name,Celtic,[Careful,Clever,Forceful],[Nature,Knowledge],[Thinker,Protector]),
Fand= new secondOrigin("Fand","God","Goddess of Mist",Celtic.name,Celtic,[Sneaky,Clever,Careful],[Water,Sky],[FreeSpirit]),
Lugh= new secondOrigin("Lugh","God","God of Sky and Oaths",Celtic.name,Celtic,[Clever,Forceful,Quick],[Sky,Justice],[Enforcer,General]),
ManannanmacLir= new secondOrigin("Manannan mac Lir","God","God of the Sea and Psychopomp",Celtic.name,Celtic,[Careful,Clever,Sneaky],[Water,Travel],[FreeSpirit,Protector]),
Morrigan= new secondOrigin("The Morrigan","God","Goddess of War and Prophecy",Celtic.name,Celtic,[Forceful,Clever,Quick],[War,Death],[Thinker,Hunter]),
Niamh= new secondOrigin("Niamh","God","Queen of Tir na nÓg",Celtic.name,Celtic,[Clever,Careful,Quick],[Travel,Leader],[King,Harmonizer]),
NiemhMairbh= new secondOrigin("Niemh Mairbh","God","God of Retribution",Celtic.name,Celtic,[Sneaky,Clever,Forceful],[Death,Darkness],[Manipulator,Enforcer]),
Ogma= new secondOrigin("Ogma","God","God of Strength and Eloquence",Celtic.name,Celtic,[Clever,Forceful,Careful],[War,Knowledge],[Thinker,General]),
Zerris= new secondOrigin("Zerris","God","Machine-God of Technology",Celtic.name,Celtic,[Clever,Careful,Forceful],[Crafting,Fire],[Thinker]),

Chasqua= new secondOrigin("Chasqua","God","Goddess of Love, Happiness and Health",Inca.name,Inca,[Clever,Careful,Flashy],[Love, Nature],[Harmonizer,FreeSpirit]),
Cochamama= new secondOrigin("Cochamama","God","Goddess of the Sea",Inca.name,Inca,[Careful,Clever,Forceful],[Water, Wisdom],[Mother,Harmonizer]),
Illapa= new secondOrigin("Illapa","God","God of War and Weather",Inca.name,Inca,[Clever,Sneaky,Forceful],[War, Sky],[Protector,Enforcer]),
Inti= new secondOrigin("Inti","God","God of the Sun",Inca.name,Inca,[Flashy,Forceful,Quick],[Leader, Sun],[King,Enforcer]),
Kilyamama= new secondOrigin("Kilyamama","God","Goddess of the Moon",Inca.name,Inca,[Clever,Careful,Flashy],[Moon, Knowledge],[Politician,Thinker]),
Supay= new secondOrigin("Supay","God","God of the Underworld",Inca.name,Inca,[Clever,Sneaky,Quick],[Death, Earth],[Manipulator,Enforcer]),
Urcaguary= new secondOrigin("Urcaguary","God","God of Metal and Greed",Inca.name,Inca,[Flashy,Quick,Forceful],[Earth, Crafting],[FreeSpirit,Manipulator]),
Viracocha= new secondOrigin("Viracocha","God","God of Creation and the Sky",Inca.name,Inca,[Clever,Careful,Forceful],[Father, Order],[Thinker]),

Rod= new secondOrigin("Rod","God","Great Creator, God of Birth",BogiMuzhchin.name,BogiMuzhchin,[Careful,Sneaky,Clever],[Father],[FreeSpirit]),
 Lada= new secondOrigin("Lada","God","Goddess of Summer, Love, Marriage and Beauty",BogiMuzhchin.name,BogiMuzhchin,[Clever,Careful,Flashy],[Love ,Sun],[Mother,Diplomat]),
 Perun= new secondOrigin("Perun","God","God of Sky, Thunder and Lightning",BogiMuzhchin.name,BogiMuzhchin,[Forceful,Flashy,Clever],[Sky],[King,Protector]),
 Dodola= new secondOrigin("Dodola","God","Goddess of Rain",BogiMuzhchin.name,BogiMuzhchin,[Careful,Sneaky,Clever],[Water ,Nature],[Mother,Protector]),
 Svarog= new secondOrigin("Svarog","God","God of Fire and Smithing",BogiMuzhchin.name,BogiMuzhchin,[Clever,Careful,Sneaky],[Fire ,Crafting],[FreeSpirit,Thinker]),
 Dazbog= new secondOrigin("Dazbog","God","God of Sun and Wealth",BogiMuzhchin.name,BogiMuzhchin,[Flashy,Quick,Forceful],[Sun],[Harmonizer,FreeSpirit]),
 Svetovid= new secondOrigin("Svetovid","God","God of Fertility and Abundance",BogiMuzhchin.name,BogiMuzhchin,[Clever,Sneaky,Careful],[Fertility ,Nature],[FreeSpirit,Harmonizer]),
 Veles= new secondOrigin("Veles","God","God of Earth, Underworld and Trickery",BogiMuzhchin.name,BogiMuzhchin,[Clever,Sneaky,Quick],[Earth ,Death],[Trickster,FreeSpirit]),
 Dziewona= new secondOrigin("Dziewona","God","Goddess of Hunt and the Moon",BogiMuzhchin.name,BogiMuzhchin,[Clever,Quick,Careful],[Wisdom,Moon],[Mother,Harmonizer]),
 Belobog= new secondOrigin("Belobog","God","God of Good Fortune",BogiMuzhchin.name,BogiMuzhchin,[Forceful,Quick,Flashy],[Order ,Sun],[Enforcer,Harmonizer]),
 Chernobog= new secondOrigin("Chernobog","God","God of Misfortune",BogiMuzhchin.name,BogiMuzhchin,[Clever,Sneaky,Careful],[Order ,Darkness],[Thinker,Enforcer]),
 Hors= new secondOrigin("Hors","God","God of Medicine and Arts",BogiMuzhchin.name,BogiMuzhchin,[Careful,Clever,Flashy],[Nature ,Knowledge],[Harmonizer,Protector]),
 Jarilo= new secondOrigin("Jarilo","God","God of War and Spring",BogiMuzhchin.name,BogiMuzhchin,[Careful,Quick,Forceful],[War,Sun],[Protector,Prince]),
 Morana= new secondOrigin("Morana","God","Goddess of Harvest, Winter and Death",BogiMuzhchin.name,BogiMuzhchin,[Careful,Forceful,Quick],[Death,Water],[Enforcer,Harmonizer]),

 Baldur= new secondOrigin("Baldur","God","God of Light, Beauty, Love and Happiness.",Norse.name,Norse,[Flashy,Careful,Quick],[Love,Fertility],[FreeSpirit,Prince]), 
 Freya= new secondOrigin("Freya","God","Goddess of the Gold, and War.",Norse.name,Norse,[Clever,Forceful,Flashy],[War,Crafting],[Diplomat,Manipulator]), 
 Freyr= new secondOrigin("Freyr","God","God of Farming, Weather and Fertility.",Norse.name,Norse,[Careful,Clever,Sneaky],[Fertility],[Harmonizer]), 
 Frigg= new secondOrigin("Frigg","God","Queen of the Gods.",Norse.name,Norse,[Clever,Sneaky,Careful],[Leader],[Politician,King]), 
 Heimdall= new secondOrigin("Heimdall","God","Protector of Asgard",Norse.name,Norse,[Sneaky,Careful,Clever],[Justice],[Protector,Manipulator]), 
 Hel= new secondOrigin("Hel","God","Goddess of the Dead, Overseer of Helheim",Norse.name,Norse,[Clever,Forceful,Sneaky],[Death],[Enforcer]), 
 Odin= new secondOrigin("Odin","God","King of Asgard, God of Magic, Wisdom, and Prophecy",Norse.name,Norse,[Clever,Sneaky,Forceful],[Leader,Father],[King,Manipulator]), 
 Sif= new secondOrigin("Sif","God","Goddess of Marriage",Norse.name,Norse,[Careful,Clever,Forceful],[Love,Fertility],[Harmonizer]), 
 Thor= new secondOrigin("Thor","God","God of Thunder and War",Norse.name,Norse,[Forceful,Flashy,Quick],[War,Sky],[FreeSpirit,Protector]), 
 Tyr= new secondOrigin("Tyr","God","God of Victory",Norse.name,Norse,[Forceful,Clever,Quick],[Justice,War],[Enforcer,General]), 
 Vidar= new secondOrigin("Vidar","God","God of Vengeance",Norse.name,Norse,[Forceful,Clever,Sneaky],[Justice,Darkness],[Enforcer,Protector]), 
 Loki= new secondOrigin("Loki","God","Trickster God",Norse.name,Norse,[Clever,Sneaky,Quick],[Wit],[Manipulator,Trickster]), 
 Bragi= new secondOrigin("Bragi","God","God of Poets",Norse.name,Norse,[Clever,Flashy,Careful],[Wit,Light],[FreeSpirit]), 
 Vali= new secondOrigin("Vali","God","God of Debate and Duel",Norse.name,Norse,[Flashy,Quick,Forceful],[Justice],[Enforcer]), 
 Ullr= new secondOrigin("Ullr","God","God of Survival",Norse.name,Norse,[Careful,Clever,Forceful],[Nature,Travel],[Hunter,Protector]), 
 
 Amaterasu= new secondOrigin("Amaterasu","God","Goddess of the Sun",Japanese.name,Japanese,[Clever,Flashy,Careful],[Sun,Leader],[Politician,Mother]), 
 Hachiman= new secondOrigin("Hachiman","God","God of Swordfighting, Archery and Change",Japanese.name,Japanese,[Clever,Forceful,Quick],[War,Wisdom],[Thinker,Leader]), 
 Izanagi= new secondOrigin("Izanagi","God","Lord of the Sky",Japanese.name,Japanese,[Careful,Quick,Sneaky],[Father,Sky],[FreeSpirit,Thinker]), 
 Raiden= new secondOrigin("Raiden","God","Lord of Thunder and Lightning",Japanese.name,Japanese,[Flashy,Forceful,Quick],[Sky],[FreeSpirit]), 
 Izanami= new secondOrigin("Izanami","God","Queen of the Underworld",Japanese.name,Japanese,[Clever,Careful,Sneaky],[Death,Earth],[Enforcer,Manipulator]), 
 Ryujin= new secondOrigin("Ryujin","God","Dragon God of the Ocean Depths",Japanese.name,Japanese,[Forceful,Sneaky,Careful],[Water,Wit],[Thinker,King]), 
 Susanoo= new secondOrigin("Susano-o","God","Lord of Sea and Storms",Japanese.name,Japanese,[Flashy,Forceful,Clever],[Water,Travel],[FreeSpirit,Harmonizer]), 
 TsukiYomi= new secondOrigin("Tsuki-Yomi","God","God of the Moon",Japanese.name,Japanese,[Clever,Sneaky,Careful],[Moon],[Diplomat]), 
 Inari= new secondOrigin("Inari","God","Androgynous God/Goddess of Foxes and Prosperity",Japanese.name,Japanese,[Clever,Careful,Sneaky],[Wit,Fertility],[Trickster,Harmonizer]), 
 AmenoUzume= new secondOrigin("Ame no Uzume","God","Goddess of Dawn, Mirth and Revelry",Japanese.name,Japanese,[Clever,Flashy,Sneaky],[Love,Wit,Sun],[Harmonizer,Diplomat]), 
 Sarutahiko= new secondOrigin("Sarutahiko","God","God of Strength and Guidance",Japanese.name,Japanese,[Careful,Forceful,Clever],[War,Wisdom],[Protector]),

 Ellykha= new secondOrigin("Ellykha","God","Goddess of Spilt Blood",Aztec.name,Aztec,[Forceful,Flashy,Quick],[War],[Enforcer]), 
 Huitzilopochtli= new secondOrigin("Huitzilopochtli","God","God of Blood, War and the Sun, Cardinal God of the South",Aztec.name,Aztec,[Forceful,Flashy,Clever],[War,Sun,Leader],[General]), 
 Miclántecuhtli= new secondOrigin("Miclántecuhtli","God","God of the Dead and Spirits",Aztec.name,Aztec,[Careful,Clever,Sneaky],[Death],[Thinker]), 
 Quetzalcoátl= new secondOrigin("Quetzalcoátl","God","God of Light, Civilization and Creation, Cardinal God of the West",Aztec.name,Aztec,[Clever,Careful,Flashy],[Leader,Wisdom],[Harmonizer,Politician]), 
 Tezcatlipoca= new secondOrigin("Tezcatlipoca","God","God of Change, Night and Destruction, Cardinal God of the North",Aztec.name,Aztec,[Clever,Sneaky,Forceful],[Moon,Darkness],[King]), 
 Tlazoltéotl= new secondOrigin("Tlazoltéotl","God","Goddess of Filth",Aztec.name,Aztec,[Flashy,Careful,Clever],[Fertility,Love],[Harmonizer,Manipulator]), 
 XipeTotec= new secondOrigin("Xipe Totec","God","God of Maize and Growth, Cardinal God of the East",Aztec.name,Aztec,[Clever,Sneaky,Forceful],[Fertility,Darkness],[Trickster]), 
 Xochipilli= new secondOrigin("Xochipilli","God","God of Art, Dance and Flowers",Aztec.name,Aztec,[Flashy,Clever,Forceful],[Crafting,Nature],[FreeSpirit,Protector]), 
 Xochiquetzal= new secondOrigin("Xochiquetzal","God","Goddess of Fertility and Female Power",Aztec.name,Aztec,[Clever,Forceful,Sneaky],[Fertility,Love],[Mother,Protector]), 
 Xolotl= new secondOrigin("Xolotl","God","God of Lightning, Death and Psychopomp",Aztec.name,Aztec,[Forceful,Clever,Careful],[Death,Sky],[Protector,Enforcer]), 

 Huracán= new secondOrigin("Huracán","Titan","Sky as Tempest",SkyTitan.name,SkyTitan,[Forceful,Quick,Clever],[Sky],[Enforcer,Hunter]), 
 Ouranos= new secondOrigin("Ouranos","Titan","SkyTitan as Calm",SkyTitan.name,SkyTitan,[Clever,Careful,Forceful],[Sky,Father],[Thinker,Protector]), 
 Shu= new secondOrigin("Shu","Titan","Sky as Stillness",SkyTitan.name,SkyTitan,[Quick,Clever,Sneaky],[Sky,Order],[Enforcer,Manipulator]), 
 Typhon= new secondOrigin("Typhon","Titan","Sky as Destruction",SkyTitan.name,SkyTitan,[Forceful,Clever,Quick],[Sky,War],[Enforcer,Hunter]),
 Tlaloc= new secondOrigin("Tlaloc","Titan","Titan of Rain",SkyTitan.name,SkyTitan,[Clever,Flashy,Quick],[Sky,Water],[FreeSpirit]),

 Atlas= new secondOrigin("Atlas","Titan","Titan of Gravity",OrderTitan.name,OrderTitan,[Careful,Forceful,Flashy],[Order,Earth],[FreeSpirit,Protector]),
 Coeus= new secondOrigin("Coeus","Titan","Titan of Knowledge",OrderTitan.name,OrderTitan,[Clever,Sneaky,Careful],[Order,Knowledge],[Thinker,Manipulator]),
 Kronus= new secondOrigin("Kronus","Titan","Titan of Control",OrderTitan.name,OrderTitan,[Forceful,Clever,Careful],[Leader,Order],[King,General]),
 Themis= new secondOrigin("Themis","Titan","Titan of Law",OrderTitan.name,OrderTitan,[Careful,Clever,Forceful],[Order,Justice],[Thinker,Diplomat]),
 Chronos= new secondOrigin("Chronos","Titan","Titan of Time",OrderTitan.name,OrderTitan,[Careful,Clever,Forceful],[Order],[FreeSpirit,Thinker]),

 Aten= new secondOrigin("Aten","Titan","Titan of Brightness",Light.name,Light,[Forceful,Flashy,Clever],[Sun],[King]),
 Helios= new secondOrigin("Helios","Titan","Titan of the Sun",Light.name,Light,[Clever,Flashy,Quick],[Sun],[FreeSpirit]),
 Hemera= new secondOrigin("Hemera","Titan","Titan of Day",Light.name,Light,[Careful,Flashy,Clever],[Sun,Fertility],[Harmonizer,Mother]),
 Hyperion= new secondOrigin("Hyperion","Titan","Titan of Glory",Light.name,Light,[Flashy,Forceful,Careful],[Leader,Sun],[General,King]),
 Zhulong= new secondOrigin("Zhulong","Titan","Titan of Illumination",Light.name,Light,[Clever,Careful,Flashy],[Wisdom,Sun],[Thinker]),

 Sedna= new secondOrigin("Sedna","Titan","Titan of the Providing Sea",Ocean.name,Ocean,[Clever,Careful,Sneaky],[Water,Fertility],[Harmonizer]),
 Charybdis= new secondOrigin("Charybdis","Titan","Titan of Drowning",Ocean.name,Ocean,[Forceful,Flashy,Sneaky],[Water,Death],[Hunter,Manipulator]),
 Yam= new secondOrigin("Yam","Titan","Titan of the Raging Sea",Ocean.name,Ocean,[Forceful,Flashy,Clever],[Leader,Water],[King,Manipulator]),

 Heget= new secondOrigin("Heget","Titan","Titan of Fertility",Ocean.name,Ocean,[Forceful,Clever,Sneaky],[Water,Fertility],[Protector]),
 Gaia= new secondOrigin("Gaia","Titan","Titan of Life",World.name,World,[Forceful,Careful,Flashy],[Fertility,Nature],[Mother]),
 GreenMan= new secondOrigin("The Green Man","Titan","Titan of Nature",World.name,World,[Sneaky,Careful,Flashy],[Nature],[Harmonizer,FreeSpirit]),
 Ourea= new secondOrigin("Ourea","Titan","Titan of Mountains",World.name,World,[Careful,Clever,Forceful],[Earth],[Thinker]),
 Kur= new secondOrigin("Kur","Titan","Titan of Expanse",World.name,World,[Forceful,Careful,Clever],[Earth,Travel],[FreeSpirit]),

 Surtr= new secondOrigin("Surtr","Titan","Titan of Destruction",FireTitan.name,FireTitan,[Forceful,Flashy,Quick],[Fire],[General,King]),
 Prometheus= new secondOrigin("Prometheus","Titan","Titan of Invention",FireTitan.name,FireTitan,[Clever,Quick,Flashy],[Fire,Crafting],[Thinker,FreeSpirit]),
 Kagutsuchi= new secondOrigin("Kagutsuchi","Titan","Titan of Lava",FireTitan.name,FireTitan,[Flashy,Forceful,Quick],[Fire,Earth],[Protector]),
 Nemesis= new secondOrigin("Nemesis","Titan","Titan of Divine Retribution",FireTitan.name,FireTitan,[Forceful,Careful,Flashy],[Fire,Justice],[Enforcer]),
 Vrtra= new secondOrigin("Vrtra","Titan","Titan of Drought",FireTitan.name,FireTitan,[Flashy,Careful,Clever],[Fire,Death],[Manipulator]),
 Xiuhtecuhtli= new secondOrigin("Xiuhtecuhtli","Titan","Titan of Life",FireTitan.name,FireTitan,[Flashy,Quick,Clever],[Fire,Fertility],[Harmonizer]),
 Auahituroa= new secondOrigin("Auahituroa","Titan","Titan of Stellar Fire",FireTitan.name,FireTitan,[Flashy,Forceful,Quick],[Fire,Sky],[FreeSpirit]),

Abzu= new secondOrigin("Abzu","Titan","Titan of The Abyss",Patala.name,Patala,[Careful,Sneaky,Forceful],[Water,Darkness],[Manipulator]),
CromCruach= new secondOrigin("Crom Cruach","Titan","Titan of Decay",Patala.name,Patala,[Forceful,Sneaky,Quick],[Earth,Death],[General,Enforcer]),
DisPater= new secondOrigin("Dis Pater","Titan","Titan of Riches",Patala.name,Patala,[Clever,Flashy,Careful],[Earth,Crafting],[Harmonizer]),
Erebus= new secondOrigin("Erebus","Titan","Titan of Darkness",Patala.name,Patala,[Careful,Sneaky,Clever],[Earth,Darkness],[Diplomat,Thinker]),
Erlik= new secondOrigin("Erlik","Titan","Titan of Underground",Patala.name,Patala,[Forceful,Flashy,Sneaky],[Earth,Death],[King,Manipulator]),
Tiamat= new secondOrigin("Tiamat","Titan","Titan of Water as Life",Ocean.name,Ocean,[Clever,Careful,Sneaky],[Water,Fertility],[Mother]),

Apep= new secondOrigin("Apep","Titan","Titan of Darkness",Night.name,Night,[Clever,Forceful,Sneaky],[Darkness],[Hunter,Manipulator]),
Mikaboshi= new secondOrigin("Mikaboshi","Titan","Titan of Void",Night.name,Night,[Clever,Forceful,Sneaky],[Darkness,Death],[Manipulator,Enforcer]),
Nut= new secondOrigin("Nut","Titan","Titan of Stars",Night.name,Night,[Careful,Sneaky,Clever],[Darkness,Sky],[Thinker,Protector]),
Nott= new secondOrigin("Nott","Titan","Titan of the Veil",Night.name,Night,[Careful,Clever,Forceful],[Darkness,Sky],[Thinker,Enforcer]),
Fenrir= new secondOrigin("Fenrir","Titan","Titan of Fear",Night.name,Night,[Forceful,Clever,Quick],[Darkness,Death],[Hunter]),
Dracula= new secondOrigin("Dracula","Titan","Titan of Nightmares",Night.name,Night,[Clever,Forceful,Flashy],[Death,Darkness],[Hunter,Manipulator]),
Selene= new secondOrigin("Selene","Titan","Titan of Moon",Night.name,Night,[Clever,Careful,Quick],[Darkness,Moon],[Enforcer,Diplomat]),
Hypnos= new secondOrigin("Hypnos","Titan","Titan of Sleep",Night.name,Night,[Clever,Sneaky,Quick],[Darkness,Order],[Harmonizer,Thinker]),


Camazotz= new secondOrigin("Camazotz","Titan","Titan of Devouring",DeathTitan.name,DeathTitan,[Forceful,Flashy,Quick],[Death],[Hunter]),
GrimReaper= new secondOrigin("Grim Reaper","Titan","Titan of the Great Equalizer",DeathTitan.name,DeathTitan,[Forceful,Flashy,Clever],[Death],[King]),
Styx= new secondOrigin("Styx","Titan","Titan of the Journey",DeathTitan.name,DeathTitan,[Careful,Clever,Quick],[Death,Travel],[Harmonizer]),
Nirrti= new secondOrigin("Nirrti","Titan","Titan of Horror",DeathTitan.name,DeathTitan,[Flashy,Forceful,Sneaky],[Death],[Manipulator]),


Sōhei= new secondOrigin("Sōhei","Enlightened","Japanese Warrior Monks",OrderoftheJadeFist.name,OrderoftheJadeFist,[Forceful,Clever,Quick],[War,Wisdom],[General,Diplomat]),
Yamabushi= new secondOrigin("Yamabushi","Enlightened","Japanese Hermit Monks",OrderoftheJadeFist.name,OrderoftheJadeFist,[Careful,Clever,Forceful],[Wisdom,Nature],[Thinker,FreeSpirit]),
Shaolin= new secondOrigin("Shaolin","Enlightened","Chinese Warrior Monks",OrderoftheJadeFist.name,OrderoftheJadeFist,[Forceful,Flashy,Careful],[War,Knowledge],[Enforcer,FreeSpirit]),
Cuauhtlocelotl= new secondOrigin("Cuauhtlocelotl","Enlightened","Aztec Animal Warriors",OrderoftheJadeFist.name,OrderoftheJadeFist,[Sneaky,Clever,Careful],[War,Nature],[Hunter]),
TeutonicKnights= new secondOrigin("Teutonic Knights","Enlightened","Secretive European Monks",OrderoftheJadeFist.name,OrderoftheJadeFist,[Sneaky,Clever,Careful],[Darkness,Crafting],[Hunter,Politician]),
TheSevenTriads= new secondOrigin("The Seven Triads","Enlightened","Chinese Criminal Gangs",OrderoftheJadeFist.name,OrderoftheJadeFist,[Sneaky,Forceful,Clever],[Darkness,Wit],[Enforcer,Politician]),
Yakuza= new secondOrigin("Yakuza","Enlightened","Japanese Criminal Gangs",OrderoftheJadeFist.name,OrderoftheJadeFist,[Forceful,Sneaky,Quick],[Order,War],[Enforcer,Manipulator]),
DzheydBratstvo= new secondOrigin("Dzheyd Bratstvo","Enlightened","Russian Criminal Gang",OrderoftheJadeFist.name,OrderoftheJadeFist,[Forceful,Flashy,Quick],[Darkness,Sky],[Enforcer]),
SicilianMafia= new secondOrigin("Sicilian Mafia","Enlightened","Italian Criminal Gang",OrderoftheJadeFist.name,OrderoftheJadeFist,[Flashy,Careful,Forceful],[Water,Travel],[Prince,Diplomat]),
TheTecuani= new secondOrigin("The Tecuani","Enlightened","Latin American Criminal Gang",OrderoftheJadeFist.name,OrderoftheJadeFist,[Careful,Sneaky,Forceful],[Nature,Darkness],[Hunter]),

Keter= new secondOrigin("Keter","Enlightened","Prophets and Scholars",Cabal.name,Cabal,[Clever,Careful,Forceful],[Wisdom],[Thinker]),
Binah= new secondOrigin("Binah","Enlightened","Analysts and Wizards",Cabal.name,Cabal,[Careful,Clever,Flashy],[Fertility,Wit],[Mother,Thinker]),
Chokhmah= new secondOrigin("Chokhmah","Enlightened","Creative Geniuses",Cabal.name,Cabal,[Clever,Flashy,Quick],[Father,Crafting],[Thinker,Prince]),
Daat= new secondOrigin("Da'at","Enlightened","Secretive Leaders of the Cabal",Cabal.name,Cabal,[Careful,Clever,Sneaky],[Leader],[King,General]),
Gevurah= new secondOrigin("Gevurah","Enlightened","Righteous Enforcers",Cabal.name,Cabal,[Flashy,Forceful,Quick],[Fire,Justice],[Enforcer]),
Chesed= new secondOrigin("Chesed","Enlightened","Healers and Diplomats",Cabal.name,Cabal,[Careful,Clever,Sneaky],[Love,Water],[Harmonizer]),
Tipheret= new secondOrigin("Tipheret","Enlightened","Ensurers of Balance",Cabal.name,Cabal,[Clever,Flashy,Careful],[Order,Travel],[Diplomat,Harmonizer]),
Hod= new secondOrigin("Hod","Enlightened","Problem-Solvers",Cabal.name,Cabal,[Clever,Forceful,Sneaky],[Wit,Sky],[Enforcer,Thinker]),
Netzach= new secondOrigin("Netzach","Enlightened","Generals and Businessmen",Cabal.name,Cabal,[Forceful,Flashy,Quick],[War,Leader],[General,Manipulator]),
Yesod= new secondOrigin("Yesod","Enlightened","Link between the Spiritual and Physical",Cabal.name,Cabal,[Careful,Forceful,Sneaky],[Nature,Travel],[Enforcer,FreeSpirit]),
Malkuth= new secondOrigin("Malkuth","Enlightened","Ground Operatives",Cabal.name,Cabal,[Sneaky,Careful,Clever],[Nature],[Enforcer]),

CopperLodge= new secondOrigin("Copper Lodge","Enlightened","Biochemists",Illuminati.name,Illuminati,[Clever,Careful,Flashy],[Nature,Crafting],[Thinker]),
BronzeLodge= new secondOrigin("Bronze Lodge","Enlightened","Artists",Illuminati.name,Illuminati,[Flashy,Quick,Clever],[Light,Wit],[FreeSpirit]),
SilverLodge= new secondOrigin("Silver Lodge","Enlightened","Engineers and Inventors",Illuminati.name,Illuminati,[Clever,Flashy,Quick],[Crafting],[Thinker]),
GoldLodge= new secondOrigin("Gold Lodge","Enlightened","Bankers",Illuminati.name,Illuminati,[Careful,Clever,Sneaky],[Order,Knowledge],[Thinker,Manipulator]),
OrichalcumLodge= new secondOrigin("Orichalcum Lodge","Enlightened","Specialists of the Occult Arts",Illuminati.name,Illuminati,[Clever,Forceful,Careful],[Knowledge,Darkness],[Thinker]),
IronLodge= new secondOrigin("Iron Lodge","Enlightened","Believers in Self-Improvement",Illuminati.name,Illuminati,[Forceful,Flashy,Quick],[War,Father],[Enforcer,Thinker]),
LeadLodge= new secondOrigin("Lead Lodge","Enlightened","Criminals and Ne'er-do-wells",Illuminati.name,Illuminati,[Sneaky,Careful,Quick],[Darkness,Earth],[Manipulator,Enforcer]),
SteelLodge= new secondOrigin("Steel Lodge","Enlightened","Warriors of the Illuminati",Illuminati.name,Illuminati,[Forceful,Flashy,Quick],[War],[Enforcer]),
MercuryLodge= new secondOrigin("Mercury Lodge","Enlightened","Scientists and Philosophers",Illuminati.name,Illuminati,[Clever,Careful,Flashy],[Knowledge],[Thinker]),
GalahadsCastle= new secondOrigin("Galahad\'s Castle","Enlightened","Destroyers of Evil and Wickedness",CircleofMerlin.name,CircleofMerlin,[Flashy,Forceful,Quick],[Light,War],[Enforcer]),
PercivalsCastle= new secondOrigin("Percival\'s Castle","Enlightened","Protectors of Relics and Lands",CircleofMerlin.name,CircleofMerlin,[Careful,Quick,Clever],[Knowledge,War],[Protector]),
GawainsCastle= new secondOrigin("Gawain's Castle","Enlightened","Duelists and Assassins",CircleofMerlin.name,CircleofMerlin,[Flashy,Careful,Quick],[War,Death],[Enforcer]),
LamorakCastle= new secondOrigin("Lamorak\'s Castle","Enlightened","Brawlers and Street Fighters",CircleofMerlin.name,CircleofMerlin,[Forceful,Flashy,Quick],[Earth,Darkness],[Enforcer]),
BorsCastle= new secondOrigin("Bors\' Castle","Enlightened","Wanderers and Storytellers",CircleofMerlin.name,CircleofMerlin,[Careful,Clever,Sneaky],[Travel],[FreeSpirit]),

Templars= new secondOrigin("Templars","Enlightened","Amibitious European Oligarchs",OrderoftheJadeFist.name,OrderoftheJadeFist,[Clever,Sneaky,Forceful],[Justice,Earth],[Politician,Protector]), 
TristansCastle= new secondOrigin("Tristan's Castle","Enlightened","Diplomats",CircleofMerlin.name,CircleofMerlin,[Careful,Flashy,Clever],[Light,Nature],[Harmonizer]), 
GeraintsCastle= new secondOrigin("Geraint's Castle","Enlightened","Druidic Experts",CircleofMerlin.name,CircleofMerlin,[Clever,Careful,Quick],[Nature],[FreeSpirit]), 
GarethsCastle= new secondOrigin("Gareth's Castle","Enlightened","Infiltrators and Information Gatherers",CircleofMerlin.name,CircleofMerlin,[Sneaky,Careful,Quick],[Darkness,Knowledge],[Trickster]), 
BediveresCastle= new secondOrigin("Bedivere's Castle","Enlightened","Craftsmen",CircleofMerlin.name,CircleofMerlin,[Clever,Flashy,Quick],[Crafting],[Protector]), 
KaysCastle= new secondOrigin("Kay's Castle","Enlightened","Brutish Enforcers",CircleofMerlin.name,CircleofMerlin,[Forceful,Flashy,Quick],[War],[Enforcer]), 
GaherisCastle= new secondOrigin("Gaheri's Castle","Enlightened","Internal Police",CircleofMerlin.name,CircleofMerlin,[Sneaky,Flashy,Careful],[Darkness,Order],[Protector,Manipulator]), 
ArthursCastle= new secondOrigin("Arthur's Castle","Enlightened","Leaders of the Knights",CircleofMerlin.name,CircleofMerlin,[Flashy,Careful,Clever],[Leader],[King,General]), 
Lancelot= new secondOrigin("Lancelot","Enlightened","Secret Order",CircleofMerlin.name,CircleofMerlin,[Sneaky,Careful,Clever],[Darkness],[Enforcer,Manipulator]),

SummerNymph= new secondOrigin("Summer Nymph","Mythborn","Spirits of Springs and Flowers",SummerCourt.name,SummerCourt,[Flashy,Quick,Clever],[Sun,Fertility],[FreeSpirit,Harmonizer]),
SummerDryad= new secondOrigin("Summer Dryad","Mythborn","Spirits of Trees and Mountains",SummerCourt.name,SummerCourt,[Careful,Flashy,Forceful],[Nature,Sun],[FreeSpirit,Trickster]),
LightElf= new secondOrigin("Light Elf","Mythborn","Organized, Martial Spirits of Fields and Plains",SummerCourt.name,SummerCourt,[Forceful,Careful,Flashy],[Light,Nature],[General,Diplomat]),
SummerFey= new secondOrigin("Summer Fey","Mythborn","Spirits of Forests and Meadows",SummerCourt.name,SummerCourt,[Sneaky,Clever,Careful],[Wit,Light],[Trickster,Diplomat]),
SummerNaiad= new secondOrigin("Summer Naiad","Mythborn","Spirits of the Sea",SummerCourt.name,SummerCourt,[Careful,Sneaky,Forceful],[Water,Nature],[Trickster,Harmonizer]),
Korrigans= new secondOrigin("Summer Korrigans","Mythborn","Spirits of the Roots and Soil",SummerCourt.name,SummerCourt,[Clever,Sneaky,Quick],[Nature],[FreeSpirit]),
Gnomes= new secondOrigin("Summer Gnomes","Mythborn","Spirits of Technology and Creativity",SummerCourt.name,SummerCourt,[Clever,Flashy,Quick],[Nature,Crafting],[Thinker]),
Leprechauns= new secondOrigin("Summer Leprechauns","Mythborn","Spirits of Wealth and Fertility",SummerCourt.name,SummerCourt,[Sneaky,Quick,Clever],[Nature,Fertility],[Trickster,FreeSpirit]),

WinterNymph= new secondOrigin("Winter Nymph","Mythborn","Spirits of Springs and Ice",WinterCourt.name,WinterCourt,[Flashy,Quick,Clever],[Moon,Nature],[FreeSpirit,Trickster]),
WinterDryad= new secondOrigin("Winter Dryad","Mythborn","Spirits of Trees and Mountains",WinterCourt.name,WinterCourt,[Careful,Flashy,Forceful],[Nature,Darkness],[FreeSpirit,Trickster]),
DarkElf= new secondOrigin("Dark Elf","Mythborn","Organized, Martial Spirits of Caves and Fjords",WinterCourt.name,WinterCourt,[Forceful,Careful,Flashy],[Darkness,Earth],[General,Enforcer]),
WinterFey= new secondOrigin("Winter Fey","Mythborn","Spirits of Forests and Swamps",WinterCourt.name,WinterCourt,[Sneaky,Clever,Careful],[Wit,Darkness],[Manipulator]),
WinterNaiad= new secondOrigin("Winter Naiad","Mythborn","Spirits of the Sea",WinterCourt.name,WinterCourt,[Careful,Sneaky,Forceful],[Water,Darkness],[Trickster]),
WinterKorrigans= new secondOrigin("Winter Korrigans","Mythborn","Spirits of the Roots and Soil",WinterCourt.name,WinterCourt,[Clever,Sneaky,Quick],[Nature],[FreeSpirit]),
WinterGnomes= new secondOrigin("Winter Gnomes","Mythborn","Spirits of Technology and Creativity",WinterCourt.name,WinterCourt,[Clever,Flashy,Quick],[Darkness,Crafting],[Thinker]),
WinterLeprechauns= new secondOrigin("Winter Leprechauns","Mythborn","Spirits of Wealth and Caves",WinterCourt.name,WinterCourt,[Sneaky,Quick,Clever],[Nature,Death],[Manipulator,FreeSpirit]),

EasternDragon= new secondOrigin("Eastern Dragon","Mythborn","Wise Dragons of Asia",JadeSea.name,JadeSea,[Clever,Careful,Flashy],[Water,Nature],[Thinker,Diplomat]), 
WesternDragon= new secondOrigin("Western Dragon","Mythborn","Mighty and Proud Dragons of Northern Europe",JadeSea.name,JadeSea,[Forceful,Flashy,Clever],[Sky,Nature],[King,Manipulator]), 
Coatl= new secondOrigin("Coatl","Mythborn","Free and Wild Dragons of South America",JadeSea.name,JadeSea,[Flashy,Clever,Sneaky],[Sky],[FreeSpirit]), 
Naga= new secondOrigin("Naga","Mythborn","Organized and Ruthless Dragons of South Asia",JadeSea.name,JadeSea,[Forceful,Quick,Clever],[Water,Order],[Enforcer,Politician]), 
Wyvern= new secondOrigin("Wyvern","Mythborn","Poisonous and Wicked Dragons of Western Europe",JadeSea.name,JadeSea,[Quick,Forceful,Flashy],[Death,Earth],[Enforcer,Manipulator]),

Wereboar = new secondOrigin("Were-boar","Mythborn","Industrious and Brash Were-Boars",DarkForest.name,DarkForest,[Forceful,Clever,Flashy],[Crafting,Nature],[Enforcer,Thinker]), 
LoupGarou= new secondOrigin("Loup-Garou","Mythborn","Proud and Wily Werewolves",DarkForest.name,DarkForest,[Sneaky,Clever,Quick],[Moon,Nature],[Politician,Enforcer]), 
Hag= new secondOrigin("Hag","Mythborn","Wicked Witches",DarkForest.name,DarkForest,[Clever,Sneaky,Careful],[Death,Darkness],[FreeSpirit,Trickster]), 
Ent= new secondOrigin("Ent","Mythborn","Walking Trees",DarkForest.name,DarkForest,[Forceful,Careful,Flashy],[Nature],[FreeSpirit]), 
Minotaur= new secondOrigin("Minotaur","Mythborn","Half-Bull Hulking Giants",DarkForest.name,DarkForest,[Forceful,Flashy,Quick],[War],[Enforcer]), 
Centaur = new secondOrigin("Centaur","Mythborn","Genius but Impulsive Half-Horses",DarkForest.name,DarkForest,[Clever,Careful,Quick],[Knowledge,War],[Thinker]), 
Satyr= new secondOrigin("Satyr","Mythborn","Eccentric Half-Goat",DarkForest.name,DarkForest,[Quick,Sneaky,Flashy],[Fertility],[Trickster]), 
Rakshasa= new secondOrigin("Rakshasa","Mythborn","Evil Demons",Shambhala.name,Shambhala,[Forceful,Flashy,Clever],[War,Darkness],[Enforcer,Manipulator]), 
Asura= new secondOrigin("Asura","Mythborn","Ancient Enemies of the Gods",Shambhala.name,Shambhala,[Flashy,Clever,Careful],[Fire,Order],[Politician]), 


Vanara= new secondOrigin("Vanara","Mythborn","Militaristic Half-Monkeys",Shambhala.name,Shambhala,[Flashy,Clever,Sneaky],[Nature,War],[Enforcer,Diplomat])
]

function compare(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

function godPlacer(){
	//Creates a Score for each God and places them in the Triangle.
	//Ends with a Logos/Kosmos/Eros Score
	for(e=0;e<secondOriginArray.length;e++){
		totalScore = [0,0,0]
		
		approachesScore = [0,0,0]
		for(g=0;g<secondOriginArray[e].approaches.length;g++){
			approachesScore[0] += secondOriginArray[e].approaches[g].values[0]/(g+1)
			approachesScore[1] += secondOriginArray[e].approaches[g].values[1]/(g+1)
			approachesScore[2] += secondOriginArray[e].approaches[g].values[2]/(g+1)
		}
		domainsScore = [0,0,0]
		for(g=0;g<secondOriginArray[e].domains.length;g++){
			domainsScore[0] += secondOriginArray[e].domains[g].values[0]
			domainsScore[1] += secondOriginArray[e].domains[g].values[1]
			domainsScore[2] += secondOriginArray[e].domains[g].values[2]
		}
		for(p=0;p<domainsScore.length;p++){domainsScore[p]/=g}

		personalitiesScore = [0,0,0]
		for(g=0;g<secondOriginArray[e].personalities.length;g++){
			personalitiesScore[0] += secondOriginArray[e].personalities[g].values[0]
			personalitiesScore[1] += secondOriginArray[e].personalities[g].values[1]
			personalitiesScore[2] += secondOriginArray[e].personalities[g].values[2]
		}
		for(p=0;p<personalitiesScore.length;p++){personalitiesScore[p]/=g}

		originVarScore = [0,0,0]
			originVarScore[0] += secondOriginArray[e].originVar.values[0]
			originVarScore[1] += secondOriginArray[e].originVar.values[1]
			originVarScore[2] += secondOriginArray[e].originVar.values[2]	
		
			
		for(p=0;p<originVarScore.length;p++){originVarScore[p]/=g}
		if(secondOriginArray[e].type === "Titan"){for(g=0;g<totalScore.length;g++){totalScore[g] = Math.round((approachesScore[g]*0.10 + domainsScore[g]*0.25 + personalitiesScore[g]*0.25 + originVarScore[g]*0.40)*10)/10}}
		else{for(g=0;g<totalScore.length;g++){totalScore[g] = Math.round((approachesScore[g]*0.15 + domainsScore[g]*0.35 + personalitiesScore[g]*0.35 + originVarScore[g]*0.15)*10)/10}}

		secondOriginArray[e].totalValues = totalScore
	
		//for(g=0;g<totalScore.length;g++){if(secondOriginArray[e].totalValues[g] <10){secondOriginArray[e].totalValues[g]/=4} else{secondOriginArray[e].totalValues[g] += (20-secondOriginArray[e].totalValues[g])/4}}
	/*	
	logosScore = secondOriginArray[e].totalValues[0]
	kosmosScore = secondOriginArray[e].totalValues[1];
	erosScore = secondOriginArray[e].totalValues[2];
	
	
	logosScore = 10
	kosmosScore = 10
	erosScore = 20
	*/
//	displayArray.push(secondOriginArray[e].name + ": " + (Math.round((logosScore)*10)/10) + "," + (Math.round((kosmosScore)*10)/10) + "," + (Math.round((erosScore)*10)/10) + "\n")
//	addPoint()
		}
//alert(displayArray)

}

godPlacer()

function drawTriangle(){
var ax=300;
var ay=300;
var bx=0;
var by=300;
var cx=150;
var cy=300-Math.sqrt(3)*150;


var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();  
ctx.moveTo(ax,ay);  
ctx.lineTo(bx,by);  
ctx.lineTo(cx,cy);  
 ctx.fillStyle = "lightgrey";
ctx.fill(); 
}


//This adds a point to the canvas.
function addPoint(){

	//	calculateScore2()

// calculateScore();
/*
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(150,200,4,0,2*Math.PI);
ctx.stroke();
 ctx.fillStyle = "black";
ctx.fill()
*/

// Dragon to Logos is 300;300 to 75;300-Math.sqrt(3)*75 (or 170)
// Kaos to Kosmos is 0;300 to 225 / 300-Math.sqrt(3)*75 (or 170)
// Ananke to Eros is 150;300-Math.sqrt(3) *150 (or 40) to 150;300


var logosPoint = [300,300,75,170,225,130]
var kosmosPoint = [0,300,225,170,-225,130]
var erosPoint = [150,40,150,300,0,-260]

var finalLogosPoint = [logosPoint[0]-logosPoint[4]*(logosScore/20),logosPoint[1]-logosPoint[5]*(logosScore/20)]
var finalKosmosPoint = [kosmosPoint[0]-kosmosPoint[4]*(kosmosScore/20),kosmosPoint[1]-kosmosPoint[5]*(kosmosScore/20)]
var finalErosPoint = [erosPoint[0]-erosPoint[4]*(erosScore/20),erosPoint[1]-erosPoint[5]*(erosScore/20)]
var finalPoint = [(finalLogosPoint[0]+finalKosmosPoint[0]+finalErosPoint[0])/3,(finalLogosPoint[1]+finalKosmosPoint[1]+finalErosPoint[1])/3]

//finalPoint[0] is the length of the journey divided by the Logos Score. finalPoint[1] is the same for the height. This makes them coordinates.


// Forbidden Places
// 300/300 -> 150/40
// point is at 168,180
// Middle is at 150,213
// Difference is 18, -33
// 1.7333
	var basePoint = [finalPoint[0],finalPoint[1]]
	//basePoint is the final point, before exaggeration
/*	
	var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(finalPoint[0],finalPoint[1],4,0,2*Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill()
*/

for(i=0;i<100;i++){
	var difference = [finalPoint[0]-150,finalPoint[1]-213]
	//Difference is the final point coordinates minus the coordinates of the exact middle of the Triangle
	while((basePoint[0]-150)*1.7333 < (basePoint[1]-40) && ((basePoint[0]-150)*1.7333 > -(basePoint[1]-40)) && basePoint[1]<300)
	//as long as the length of the finalpoint has not reached an edge, it can be modified. basepoint becomes an exaggeration of finalpoint until either coordinate becomes out of bounds
		{
	basePoint[0]+= difference[0]/20
	basePoint[1]+= difference[1]/20
	//exaggerates the distance between basePoint and the center of the graph until one of the coordinates goes out of bounds
	}

}
middleDistance = [basePoint[0]-150,basePoint[1]-213]
	// distance between the edge and the center
	//now we have the distance between basePoint and the center, and finalPoint and the center

	// Difference is the distance between finalPoint and the center
	//MiddleDistance is the distance between basePoint and the center 
basicRatio = (basePoint[1]-213)/(difference[1]+0.1)
	//the lower the ratio the closest to the extreme the point is
finalToBasic = [basePoint[0]-finalPoint[0],basePoint[1]-finalPoint[1]]	

	//finalToBasic is the distance between the finalPoint and the basicPoint
	// now we set uberFinalPoint based on the ratio: the smaller the ratio, the more basePoint is heavy
//	var uberFinalPoint = [((finalPoint[0]*(basicRatio+5))+(basePoint[0]*(15-basicRatio)))/20,((finalPoint[1]*(basicRatio+5))+(basePoint[1]*(15-basicRatio)))/20]
	var uberFinalPoint = [finalPoint[0]+(finalToBasic[0]/(basicRatio/2+0.5)),finalPoint[1]+(finalToBasic[1]/(basicRatio/2)+0.5)]
	//the basicRatio can be used to set how the exagerration is made.

//	alert(Math.round(finalPoint[0]) + "," + Math.round(finalPoint[1]) + "   " + Math.round(uberFinalPoint[0]) + "," + Math.round(uberFinalPoint[1]) + "  " + secondOriginArray[e].name)
var c=document.getElementById("myCanvas");
var ctz=c.getContext("2d");
ctz.beginPath();
//ctz.arc(uberFinalPoint[0],uberFinalPoint[1],4,0,2*Math.PI);
ctz.arc(uberFinalPoint[0],uberFinalPoint[1],4,0,2*Math.PI);

ctz.stroke();
ctz.fillStyle = "black"
//console.log(colorChoice2[crt])
//console.log("rgb(" + [colorChoice1[b],colorChoice2[crt],255].join(',') + ')')
ctz.fill()



}

function calculateScore(){

	matchArray = []

for(p=0;p<secondOriginArray.length;p++){
	matchArray.push([Math.abs(secondOriginArray[p].totalValues[0]-logosScore)+Math.abs(secondOriginArray[p].totalValues[1]-kosmosScore)+Math.abs(secondOriginArray[p].totalValues[2]-erosScore),secondOriginArray[p]])

	}
 matchArray.sort(function(a, b){return a[0] - b[0]}); 
addPoint()
		switchDivs("myCanvas")
	switchDivs("questionsDiv")
alert("The God you are closest to is " + matchArray[0][1].name + ", " +  matchArray[0][1].originString + " " + matchArray[0][1].description + "\nWiki Link: \nhttp://wyrduk.wikidot.com/" + matchArray[0][1].name) 	
	personalityMatcher()
}


function calculateScore2(){
	logosScore = 0;
	kosmosScore = 0;
	erosScore = 0;

	
	for(n=0;n<radios.length;n++){
		
var rates = document.getElementsByName(radios[n]);
var rate_value;
for(var v = 0; v < rates.length; v++){
    if(rates[v].checked){
        rate_value = rates[v].value;
    }
}
	if(n<4){logosScore+=parseInt(rate_value)}
	else if(n<8){kosmosScore+=parseInt(rate_value)}
	else {erosScore+=parseInt(rate_value)} 
	}


calculateScore()
addPoint()
//		switchDivs("myCanvas")
//	switchDivs("questionsDiv")	
	}
	
	
function switchDivs(selectedDiv) {
  var x = document.getElementById(selectedDiv);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


//27 similar results, 37 unique ones
//37 final results (removing middle): 6 basic, 6 more advanced versions, then 6 mixes of those, then 6 final advanced and 6 mixes on each sides
/*How this will work: 
1 all neutral (4 neutral)
IF all numbers are the same
---
6 with neutral words except a mild version of the side (3 neutrals, one normal)
IF Two sides are the same and one is one level of difference
---
6 with neutral words except a strong version of the side (2 neutals, two normal)
IF Two sides are the same and one is two levels of difference
6 with mixes (2 neutrals, one strong from each common side)
IF There is one at 2.5, one at 7.5, one at 12.5
---
6 with very strong words (2 neutrals, two strong)
IF Two sides are the same and one is three levels of difference
12 with strong words and mixes (1 neutral, two strong, one strong of the relevant side)
*/

function personalityMatcher(){	

//while(logosScore > 0 && kosmosScore > 0 && erosScore > 0){logosScore -= 1;kosmosScore -=1;erosScore -=1}

	matchArrayAdjectives = []

for(p=0;p<adjectiveArray.length;p++){
	matchArrayAdjectives.push([Math.abs(adjectiveArray[p].values[0]-logosScore)+Math.abs(adjectiveArray[p].values[1]-kosmosScore)+Math.abs(adjectiveArray[p].values[2]-erosScore),adjectiveArray[p]])
	}
 matchArrayAdjectives.sort(function(a, b){return a[0] - b[0]}); 
//console.log(matchArrayAdjectives)
addPoint()
alert("You are: \n-" + matchArrayAdjectives[0][1].name + "\n-" +  matchArrayAdjectives[1][1].name + "\n-" +  matchArrayAdjectives[2][1].name + "\n-" +  matchArrayAdjectives[3][1].name
+ "\n \nYou are not: \n-"  + matchArrayAdjectives[matchArrayAdjectives.length-1][1].name + "\n-" +  matchArrayAdjectives[matchArrayAdjectives.length-2][1].name) 	

}

//


adjectiveArray = [


// 2.5 Logos 

//Balanced = new adjective("Balanced",[2.5,2.5,2.5]),
//	Balanced = new adjective("Balanced",[7.5,2.5,2.5]),
//	Balanced = new adjective("Balanced",[12.5,12.5,12.5]),
//	Balanced = new adjective("Balanced",[17.5,17.5,17.5]),
Enthusiastic = new adjective("Enthusiastic",[2.5,2.5,7.5]),
//	Enthusiastic = new adjective("Enthusiastic",[7.5,7.5,12.5]),
//	Enthusiastic = new adjective("Enthusiastic",[12.5,12.5,17.5]),
Emotional = new adjective("Emotional",[2.5,2.5,12.5]),
//	Emotional = new adjective("Emotional",[7.5,7.5,17.5]),
Passionate = new adjective("Passionate",[2.5,2.5,17.5]),

Stable = new adjective("Stable",[2.5,7.5,2.5]),
//	Stable = new adjective("Stable",[7.5,12.5,7.5]),
//	Stable = new adjective("Stable",[12.5,17.5,12.5]),
Intuitive = new adjective("Intuitive",[2.5,7.5,7.5]),
//	Intuitive = new adjective("Intuitive",[7.5,12.5,12.5]),
//	Intuitive = new adjective("Intuitive",[12.5,17.5,17.5]),
Friendly = new adjective("Friendly",[2.5,7.5,12.5]),
//	Friendly = new adjective("Friendly",[7.5,12.5,17.5]),
Empathetic = new adjective("Empathetic",[2.5,7.5,17.5]),

Conservative = new adjective("Conservative",[2.5,12.5,2.5]),
//	Conservative = new adjective("Conservative",[7.5,17.5,7.5]),
DownToEarth = new adjective("Down-to-earth",[2.5,12.5,7.5]),
//	DownToEarth = new adjective("Down-to-earth",[7.5,17.5,12.5]),
Impulsive = new adjective("Impulsive",[2.5,12.5,12.5]),
//	Impulsive = new adjective("Impulsive",[7.5,17.5,17.5]),
Nurturing = new adjective("Nurturing",[2.5,12.5,17.5]),

Traditionalist = new adjective("Very Traditionalist",[2.5,17.5,2.5]),
Pragmatic = new adjective("Pragmatic",[2.5,17.5,7.5]),
Protective = new adjective("Protective",[2.5,17.5,12.5]),
Wild = new adjective("Wild",[2.5,17.5,17.5]),

// 7.5 Logos 

Patient = new adjective("Patient",[7.5,2.5,2.5]),
//	Patient = new adjective("Patient",[12.5,7.5,7.5]),
//	Patient = new adjective("Patient",[17.5,12.5,12.5]),
Disorganised = new adjective("Disorganised",[7.5,2.5,7.5]),
//	Disorganised = new adjective("Disorganised",[12.5,7.5,12.5]),
//	Disorganised = new adjective("Disorganised",[17.5,12.5,17.5]),
Spontaneous = new adjective("Spontaneous",[7.5,2.5,12.5]),
//	Spontaneous = new adjective("Spontaneous",[12.5,7.5,17.5]),
Instinctive = new adjective("Instinctive",[7.5,2.5,17.5]),

Realistic = new adjective("Realistic",[7.5,7.5,2.5]),
//	Realistic = new adjective("Realistic",[12.5,12.5,7.5]),
//	Realistic = new adjective("Realistic",[17.5,17.5,12.5]),

Practical = new adjective("Practical",[7.5,12.5,2.5]),
//	Practical = new adjective("Practical",[12.5,17.5,7.5]),

Sensible = new adjective("Sensible",[7.5,17.5,2.5]),

// 12.5 Logos 

Calm = new adjective("Calm",[12.5,2.5,2.5]),
//	Calm = new adjective("Calm",[17.5,7.5,7.5]),
Cynical = new adjective("Cynical",[12.5,2.5,7.5]),
//	Cynical = new adjective("Cynical",[17.5,7.5,12.5]),
Rebellious = new adjective("Rebellious",[12.5,2.5,12.5]),
//	Rebellious = new adjective("Rebellious",[17.5,7.5,17.5]),
Idealistic = new adjective("Idealistic",[12.5,2.5,17.5]),

Studious = new adjective("Studious",[12.5,7.5,2.5]),
//	Studious = new adjective("Studious",[17.5,12.5,7.5]),

Devoted = new adjective("Devoted",[12.5,12.5,2.5]),
//	Devoted = new adjective("Devoted",[17.5,17.5,7.5]),

Formal = new adjective("Formal",[12.5,17.5,2.5]),

// 17.5 Logos 

Analytical = new adjective("Analytical",[17.5,2.5,2.5]),
Inquisitive = new adjective("Inquisitive",[17.5,2.5,7.5]),
Individualistic = new adjective("Individualistic",[17.5,2.5,12.5]),
Chaotic = new adjective("Chaotic",[17.5,2.5,17.5]),

Ambitious = new adjective("Ambitious",[17.5,7.5,2.5]),

PurposeDriven = new adjective("Purpose-Driven",[17.5,12.5,2.5]),

Spiritual = new adjective("Spiritual",[17.5,17.5,2.5])
]


function godRecommender(){
//Ceci est l'explorateur - tout simple, filter a travers les keywords et rien de plus.

secondOriginArray = secondOriginArray.sort(compare)

if(
document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value != "noPreference" ||
document.getElementById("approaches").options[document.getElementById("approaches").selectedIndex].value != "noPreference" ||
document.getElementById("domains").options[document.getElementById("domains").selectedIndex].value != "noPreference" ||
document.getElementById("personality").options[document.getElementById("personality").selectedIndex].value != "noPreference"){

// Filters the Origins

var newSecondOriginArray = secondOriginArray


if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value != "noPreference"){
if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "Gods"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) { return entry.originVar.type ===  "God"})}
else if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "Titans"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) { return entry.originVar.type ===  "Titan"})}
else if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "Otherworlds"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) { return entry.originVar.type === "Otherworld"})}
else if(document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value === "SecretSocieties"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) { return entry.originVar.type === "Enlightened" })}
else{newSecondOriginArray = newSecondOriginArray.filter(function (entry) { return entry.originVar.name === document.getElementById("origins").options[document.getElementById("origins").selectedIndex].value; })}
}


// Filter the Approaches
if(document.getElementById("approaches").options[document.getElementById("approaches").selectedIndex].value != "noPreference"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) {
return entry.approaches[0].name === document.getElementById("approaches").options[document.getElementById("approaches").selectedIndex].value || entry.approaches[1].name === document.getElementById("approaches").options[document.getElementById("approaches").selectedIndex].value || entry.approaches[2].name === document.getElementById("approaches").options[document.getElementById("approaches").selectedIndex].value
})}

// Filters the Domains
if(document.getElementById("domains").options[document.getElementById("domains").selectedIndex].value != "noPreference"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) {
if(entry.domains.length === 1){return entry.domains[0].name === document.getElementById("domains").options[document.getElementById("domains").selectedIndex].value; }
if(entry.domains.length === 2){return entry.domains[0].name === document.getElementById("domains").options[document.getElementById("domains").selectedIndex].value || entry.domains[1].name === document.getElementById("domains").options[document.getElementById("domains").selectedIndex].value; }
})}

// Filter the Personalities
if(document.getElementById("personality").options[document.getElementById("personality").selectedIndex].value != "noPreference"){newSecondOriginArray = newSecondOriginArray.filter(function (entry) {
if(entry.personalities.length === 1){return entry.personalities[0].name === document.getElementById("personality").options[document.getElementById("personality").selectedIndex].value; }
if(entry.personalities.length === 2){return entry.personalities[0].name === document.getElementById("personality").options[document.getElementById("personality").selectedIndex].value || entry.personalities[1].name === document.getElementById("personality").options[document.getElementById("personality").selectedIndex].value; }
})}

godCounter = 0
if(newSecondOriginArray.length === 0){document.getElementById("noMatch").innerHTML = "No Match Found !"}
if(newSecondOriginArray.length != 0){document.getElementById("noMatch").innerHTML = " Click an Origin to check the recommended Legendary Abilities !"}
document.getElementById("hoverer").innerHTML = "Hover over an Origin for extra information !"


if(newSecondOriginArray.length % 3 === 1){newSecondOriginArray.push( Default= new secondOrigin(""))}
else if(newSecondOriginArray.length % 3 === 2){newSecondOriginArray.push( Default= new secondOrigin(""));newSecondOriginArray.push( Default= new secondOrigin(""))}

var table = document.getElementById("Table");
	table.innerHTML = "";
	 
	 for(i=2;i<newSecondOriginArray.length+3;i+=3){
godCounter+=1
 if(godCounter <= 10){

var row = table.insertRow(-1);

var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);


cell1.id = i.toString()
cell3.id = i.toString()
cell5.id = i.toString()

if(newSecondOriginArray[i-2]){cell1.innerHTML = newSecondOriginArray[i-2].name;cell1.title = newSecondOriginArray[i-2].originString + " " + newSecondOriginArray[i-2].description}
if(newSecondOriginArray[i-2] && newSecondOriginArray[i-2].name.length !=0){
if(parametersArray.indexOf(newSecondOriginArray[i-2].originVar) < 63){cell2.innerHTML = '<a href="http://wyrduk.wikidot.com/' + newSecondOriginArray[i-2].name + '"  target="_blank">Link</a>'}
else{cell2.innerHTML = '<a href="http://wyrduk.wikidot.com/' + newSecondOriginArray[i-2].originString + '"  target="_blank">Link</a>'}}
if(newSecondOriginArray[i-1]){cell3.innerHTML = newSecondOriginArray[i-1].name;cell3.title = newSecondOriginArray[i-1].originString + " " + newSecondOriginArray[i-1].description}
if(newSecondOriginArray[i-1] && newSecondOriginArray[i-1].name.length !=0){
if(parametersArray.indexOf(newSecondOriginArray[i-1].originVar) < 63){cell4.innerHTML = '<a href="http://wyrduk.wikidot.com/' + newSecondOriginArray[i-1].name + '"  target="_blank">Link</a>'}
else{cell4.innerHTML = '<a href="http://wyrduk.wikidot.com/' + newSecondOriginArray[i-1].originString + '"  target="_blank">Link</a>'}}
if(newSecondOriginArray[i]){cell5.innerHTML = newSecondOriginArray[i].name;cell5.title = newSecondOriginArray[i].originString + " " + newSecondOriginArray[i].description}
if(newSecondOriginArray[i] && newSecondOriginArray[i].name.length !=0){
if(parametersArray.indexOf(newSecondOriginArray[i].originVar) < 63){cell6.innerHTML = '<a href="http://wyrduk.wikidot.com/' + newSecondOriginArray[i].name + '"  target="_blank">Link</a>'}
else{cell6.innerHTML = '<a href="http://wyrduk.wikidot.com/' + newSecondOriginArray[i].originString + '"  target="_blank">Link</a>'}}

cell1.onclick = function() { for(i=2;i<document.getElementById("Table").rows.length*3;i+=3){
if(this.id === i.toString()){ChosenGod = newSecondOriginArray[i-2].name}}LegendaryMakerTotal()}
cell3.onclick = function() { for(i=2;i<document.getElementById("Table").rows.length*3;i+=3){
if(this.id === i.toString()){ChosenGod = newSecondOriginArray[i-1].name}}LegendaryMakerTotal()}
cell5.onclick = function() { for(i=2;i<document.getElementById("Table").rows.length*3;i+=3){
if(this.id === i.toString()){ChosenGod = newSecondOriginArray[i].name}}LegendaryMakerTotal()}


	 }
}}
}

function exampleLegendaryMaker(){

Total = new parameterCalculator("Total","Default",[0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])

  counter = 0
  for(i=0;i<newAbilitiesArray.length;i++){

	//Adds the Domains
	if(godFound.domains.length === 1){Total.legendaries[i] += godFound.domains[0].legendaries[i]/2}
	if(godFound.domains.length === 2){Total.legendaries[i] += (godFound.domains[0].legendaries[i] + godFound.domains[1].legendaries[i])/4}

	//Adds the chosen Roles (Face, Tank, etc)
	Total.legendaries[i]+=Math.floor((roleFound.legendaries[i]/20*6+roleFound2.legendaries[i]/20*4)) 
} 	 


  for(i=0;i<skillsArray.length;i++){
	//Adds the Origin 
	Total.skills[i] += godFound.originVar.skills[i]/2 
	//Adds the Domains
	if(godFound.domains.length === 1){Total.skills[i] += godFound.domains[0].skills[i]/2}
	if(godFound.domains.length === 2){Total.skills[i] += (godFound.domains[0].skills[i] + godFound.domains[1].skills[i])/4}
	//Adds Personalities
	if(godFound.personalities.length === 1){Total.skills[i] += godFound.personalities[0].skills[i]/2}
	if(godFound.personalities.length === 2){Total.skills[i] += (godFound.personalities[0].skills[i] + godFound.personalities[1].skills[i])/4}
	//Adds Roles
	Total.skills[i]+=Math.floor((roleFound.skills[i]/20*6+roleFound2.skills[i]/20*4)) 

	//Adds the LKE Scores 
	logosScore = godFound.totalValues[0]
	kosmosScore = godFound.totalValues[1]
	erosScore = godFound.totalValues[2]
} 	



function adder(value){
	
//the adder function looks through all Legendaries, if any are on a relevant score. If so they are added to the Total array.

{for(i=0;i<newAbilitiesArray.length;i++){if(Math.round(Total.legendaries[i])==value){ legendariesFound.push([newAbilitiesArray[i].name,newAbilitiesArray[i].description,value,newAbilitiesArray[i]]);}
}}
{for(i=0;i<skillsArray.length;i++){if(Math.round(Total.skills[i])==value){ skillsFound.push([skillsArray[i].name,skillsArray[i].description,value]);}
}}
}

for(o=10;o>-10;o--){adder(o)}

//At this point, legendariesFound is a full Array with all the Legendaries and their score based on Domain/Roles
//Next, the following function creates a sister array, matchArrayLegendaries, which does the same based on LKE Scores

LegendaryAbilityMatcher()

//Finally, both Arrays, sorted with their own Score, are compared and added to a third array.

finalLegendariesArray = []
for(e=0;e<legendariesFound.length;e++){
	for(f=0;f<matchArrayLegendaries.length;f++){
		if(legendariesFound[e][0] == matchArrayLegendaries[f][1].name){finalLegendariesArray.push([legendariesFound[e][0],e+f,legendariesFound[e][3]])}
	}
}
 finalLegendariesArray.sort(function(a, b){return a[1] - b[1]}); 
console.log(finalLegendariesArray[1])
for(i=0;i<9;i++){document.getElementById("LegendaryFound" + (i+1)).innerHTML = finalLegendariesArray[i][0]}
for(i=0;i<9;i++){document.getElementById("LegendaryFound" + (i+1)).title = finalLegendariesArray[i][2].description}

for(i=0;i<7;i++){document.getElementById("SkillFound" + (i+1)).innerHTML = skillsFound[i][0]}
for(i=0;i<7;i++){document.getElementById("SkillFound" + (i+1)).title = skillsFound[i][1]}
}

function LegendaryAbilityMatcher(){	

//This looks at the Logos/Kosmos/Eros Scores and matches the nearest Legendary Abilities. The first Array Element of matchArrayLegendaries elements is how close that Legendary Ability is with a score.

//while(logosScore > 0 && kosmosScore > 0 && erosScore > 0){logosScore -= 1;kosmosScore -=1;erosScore -=1}


	matchArrayLegendaries = []

for(p=0;p<newAbilitiesArray.length;p++){
	matchArrayLegendaries.push([Math.abs(newAbilitiesArray[p].values[0]-logosScore)+Math.abs(newAbilitiesArray[p].values[1]-kosmosScore)+Math.abs(newAbilitiesArray[p].values[2]-erosScore),newAbilitiesArray[p]])
	}
 matchArrayLegendaries.sort(function(a, b){return a[0] - b[0]}); 

//	 for(p=0;p<matchArrayLegendaries.length;p++){console.log(matchArrayLegendaries[p][1].name + " " + matchArrayLegendaries[p][0])	 }



}

function LegendaryMakerTotal(){
// This changes the function code based on whether LegendaryMakerTotal is used for the Godborn Maker or the NPC Maker
whichFunctionIsIt = "NPC Maker"

	
	legendariesFound = []
	skillsFound = []
	  godFound = secondOriginArray.filter(function (entry) { return entry.name === ChosenGod; })[0]
  roleFound2 = rolesChoiceArray.filter(function (entry) { return entry.name === ChosenSecondRole; })[0]	
  roleFound = rolesChoiceArray.filter(function (entry) { return entry.name === ChosenFirstRole; })[0]


exampleLegendaryMaker()  


document.getElementById("hoverer2").innerHTML = "Hover over a Legendary Ability or Skill for extra information !"
}


function addOption(selectChoice) {
 	if(document.getElementById("continent").value === "God"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "God" })}
	if(document.getElementById("continent").value === "Otherworld"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "Otherworld" })}
	if(document.getElementById("continent").value === "Titan"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "Titan" })}
	if(document.getElementById("continent").value === "Enlightened"){newOriginArray = parametersArray.filter(function (entry) { return entry.type === "Enlightened" })}


for (j = 0; j < 100; j++) {
  selectChoice.options[0] = null;
}	
for (i = 0; i < newOriginArray.length; i++) {
    var x = selectChoice;
    var option = document.createElement("option");
    option.text = newOriginArray[i].name;
    option.value = newOriginArray[i].name;

   x.add(option);
}
}
/*
function addOriginOption(selectChoice) {

for (j = 0; j < 100; j++) {
  selectChoice.options[0] = null;
}	 
for (i = 0; i < secondOriginArray.length; i++) {
if(document.getElementById("OriginSelect").value === secondOriginArray[i].originString){	
    var x = selectChoice;
    var option = document.createElement("option");
    option.text = secondOriginArray[i].name;
    option.value = secondOriginArray[i].name;
   x.add(option);
}}
}
*/


function lengthChecker(){
	length = ""
for(i=0;i<secondOriginArray.length;i++){
length+= secondOriginArray[i].name + ": " + secondOriginArray[i].legendaries.length + "\n"
}
	alert(length)
}
function addAnAbilityMaker(){
abilityName = prompt("What is the Name of this Ability ?")
variableName = abilityName.replace(/\s/g, '');
newLegendary =	[]
for(i=0;i<parametersArray.length;i++){
newLegendary.push(prompt(parametersArray[i].name + " - " + abilityName))
}
alert(variableName + " = new LegendaryAbility(\"" + abilityName + "\",[" + newLegendary + "])")
}


function addAnAbility(){
	newAbilitiesArray = [
DruidismGreenDruid = new LegendaryAbility("Green Druid","- Summon an Ent to aid you in battle\n- Entangle enemies with roots.",[8,8,12],[-1,2,-1,0,2,-2,-2,1,0,1,-2,-2,2,-1,0,1,2,1,1,4,02,2,-1,3,3],["Nature-Loving","Druid"]),
Mythcalling = new LegendaryAbility("Mythcalling","- Summon a swarm of bees,\n- Empower your animal companion.",[8,10,12],[2,2,2,3,3,3,2,1,1,2,-1,0,1,-2,2,2,2,0,3,3,1,-2,1,0,2,3],["Mythcalling","Mythcaller"]),
DruidismFeySorcerySummer = new LegendaryAbility("Fey Sorcery - Summer","- Send a scorching ray of heat\n- Make yourself irresistibly attractive.",[12,6,8],[-2,-1,-1,0,3,1,-1,0,1,0,-4,3,2,-2,-4,4,0,-3,1,3,-1,4,2,2,3,2],["Mischievous","Sorcerer"]),
DruidismFeySorceryWinter = new LegendaryAbility("Fey Sorcery - Winter","- Raise a blizzard.\n- Create an illusion of yourself.",[11,5,12],[-1,2,0,-3,-4,-2,2,2,1,2,2,-3,-1,-2,2,-4,1,3,1,2,0,4,2,3,3,1],["Devious","Warlock"]),
DruidismTechnodruidism = new LegendaryAbility("Technodruidism","- Manipulate electrical currents.\n- Take remote control of a computer system.",[15,5,6],[-2,1,-2,-3,1,-2,-1,-2,-3,3,-1,1,2,0,0,-1,2,-1,4,2,-2,-1,2,2,4,1],["Cyborg","Technodruid"]),
HematurgyYahuar = new LegendaryAbility("Yahuar","- Raise a Bone Shield to protect your allies.\n- Heal your allies.",[6,14,10],[2,0,0,0,1,1,-2,1,-1,-2,0,1,-1,1,-1,1,-1,-1,-2,-3,2,-3,2,-1,-2,2],["Self Sacrificial","Bloodsharer"]),
HematurgyItztli = new LegendaryAbility("Itztli","- Desecrate a sacred location.\n- Sacrifice an enemy for more power.",[8,16,10],[1,0,0,-1,0,0,-1,-1,0,-1,1,1,0,0,-1,2,-1,-1,-2,-1,0,-3,0,2,0,-1],["Blood Drinking","Executioner"]),
InvokationDeathNecromancy = new LegendaryAbility("Spiritwalking - Necromancy","- Raise the dead.\n- Consume Souls to gain power.",[6,12,10],[1,1,0,-2,-3,-3,2,1,0,1,3,-1,1,-1,0,-1,0,1,0,-2,-1,1,-2,1,2,1,1],["Soulstealing","Necromancer"]),
InvokationDeathShamanism = new LegendaryAbility("Spiritwalking - Shamanism","- Gain the advice of an ancient wise spirit.\n- Tap into the power of a sanctified place.",[8,8,7],[-1,3,0,-1,-2,-2,4,3,1,1,4,1,2,2,2,0,1,2,-2,-2,1,2,1,0,4,3],["Shamanistic","Shaman"]),
InvokationDeathDestruction = new LegendaryAbility("Death - Destruction","- Send beams of pure Death\n- Crumble a wall to dust.",[0,10,13],[2,0,0,-2,-3,-2,2,2,1,-1,3,1,1,-1,1,-2,0,3,-1,-2,0,-3,0,4,1,-2],["Murderous","Killer"]),
InvokationDeathHorror = new LegendaryAbility("Death - Horror","- Terrify enemies.\n- Turn ghosts into insane wraiths.",[4,9,12],[0,0,1,-2,-3,-1,1,1,1,-1,1,1,1,-1,1,-3,-1,1,0,-1,-2,2,1,-1,0,2],["Horrifying","Terror"]),
ChwalRider = new LegendaryAbility("Chwal - Rider","- See through the eyes on an unsuspecting individual.\n- Mark and find individuals.",[11,9,3],[-1,0,0,1,0,-1,2,2,1,3,1,-1,0,2,3,0,2,1,0,-1,0,1,-2,-3,4,2],["Watchful","Spy"]),
ChwalPuppeteer = new LegendaryAbility("Chwal - Puppeteer","- Control an individual’s actions.\n- Stop an enemy mid-strike.",[6,7,12],[-2,0,2,0,0,1,2,2,0,2,3,0,1,0,3,-1,2,2,0,-1,1,1,-2,-3,2,4],["Manipulative","Puppetmaster"]),
WyrdseeingMystery = new LegendaryAbility("Mystery","- Reveal information hidden in the tangles of Fate.\n- Detect Fatebindings between two targets.",[16,16,4],[-1,4,2,-1,-2,1,1,3,2,2,0,2,-1,3,4,2,4,1,0,1,2,-1,-1,-2,4,2],["Wise","Master"]),
WyrdseeingProphecy = new LegendaryAbility("Prophecy","- Sense an attack or ambush coming.\n- Decipher the future of an individual.",[18,18,4],[-2,4,2,2,1,2,1,1,1,2,1,1,0,2,3,2,4,1,1,1,2,-2,2,-3,4,3],["Prophetic","Prophet"]),
EpicPhysiologyEpicStrength = new LegendaryAbility("Epic Strength","- Lift a car.\n- Rip a man in half.",[5,11,13],[4,-3,1,-1,-2,-3,-4,-2,1,-3,-2,2,3,2,-3,1,-3,-2,0,-1,-1,-2,2,4,1,-1],["Mighty","Goliath"]),
EpicPhysiologyEpicToughness = new LegendaryAbility("Epic Toughness","- Shrug off a fireball\n- Run without stopping for days.",[5,8,14],[4,-2,1,2,2,-2,-3,-1,0,-2,1,0,3,4,-2,1,-2,-2,-1,0,3,-2,4,1,-1,0],["Resilient","Hulk"]),
EpicPhysiologyEpicSenses = new LegendaryAbility("Epic Senses","- Gain amazing hearing\n- See from miles away.",[5,10,15],[1,2,0,1,1,3,2,0,2,3,-2,2,1,3,4,1,2,3,-1,0,-1,0,3,1,3,-1],["Perceptive","Hunter"]),
EpicPhysiologyBeauty = new LegendaryAbility("Epic Beauty","- Charm others.\n- Pacify others with awe.",[8,6,16],[-3,-2,2,2,3,4,0,1,1,2,-2,2,1,-1,3,3,0,-1,-2,1,-2,4,-1,-2,-2,-1],["Beautiful","Supermodel"]),
FireDestruction = new LegendaryAbility("Fire - Destruction","- Burn a forest down\n- Throw a fireball.",[5,10,10],[2,-2,-2,-2,-1,0,-3,-4,1,-3,1,6,0,0,-2,4,-3,-3,1,0,-3,-1,-2,-2,-2,4,1,-1],["Destructive","Pyromancer"]),
FireLife = new LegendaryAbility("Fire - Life","- Ressurect mortals\n- Heal allies.",[6,9,15],[-2,2,2,3,2,2,-2,-3,-2,-3,-4,5,1,-1,-3,6,-2,-3,2,1,-2,1,3,-1,1,4],["Bright","Lifebinder"]),
FireInvention = new LegendaryAbility("Fire - Invention","- Create an impossibly large gun.- Hack a computer.",[12,4,8],[1,2,0,-2,-3,-2,-3,-4,1,2,-3,5,2,0,-3,2,1,-3,6,-3,1,-2,2,2,4,1],["Genius","Inventor"]),
FireMagma = new LegendaryAbility("Fire - Magma","- Create and control flows of magma\n- Rupture volcanoes from the ground.",[5,13,13],[1,-2,-1,-2,0,-1,-3,-4,1,-3,1,4,3,-1,-3,1,-3,-4,1,0,-2,-3,3,3,-1,1],["Magma","Earthmelter"]),
FireDrought = new LegendaryAbility("Fire - Drought","- Dry up water and blood.\n- Turn enemies to ash.",[6,9,13],[1,-3,-2,-3,-4,-3,-4,-6,2,-3,2,4,0,-2,-4,1,-3,1,0,-2,-3,-2,1,2,-1,4],["Droughtbringing","Lifeeater"]),
FireStrife = new LegendaryAbility("Fire - Strife","- Turn friends against each other.\n- Start a bar fight.",[6,15,12],[4,-1,0,-3,-3,3,-1,0,1,1,0,4,-2,-4,1,3,-1,-3,-2,-3,-2,4,2,1,2,4],["Rabble-Rousing","Anarchist"]),
WaWorldgingSea = new LegendaryAbility("Water - Raging Sea","- Create anger.\n- Raise a tidal wave.",[6,10,9],[1,-1,-2,-3,0,-3,1,5,3,-1,0,-4,-1,-2,2,-2,-1,1,-3,-2,-3,-2,1,2,2,3],["Raging","Leviathan"]),
WaterAbyss = new LegendaryAbility("Depths - Abyss","- Summon creatures from the dark Abyss.- Drown your enemies.",[5,9,12],[-2,1,1,3,2,-3,1,4,-3,-2,2,-4,-1,-3,-2,-4,1,3,-2,-4,-3,2,4,2,0,1],["Abyssal","Crusher"]),
WaterLife = new LegendaryAbility("Water - Life","- Spring forth impossible animals.\n- Fortify your allies.",[4,12,10],[-4,2,1,3,2,1,1,4,1,2,-4,-4,1,0,2,-3,0,-3,-2,2,0,1,3,-2,-2,4],["Seafaring","Lifebringer"]),
LightBrightness = new LegendaryAbility("Light - Brightness","- Blind your enemies\n- Dazzle an audience.",[12,18,8],[1,-2,3,-1,-2,3,0,-2,1,1,-3,2,-1,0,-4,3,-2,-4,-3,-2,1,4,2,-1,-2,3],["Bright","Priest"]),
LightIllumination = new LegendaryAbility("Light - Illumination","- Engage in intense concentration to reveal mysteries\n- Inspire others to create and learn.",[16,12,1],[-2,3,2,-3,-2,2,2,-1,-1,2,-3,2,-1,-2,3,4,3,-4,2,0,1,1,-2,-3,4,2],["Illuminated","Genius"]),
LightSun = new LegendaryAbility("Light - Sun","- Send rays of heat.\n- Travel on a sunbeam.",[14,12,6],[-1,-2,2,-1,-2,0,-1,-3,2,-2,-4,3,1,-1,-4,6,-1,-4,0,1,0,2,2,3,0,2],["Sunlit","Sunwalker"]),
SkyDestruction = new LegendaryAbility("Sky - Destruction","- Crush enemies with storms.\n- Summon tornadoes.",[6,9,7],[2,-2,0,-2,-3,-2,-1,0,4,-2,2,2,1,1,-1,1,-2,0,-2,-2,-1,-2,-1,4,-2,-1],["Stormborn","Skybreaker"]),
SkyTempest = new LegendaryAbility("Sky - Tempest","- Create Storms.\n- Fly.",[8,10,6],[3,-2,1,-2,-1,-2,1,2,4,-1,1,0,2,1,0,-2,-3,1,-2,-1,-1,-2,2,3,1,2],["Tempest","Skylord"]),
SkyPeace = new LegendaryAbility("Sky - Peace","- Pacify Enemies\n- Stop a bullet in its tracks.",[10,8,4],[-4,2,1,1,1,2,2,2,4,0,-3,-3,2,2,3,1,2,-2,0,1,3,3,3,-2,1,2],["Calm","Peacemaker"]),
SkyRain = new LegendaryAbility("Sky - Rain","- Create a soothing rain\n- Summon a raging monsoon.",[13,7,7],[-2,2,1,2,3,1,2,4,4,1,-2,-4,-1,-2,0,-3,1,-2,-3,1,-1,0,-1,-2,2,3],["Soothing","Rainbinder"]),
DarknessVoid = new LegendaryAbility("Night - Void","- Remove the sense of sight or hearing from your foes.\n- Erase an enemy from existence.",[6,8,10],[2,-2,-1,-3,-4,-3,0,-2,-2,-3,3,-1,1,-2,1,-3,-2,4,-2,-3,-2,2,-2,4,-3,-4],["Voidwalking","Voidwalker"]),
DarknessShadows = new LegendaryAbility("Depths - Shadows","- Hide in shadows\n- Remove light.",[6,8,8],[-2,0,-2,-3,-2,1,2,0,-1,3,2,-2,-1,-3,3,-3,-1,4,0,1,-1,1,2,-2,4,3],["Blinding","Visionbreaker"]),
DarknessUnderground = new LegendaryAbility("Depths - Underground","- See in the dark.\n- Have the Earth swallow enemies.",[3,10,12],[-1,-1,-2,1,2,-2,2,-2,-4,0,3,-2,3,1,-4,-4,1,4,2,2,1,-2,2,-2,-1,4],["Underground","Cavern Dweller"]),
WorldAbundance = new LegendaryAbility("Depths - Abundance","- Summon riches.\n- Summon weapons for a whole army.",[5,10,12],[-2,1,2,1,3,1,2,2,2,-1,-3,0,3,0,-1,2,1,-2,4,2,2,1,0,-1,4,3],["Metalcrafting","Engineer"]),
WorldLife = new LegendaryAbility("World - Life","- Summon plants and animals.\n- Heal a forest.",[1,10,14],[-3,2,1,4,4,2,0,2,-1,-2,-4,1,4,-1,0,3,1,-2,1,3,-1,-2,2,2,3,4],["Creating","Progenitor"]),
WorldStone = new LegendaryAbility("World - Stone","- Crush enemies with a boulder.\n- Turn your fist into stone.",[7,10,10],[3,1,1,-2,-2,-2,-1,0,-1,-2,0,1,4,2,-2,-2,0,1,2,2,3,-2,5,3,1,3],["Avalanche","Earthbreaker"]),
WorldDecay = new LegendaryAbility("World - Decay","- Rot an enemy from the inside.\n- Summon an army of worms.",[2,11,10],[3,-3,-2,-2,1,-2,-1,-2,-4,-3,4,1,4,-3,-2,-3,-3,3,0,2,-2,-3,1,4,2,3],["Plague","Blighter"]),
WorldExpanse = new LegendaryAbility("World - Expanse","- Travel quickly.\n- Plague your foes with exotic diseases.",[5,8,12],[-1,1,1,0,2,-1,3,2,3,-1,-2,-1,4,0,0,1,2,-2,0,3,-2,-1,2,0,4,3],["Travelling","Wanderer"]),
OrderGravity = new LegendaryAbility("Order - Gravity","- Slam an enemy into the floor.\n- Float into the air.",[5,13,6],[1,2,2,-1,-2,1,3,1,0,1,1,2,2,3,2,1,3,0,1,1,4,-2,3,2,2,4],["Titanic","Goliath"]),
OrderControl = new LegendaryAbility("Order - Control","- Compel someone to obey your orders.\n- Take control of an ongoing spell.",[7,15,0],[2,2,3,-2,-2,2,1,1,2,-2,-1,2,3,4,2,2,1,1,1,1,4,2,3,0,-1,3],["Tyrannical","Ruler"]),
KannagaranoMichi = new LegendaryAbility("Kannagara no Michi","- Bond yourself to a Kami or Mythborn.\n- Separate a Legendary being from its power source.",[7,8,11],[2,4,2,2,3,2,2,2,0,1,-4,0,3,0,2,2,-2,-2,1,5,-2,4,3,3,4,2],["Nature-bound","Kami-Friend"]),
TheMiddleWay = new LegendaryAbility("The Middle Way","- Distance yourself from Reality to resist uses of Legendary Abilities.\n- Project yourself to your ideal Self to increase your mental abilities.",[14,6,6],[-3,6,1,2,1,3,1,2,3,4,-2,0,-2,0,1,1,4,-2,-2,2,2,2,4,-2,2,3],["Enlightened","Buddha"]),
Isfet = new LegendaryAbility("Isfet","- Gain the Isfet Aspect “Compulsive Liar”.\n- Gain the Isfet Aspect “Greed is Good”.",[10,4,16],[2,-1,3,-2,2,3,1,2,2,3,2,3,1,-4,3,3,2,4,-1,2,-4,3,3,1,3,4,3],["Sinful","Sinner"]),
Nihilism = new LegendaryAbility("Nihilism","- Deny the existence of Legend to harm Legendary beings.\n- Rely on Reason to defend against Legendary attacks.",[14,4,14],[1,4,2,-2,0,1,1,2,1,3,0,1,1,2,1,1,4,2,-2,1,2,0,4,4,3,3],["Nihilistic","Nihilist"]),
OrderKnowledge = new LegendaryAbility("Order - Knowledge","- Learn ancient mysteries.\n- Have an incredible memory.",[12,8,2],[-2,3,-1,-2,-1,1,0,2,0,2,-1,1,2,2,1,0,4,-2,2,0,4,-2,-1,-1,4,2],["Wise","Sage"]),
NightMoon = new LegendaryAbility("Night - Moon","- Turn someone insane.\n- Soothe a pained friend.",[6,10,9],[-1,1,-1,0,2,1,2,2,2,3,2,-4,-1,-2,6,-4,1,-3,-1,1,-2,4,1,-1,3,4],["Sorrowful","Lunatic"]),
NightDarkness = new LegendaryAbility("Night - Obscurity","- Blind an enemy.\n- Hide in the shadows.",[8,6,10],[1,-1,1,-2,-2,-3,-2,2,2,1,2,-3,1,-4,-3,-4,1,5,-2,-1,-4,0,3,1,4,3],["Dark","Skulker"]),
NightVeil = new LegendaryAbility("Night - Veil","- Turn invisible.\n- Defend yourself from magic.",[8,8,6],[-2,1,-1,-2,-2,1,2,2,2,2,2,-4,1,1,3,-4,1,4,0,0,1,0,2,1,3,4],["Veiled","Veiler"]),
NightStars = new LegendaryAbility("Night - Stars","- Divine the future.\n- Call down the fire of the Stars.",[8,8,6],[-2,4,2,1,-1,2,2,1,3,2,-2,1,-1,1,3,1,4,-2,0,0,1,1,-1,-2,4,3],["Star-blessed","Stargazer"]),
NightFear = new LegendaryAbility("Night - Fear","- Terrify enemies.\n- Lurk hidden in the shadows.",[5,10,15],[1,-1,0,-2,-3,1,-1,1,2,0,2,-4,1,0,1,-4,-2,4,0,-1,-2,4,2,0,1,3],["Predatory","Terror"]),
TaiYiNature = new LegendaryAbility("Tai Yi - Nature","- Change an enemy into a servant.\n- Reshape a Titanspawn.",[7,17,7],[0,1,2,1,0,0,0,0,1,-2,-1,0,1,3,1,1,1,2,1,-1,4,-3,-2,-3,2,1],["Legend-Shaping","Legend-Shaper"]),
TaiYiFlow = new LegendaryAbility("Tai Yi - Flow","- Redirect a Spell.\n- Manipulate flows of Legend.",[10,14,4],[-1,2,0,1,2,2,2,2,1,1,1,1,-2,1,2,2,0,-1,0,2,3,-3,1,-1,3,2],["Masterful","Flowbinder"]),
FleshShaping = new LegendaryAbility("Flesh-Shaping","- Grow Wings.\n- Regrow an Arm.",[4,14,14],[2,-2,-1,1,1,-1,-2,-2,-3,-3,2,0,1,-1,-2,-2,-3,0,-3,-2,-3,-3,3,3,-2,-3],["Monstrous","Abomination"]),
EpicPresence = new LegendaryAbility("Epic Presence","- Give rousing speeches.\n- Intimidate an individual.",[11,15,8],[4,1,4,0,-2,2,-1,0,2,-1,2,3,1,3,-1,3,-2,1,-1,-2,2,4,2,-1,1,2],["Commanding","Commander"])

/*
Night - Nightmares
Death - Journey
Order - Law
*/
	]

	skillsArray = [

AthleticsSkill = new LegendaryAbility("Athletics","- Jump over a wall.\n- Run a sprint.",[0,0,0],[0,-1,2,1,4,2,2,-1,1,0,1,1,1,1,2,-2,-1,1,2,0,-1,2,-2,1,-1,1,0,1,-2,2,2,2,-2,0,3,0,-1,0,-2,2,4,1,-1,1,0,2,2,-1,0,-1,1,2,-1,0,2,1,0,2,2,1,3,2,0,2,1,1,2,2,2,-2,2,-1,1,-3,3,-1,4,0]),
Rapport = new LegendaryAbility("Rapport","- Make friends at a bar.\n- Mediate a negotiation.",[0,0,0],[2,1,1,-1,1,0,-3,2,2,3,3,4,3,2,1,1,1,1,2,-1,1,2,-2,-3,-1,1,-1,-3,2,1,2,4,-1,6,-1,-3,0,1,4,2,-3,-1,-1,1,-1,1,1,1,-1,1,1,2,0,3,-4,1,0,2,1,-3,2,2,-1,4,0,-1,3,-1,4,4,3,2,3,5,-1,-2,0,2]),
Technology = new LegendaryAbility("Technology","- Hack a computer\n- Build a grenade.",[0,0,0],[1,4,3,0,3,1,-1,1,0,-1,-1,0,1,0,1,2,1,3,3,1,1,2,2,-1,6,1,2,-1,1,2,0,-1,2,0,2,1,2,3,0,1,2,1,1,0,-1,-1,-2,-2,1,-1,-1,1,-2,2,-4,1,2,3,3,-2,1,2,-2,3,3,-2,2,-1,6,4,2,1,0,-2,2,1,5,3]),
FirstAid = new LegendaryAbility("First Aid","- Patch a wound.\n- Find the antidote to a poison.",[0,0,0],[3,3,0,-1,1,0,1,1,-1,1,3,3,1,3,2,-1,2,2,3,1,0,2,1,-2,1,2,2,0,-2,1,-1,2,0,1,-2,-3,-2,-3,1,3,-2,0,1,1,1,0,1,1,-1,0,0,1,1,2,1,2,1,3,3,-2,1,1,1,4,1,0,2,-1,2,-1,3,2,4,2,3,-2,3,3]),
Fight = new LegendaryAbility("Fight","- Swing a sword.\n- Throw a punch.",[0,0,0],[-1,-2,2,4,2,-2,4,-2,1,-2,-2,-3,-2,1,2,-2,2,3,3,3,0,2,-1,1,0,1,1,4,0,-1,3,-1,-2,-2,3,4,0,-2,0,4,4,2,0,1,0,2,2,-1,1,-1,1,2,-1,2,3,3,2,3,4,-1,3,1,2,3,2,3,2,1,1,-2,4,0,2,-3,1,4,0,1]),
Lore = new LegendaryAbility("Lore","- Know a magical incantation.\n- Know ancient history.",[0,0,0],[2,4,0,-1,1,-1,-2,4,1,0,1,-1,2,2,1,3,2,1,2,2,3,3,4,1,2,3,2,-2,1,2,1,2,4,2,-2,-3,1,-1,2,1,-2,0,1,-1,2,-2,-2,1,-1,1,-2,-1,1,2,0,1,2,2,1,2,2,3,2,3,2,2,4,4,3,3,1,4,3,-2,1,2,4,3]),
Notice = new LegendaryAbility("Notice","- Get the drop on an enemy.\n- Find clues.",[0,0,0],[4,2,0,-1,2,2,3,1,2,0,-1,3,2,2,3,4,1,2,-1,4,3,4,1,2,0,1,-1,3,2,0,1,-1,1,2,-2,3,1,2,2,4,4,0,-1,1,-1,1,2,0,1,-1,1,0,-1,2,3,1,0,2,3,4,3,3,1,3,2,0,0,1,3,3,4,2,1,0,3,2,4,1]),
Physique = new LegendaryAbility("Physique","- Run a marathon.\n- Withstand physical trauma.",[0,0,0],[-1,-2,2,2,0,-1,4,-2,2,3,3,1,-1,2,2,-1,2,3,4,2,0,3,-2,1,2,2,1,3,-1,-2,2,3,-1,-2,1,4,-2,-3,-2,4,3,1,-1,1,0,1,1,-1,0,-1,1,2,-1,-2,4,2,1,5,3,0,3,-1,2,3,1,3,2,2,1,-2,3,-1,1,-2,5,1,2,1]),
Presence = new LegendaryAbility("Presence","- Order soldiers.\n- Interrogate a suspect.",[0,0,0],[1,2,4,3,0,-2,4,-1,4,0,-1,1,-1,1,3,-2,3,3,2,4,-1,4,-2,2,-1,-1,1,4,2,-2,4,1,0,1,2,3,1,-2,2,3,1,1,1,1,2,1,1,0,0,-1,0,1,0,4,3,2,2,3,3,4,2,1,4,4,2,3,2,4,1,2,4,3,2,4,2,-1,-2,2]),
Manipulation = new LegendaryAbility("Manipulation","- Trick an enemy.\n- Talk your way past an annoying bouncer.",[0,0,0],[4,3,1,2,0,2,-2,0,2,-1,-2,4,0,2,0,3,1,-2,-2,-1,4,-3,1,4,0,-1,2,0,4,-1,3,0,0,-1,1,-2,6,4,2,-2,-1,0,1,1,0,-1,-1,1,1,-2,0,0,-1,4,1,1,3,0,-2,4,1,4,3,4,4,2,-1,2,3,5,0,3,1,5,1,-1,0,2]),
Resources = new LegendaryAbility("Resources","- Buy a car.\n- Hire mercenaries.",[0,0,0],[1,0,4,1,2,0,-2,-1,1,0,2,3,1,1,2,-1,1,2,4,0,1,2,1,2,2,3,2,0,3,-3,4,2,-2,1,4,-1,2,-1,1,0,-2,1,1,1,2,0,-2,1,1,1,-1,-1,0,3,-3,2,2,3,3,1,2,-1,2,4,2,-1,4,4,4,4,1,2,3,2,-2,-3,4,0]),
Marksmanship = new LegendaryAbility("Marksmanship","- Shoot a bow.\n- Throw a fireball with accuracy.",[0,0,0],[3,1,2,2,4,2,4,-1,1,-1,-2,2,1,2,3,-1,1,3,1,2,2,4,-2,2,2,1,1,3,-1,0,1,-2,-3,-1,3,3,1,0,-1,4,5,1,0,1,0,0,1,1,0,1,1,0,-1,3,2,2,2,1,3,2,4,3,2,3,3,2,1,2,4,1,3,0,2,-2,-3,5,2,2]),
Stealth = new LegendaryAbility("Stealth","- Pickpocket a target.\n- Skulk unnoticed.",[0,0,0],[2,2,-2,-1,3,5,1,1,-2,-1,-2,2,3,2,-1,3,3,-3,2,-1,4,-4,-1,4,0,1,-1,1,0,2,-1,-2,1,0,1,2,3,4,-1,-2,4,0,0,1,-1,0,1,-1,1,-1,1,0,-1,-3,3,1,-1,0,-3,5,3,4,2,2,4,4,0,-1,3,2,1,4,1,-2,2,1,4,1]),
Will = new LegendaryAbility("Will","- Resist mental attacks.\n- Control magical powers by sheer will.",[0,0,0],[2,4,1,2,1,-1,2,3,4,3,2,3,2,2,3,4,3,3,4,4,4,3,1,3,2,3,4,3,4,4,4,3,3,2,1,3,3,1,2,4,4,1,1,2,1,1,1,0,0,1,1,2,0,3,4,2,0,4,3,2,3,4,3,3,3,4,3,4,2,3,4,3,2,0,3,-2,2,2]),

]	
	//Gives each Parameter the relevant Legendaries 
for(i=0;i<newAbilitiesArray.length;i++){
	FilteredParametersArray = parametersArray.filter(function (entry) { return entry.type === "Domain" || entry.type === "Role"; })
for(j=0;j<FilteredParametersArray.length;j++){
	FilteredParametersArray[j].legendaries.push(newAbilitiesArray[i].legendaries[j])
}}
	//console.log(parametersArray)

	//Gives each Parameter the relevant Skills (unchanged)
for(i=0;i<skillsArray.length;i++){
for(j=0;j<parametersArray.length;j++){
	parametersArray[j].skills.push(skillsArray[i].legendaries[j])
}}

}
addAnAbility()

	for(i=0;i<newAbilitiesArray.length;i++){
			displayArrayTest = []
	for(p=21;p<newAbilitiesArray[i].legendaries.length-5;p++){
	displayArrayTest.push(newAbilitiesArray[i].legendaries[p])}
		//(newAbilitiesArray[i].name + " - " + displayArrayTest )
	}

//addAnAbilityMaker()

// Test the length of Legendaries
//lengthChecker()
// Test the Legendaries
//exampleLegendaryMaker(legendaryAbilitiesArray,godFound.legendaries,roleFound.legendaries,roleFound2.legendaries,9,wyrdbornFound.legendaries)
// Test the Skills
//exampleLegendaryMaker(skillsArray,godFound.skills,roleFound.skills,roleFound2.skills,7,wyrdbornFound.skills)
// Create an Ability
//addAnAbilityMaker()
// Test the Legendaries AND Skills. Adds the extra Abilities
//LegendaryMakerTotal()

// This function handles the tabs
function openNW(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = [
	document.getElementById("Display1"),
	document.getElementById("Display2"),
	document.getElementById("Display3")]    
	
	for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = [
	document.getElementById("Display1Tab"),
	document.getElementById("Display2Tab"),
	document.getElementById("Display3Tab")]
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
	
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
ChosenFirstRole = "Default"
ChosenSecondRole = "Default"
ChosenGod = "Woop"	

function setChosenPantheon(selectedBox){
//curatedName = selectedBox.options[selectedBox.selectedIndex].value.substr(0,selectedBox.options[selectedBox.selectedIndex].value.indexOf(":"))
curatedName = selectedBox.options[selectedBox.selectedIndex].value
	

document.getElementById ("PantheonLink").href = "http://wyrduk.wikidot.com/"+ curatedName;
document.getElementById ("PantheonLink").innerHTML = "Wiki Link: "+ curatedName;

document.getElementById('OriginLink').style.display = 'none'

}
function setChosenGod(selectedBox){
document.getElementById ("OriginLink").href = "http://wyrduk.wikidot.com/"+ selectedBox.options[selectedBox.selectedIndex].value;
document.getElementById ("OriginLink").innerHTML = "Wiki Link: "+ selectedBox.options[selectedBox.selectedIndex].value;
	ChosenGod = selectedBox.options[selectedBox.selectedIndex].value;
document.getElementById('OriginLink').style.display = 'block'
}
function setFirstRole(selectedBox){
ChosenFirstRole = selectedBox.options[selectedBox.selectedIndex].value}
	
function setSecondRole(selectedBox){
	ChosenSecondRole = selectedBox.options[selectedBox.selectedIndex].value;}

	
	//__________________________________________________
	// Roles
	
	var rolesLists = new Array(5) 
	rolesLists["empty"] = ["Select a Main Role"]; 
	rolesLists["Tank"] = ["Select Role","Damage Dealer", "Party Face", "Skill Monkey", "Support-Controller"]; 
	rolesLists["Damage Dealer"] = ["Select Role","Tank", "Party Face", "Skill Monkey", "Support-Controller"]; 
	rolesLists["Party Face"] = ["Select Role","Tank", "Damage Dealer", "Skill Monkey", "Support-Controller"]; 
	rolesLists["Skill Monkey"] = ["Select Role","Tank", "Damage Dealer", "Party Face", "Support-Controller"]; 
	rolesLists["Support-Controller"] = ["Select Role","Tank", "Damage Dealer", "Party Face", "Skill Monkey"]; 
	
function rolesChange(selectObj2) { 
	var idx = selectObj2.selectedIndex; 
	var which = selectObj2.options[idx].value; 
	cList2 = rolesLists[which]; 
	var cSelect = document.getElementById("secondRole"); 
	var len=cSelect.options.length; 
	while (cSelect.options.length > 0) { cSelect.remove(0); } 
	var newOption; 
	for (var i=0; i<cList2.length; i++) { 
	newOption = document.createElement("option"); 
	newOption.value = cList2[i]; // assumes option string and value are the same 
	newOption.text=cList2[i]; 
	try { 
	cSelect.add(newOption); // this will fail in DOM browsers but is needed for IE 
	} 
	catch (e) { 
	cSelect.appendChild(newOption); 
	} 
	} 
	} 

value = 0
function clearContents(element) {
if(value == 0){
  element.value = '';}
value+=1
}

function characterSheetSpawn() {



document.getElementById('inputTextToSave').value = "Aspects:     " +"\n" + document.getElementById('highConcept').value + "\n " + document.getElementById('trouble').value + "\n " + document.getElementById('aspect1').value + "\n " + document.getElementById('aspect2').value +"\n " + document.getElementById('aspect3').value + "\n     \n" + "Skills: \n+3: " + document.getElementById('31').value + "\n+2: " + document.getElementById('21').value + ", " + document.getElementById('22').value + "\n+1: " + document.getElementById('11').value +", " + document.getElementById('12').value +", " + document.getElementById('13').value + "\n     \n" + "Stunts: " + "\n" + document.getElementById('stunt1').value + "\n " + document.getElementById('stunt2').value + "\n " + document.getElementById('stunt3').value + "\n     \n" + "Legendary Abilities: " + "\n " + document.getElementById('legend1').value + "\n " + document.getElementById('legend2').value + "\n " + document.getElementById('legend3').value + "\n\n "
}	
	
//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________

//NPC MAKER

//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________
//__________________________________________________

var Aspect = function(name,type,origin,subOrigin,legend,intelligence,behavior,combat1,combat2) {
  this.name = name;
  this.type = type;
  this.origin = origin;
  this.subOrigin = subOrigin;
  this.legend = legend;
  this.intelligence = intelligence;
  this.behavior = behavior;
  this.combat1 = combat1;
  this.combat2 = combat2;
   
    
};

function findOrigin(){
	
typeChoicePrompt = prompt("What type of creature is your NPC ? \n1- Titanspawn \n2- Mythborn");
if (typeChoicePrompt == "1") {titanspawnTypeChoiceFunction();
}
else if (typeChoicePrompt == "2") {mythbornTypeChoiceFunction()}
else if (typeChoicePrompt !== "1" && typeChoicePrompt !== "2"){typeChoiceFunction()}
  
var chosenOptions = highConcept.filter(function (entry) { return entry.subOrigin[0] === subOriginChoice && entry.type === typeChoice })
var total = ""
for(i=0;i<chosenOptions.length;i++){
   total += chosenOptions[i].name + " - " + chosenOptions[i].combat2 + "\n"
        
}
 alert(total)
}
         

 

