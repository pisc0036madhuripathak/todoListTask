import "./App.css";
import React, { useEffect, useState } from "react";
import View from "./Components/View";

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("employees");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function App() {
  //main array of objects
  const [employees, setEmployees] = useState(getDataFromLocalStorage());
  const onEmployeeFormSubmit = (e) => {
    e.preventDefault();
    let employee = {
      employeeName,
      employeeAddress,
      employeeMobileNumber,
      employeeDegination,
      employeeDegree,
    };
    setEmployees([...employees, employee]);
    setEmployeeName("");
    setEmployeeAddress("");
    setEmployeeMobileNumber("");
    setEmployeeDegination("");
    setEmployeeDegree("");
  };
  //seving data in local Storage

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  //Form Fields of employees
  const [employeeName, setEmployeeName] = useState("");
  const [employeeAddress, setEmployeeAddress] = useState("");
  const [employeeMobileNumber, setEmployeeMobileNumber] = useState("");
  const [employeeDegination, setEmployeeDegination] = useState("");
  const [employeeDegree, setEmployeeDegree] = useState("");

  return (
    <>
      <div className="wrapper">
        <h1>Employee Details</h1>
        <p>Add and view your employee details using localStorage</p>
        <div className="main">
          <div className="form-container">
            <form className="form-group" onSubmit={onEmployeeFormSubmit}>
              <label>Employee Name</label>
              <input
                className="form-control"
                required
                type="text"
                placeholder="Employee Name"
                onChange={(e) => setEmployeeName(e.target.value)}
                value={employeeName}
              />
              <br />
              <label>Address</label>
              <input
                className="form-control"
                type="text"
                required
                placeholder="Address"
                onChange={(e) => setEmployeeAddress(e.target.value)}
                value={employeeAddress}
              />
              <br />
              <label>Mobile No</label>
              <input
                className="form-control"
                type="number"
                required
                placeholder="Mobile No"
                onChange={(e) => setEmployeeMobileNumber(e.target.value)}
                value={employeeMobileNumber}
              />
              <br />
              <label>Degination</label>
              <input
                className="form-control"
                type="text"
                required
                placeholder="Degination"
                onChange={(e) => setEmployeeDegination(e.target.value)}
                value={employeeDegination}
              />
              <br />
              <label>Degree</label>
              <input
                className="form-control"
                required
                placeholder="Degree"
                type="text"
                onChange={(e) => setEmployeeDegree(e.target.value)}
                value={employeeDegree}
              />
              <br />
              <button type="submit" className="btn btn-success btn-md">
                Add
              </button>
            </form>
          </div>
          <div className="view-container">
            {employees.length > 0 && (
              <>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Employee Name</th>
                        <th>Employee Address</th>
                        <th>Employee Mo No.</th>
                        <th>Employee Desination</th>
                        <th>Employee Degree</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <View employees={employees} />
                    </tbody>
                  </table>
                </div>
              </>
            )}
            {employees.length < 1 && <div>No Employee details are added </div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
