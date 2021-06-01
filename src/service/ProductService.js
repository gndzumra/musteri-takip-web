import { ControllerRoutes } from "@/helpers/RouteConstraints";
import BaseService from "./BaseService";

export default class ProductService extends BaseService {
    constructor() {
        super(ControllerRoutes.Product);
    }
}