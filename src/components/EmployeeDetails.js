import { Link } from "react-router-dom";

function EmployeeDetails(props) {

    const employee = props.employee;

    const editHandler = (employee) => {
        props.setCurrentEmployee(employee);
    }
    return(<div className="body">
        <table border='3'>
            <thead>
                <tr>
                    <th>employeeId</th>
                    <th>employeeName</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Role</th>
                </tr>
            </thead>

            <tbody>
                <tr key={employee.id}>

                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.address}</td>
                    <td>{employee.phoneNo}</td>
                    <td>{employee.role}</td>
                    <td><button onClick={editHandler(employee)}><Link to = '/admincontroller/editAddressAndPhoneNo'>Edit</Link></button></td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default EmployeeDetails;