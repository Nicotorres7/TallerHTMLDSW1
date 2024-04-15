export class Player {
    constructor(name, image, bio, clubs, records) {
        this.name = name;
        this.image = image;
        this.bio = bio;
        this.clubs = clubs;
        this.records = records;
    }

    get getImage() {
        return `<img src="${this.image}" alt="${this.name}" class="img-fluid">`;
    }

    get getClubs() {
        const mergedClubs = this.clubs.map((club, index) => `${club} (${this.formatNumberWithCommas(this.records[index])} records)`);
        const listedClubs = mergedClubs.map(club => `<li>${club}</li>`).join('');
        return `
        <ol>
            ${listedClubs}
        </ol>
        `;
    }

    formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}


