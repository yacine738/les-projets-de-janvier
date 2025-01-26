const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultContainer = document.getElementById('result-Container');
const wordTitle = document.getElementById('wordTitle');
const wordDescription = document.getElementById('wordDescription');
const audioButton = document.getElementById('audioButton');

document.addEventListener("DOMContentLoaded", () => {
    searchButton.addEventListener('click', () => {
        search();
    });

    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            search();
        }
    });

    audioButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm === '') {
            alert('Please enter a word to search');
            return;
        }
        speak(searchTerm);
    });
});

function search() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm === '') {
        alert('Please enter a word to search');
        return;
    }
    fetchDictionaryData(searchTerm);
}

async function fetchDictionaryData(searchTerm) {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data for the given word.');
        }
        const data = await response.json();
        displayResult(data);
    } catch (error) {
        console.error(error);
        alert('An error occurred while fetching data. Please try again later.');
    }
}

function displayResult(data) {
    resultContainer.style.display = 'block';
    const wordData = data[0];
    wordTitle.textContent = wordData.word;
    wordDescription.innerHTML = `<ul>
        ${wordData.meanings.map(meaning => 
            `<li>
                <p><strong>Part of Speech:</strong> ${meaning.partOfSpeech}</p>
                <p><strong>Definition:</strong> ${meaning.definitions[0].definition}</p>
            </li>`
        ).join('\n')}
    </ul>`;
}

function speak(word) {
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = 'en-US';
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
