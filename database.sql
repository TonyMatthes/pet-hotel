CREATE TABLE "owners" (
    "id" serial,
    "first_name" varchar (40) NOT NULL,
    "last_name" varchar (40) NOT NULL,
    PRIMARY KEY ("id")
);

CREATE TABLE "pets" (
    "id" serial,
    "name" VARCHAR NOT NULL,
    "breed" VARCHAR NOT NULL,
    "color" VARCHAR NOT NULL,
    "owner_id" INT,
    "checked_in" BOOLEAN DEFAULT true NOT NULL ,
    PRIMARY KEY ("id"),
    FOREIGN KEY ("owner_id") REFERENCES "owners"("id")
);

INSERT INTO "owners"("first_name", "last_name") VALUES('John', 'Taco');
INSERT INTO "owners"("first_name", "last_name") VALUES('Mary', 'Potato');
INSERT INTO "owners"("first_name", "last_name") VALUES('Bill', 'Llapangacho');
INSERT INTO "owners"("first_name", "last_name") VALUES('Marty', 'Arepa');
INSERT INTO "owners"("first_name", "last_name") VALUES('Jane', 'Flauta');

INSERT INTO "pets"("name", "breed", "color", "owner_id") VALUES('Steve', 'Boxer', 'Fawn', 1), ('Blue', 'Cat', 'White', 1),
('Elbow', 'Pug', 'Black', 2),
('Dogmeat', 'Mutt', 'Brown', 3),
('Jeff', 'Cat', 'Orange', 3),
('Princess', 'English Bulldog', 'white', 4),
('Mr. Cat', 'Cat', 'Black', 5);
