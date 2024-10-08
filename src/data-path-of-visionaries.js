const data = [
    {
        'country': 'France',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/fr.svg',
        'text': 'It is only with the heart that one can see rightly. What is essential is invisible to the eye.',
        'author': 'Antoine de Saint-Exupéry',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/10/Frankreich_Tafel.png'
    },
    {
        'country': 'Germany',
        'flag': '	https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/de.svg',
        'text': 'Act only according to that maxim by which you can at the same time will that it would become a universal law.',
        'author': 'Immanuel Kant',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/10/Deutschland_Tafel.png'
    },
    {
        'country': 'Italy',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/it.svg',
        'text': 'Brotherhood among the people of Europe and, through Europe, brotherhood of mankind.',
        'author': 'Giuseppe Mazzini',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/10/Italien_Tafel.png'
    },
    {
        'country': 'Belgium',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/be.svg',
        'text': '… Of all Gaul, the Belgians are the bravest …',
        'author': 'Julius Caesar',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Belgien_Tafel.png'
    },
    {
        'country': 'Netherlands',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/nl.svg',
        'text': 'Peace is not the absence of war, but a virtue which comes from strength of mind.',
        'author': 'Baruch de Spinoza',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Niederlande_Tafel.png'
    },
    {
        'country': 'Luxemburg',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/lu.svg',
        'text': 'Nations to which people need to feel close are not a passing phenomenon of history. But they should never again make history at the expense of Europe.',
        'author': 'Dr. h. c. Jean-Claude Juncker',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Luxemburg_Tafel.png'
    },
    {
        'country': 'Ireland',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/ie.svg',
        'text': 'I understand that I am a link in a language chain. My ancestors’ language was rich, grounded, poetic, substantial. I would not like to think that I am the link that was dropped.',
        'author': 'Nuala Ní Dhomhnaill',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Irland_Tafel.png'
    },
    {
        'country': 'Greece',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/gr.svg',
        'text': 'You could not step twice into the same river.',
        'author': 'Heraklit',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Griechenland_Tafel.png'
    },
    {
        'country': 'Portugal',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/pt.svg',
        'text': 'All of us are near-sighted, except on the inside. Only the eyes we use for dreaming truly see.',
        'author': 'Fernando Pessoa',
        'image': ''
    },
    {
        'country': 'Spain',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/es.svg',
        'text': 'Travelling and sojourning among various people makes men wise.',
        'author': 'Miguel de Cervantes',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Spanien_Tafel.png'
    },
    {
        'country': 'Denmark',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/dk.svg',
        'text': 'I am nothing but a messenger sent out on a long journey, to tell people that there is hope in the world.',
        'author': 'Karen (Tania) Blixen',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Da%CC%88nemark_Tafel.png'
    },
    {
        'country': 'Austria',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/at.svg',
        'text': 'The truth is not too much to expect.',
        'author': 'Ingeborg Bachmann',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/O%CC%88sterreich_Tafel.png'
    },
    {
        'country': 'Sweden',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/se.svg',
        'text': 'Free thinking is good, rightful thinking is better.',
        'author': 'Thomas Thorild',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Schweden_Tafel.png'
    },
    {
        'country': 'Finland',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/fi.svg',
        'text': 'Treading their own path, entirely free, are they who are not restrained by fear of failure',
        'author': 'Sylvi Kekkonen',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Finnland_Tafel-2.png'
    },
    {
        'country': 'Estonia',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/ee.svg',
        'text': 'A state can only be born once, but liberty must be reborn every day',
        'author': 'Lennart Meri',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Estland_Tafel.png'
    },
    {
        'country': 'Latvia',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/lv.svg',
        'text': 'To know another is to know oneself. To know oneself is to know the world.',
        'author': 'Janis Plieksans Rainis',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Lettland_Tafel.png'
    },
    {
        'country': 'Lithuania',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/lt.svg',
        'text': 'We do not need victory. We need peace and a Peace Treaty.',
        'author': 'Vytautas Landsbergis',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Litauen_Tafel.png'
    },
    {
        'country': 'Poland',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/pl.svg',
        'text': 'The loss of memory by a nation is also the loss of its conscience.',
        'author': 'Zbigniew Herbert',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Polen_Tafel.png'
    },
    {
        'country': 'Czech Republic',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/cz.svg',
        'text': 'He who seeks is awaited. He who waits is only found.',
        'author': 'Jaroslav Seifert',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Tschechien_Tafel.png'
    },
    {
        'country': 'Slovakia',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/sk.svg',
        'text': 'The future of Europe lies not in separatism, but in a sensible division of labour. Reciprocal economic integration of the whole European continent ought to be the obvious aim …',
        'author': 'Milan Hodža',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Slowakei_Tafel.png'
    },
    {
        'country': 'Hungary',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/hu.svg',
        'text': 'Because the thinking is difficult, one judges rather!',
        'author': 'Sándor Márai',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Ungarn_Tafel.png'
    },
    {
        'country': 'Slovenia',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/sl.svg',
        'text': 'God’s blessing on all nations, | Who long and work for that bright day, | When o’er earth’s habitations | No war, no strife shall hold its sway; | Who long to see | That all men free | No more shall foes, but neighbours be.',
        'author': 'France Prešeren',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Slowenien_Tafel.png'
    },
    {
        'country': 'Malta',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/mt.svg',
        'text': 'We breathe also to understand. Temporary issues belong to our era, permanent ones to our nature. Answers beget questions. That makes our adventure a logical mystery, a smile of God, an invitation to crave for more.',
        'author': 'Oliver Friggieri',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Malta_Tafel.png'
    },
    {
        'country': 'Cyprus',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/cy.svg',
        'text': 'Life. Do not isolate just one verse of it, do not isolate just one phrase of it, take it as a whole.',
        'author': 'Kostas Montis',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Zypern_Tafel.png'
    },
    {
        'country': 'Bulgaria',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/bg.svg',
        'text': '… the time is in us, and we are in the time; it transforms us and we transform it.',
        'author': 'Vassil Levski',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Bulgarien_Tafel.png',
    },
    {
        'country': 'Romania',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/ro.svg',
        'text': 'Create like God, command like a king, labour like a slave.',
        'author': 'Constantin Brâncuşi',
        'image': ''
    },
    {
        'country': 'Croatia',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/hr.svg',
        'text': 'We have to extend the way at the edge of the abyss.',
        'author': 'Ivan Supek',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/11/Kroatien_Tafel.png'
    },
    {
        'country': 'England',
        'flag': 'https://pfaddervisionaere.de/wp-content/plugins/svg-flags-lite/assets/flag-icon-css/flags/4x3/gb.svg',
        'text': 'If I have seen further, it is by standing on the shoulders of giants.',
        'author': '',
        'image': 'https://pfaddervisionaere.de/wp-content/uploads/2021/10/England_Tafel.png',
    },
]

export default data