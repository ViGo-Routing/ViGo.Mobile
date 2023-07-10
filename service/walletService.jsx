import apiManager from "../utils/apiManager";


export const getWalletByUserId = async (id) => {
    try {
        const response = await apiManager.get(`/api/Wallet/User/${id}`);
        return response;

    } catch (error) {
        console.error('Get Wallet By User Id failed:', error);
    }
}