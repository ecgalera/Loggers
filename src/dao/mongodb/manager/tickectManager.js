import ticketModel from "../models/ticketModels.js";

class TicketMananger {

    getTicket = () => {
        try {
            return ticketModel.find().lean();
        } catch (error) {
            return error
        }
    };

    getTicketById = (tid) => {
        try {
            return ticketModel.findById({ _id: tid }).lean()
        } catch (error) {
            return error
        }

    };

    createTicket = (uid,ticket) => {
        try {
            return ticketModel.create(uid, ticket)
        } catch (error) {
            return error
        }
    };

    updateTicket = (tid, ticket) => {
        try {
            return ticketModel.findByIdAndDelete(tid, { $set: ticket })
        } catch (error) {

        }
    };

    deleteTicket = (tid) => {
        try {
            return ticketModel.findByIdAndDelete({ _id: tid })
        } catch (error) {
            return error
        }
    }

}

export default TicketMananger;


















