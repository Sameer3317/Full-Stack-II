import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, TextField, Card, CardContent } from '@mui/material';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My App</span>
      </nav>

      <div className="container mt-4">

        {/* Bootstrap UI Demo */}
        <h2 className="text-center">Bootstrap UI Demo</h2>

        <div className="card p-3 mt-3">
          <input className="form-control" placeholder="Enter name" />
          <button className="btn btn-primary mt-3">Submit</button>
        </div>

        {/* Bootstrap Grid Cards */}
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card p-3">Card 1</div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">Card 2</div>
          </div>
          <div className="col-md-4">
            <div className="card p-3">Card 3</div>
          </div>
        </div>

        {/* Material UI Form */}
        <div className="mt-5 d-flex justify-content-center">
          <Card style={{ width: 300 }}>
            <CardContent>
              <h3>Material UI Form</h3>
              <TextField label="Name" fullWidth margin="normal" />
              <Button variant="contained" fullWidth>
                Submit
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </>
  );
}

export default App;
