import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import championAPI from "../api/championAPI";

export default function AddSuperBowl() {
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    window.location = "/superbowls";

    const superbowlData = {
      name: event.target.elements[0].value,
      date_played: event.target.elements[1].value,
      win_team: event.target.elements[2].value,
      win_score: event.target.elements[3].value,
      lose_team: event.target.elements[4].value,
      lose_score: event.target.elements[5].value,
      stadium: event.target.elements[6].value,
      where: event.target.elements[7].value,
      mvp: event.target.elements[8].value,
    };

    const data = await championAPI.addSuperBowl(superbowlData);
    if (data) {
      navigate(`/superbowls/${data.id}`);
    }
  };
  return (
    <div>
      <h2>Add Super Bowl Page</h2>
      <hr />
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label>Name: </Form.Label>
          <Form.Control type="text" name="name" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Date Played: </Form.Label>
          <Form.Control type="text" name="date_played" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Winning Team: </Form.Label>
          <Form.Control type="text" name="win_team" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Winning Team Score: </Form.Label>
          <Form.Control type="text" name="win_score" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Losing Team: </Form.Label>
          <Form.Control type="text" name="lose_team" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Losing Team Score: </Form.Label>
          <Form.Control type="text" name="lose_score" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Stadium Played At: </Form.Label>
          <Form.Control type="text" name="stadium" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>City: </Form.Label>
          <Form.Control type="text" name="where" />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>MVP: </Form.Label>
          <Form.Control type="text" name="mvp" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
