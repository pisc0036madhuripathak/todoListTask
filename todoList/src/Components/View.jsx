import React from "react";

debugger;
function View({ employees }) {
  return employees.map((employee) => {
    console.log(employee.employeeName);
    <tr key={employee.employeeName}>
      <td>{employee.employeeName}</td>
      <td>{employee.employeeAddress}</td>
      <td>{employee.employeeMobileNumber}</td>
      <td>{employee.employeeDegination}</td>
      <td>{employee.employeeDegree}</td>
    </tr>;
  });
}

// export const View = () => {
//   return (
//     <>
//       <div>View Table</div>
//     </>
//   );
// };
export default View;
