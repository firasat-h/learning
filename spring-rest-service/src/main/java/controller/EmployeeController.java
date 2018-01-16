package controller;

import employee.Employee;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {

    @RequestMapping("/getEmployee")
    public Employee getEmployee(@RequestParam(value="name") String name) {
        Employee emp = new Employee(name);
        emp.setCity("Chicago");
        return emp;
    }
}
