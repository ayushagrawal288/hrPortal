import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import { Employee } from "./entity/employee";
import { Profile } from "./entity/profile";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);


    const p1 = await connection.manager.save(connection.manager.create(Profile, {
        firstName: "Timber",
        lastName: "Saw",
        phoneNo: "123",
        email: "abc@gmail.com",
        designation: "asd",
        gender: 'M'
    }));
    const p2 = await connection.manager.save(connection.manager.create(Profile, {
        firstName: "Phantom",
        lastName: "Assassin",
        phoneNo: "123",
        email: "bcd@gmail.com",
        designation: "asd",
        gender: "F"
    }));

    // insert new users for test
    await connection.manager.save(connection.manager.create(Employee, {
        birthDate: new Date("16 June 1997"),
        joiningDate: new Date(),
        panNumber: "asd",
        role: "Software Enginner",
        profile:p1
    }));
    await connection.manager.save(connection.manager.create(Employee, {
        birthDate: new Date("16 June 1990"),
        joiningDate: new Date(),
        panNumber: "fsdsa",
        role: "Software Enginner",profile:p2
    }));

    console.log("Express server has started on port 3000. Open http://localhost:3000/employee to see results");

}).catch(error => console.log(error));
