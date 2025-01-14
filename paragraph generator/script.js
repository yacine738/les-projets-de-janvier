const paragraphs =[
    'Tunisia, officially known as the Republic of Tunisia, is a North African nation that serves as the continent\'s northernmost country. Bordered by Algeria to the west, Libya to the southeast, and the Mediterranean Sea to the north and east, Tunisia covers an area of approximately 163,610 square kilometers (63,170 square miles). The capital city, Tunis, is a vibrant hub that reflects the country’s rich history and cultural diversity. With a population estimated at around 12.1 million, Tunisia is characterized by its unique blend of Arab and Mediterranean influences, a legacy shaped by centuries of trade and conquest.',
    'Historically, Tunisia has been a crossroads of civilizations. The indigenous Berber people were the first inhabitants, followed by the Phoenicians who established Carthage around the 9th century BC. Carthage became a dominant power in the Mediterranean until its destruction by Rome in 146 BC. The Roman Empire subsequently occupied Tunisia for nearly eight centuries, leaving behind significant architectural landmarks such as the Amphitheatre of El Jem. Following the Roman period, Arab Muslims conquered Tunisia in the 7th century AD, introducing Islam and transforming the cultural landscape significantly.',
    'The Ottoman Empire took control of Tunisia in 1546, ruling until French colonization began in 1881. Under French rule, Tunisia experienced modernization but also faced significant repression. The struggle for independence culminated in 1956 when Tunisia became a sovereign republic under the leadership of Habib Bourguiba. Bourguiba\'s government implemented progressive social policies aimed at modernizing the economy and improving women\'s rights. However, political repression remained prevalent until widespread discontent led to the Tunisian Revolution in 2011.',
    'The revolution was sparked by grievances over political corruption and economic issues, ultimately resulting in the ousting of President Zine El Abidine Ben Ali. This event marked the beginning of the Arab Spring, inspiring similar movements across the region. Following this upheaval, Tunisia held its first free elections in 2011 and has since been recognized as a relatively stable democracy in a region where democratic governance is often lacking. However, recent years have seen challenges to this democratic progress, with concerns about political instability and economic difficulties.',
    'Culturally, Tunisia is renowned for its historical sites and natural beauty. The Medina of Tunis is a UNESCO World Heritage site filled with narrow winding streets, vibrant souks (markets), and stunning architecture that showcases Islamic art and design. Visitors can explore landmarks such as the Great Mosque of Kairouan and ancient ruins like those at Carthage. Additionally, Tunisia boasts beautiful Mediterranean beaches that attract tourists from around the world.',
    'Tunisian cuisine reflects its diverse cultural heritage, incorporating flavors from Berber, Arab, French, and Italian traditions. Staples include couscous—often served with meat or vegetables—and various stews flavored with spices like harissa. Mint tea is a popular beverage enjoyed throughout the country. The culinary scene is vibrant and offers a range of dining experiences from street food to upscale restaurants.',
    'Economically, Tunisia has made strides since gaining independence but faces significant challenges today. The economy relies heavily on tourism, agriculture, and manufacturing sectors. Despite having one of Africa\'s highest Human Development Index scores and per capita incomes, unemployment remains high among youth and women. Economic reforms are necessary to address these issues and stimulate growth.',
    'Education in Tunisia is highly valued; literacy rates are among the highest in Africa at approximately 89% for males and 77% for females as of recent estimates. The government emphasizes education as a means to foster development and improve living standards. However, disparities remain between urban and rural areas regarding access to quality education.',
    'In conclusion, Tunisia is a nation rich in history and culture that has undergone significant transformations over centuries. Its strategic location has made it a melting pot of civilizations while its modern struggles reflect broader regional challenges. As it continues to navigate its path toward stability and prosperity post-revolution, Tunisia remains an essential player in North Africa with much to offer both its citizens and visitors alike.'
];

const item = document.getElementById("items");
const dataContainer = document.getElementById("data");

function shuffle(array){
    let currentIndex = array.length;
    let RandomIndex;

    while(currentIndex !== 0){
        RandomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[RandomIndex]] = [array[RandomIndex], array[currentIndex]];
    }
    return array;
}

function generate(){
    if(item.value == 0){
        alert("Please select a number of paragraphs to generate");
    }
    else if(item.value > paragraphs.length){
        const RandomIndex = Math.floor(Math.random() * paragraphs.length);
        dataContainer.innerHTML = `${paragraphs[RandomIndex]}`;
    }
    else{
        const shuffleParagraphs = paragraphs;
        shuffle(paragraphs);

        const selectedParagraphs = shuffleParagraphs.slice(0, item.value);
        const paragraphsHTML = selectedParagraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
        dataContainer.innerHTML = paragraphsHTML;
    }
}