import { ControllerRoutes } from "@/helpers/RouteConstraints";
import BaseService from "./BaseService";

export default class CustomerService extends BaseService {
    constructor() {
        super(ControllerRoutes.Customer);
    }
}