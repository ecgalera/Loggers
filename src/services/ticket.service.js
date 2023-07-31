export default class TicketService{
    constructor(dao){
        this.dao = dao;
    }

    getTicketService = () =>{
        return this.dao.getTicket()
    }

    getTicketByIdService = (tid) =>{
        return this.dao.getTicketById(tid)
    }

    createTicketService = (ticket) =>{
        return this.dao.createTicket(ticket)
    }

    updateTicketService = (tid, ticket) =>{
        return this.dao.updateTicket(tid, ticket)
    }

    deleteTicketService = (tid) =>{
        return this.dao.deleteTicket(tid)
    }

}


