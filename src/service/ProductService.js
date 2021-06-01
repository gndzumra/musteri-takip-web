import { ControllerRoutes, ProductRoutes } from "@/helpers/RouteConstraints";
import BaseService from "./BaseService";

export default class ProductService extends BaseService {
    constructor() {
        super(ControllerRoutes.Product);
    }

    async getallbyid(customerId) {
        return await this.request("GET", ProductRoutes.GetAllById(customerId));
    }
}