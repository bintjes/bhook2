export class BookModel {
    constructor(
        public _id: string,
        public _rev: string,
        public author_lastname: string,
        public author_firstname: string,
        public added: string,
        public title: string,
        public toread: boolean,
        public img: string 

    ) {}
}

