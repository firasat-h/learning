package controller;

import model.Agency;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
public class AdminController {

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/registerAgency")
    public Agency registerAgency(@RequestParam(value="agencyName") String agencyName,
                               @RequestParam(value="streetAddress") String streetAddress,
                               @RequestParam(value="city") String city,
                               @RequestParam(value="state") String state,
                               @RequestParam(value="zip") String zip,
                               @RequestParam(value="mainPhoneNumber") String mainPhoneNumber,
                               @RequestParam(value="websiteUrl") String websiteUrl,
                               @RequestParam(value="adminName") String adminName,
                               @RequestParam(value="adminEmail") String adminEmail,
                               @RequestParam(value="adminPhoneNumber") String adminPhoneNumber) {

        Agency agency = new Agency();
        agency.setAgencyName(agencyName);
        agency.setStreetAddress(streetAddress);
        agency.setCity(city);
        agency.setState(state);
        agency.setZip(zip);
        agency.setMainPhoneNumber(mainPhoneNumber);
        agency.setWebsiteUrl(websiteUrl);
        agency.setAdminName(adminName);
        agency.setAdminEmail(adminEmail);
        agency.setAdminPhoneNumber(adminPhoneNumber);
        System.out.println(agency);

        return agency;
    }
}
