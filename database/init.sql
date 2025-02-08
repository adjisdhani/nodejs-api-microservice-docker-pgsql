\c catalog_db;

CREATE TABLE IF NOT EXISTS buku (
    id SERIAL PRIMARY KEY,
    judul VARCHAR(255) NOT NULL,
    penulis VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS review (
    id SERIAL PRIMARY KEY,
    buku_id INT NOT NULL,
    review TEXT NOT NULL,
    FOREIGN KEY (buku_id) REFERENCES buku(id) ON DELETE CASCADE
);

-- INSERT Data ke Tabel Buku
INSERT INTO buku (judul, penulis) VALUES
    ('Eloquent JavaScript', 'Marijn Haverbeke'),
    ('You Don’t Know JS', 'Kyle Simpson');

-- INSERT Data ke Tabel Review (PAKAI `buku_id`, BUKAN `book_id`)
INSERT INTO review (buku_id, review) VALUES
    (1, 'Buku ini sangat bagus untuk belajar JavaScript'),
    (2, 'Sangat membantu memahami JavaScript lebih dalam');
