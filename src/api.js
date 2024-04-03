import axios from "axios"

export const getDataCharacters = async () => {
    const character = await axios.get("https://api-blue-archive.vercel.app/api/characters?page=1&perPage=119");
    return character.data.data;
}

export const getDataStudent = async () => {
    try {
        const character = await axios.get("https://api-blue-archive.vercel.app/api/characters/students?page=1&perPage=119");
        return character.data.data;
    } catch (error) {
        console.log(error);
    }
}

export const getDataRandom = async () => {
    try {
        const character = await axios.get("https://api-blue-archive.vercel.app/api/character/random?page=1&perPage=119");
        return character.data.data;
    } catch (error) {
        const character = [];
        return character;
    }
}

export const getDetailCharacter = async (name) => {
    const character = await axios.get(`https://api-blue-archive.vercel.app/api/characters/students?name=${name}`);
    return character.data.data;
}

