import { API_URL } from "./url";

export class CharacterApi {
    static async getCharactersAll (params?: string) {
        return await fetch(`${API_URL}/people${params || ''}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    static async getCharacterById (id: string) {
        return await fetch(`${API_URL}/people/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}