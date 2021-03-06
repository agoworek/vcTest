import { Form, Row, Col, Button } from "react-bootstrap";
import { useRef } from "react";

function FilterForm(props) {
  const dateFromInputRef = useRef();
  const dateToInputRef = useRef();
  const virusInputRef = useRef();
  const cityInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredDateFrom = dateFromInputRef.current.value;
    const enteredDateTo = dateToInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredVirus = virusInputRef.current.value;

    const searchData = {
      dateFrom: enteredDateFrom,
      dateTo: enteredDateTo,
      city: enteredCity,
      virus: enteredVirus,
    };
    props.search(searchData);
  }

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Row className="px-4">
          <Col>
            <Form.Group>
              <Form.Label>Date from</Form.Label>
              <Form.Control
                type="datetime-local"
                required
                id="dateFrom"
                ref={dateFromInputRef}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Date to</Form.Label>
              <Form.Control
                type="datetime-local"
                required
                id="dateTo"
                ref={dateToInputRef}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="input"
                required
                id="city"
                ref={cityInputRef}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Virus</Form.Label>
              <Form.Control
                type="input"
                required
                id="virus"
                ref={virusInputRef}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className="px-4">
          <Button type="submit">Search</Button>
        </div>
      </Form>
    </div>
  );
}

export default FilterForm;
