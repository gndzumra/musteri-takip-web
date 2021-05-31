/* eslint-disable */
import axios from "axios";
import { CRUDRoutes } from "@/helpers/RouteConstraints";

export default class BaseService {
    constructor(controllerRoute) {
        this.controllerRoute = controllerRoute;
    }

    getRequestHeader() {
        return {
            "Content-Type": "application/json",
            /* Authorization: "Bearer " + localStorage.getItem("webToken"), */
        };
    }

    async request(method, url, data = {}) {
        let result = await axios({
            method: method,
            url: url,
            headers: this.getRequestHeader(),
            data: data,
        });
        return result.data;

    }


    async getById(objectId) {
        return await this.request("GET", CRUDRoutes.GetById(this.controllerRoute, objectId));
    }

    async getList(paginationModel) {
        return await this.request("POST", CRUDRoutes.List(this.controllerRoute), paginationModel);
    }

    async getListAll() {
        return await this.request("GET", CRUDRoutes.ListAll(this.controllerRoute));
    }

    async create(model) {
        return await this.request("POST", CRUDRoutes.Create(this.controllerRoute), model);
    }

    async edit(model, objectId) {
        return await this.request("PUT", CRUDRoutes.Update(this.controllerRoute, objectId), model);
    }

    async delete(objectId) {
        return await this.request("DELETE", CRUDRoutes.Delete(this.controllerRoute, objectId));
    }

    async getCount() {
        return await this.request("GET", CRUDRoutes.GetCount(this.controllerRoute));
    }
}