import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Dropdown,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Tickets = (props) => {

  const [tickets, setTickets] = useState([]);
  const [ticketData, setTicketData] = useState([]);
  
  const fetchTickets = async () => {
    const res = await axios.get(`/ticket`); 
    setTickets(res.data.tickets);    
  }

  const fetchTicketData = async () => {
    const res = await axios.get(`/ticket_data`);
    setTicketData(res.data.ticket_data);
  }

  useEffect(()=>{
    fetchTicketData();
    fetchTickets(); 
  },[]);
  
  return (
    <>
      <Header/>      
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">All Tickets</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Requester</th>
                    <th scope="col">Subject</th>
                    <th scope="col">State</th>
                    <th scope="col">Type</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Source</th>
                    <th scope="col">Agent</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {
                    tickets.length > 0 && (
                      tickets.map((row, key) => (
                        <tr key ={key}>
                          <th scope="row">
                            <Media className="align-items-center">
                              <a
                                className="avatar rounded-circle mr-3"
                                href="#"
                                onClick={(e) => e.preventDefault()}
                              >
                                <img
                                  alt="..."
                                  src={
                                    require("../../assets/img/theme/team-1-800x800.jpg")
                                      .default
                                  }
                                />
                              </a>
                              <Media>
                                <span className="mb-0 text-sm text-dark">
                                  {row.contact.email}
                                </span>
                              </Media>
                            </Media>
                          </th>
                          <td>
                            <span className="text-dark font-weight-bold">
                              {row.subject+"#"}
                            </span>
                          </td>
                          <td>
                            {ticketData.states[row.state_id]}                                                      
                          </td>   
                          <td>
                            {ticketData.types[row.type_id]}
                          </td>
                          <td>
                            {ticketData.priorities[row.priority_id]}
                          </td>
                          <td>
                            {ticketData.sources[row.source_id]}
                          </td>                                                                                                  
                          <td>{row.agent.name}</td>
                          <td>
                            {ticketData.statuses[row.status]}
                          </td>  
                        </tr>
                      )) 
                    )
                  }
                </tbody>                
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tickets;
