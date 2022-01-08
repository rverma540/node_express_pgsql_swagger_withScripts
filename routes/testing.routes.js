const usersController = require("../controller/testing.controller");
var express = require("express");
var router = express.Router();

router.get("/", usersController.getUsers);
/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - Get User
 *     description: Returns all USERS
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of USERS
 */

router.post("/", usersController.getAddusers);
/**
 * @swagger
 * /users:
 *   post:
 *      description: Used to register user
 *      tags:
 *          - Get User
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - name
 *                 - email
 *              properties:
 *                  name:
 *                      type: string
 *                  email:
 *                      type: string
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/:id", usersController.getUsersById);
/**
 * @swagger
 * /users/{id}:
 *   get:
 *      description: GET by id
 *      tags:
 *          - Get User
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *            schema:
 *              type: object
 *              required:
 *                 - name
 *                 - email
 *              properties:
 *                  name:
 *                      type: string
 *                  email:
 *                      type: string
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.delete("/:id", usersController.deleteUsers);
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *      description: GET by id
 *      tags:
 *          - Get User
 *      parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *            schema:
 *              type: integer
 *              minimum: 1
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.put("/:id", usersController.updateUserbyid);
/**
 * @swagger
 * /users/{id}:
 *   put:
 *      description: Update by id
 *      tags:
 *          - Get User
 *      parameters:
 *          - in: path
 *            name: id
 *            description: Put data
 *            type: string
 *            required: true
 *          - in: body
 *            name: user
 *            description: Put data
 *            schema:
 *              type: object
 *              required:
 *                 - name
 *                 - email
 *              properties:
 *                  name:
 *                      type: string
 *                  email:
 *                      type: string
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

module.exports = router;
