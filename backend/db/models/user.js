'use strict';

const { Model, Validator } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        toSafeObject() {
            const { id, firstName, lastName, email } = this; // context will be the User instance
            return { id, firstName, lastName, email };
        }

        validatePassword(password) {
            return bcrypt.compareSync(password, this.hashedPassword.toString());
        }

        static getCurrentUserById(id) {
            return User.scope("currentUser").findByPk(id);
        }

        static async login({ email, password }) {
            const { Op } = require('sequelize');
            const user = await User.scope('loginUser').findOne({
                where: {
                    email: email
                }
            });
            if (user && user.validatePassword(password)) {
                return await User.scope('currentUser').findByPk(user.id);
            }
        }

        static async signup({ firstName, lastName, email, password }) {
            const hashedPassword = bcrypt.hashSync(password);
            const user = await User.create({
                firstName,
                lastName,
                email,
                hashedPassword
            });
            return await User.scope('currentUser').findByPk(user.id);
        }

        static associate(models) {
            User.hasMany(models.Spot, {
                foreignKey: 'ownerId',
            })
            User.hasMany(models.Review, {
                foreignKey: 'userId',
            })
            User.hasMany(models.Booking, {
                foreignKey: 'userId',
            })
            User.hasMany(models.Image, {
                foreignKey: "typeId",
                constraints: false,
                scope: {
                    type: "user"
                }
            })
        }
    }
    User.init({
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 60]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 60]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [3, 256],
                isEmail: true
            }
        },
        hashedPassword: {
            type: DataTypes.STRING.BINARY,
            allowNull: false,
            validate: {
                len: [60, 60]
            }
        }
    },
        {
            sequelize,
            modelName: "User",
            defaultScope: {
                attributes: {
                    exclude: ["hashedPassword", "email", "createdAt", "updatedAt"]
                }
            }
        }
    );
    return User;
};
