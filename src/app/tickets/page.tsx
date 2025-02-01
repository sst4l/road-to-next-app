import { initialTickets } from "../data";

const TicketsPage = () => {
    return (
        <div>
            {initialTickets.map((ticket) => (
                <div key={ticket.id}>
                    <h2 className="text-lg">{ticket.title}</h2>
                </div>
            ))}
        </div>
    );
};

export default TicketsPage;