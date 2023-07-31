import { ticketService } from "../../services/repository/index.js";


export const getTicketController = async (req,res) => {
    try {
        const tickets = await ticketService.getTicketService()
        return res.sendSuccess(tickets)
    } catch (error) {
        return res.sendInternalError(error)
    }
};

export const getTicketByIdController = async (req, res) => {
    try {
        const {tid} = req.params
        const ticket = await ticketService.getTicketByIdService(tid)
        return res.sendSuccess(ticket)
    } catch (error) {
        return res.sendInternalError(error)
    }
};


export const createTicketController = async (req, res) => {
    try {
        const {newTicket} = req.body
        const ticket = await ticketService.createTicketService(newTicket)
        return res.sendSuccess(ticket)
    } catch (error) {
        return res.sendInternalError(error)
    }
};

export const updateTicketController = async (req, res) =>{
    try { 
        const {tid}=req.params
        const {updateTicket} = req.body
        const tiket = await ticketService.updateTicketService(tid, updateTicket)
        return res.sendSuccess(ticket)
    } catch (error) {
        return res.sendInternalError(error)
    }
}



export const deleteTicketControlller = async (req, res) =>{
    try {
        const {tid} = req.params
        const ticket = await ticketService.deleteTicketService(tid)
        return res.sendSuccess(ticket)
    } catch (error) {
        return res.sendInternalError(error)
    }
};







