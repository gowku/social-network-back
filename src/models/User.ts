// import { Model, DataTypes, Optional } from 'sequelize';
import { CreationOptional, DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../db/db-config'; // Assuming you have configured Sequelize connection

// Define the attributes of the User model
export interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  // other attributes...
}

// Define the optional attributes when creating a User
// type UserCreationAttributes = Optional<UserAttributes, 'id'>;

export interface UserAttributesInput extends Optional<UserAttributes, 'id'> {}
export interface UserAttributesOutput extends Required<UserAttributes> {}

// Define the User model class
class User extends Model<UserAttributes, UserAttributesInput> implements UserAttributes {
  declare id: CreationOptional<number>;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare password: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: Date;
  // other attributes...

  // Add any associations or methods related to the User model here
}

// Define the schema and options for the User model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE,
    // other attributes...
  },
  {
    sequelize,
    timestamps: true,
    paranoid: true,
  }
);

export default User;
