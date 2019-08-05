const seedData = [{
    'name': 'Solomon R. Guggenheim Museum',
    'location': 'New York City',
    'architect': 'Frank Lloyd Wright',
    'year': 1959,
    'style' : 'modern',
    'tags': ['modern', 'nyc', 'wright', 'usa'],
    'history': 'The Guggenheim Museum is an art museum located on the upper east side of Manhattan. It is the permanent home of a continuously expanding collection of Impressionist, Post-Impressionist, early Modern and contemporary art and also features special exhibitions throughout the year. The museum was established by the Solomon R. Guggenheim Foundation in 1939 as the Museum of Non-Objective Painting, under the guidance of its first director, the artist Hilla von Rebay. It adopted its current name after the death of its founder, Solomon R. Guggenheim, in 1952. In 1959, the museum moved from rented space to its current building, a landmark work of 20th-century architecture. Designed by Frank Lloyd Wright, the cylindrical building, wider at the top than the bottom, was conceived as a "temple of the spirit". Its unique ramp gallery extends up from ground level in a long, continuous spiral along the outer edges of the building to end just under the ceiling skylight. The building underwent extensive expansion and renovations in 1992 (when an adjoining tower was built) and from 2005 to 2008',
    'img': 'https://i1.wp.com/www.guggenheim.org/wp-content/uploads/2007/12/gen-press-guggenheim-foundation-image-3.jpg', 
    'img2':'https://i0.wp.com/www.guggenheim.org/wp-content/uploads/2015/12/architecture-srgm-interior-low-angle-rotunda-16-9.jpg?w=870', 
    'img3':'https://i0.wp.com/www.guggenheim.org/wp-content/uploads/2016/09/Alberto-Burri-exh_ph004-resized.jpg?w=980'
},
{
    'name': 'Chatham Towers',
    'location': 'New York City',
    'architect': 'Kelly & Gruzen',
    'year': 1965,
    'style': 'brutalist',
    'tags': ['brutalist', 'nyc', 'usa'],
    'history': 'Once a crowded two-acre site occupied by thirty-one buildings on the last remaining block of the notorious Five Points slum, the Chatham Towers development was part of a greater slum clearance project that drastically reshaped the Civic Center area north of the Brooklyn Bridge and east of Centre Street stretching into Chinatown. Built by the Committee of Middle Income Housing under the Title I Housing Act, the two board-formed concrete high-rises known as Chatham Towers house 120 units, half of which have a terrace. Following decades of red brick apartment blocks, Chatham Towers was a departure from New York City housing, having more in common with British post-war housing.',
    'img': 'https://queensmodern.com/wp-content/uploads/2018/10/Chatham-Towers.jpg',
    'img2': 'https://ds3.cityrealty.com/img/bcda1895057654327e4c461dee9980a448485ffb+w+h+0+60/chatham-towers-180-park-row-09.jpg',
    'img3': 'https://ds4.cityrealty.com/img/5d5af0ed8f776cecae2aa619844016efc5952c92+w+h+0+60/chatham-towers-180-park-row-00.jpg'
},
{
    'name': 'Long Lines Building',
    'location': 'New York City',
    'architect': 'John Carl Warnecke',
    'year': 1974,
    'style': 'brutalist',
    'tags': ['brutalist', 'nyc', 'usa'],
    'history': '33 Thomas Street, also known as the AT&T Long Lines Building is one of Manhattans most unusual skyscrapers - a building made for machines, not people. The building’s stepped massing, extruded volumes, and uniform rugged materiality represent hallmarks of brutalism, but instead of expressing functionality in the service of communities, institutions, or individuals it articulates the needs of the machines inside. The windowless mass occupies the block bounded by Broadway, Church, Worth and Thomas Streets, with a privately owned public plaza on its east side. Designed by architect John Carl Warnecke in 1969 for AT&T, 33 Thomas took 5 years to construct. A row of historic cast-iron loft buildings on the site had to be razed in the process. However, their facades were preserved. Warnecke designed the structure to resist a nuclear fallout and made it self-sufficient for 1,500 people to survive inside its walls for two weeks, with water and food for the occupants and 250,000 gallons of fuel to power generators.',
    'img': 'http://socks-studio.com/img/blog/long-lines-building-new-york-07.jpg',
    'img2': 'https://www.ststworld.com/wp-content/uploads/2018/11/ATT_Tower_33_Thomas_Street.jpg',
    'img3': 'http://socks-studio.com/img/blog/long-lines-building-new-york-03.jpg'
},
{
    'name': `St. Peter's Basilica`,
    'location': 'Vatican City',
    'architect': 'Michaelangelo',
    'year': 1626,
    'style': 'renaissance',
    'tags': ['renaissance', 'baroque', 'europe', 'italy', 'cathedral'],
    'history': 'Situated on Vatican Hill in the UNESCO world heritage site of Vatican City, St Peter’s Basilica dominates the skyline of Rome and attracts millions of visitors from all over the world. It has a capacity of over 60,000 people, covers 22,300 square meters and is one of the world’s largest churches. You can climb the 491 stairs to the top of Michelangelo’s dome. A church only becomes a basilica when the pope designates it, usually because of historical significance or if it houses sacred relics. Globally, there are over 1,400 minor basilicas; however, St Peter’s Basilica is one of only four Major Basilicas in the world. The three other major basilicas are also situated in Rome: St John Lateran, St Paul’s outside the Walls and St Mary Major. St Peter’s Basilica achieved its basilica status due to being built on the site where St Peter was buried in 64 AD.',
    'img': 'https://aws-tiqets-cdn.imgix.net/images/content/ffbabe55b25c456fb7234bde48f05e91.jpg?auto=format&fit=crop&ixlib=python-1.1.2&q=25&s=d03b32b950efe29caedce5ca50d5e8f0&w=400&h=320&dpr=2.625',
    'img2': 'https://www.toursales.com/v/vspfiles/photos/LEUITRM781EXCLVATMUS-2.jpg',
    'img3': 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/3e/0d.jpg'
},
{
    'name': 'Fisher Building',
    'location': 'Detroit, Michigan',
    'architect': 'Albert Kahn',
    'year': 1928,
    'style': 'artdeco',
    'tags': ['artdeco', 'detroit', 'michigan','usa'],
    'history': 'The Fisher Building is a landmark skyscraper located at 3011 West Grand Boulevard in the heart of the New Center area of Detroit, Michigan. The ornate 30-story building, completed in 1928, is one of the major works of architect Albert Kahn, and is designed in an Art Deco style, faced with limestone, granite, and several types of marble. The Fisher family financed the building with proceeds from the sale of Fisher Body to General Motors. It was designed to house office and retail space.',
    'img': 'https://s3-prod.crainsdetroit.com/s3fs-public/NEWS_150329854_AR_-1_ZZEOCVVEJHWH.jpg',
    'img2': 'https://cdn.archpaper.com/wp-content/uploads/2016/11/Interior_of_Fisher_Building_Detroit.jpg',
    'img3': 'https://media.npr.org/assets/img/2015/06/18/dsc_0297-edit-a1713bd05a541814eeff0400b04d56702e285775-s800-c85.jpg'
},
{
    'name': 'Carson Mansion',
    'location': 'Eureka, California',
    'architect': 'Samuel and Joseph Newsom',
    'year': 1886,
    'style': 'victorian',
    'tags': ['victorian', 'california', 'usa'],
    'history': 'The Carson Mansion, constructed in 1884-1885, is a three story, eighteen room structure with a tower and basement. The house was designed by the Newsom Brothers of San Francisco, well-known architects throughout California. Perfectly situated to the south of his lumber mill, the Carson Mansion has become a local landmark. There are many interesting architectural points of view regarding the Mansion. It is adorned with Stick-Eastlake characteristics, and there has been much written about its Queen Anne qualities. There is reference to Gothic, Italian and French influence. The wide porches with large ornamental pillars make for a grand entrance. A complex combination of gables, turrets, cupolas, and pillars constitutes the exterior of the Mansion. The Carson Mansion is one of the most photographed structures in the world.',
    'img': 'https://www.ingomar.org/sites/ingomar.org/files/styles/half-width/public/00-mansion-e.png?itok=97In9afP',
    'img2': 'https://www.ingomar.org/sites/ingomar.org/files/styles/featured_image/public/01b-2_-_summer_sunlit_house.png?itok=ZFNWPcZp',
    'img3': 'https://live.staticflickr.com/5166/5287153343_9fc6aac881_b.jpg'
},
{
    'name': 'Templo Expiatorio del Santísimo Sacramento',
    'location': 'Guadalajara, Mexico',
    'architect': 'Adamo Boari',
    'year': 1897,
    'style': 'gothic',
    'tags': ['gothic', 'mexico', 'cathedral', 'southamerica'],
    'history': 'Considered the greatest work of its kind in Mexico, this neo-Gothic church was constructed from carved stone over a period of 75 years from 1897–1972. The three sections of its façade are decorated with mosaics created in the Vatican, and the church’s German-made bells were designed to play 25 religious and popular tunes and can also be played from a keyboard.',
    'img': 'https://i.pinimg.com/736x/94/44/fa/9444fab4e08c9217bf78eb0ae173cecc.jpg',
    'img2': 'http://www.cestchristine.com/wp-content/uploads/2017/11/OIZU5474.jpg',
    'img3': 'https://photo980x880.mnstatic.com/27/fd/27fd0a4e909ae794caf8db8c31ea9918.jpg'
},
{
    'name': 'Bauhaus Dessau',
    'location': 'Dessau, Germany',
    'architect': 'Walter Gropius',
    'year': 1926,
    'style': 'bauhaus',
    'tags': ['bauhaus', 'europe', 'germany'],
    'history': 'Initially a school in Weimar, growing political resentment forced the move to Dessau. Gropius took this as an opportunity to build a school that reflected his hopes for the education that would be had within its walls. The style of the Dessau facilities hints at the more futuristic style of Gropius in 1914, also showing similarities to the International style more than the Neo-classic style. As a practiced architect, Gropius was interested in including structural and technological advancements as he designed this revolutionary school for architecture and design students.  ',
    'img': 'https://images.adsttc.com/media/images/5037/e9d6/28ba/0d59/9b00/0427/newsletter/stringio.jpg?1414219080',
    'img2': 'https://www.bauhaus-dessau.de/content/images/295fba960051454e6bb44bd5e5a2d4d8.jpg',
    'img3': 'https://www.bauhaus-dessau.de/content/images/2c42a3f3da7d572e58a785fea37174a5.jpg'
},
{
    'name': 'Farnsworth House',
    'location': 'Plano, Illinois',
    'architect': 'Ludwig Mies van der Rohe',
    'year': 1951,
    'style': 'midcentury',
    'tags': ['midcentury', 'modern', 'usa'],
    'history': 'The steel and glass house was commissioned by Edith Farnsworth, M.D., a prominent Chicago nephrologist, as a place where she could engage in her hobbies—playing the violin, translating poetry, and enjoying nature. Mies created a 1,500-square-foot (140 m2) structure that is widely recognized as an iconic masterpiece of International Style of architecture. The retreat was designated a National Historic Landmark in 2006, after being listed in the National Register of Historic Places in 2004.[4] Currently, the house is owned and operated as a historic house museum by the historic preservation group, National Trust for Historic Preservation.',
    'img': 'https://cdn.vox-cdn.com/thumbor/Ativ45S8bn_u-w7wCXrAndRTKNg=/0x0:1024x618/1200x800/filters:focal(431x228:593x390)/cdn.vox-cdn.com/uploads/chorus_image/image/53112783/6239270869_93982e18a4_b.0.jpg',
    'img2': 'https://static.wixstatic.com/media/4998f3_28ac34ba17d64a05837e6cc045f4392c.jpg',
    'img3': 'https://www.kendallcountynow.com/_internal/cimg!0/f9smjnwt56wdbuy2ya7058hbm55epsg'
},
{
    'name': 'Eastern Columbia Building',
    'location': 'Los Angeles, California',
    'architect': 'Claud Beelman',
    'year': 1930,
    'style': 'artdeco',
    'tags': ['artdeco', 'california', 'usa'],
    'history': 'The Eastern Columbia Building, also known as the Eastern Columbia Lofts, is a thirteen story Art Deco building designed by Claud Beelman located at 849 S. Broadway in the Broadway Theater District of Downtown Los Angeles. It was built at a cost of $1.25 million as the new headquarters and 39th store for the Eastern-Columbia Department Store, whose component Eastern and Columbia stores were founded by Adolph Sieroty and family. At the time of construction, the City of Los Angeles enforced a height limit of 150 feet, however the decorative clock tower was granted an exemption, allowing the clock a total height of 264 feet. The building is widely considered the greatest surviving example of Art Deco architecture in the city. It is one of the citys most photographed structures[14] and a world-renowned Art Deco landmark.',
    'img': 'https://media.timeout.com/images/103378019/image.jpg',
    'img2':'https://live.staticflickr.com/1568/26617438856_61f84268c3_b.jpg',
    'img3':'https://www.secondshelters.com/wp-content/uploads/2017/09/2fe300002f-102815-07062017-683x1024.jpg'
}


]

module.exports = seedData;