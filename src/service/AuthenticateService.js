/* eslint-disable */
import { AuthenticateRoutes } from "@/helpers/RouteConstraints";
import BaseService from "./BaseService";

import axios from "axios";


export default class AuthenticateService extends BaseService {
    async request(method, url, headers, data = {}) {
        try {
            let result = await axios({
                method: method,
                url: url,
                headers: headers,
                data: data,
            });
            return result.data;
        } catch (e) {
            throw e;
        }
    }

    async login(model) {
        return await this.request("POST", AuthenticateRoutes.Login(), model);
    }
    async logout(model) {
        return await this.request("POST", AuthenticateRoutes.Logout(), model);
    }

}