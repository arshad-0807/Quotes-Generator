var quotes = [
    {
        quote: "You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage.",
        source: "Terry Pratchett",
        citation: "Witches Abroad",
        year: "1991"
    },
    {
        quote: "There isn't a way things should be. There's just what happens, and what we do.",
        source: "Terry Pratchett",
        citation: "A Hat Full of Sky"
    },
    {
        quote: "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
        source: "Rocky Balboa",
        citation: "Rocky",
        year: "1976"
    },
    {
        quote: "More fuck yeah, less fuck that.",
        source: "Anonymous",
        citation: "Rocky",
        year: "1976"
    },
    {
        quote: "If you want to go fast, go alone. If you want to go far, go together.",
        source: "African proverb",
        citation: "Rocky",
        year: "1976"
    },
    {
        quote: "It's OK to not be OK, as long as you don't stay that way.",
        source: "Anonymous",
        citation: "Rocky",
        year: "1976"
    },
    {
        quote: "I can be changed by what happens to me but I refuse to be reduced by it.",
        source: "Maya Angelou",
        citation: "Rocky",
        year: "1976"
    },
    {
        quote: "Believe you can and you're halfway there.",
        source: "T. Roosevelt",
        citation: "Rocky",
        year: "1976"
    },
    {
        quote: "May I never be complete. May I never be content. May I never be perfect.",
        source: "Chuck Palahniuk",
        citation: "Rocky",
        year: "1976"
    },
    {
        quote: "Nothing in life is to be feared; it is only to be understood. Now is the time to understand more so that we may fear less.",
        source: "Marie Curie",
        citation: "Rocky",
        year: "1976"
    },
    {
        quote: "Those who don't believe in magic will never find it.",
        source: "Roald Dahl",
        citation: "Rocky",
        year: "1976"
    },
    {
        quote: "There is no elevator to success  you have to take the stairs.",
        source: "Anonymous",
        citation: "Rocky",
        year: "1976"
    },
    {
        quote: "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
        source: "Jose Luis Borges",
        citation: "Rocky",
        year: "1976"
    },
    {
        quote: "It does not do to dwell on dreams and forget to live.",
        source: "Albus Dumbledore",
        citation: "Harry Potter and the Sorcerer's Stone",
        year: "1997"
    },
    {
        quote: "Don't sweat the petty things and don't pet the sweaty things.",
        source: "George Carlin",
        citation: "Harry Potter and the Sorcerer's Stone",
        year: "1997"
    },
    {
        quote: "Do what you feel in your heart to be right, for you'll be criticized anyway.",
        source: "Eleanor Roosevelt",
        citation: "Harry Potter and the Sorcerer's Stone",
        year: "1997"
    },
    {
        quote: "Do not set yourself on fire in order to keep others warm.",
        source: "Anonymous",
        citation: "Harry Potter and the Sorcerer's Stone",
        year: "1997"
    },
    {
        quote: "The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things and make them unimportant.",
        source: "Doctor Who",
        citation: "Harry Potter and the Sorcerer's Stone",
        year: "1997"
    },
    {
        quote: "It's supposed to be hard. If it were easy, everyone would do it.",
        source: "Jimmy Dugan",
        citation: "A League of Their Own"
    },
    {
        quote: "Ask yourself if what you're doing today will get you closer to where you want to be tomorrow.",
        source: "Anonymous"
    },
    {
        quote: "Life may not be the party we hoped for, but while we're here, we should dance.",
        source: "Anonymous"
    },
    {
        quote: "Never cowardly or cruel. Never give up, never give in.",
        source: "Doctor Who"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        source: "Ralph Waldo Emerson"
    },
    {
        quote: "In 20 years, you probably won't even remember this.",
        source: "Anonymous"
    },
    {
        quote: "Love all, trust a few, do wrong to none.",
        source: "William Shakespeare"
    },
    {
        quote: "Clear eyes, full hearts, can't lose.",
        source: "Dillon Panthers",
        citation: "Friday Night Lights",
        year: "1990"
    },
    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        source: "Aristotle"
    }
];

var quoteBox = document.getElementById("quote-box");

function getRandomQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    var randomQuote = quotes[randomNumber];
    return randomQuote;
}

function getRandomColor() {
    var red = Math.floor(Math.random() * 56);
    var blue = Math.floor(Math.random() * 186);
    var green = Math.floor(Math.random() * 26);

    var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return randomColor;
}

function printQuote() {
    var quotes = getRandomQuote();
    var quote = ` <p class="quote">${quotes.quote}</p>

    <p class="source">${quotes.source}`
    if(quotes.citation){quote += ` <span class="citation">${quotes.citation}</span>`}
    if (quotes.year){quote += `<span class="year">${quotes.year}</span>`}   
        
    else{quote += '</p>'};

    quoteBox.innerHTML = quote;
    document.body.style.backgroundColor = getRandomColor ();
}

window.setInterval(function(){
    printQuote();
}, 3000);

document.getElementById("loadquote").addEventListener("click", printQuote);

