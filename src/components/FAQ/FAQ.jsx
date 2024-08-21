import Accordion from 'react-bootstrap/Accordion';
import './FAQ.css'
const FAQ = () => {
    return (
        <>

        <section className="faq-container">
            <h3>HAVE ANY QUESTIONS?</h3>
            <h1>Frequently Asked Questions</h1>
         <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Can I book flights for multiple passengers in a single transaction?</Accordion.Header>
        <Accordion.Body>
        Yes, our application allows you to book flights for multiple passengers in a single transaction.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How can I modify or cancel a flight booking?</Accordion.Header>
        <Accordion.Body>
        You can't modify but you can cancel your flight booking by logging into your account, accessing your booking details, and following the prompts to make cancellation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Can I view my booking history and upcoming flights in the application?</Accordion.Header>
        <Accordion.Body>
            yes you can access your booking history in the tickets button in the navigation bar to view your tickets information for the trips.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Can I book flights for multiple passengers in a single transaction?</Accordion.Header>
        <Accordion.Body>
            yes you can book how many tickets as you want regardless if it's for multiple passengers or not, you have the toatal freedom to pick what you want.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </section>
        </>
    )
}

export default FAQ;