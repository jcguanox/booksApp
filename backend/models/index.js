import sequelize from '../config/database.js';
import Book from './book.js';

const db = {
  sequelize,
  Book,
};

export default db;

