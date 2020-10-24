import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('contact-ipi.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction ((f) => {
            f.executeSql(
                `CREATE TABLE IF NOT EXISTS contacts (
                    id INTEGER PRIMARY KEY,
                    name TEXT NOT NULL,
                    phone TEXT NOT NULL,
                    imageURI TEXT NOT NULL,
                    address TEXT NOT NULL,
                    lat REAL NOT NULL,
                    lng REAL NOT NULL,
                    created_at INTEGER NOT NULL
                    );`,
                [],
                () => { resolve() },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;    
};


export const insertContact = (name, phone, imageURI, lat, lng, created_at) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(txt => {

            txt.executeSql(
                'INSERT INTO contacts(name, phone, imageURI, address, lat, lng, created_at) VALUES (?, ?, ?, ?, ?, ?, ?);',
                [name, phone, imageURI, 'no addresses', lat, lng, created_at],
                (_, result) => {
                    console.log(result);
                    resolve(result);
                },
                (_, err) => {
                    console.log(err);
                    reject(err);
                }
            );
        });
    });

    return promise;
};

export const searchContacts = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((txt) => {
            txt.executeSql(
                'SELECT * FROM contacts;',
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        });
    });

    return promise;
};


export const excludeContact = id => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(txt => {

            txt.executeSql(
                'DELETE FROM contacts where id = ?;',
                [parseInt(id)],
                (_, result) => {
                    console.log(result);
                    resolve(result);
                },
                (_, err) => {
                    console.log(err);
                    reject(err);
                }
            );
        });
    });

    return promise;
};

init().then(() => {})
    .catch(() => {});


