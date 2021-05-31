export const Base =
    process.env.NODE_ENV === "production" ? "http://localhost:5000/" : "http://localhost:5000/";


const Authentication = Base + "auth/";
const Category = Base + "category/";
const Customer = Base + "customer/";
const CustomerType = Base + "customerType/";
const Order = Base + "order/";
const Payment = Base + "payment/";
const Product = Base + "product/";
const Service = Base + "service/";
const SmsSetting = Base + "smsSetting/";
const Smtpsetting = Base + "smtpsetting/";
const SubProduct = Base + "subProduct/";


export const ControllerRoutes = {
    Authentication: Authentication,
    Category: Category,
    Customer: Customer,
    CustomerType: CustomerType,
    Order: Order,
    Payment: Payment,
    Product: Product,
    Service: Service,
    SmsSetting: SmsSetting,
    Smtpsetting: Smtpsetting,
    SubProduct: SubProduct,
};

export const CRUDRoutes = {
    ListAll(controller) {
        return controller + "listAll";
    },
    List(controller) {
        return controller + "list";
    },
    Create(controller) {
        return controller + "create";
    },
    Update(controller, objectId) {
        return controller + `update/${objectId}`;
    },
    Delete(controller, objectId) {
        return controller + `delete/${objectId}`;
    },
    GetById(controller, objectId) {
        return controller + `get/${objectId}`;
    },
    GetCount(controller) {
        return controller + "count";
    },
};

export const AuthenticateRoutes = {
    Login() {
        return Authentication + "login";
    },
    Logout() {
        return Authentication + "logout";
    },
};

export const CategoryRoutes = {
    /* CRUD */
};

export const CustomerRoutes = {
    /* CRUD */
};

export const CustomerTypeRoutes = {
    /* CRUD */
};

export const OrderRoutes = {
    /* CRUD */
};

export const PaymentRoutes = {
    /* CRUD */
};

export const ProductRoutes = {
    /* CRUD */
};

export const ServiceRoutes = {
    /* CRUD BAK */
};

export const SmsSettingRoutes = {
    SetSmsSetting() {
        return SmsSetting + "set";
    },
};

export const SmtpSettingRoutes = {
    SetSmtpSetting() {
        return Smtpsetting + "set";
    },
};

export const SubProductRoutes = {
    /* CRUD */
}