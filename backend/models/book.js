import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Asegúrate de que el archivo tenga la extensión .js

const Book = sequelize.define(
  'Book',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishedYear: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: 'books',
  }
);

export default Book;
