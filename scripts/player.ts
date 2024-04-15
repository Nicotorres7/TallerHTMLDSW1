export class Player {
    name: string;
    image: string;
    bio: string;
    clubs: string[];
    records: number[];

    constructor(name: string, image: string, bio: string, clubs: string[], records: number[]) {
        this.name = name;
        this.image = image;
        this.bio = bio;
        this.clubs = clubs;
        this.records = records;
    }

    getImage(): string {
        return `<img src="${this.image}" alt="${this.name}" class="img-fluid">`;
    }

    getClubs(): string {
        const mergedClubs: string[] = this.clubs.map((club, index) => `${club} (${this.formatNumberWithCommas(this.records[index])} records)`);
        const listedClubs: string = mergedClubs.map(club => `<li>${club}</li>`).join('');
        return `
        <ol>
            ${listedClubs}
        </ol>
        `;
    }

    private formatNumberWithCommas(number: number): string {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}

