import { Player } from './player.js';

const players = [
    new Player('Lionel Messi', 'https://www.latercera.com/resizer/BT5Gu3OyL7CWTfrjhn5jIotxQtA=/900x600/filters:focal(2357x1692:2367x1682)/cloudfront-us-east-1.images.arcpublishing.com/copesa/IUMBS76FBEXWRURFF4ZFNYID2Y.jpg', 
    `Lionel Messi es un futbolista argentino considerado uno de los mejores jugadores de fútbol de todos los tiempos. Nació el 24 de junio de 1987 en Rosario, Argentina. 
    Messi es conocido por su habilidad excepcional en el campo, su capacidad para marcar goles asombrosos y su visión de juego única. Comenzó su carrera en las 
    divisiones juveniles del FC Barcelona y pronto se convirtió en una parte integral del primer equipo. Durante su tiempo en el Barcelona, Messi ha ganado numerosos 
    títulos, incluidos múltiples campeonatos de La Liga, la Liga de Campeones de la UEFA y el Balón de Oro.
    \nAdemás de su éxito con el Barcelona, Messi ha sido una parte crucial de la selección argentina de fútbol, representando a su país en varios torneos internacionales, 
    incluida la Copa del Mundo de la FIFA. A lo largo de su carrera, ha establecido numerosos récords y ha ganado innumerables premios individuales, lo que lo convierte en 
    una leyenda viva del fútbol.`,

    ['FC Barcelona', 'Paris Saint-Germain'],
    [672, 208]),

    new Player('Cristiano Ronaldo', 'https://okdiario.com/diariomadridista/img/2024/03/06/cristiano-real-madrid-655x368.jpg',
    `Cristiano Ronaldo es un futbolista portugués considerado uno de los mejores jugadores de fútbol de todos los tiempos. Nació el 5 de febrero de 1985 en Funchal, Madeira. 
    Ronaldo es conocido por su físico imponente, su velocidad y su capacidad para marcar goles espectaculares. Comenzó su carrera en el Sporting de Lisboa antes de trasladarse 
    al Manchester United en 2003. Durante su tiempo en el United, Ronaldo ganó numerosos títulos, incluida la Liga de Campeones de la UEFA y el Balón de Oro.
    \nDespués de su exitoso paso por el Manchester United, Ronaldo se unió al Real Madrid en 2009, donde alcanzó aún más éxito. Durante su tiempo en el Real Madrid, 
    Ronaldo ganó múltiples títulos de La Liga, así como cuatro títulos de la Liga de Campeones de la UEFA. En 2018, Ronaldo se unió a la Juventus, donde continuó su 
    racha de éxitos.
    \nAdemás de su éxito en clubes, Ronaldo ha sido una parte crucial de la selección portuguesa de fútbol, representando a su país en varios torneos internacionales, 
    incluida la Eurocopa y la Copa del Mundo de la FIFA. Ha establecido numerosos récords a lo largo de su carrera y ha ganado innumerables premios individuales, lo que lo 
    convierte en una leyenda del fútbol.`,

    ['Manchester United', 'Real Madrid', 'Juventus'],
    [196, 134, 140]),

    new Player('Neymar Jr.', 'https://imagenes.20minutos.es/files/image_640_360/files/fp/uploads/imagenes/2023/09/09/neymar-celebra-su-79-gol-con-brasil-y-su-record-de-maximo-goleador.r_d.1501-1101-2133.jpeg',
    `Neymar Jr. es un futbolista brasileño conocido por su habilidad técnica, su velocidad y su capacidad para marcar goles impresionantes. Nació el 5 de febrero de 1992 
    en Mogi das Cruzes, Brasil. Neymar comenzó su carrera en el Santos FC en Brasil, donde rápidamente llamó la atención por su habilidad en el campo. En 2013, se unió 
    al FC Barcelona, donde formó parte de un trío temible junto con Lionel Messi y Luis Suárez, conocido como "MSN".
    \nDespués de su exitoso paso por el Barcelona, Neymar se unió al Paris Saint-Germain en 2017 en una transferencia récord. Desde entonces, ha sido una parte crucial 
    del equipo, ayudando al PSG a ganar múltiples títulos de la Ligue 1 y llegando a la final de la Liga de Campeones de la UEFA.
    \nAdemás de su éxito en clubes, Neymar ha representado a la selección brasileña en varios torneos internacionales, incluida la Copa del Mundo de la FIFA. Ha establecido 
    numerosos récords a lo largo de su carrera y ha ganado varios premios individuales, lo que lo convierte en uno de los futbolistas más destacados de su generación.`,

    ['Santos FC', 'FC Barcelona', 'Paris Saint-Germain'],
    [138, 105, 69])
];

const nameElement = document.getElementById('player-name');
const imageElement = document.getElementById('player-image');
const bioElement = document.getElementById('player-bio');
const clubsElement = document.getElementById('player-clubs');
const buttonElement = document.getElementById('player-button');
let index = 0;

buttonElement.addEventListener('click', () => {
    index = (index + 1) % players.length;
    const player = players[index];
    nameElement.textContent = player.name;
    const img = document.createElement('img');
    img.src = player.image;
    img.alt = player.name;
    img.classList.add('img-fluid');
    imageElement.innerHTML = '';
    imageElement.appendChild(img);
    bioElement.textContent = player.bio;
    clubsElement.innerHTML = '';
    const ol = document.createElement('ol');
    player.clubs.forEach((club, index) => {
        const li = document.createElement('li');
        li.textContent = `${club} (${formatNumberWithCommas(player.records[index])} records)`;
        ol.appendChild(li);
    });
    clubsElement.appendChild(ol);
});

nameElement.textContent = players[0].name;
const img = document.createElement('img');
img.src = players[0].image;
img.alt = players[0].name;
img.classList.add('img-fluid');
imageElement.appendChild(img);
bioElement.textContent = players[0].bio;
const ol = document.createElement('ol');
players[0].clubs.forEach((club, index) => {
    const li = document.createElement('li');
    li.textContent = `${club} (${formatNumberWithCommas(players[0].records[index])} records)`;
    ol.appendChild(li);
});
clubsElement.appendChild(ol);

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

