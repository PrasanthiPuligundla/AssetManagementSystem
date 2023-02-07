import {
    ADD_EMPLOYEE, 
    DELETE_EMPLOYEE,
    UPDATE_ADDRESS_AND_PHONENO,
    UPDATE_EMPLOYEE_NAME,
    RETRIVE_EMPLOYEE_BY_ID
} from '../actions/types';

const initialState = {};

function EmployeeReducer (employees = initialState , action) {

    const { type, payload } = action;
    switch(type) {
        case ADD_EMPLOYEE:
            console.log(payload)
            return [...employees,payload];

            case UPDATE_EMPLOYEE_NAME :
           return employees.map((employee) => {
               if(employee.id === payload.id) {
                return {
                    ...employee,
                    ...payload,
                };
               }
           });

           case UPDATE_ADDRESS_AND_PHONENO :
            return employees.map((employee) => {
                if(employee.id === payload.id){
                    return {
                        ...employee,
                        ...payload,
                    };

                }else
                {
                    return employee;
                }
            });


            case RETRIVE_EMPLOYEE_BY_ID :
                return employees.map((employee)=>{
                    if(employee.id === payload.id) {
                        return {
                            ...employee,
                            ...payload,
                        };
                    }else {
                        return employee;
                    }
                });

        case DELETE_EMPLOYEE:
            return employees.filter(({ employeeId })=> employeeId !== payload.employeeId);

            default :
            return employees;
           
}
};

export default EmployeeReducer;
