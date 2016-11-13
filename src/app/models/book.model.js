export var BookModel = (function () {
    function BookModel(_id, _rev, author_lastname, author_firstname, added, title, toread, img) {
        this._id = _id;
        this._rev = _rev;
        this.author_lastname = author_lastname;
        this.author_firstname = author_firstname;
        this.added = added;
        this.title = title;
        this.toread = toread;
        this.img = img;
    }
    return BookModel;
}());
//# sourceMappingURL=book.model.js.map