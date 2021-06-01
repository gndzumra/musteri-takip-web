import { ControllerRoutes } from "@/helpers/RouteConstraints";
import BaseService from "./BaseService";

export default class CustomerTypeService extends BaseService {
    constructor() {
        super(ControllerRoutes.CustomerType);
    }


}