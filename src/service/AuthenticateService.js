/* eslint-disable */
import { AuthenticateRoutes } from "@/helpers/RouteConstraints";
import BaseService from "./BaseService";

import axios from "axios";

export default class AuthenticateService extends BaseService {

    getRequestHeader() {
        return {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        };
    };

    async request(method, url, data = {}) {
        try {
            let result = await axios({
                method: method,
                url: url,
                headers: this.getRequestHeader(),
                data: data,
            });
            return result.data;
        } catch (e) {
            throw e;
        }
    }

    async login(model) {

        return await this.request("POST", AuthenticateRoutes.Login(), model)



    }
    async logout(model) {
        return await this.request("POST", AuthenticateRoutes.Logout(), model);
    }

}