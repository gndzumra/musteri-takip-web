import { ControllerRoutes } from "@/helpers/RouteConstraints";
import BaseService from "./BaseService";

export default class MusteriService extends BaseService {
  constructor() {
    super(ControllerRoutes.CustomerRoutes);
  }
}



