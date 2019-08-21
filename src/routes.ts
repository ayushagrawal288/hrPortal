import {EmployeeController} from "./controller/EmployeeController";

export const Routes = [{
    method: "get",
    route: "/employee",
    controller: EmployeeController,
    action: "all"
}, {
    method: "get",
    route: "/employee/:id",
    controller: EmployeeController,
    action: "one"
}, {
    method: "post",
    route: "/employee",
    controller: EmployeeController,
    action: "save"
}, {
    method: "delete",
    route: "/employee/:id",
    controller: EmployeeController,
    action: "remove"
}];